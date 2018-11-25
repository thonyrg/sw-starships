import { Component } from '@angular/core';
import { EventEmitter } from 'events';
import { IStarship } from '../shared/models/IStarship';

@Component({
    selector: 'sw-calculate',
    templateUrl: './calculate.component.html'
})
export class CalculateComponent {
    resultsData: Array<IStarship> = [];

    receiveResultsDataFromForm(data: Array<IStarship>) {
        this.resultsData = data;
    }
}
