import { Component, Input } from '@angular/core';

import { IStarship } from 'src/app/shared/models/IStarship';

@Component({
    selector: 'sw-starships',
    templateUrl: './starships.component.html',
    styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent {
    @Input() starshipsList: Array<IStarship>;
    currentView = 'card';
}
