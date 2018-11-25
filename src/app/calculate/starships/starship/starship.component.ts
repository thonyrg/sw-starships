import { Component, Input } from '@angular/core';
import { IStarship } from 'src/app/shared/models/IStarship';

@Component({
    selector: 'sw-starship',
    templateUrl: './starship.component.html',
    styleUrls: ['./starship.component.scss']
})
export class StarshipComponent {
    @Input() starshipData: IStarship;
}
