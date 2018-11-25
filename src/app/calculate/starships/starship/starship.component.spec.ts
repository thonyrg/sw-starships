import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { StarshipComponent } from './starship.component';

describe('StarshipComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        StarshipComponent
      ],
    }).compileComponents();
  }));

  it('should create the starship component', () => {
    const fixture = TestBed.createComponent(StarshipComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it(`should have an element with class 'sw-card'`, () => {
    const fixture = TestBed.createComponent(StarshipComponent);
    const cardElement = fixture.debugElement.query(By.css('.sw-card'));
    expect(cardElement).toBeTruthy();
  });
});
