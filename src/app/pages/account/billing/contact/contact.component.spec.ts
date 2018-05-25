import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { BillingService } from '../billing.service';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      providers: [ BillingService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('setting tab should work', () => {
    component.ngOnInit();
    expect(component.billingService.selectedTab).toBe('contact');
  });
});
