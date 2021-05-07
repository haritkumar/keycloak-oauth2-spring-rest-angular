import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { COLORS } from '../mock-colors';
import { ColorService } from '../colors.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let colorService;
  let getColorsSpy;

  beforeEach(async(() => {
    colorService = jasmine.createSpyObj('ColorService', ['getColors']);
    getColorsSpy = colorService.getColors.and.returnValue( of(COLORS) );
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        { provide: ColorService, useValue: colorService }
      ]
    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display "Top Color" as headline', () => {
    expect(fixture.nativeElement.querySelector('h3').textContent).toEqual('Top Colors');
  });

  it('should call colorService', async(() => {
    expect(getColorsSpy.calls.any()).toBe(true);
    }));

  it('should display 4 links', async(() => {
    expect(fixture.nativeElement.querySelectorAll('a').length).toEqual(4);
  }));

});
