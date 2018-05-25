import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryComponent } from './history.component';
import { BillingService } from '../billing.service';

describe('HistoryComponent', () => {
  let component: HistoryComponent;
  let fixture: ComponentFixture<HistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryComponent ],
      providers: [ BillingService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('setting tab should work', () => {
    component.ngOnInit();
    expect(component.billingService.selectedTab).toBe('history');
  });
});
