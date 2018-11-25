import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SwStarshipsService } from './sw-starships.service';

// tslint:disable:max-line-length
describe('SwStarshipsService', () => {
    let service: SwStarshipsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                SwStarshipsService
            ]
        });

        service = TestBed.get(SwStarshipsService);
    });

    describe('getHoursFromPeriod()', () => {
        it('should return the correct number of hours in a day', () => {
            expect(service.getHoursFromPeriod('1 day')).toEqual(24);
        });

        it('should return the correct number of hours in 5 days', () => {
            expect(service.getHoursFromPeriod('5 days')).toEqual(120);
        });

        it('should return the correct number of hours in a week', () => {
            expect(service.getHoursFromPeriod('1 week')).toEqual(168);
        });

        it('should return the correct number of hours in 2 weeks', () => {
            expect(service.getHoursFromPeriod('2 weeks')).toEqual(336);
        });

        it('should return the correct number of hours in a month', () => {
            expect(service.getHoursFromPeriod('1 month')).toEqual(720);
        });

        it('should return the correct number of hours in 8 months', () => {
            expect(service.getHoursFromPeriod('8 months')).toEqual(5760);
        });

        it('should return the correct number of hours in a year', () => {
            expect(service.getHoursFromPeriod('1 year')).toEqual(8760);
        });

        it('should return the correct number of hours in 6 years', () => {
            expect(service.getHoursFromPeriod('6 years')).toEqual(52560);
        });

        it('should return null for a non-valid period (e.g: 2 blahs)', () => {
            expect(service.getHoursFromPeriod('2 blahs')).toBeNull();
        });

        it('should return null for another non-valid period (e.g: 4 light-years)', () => {
            expect(service.getHoursFromPeriod('4 light-years')).toBeNull();
        });
    });

    describe('getNumberOfStopsForResupply', () => {
        it('should return the correct number of stops for a Millennium Falcon in a given distance of 1000000 Megalights', () => {
            expect(service.getNumberOfStopsForResupply(1000000, service.getHoursFromPeriod('2 months'), '75')).toEqual('9');
        });

        it('should return the correct number of stops for a Millennium Falcon in a given distance of 1500000 Megalights', () => {
            expect(service.getNumberOfStopsForResupply(1500000, service.getHoursFromPeriod('2 months'), '75')).toEqual('13');
        });

        it('should return the correct number of stops for a Millennium Falcon in a given distance of 2000000 Megalights', () => {
            expect(service.getNumberOfStopsForResupply(2000000, service.getHoursFromPeriod('2 months'), '75')).toEqual('18');
        });

        it('should return the correct number of stops for a Millennium Falcon in a given distance of 100000 Megalights', () => {
            expect(service.getNumberOfStopsForResupply(100000, service.getHoursFromPeriod('2 months'), '75')).toEqual('0');
        });

        it('should return the correct number of stops for a Rebel Transport in a given distance of 1000000 Megalights', () => {
            expect(service.getNumberOfStopsForResupply(1000000, service.getHoursFromPeriod('6 months'), '20')).toEqual('11');
        });

        it('should return the correct number of stops for a Y-wing in a given distance of 1000000 Megalights', () => {
            expect(service.getNumberOfStopsForResupply(1000000, service.getHoursFromPeriod('1 week'), '80')).toEqual('74');
        });

        it('should return the correct number of stops for a Y-wing in a given distance of 500000 Megalights', () => {
            expect(service.getNumberOfStopsForResupply(500000, service.getHoursFromPeriod('1 week'), '80')).toEqual('37');
        });

        it('should return the correct number of stops for a X-wing in a given distance of 100000 Megalights', () => {
            expect(service.getNumberOfStopsForResupply(100000, service.getHoursFromPeriod('1 week'), '100')).toEqual('5');
        });

        it(`should return 'Unknown' for a Republic Cruiser that has MGLT value as 'unknown' in a given distance of 100000 Megalights`, () => {
            expect(service.getNumberOfStopsForResupply(100000, null, 'unknown')).toEqual('Unknown');
        });
    });
});
