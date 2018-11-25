import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        MenuComponent
      ],
    }).compileComponents();
  }));

  it('should create the menu component', () => {
    const fixture = TestBed.createComponent(MenuComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it(`should have an element with class 'sw-menu'`, () => {
    const fixture = TestBed.createComponent(MenuComponent);
    const menuElement = fixture.debugElement.query(By.css('.sw-menu'));
    expect(menuElement).toBeTruthy();
  });
});
