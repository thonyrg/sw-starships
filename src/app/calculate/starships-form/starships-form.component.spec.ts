import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { StarshipsFormComponent } from './starships-form.component';
import { SwStarshipsService } from 'src/app/shared/services/sw-starships.service';

class SwStarshipsServiceStub {
    getStarships(): void {}
}

describe('StarshipsFormComponent', () => {
    let fixture: ComponentFixture<StarshipsFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                ReactiveFormsModule
            ],
            declarations: [
                StarshipsFormComponent
            ],
            providers: [
                {provide: SwStarshipsService, useClass: SwStarshipsServiceStub}
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StarshipsFormComponent);
    });

    it('should create the starships component', () => {
        const component = fixture.debugElement.componentInstance;
        expect(component).toBeTruthy();
    });

    it(`should have a initial length of starshipsArray as 0`, () => {
        const component = fixture.componentInstance;
        expect(component.starshipsArray.length).toEqual(0);
    });

    it(`should have a initial length of resultsArray as 0`, () => {
        const component = fixture.componentInstance;
        expect(component.resultsArray.length).toEqual(0);
    });

    it(`should have a select element`, () => {
        const select = fixture.debugElement.query(By.css('select'));
        expect(select).toBeDefined();
    });

    it(`should have a input text element`, () => {
        const input = fixture.debugElement.query(By.css('input[type=text]'));
        expect(input).toBeDefined();
    });

    it(`should have a submit button`, () => {
        const button = fixture.debugElement.query(By.css('button[type=submit]'));
        expect(button).toBeDefined();
    });
});
