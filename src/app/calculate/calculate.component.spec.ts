import { ReactiveFormsModule } from '@angular/forms';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CalculateComponent } from './calculate.component';
import { StarshipsComponent } from './starships/starships.component';
import { StarshipsFormComponent } from './starships-form/starships-form.component';
import { StarshipComponent } from './starships/starship/starship.component';
import { SwStarshipsService } from '../shared/services/sw-starships.service';
import { By } from '@angular/platform-browser';

class SwStarshipsServiceStub {}

describe('CalculateComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
      declarations: [
        StarshipComponent,
        CalculateComponent,
        StarshipsComponent,
        StarshipsFormComponent
      ],
      providers: [
          {provide: SwStarshipsService, useClass: SwStarshipsServiceStub}
      ]
    }).compileComponents();
  }));

  it('should create the starships component', () => {
    const fixture = TestBed.createComponent(CalculateComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it(`should have a 'sw-starships-form' element`, () => {
    const fixture = TestBed.createComponent(CalculateComponent);
    const starshipElement = fixture.debugElement.query(By.css('sw-starships-form'));
    expect(starshipElement).toBeTruthy();
  });

  it(`should have a 'sw-starships' element`, () => {
    const fixture = TestBed.createComponent(CalculateComponent);
    const starshipElement = fixture.debugElement.query(By.css('sw-starships'));
    expect(starshipElement).toBeTruthy();
  });
});
