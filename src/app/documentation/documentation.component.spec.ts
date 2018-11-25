import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { DocumentationComponent } from './documentation.component';

describe('DocumentationComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        DocumentationComponent
      ],
    }).compileComponents();
  }));

  it('should create the documentation component', () => {
    const fixture = TestBed.createComponent(DocumentationComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it(`should have a <PRE> element`, () => {
    const fixture = TestBed.createComponent(DocumentationComponent);
    const preElement = fixture.debugElement.query(By.css('pre'));
    expect(preElement).toBeTruthy();
  });
});
