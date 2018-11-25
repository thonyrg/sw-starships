import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { StarshipComponent } from './starship/starship.component';
import { StarshipsComponent } from './starships.component';

describe('StarshipsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        StarshipComponent,
        StarshipsComponent
      ],
    }).compileComponents();
  }));

  it('should create the starships component', () => {
    const fixture = TestBed.createComponent(StarshipsComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it(`should have a 'sw-starship' element if there is at least one starship in the starshipsList`, () => {
    const fixture = TestBed.createComponent(StarshipsComponent);
    const component = fixture.componentInstance;
    component.starshipsList = [{
        'name': 'Death Star',
        'model': 'DS-1 Orbital Battle Station',
        'manufacturer': 'Imperial Department of Military Research, Sienar Fleet Systems',
        'cost_in_credits': '1000000000000',
        'length': '120000',
        'max_atmosphering_speed': 'n/a',
        'crew': '342953',
        'passengers': '843342',
        'cargo_capacity': '1000000000000',
        'consumables': '3 years',
        'hyperdrive_rating': '4.0',
        'MGLT': '10',
        'starship_class': 'Deep Space Mobile Battlestation',
        'pilots': [],
        'films': [
            'https://swapi.co/api/films/1/'
        ],
        'created': '2014-12-10T16:36:50.509000Z',
        'edited': '2014-12-22T17:35:44.452589Z',
        'url': 'https://swapi.co/api/starships/9/'
    }];
    fixture.detectChanges();
    const starshipElement = fixture.nativeElement.querySelector('sw-starship');
    expect(starshipElement).toBeTruthy();
  });

  it(`shouldn't have a 'sw-starship' element if starshipsList is empty`, () => {
    const fixture = TestBed.createComponent(StarshipsComponent);
    const component = fixture.componentInstance;
    component.starshipsList = [];
    fixture.detectChanges();
    const starshipElement = fixture.nativeElement.querySelector('sw-starship');
    expect(starshipElement).toBeFalsy();
  });
});
