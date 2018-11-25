import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SwStarshipsService {
    starshipsEndpoint = 'https://swapi.co/api/starships/';
    constructor(private http: HttpClient) {}

    getStarships(specificEndpoint = ''): Observable<any> {
        const ssEndpoint = specificEndpoint || this.starshipsEndpoint;

        return this.http.get(ssEndpoint);
    }

    getHoursFromPeriod(period: string): number {
        const arrPeriod = period.split(' ');

        switch (true) {
            case (arrPeriod[1] === 'hour' || arrPeriod[1] === 'hours'):
                return parseInt(arrPeriod[0], 10);
            case (arrPeriod[1] === 'day' || arrPeriod[1] === 'days'):
                return (parseInt(arrPeriod[0], 10) * 24);
            case (arrPeriod[1] === 'week' || arrPeriod[1] === 'weeks'):
                return ((parseInt(arrPeriod[0], 10) * 7) * 24);
            case (arrPeriod[1] === 'month' || arrPeriod[1] === 'months'):
                return ((parseInt(arrPeriod[0], 10) * 30) * 24);
            case (arrPeriod[1] === 'year' || arrPeriod[1] === 'years'):
                return ((parseInt(arrPeriod[0], 10) * 365) * 24);
            default:
                return null;
        }
    }

    getNumberOfStopsForResupply(distance: number, consumablesInHours: number, mglt: string): string {
        if (consumablesInHours && mglt !== 'unknown') {
            if (consumablesInHours < distance) {
                return Math.floor(distance / (consumablesInHours * parseInt(mglt, 10))).toString();
            } else {
                return '0';
            }
        } else {
            return 'Unknown';
        }
    }
}
