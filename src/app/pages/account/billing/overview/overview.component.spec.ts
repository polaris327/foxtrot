import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewComponent } from './overview.component';
import { BillingService } from '../billing.service';

describe('OverviewComponent', () => {
  let component: OverviewComponent;
  let fixture: ComponentFixture<OverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewComponent ],
      providers: [ BillingService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('setting tab should work', () => {
    component.ngOnInit();
    expect(component.billingService.selectedTab).toBe('overview');
  });
});
