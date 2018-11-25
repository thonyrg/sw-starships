import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SwStarshipsService } from 'src/app/shared/services/sw-starships.service';
import { IStarship } from 'src/app/shared/models/IStarship';

@Component({
    selector: 'sw-starships-form',
    templateUrl: './starships-form.component.html',
    styleUrls: ['./starships-form.component.scss']
})
// tslint:disable:max-line-length
export class StarshipsFormComponent implements OnInit {
    @Output() results: EventEmitter<Array<IStarship>> = new EventEmitter();
    starshipsArray: Array<IStarship> = [];
    resultsArray: Array<IStarship> = [];
    loading = false;
    swForm: FormGroup;
    get starship() { return this.swForm.get('starship') as FormControl; }
    get distance() { return this.swForm.get('distance') as FormControl; }


    constructor(private service: SwStarshipsService,
                private fb: FormBuilder) {}

    ngOnInit(): void {
        this.loading = true;

        this.swForm = this.fb.group({
            starship: [''],
            distance: ['', [Validators.required, Validators.pattern('[0-9]*')]]
        });

        this.getAllStarships();
    }

    getAllStarships(endpoint: string = ''): void {
        this.service.getStarships(endpoint)
            .subscribe(starships => {
                if (starships.results) {
                    starships.results.map(starshipData => this.starshipsArray.push(starshipData));
                }
                if (starships.next) {
                    this.getAllStarships(starships.next);
                } else {
                    this.starshipsArray = this.sortStarshipsArrayByName(this.starshipsArray);
                    this.loading = false;
                }
            });
    }

    sortStarshipsArrayByName(ssArray: any) {
        return ssArray.sort((a, b) => {
            const x = a.name.toLowerCase();
            const y = b.name.toLowerCase();
            if (x < y) { return -1; }
            if (x > y) { return 1; }
            return 0;
        });
    }

    markFormAsTouched(): void {
        this.swForm.markAsTouched();
    }

    showResults(): void {
        this.swForm.markAsTouched();
        if (this.swForm.valid) {
            this.resultsArray = [];
            if (this.starship.value === '') {
                this.starshipsArray.map(starship => {
                    const consumablesInHours = (starship.consumables !== 'unknown')
                                                    ? this.service.getHoursFromPeriod(starship.consumables)
                                                    : null;

                    starship['stopsForResupply'] = this.service.getNumberOfStopsForResupply(parseInt(this.distance.value, 10), consumablesInHours, starship.MGLT);
                    this.resultsArray.push(starship);
                });
            } else {
                const starshipId = parseInt(this.starship.value, 10);
                const consumablesInHours = (this.starshipsArray[starshipId].consumables !== 'unknown')
                                                ? this.service.getHoursFromPeriod(this.starshipsArray[starshipId].consumables)
                                                : null;

                this.starshipsArray[starshipId]['stopsForResupply'] = this.service.getNumberOfStopsForResupply(parseInt(this.distance.value, 10), consumablesInHours, this.starshipsArray[starshipId].MGLT);
                this.resultsArray.push(this.starshipsArray[starshipId]);
            }
            this.results.emit(this.resultsArray);
        }
    }
}
