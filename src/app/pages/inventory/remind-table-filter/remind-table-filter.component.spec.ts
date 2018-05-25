import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemindTableFilterComponent } from './remind-table-filter.component';
import { SharedModule } from '../../../shared/shared.module';
import { CommonService } from '../../../shared/services/common.service';

describe('RemindTableFilterComponent', () => {
  let component: RemindTableFilterComponent;
  let fixture: ComponentFixture<RemindTableFilterComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemindTableFilterComponent ],
      imports: [ SharedModule ],
      providers: [ CommonService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemindTableFilterComponent);
    compiled = fixture.debugElement.nativeElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Func:initData() should work', () => {
    component.initData();
    expect(component.filter).toEqual({
      names: '',
      labels: '',
      members: 0
    });
    expect(component.dropdownLabelsOpened).toEqual(false);
  });

  it('Func:toggleDropdownLabels should work', () => {
    component.dropdownLabelsOpened = false;
    const evtMock = {
      stopPropagation: () => false
    };
    // show labels dropdown lists
    expect(component.toggleDropdownLabels(evtMock)).toEqual(true);
    fixture.detectChanges();
    expect(compiled.querySelector('.labels-filter .labels-list')).toBeTruthy();
    // hide labels dropdown lists
    expect(component.toggleDropdownLabels(evtMock)).toEqual(false);
    fixture.detectChanges();
    expect(compiled.querySelector('.labels-filter .labels-list')).toBeNull();
  });

  it('Func:changeLabelFilter should work', () => {
    expect(component.changeLabelFilter('label 11')).toEqual('label 11');
    fixture.detectChanges();
    expect(compiled.querySelector('.btn-labels-dropdown span').textContent).toBe('label 11');

  });

  it('Func:resetFilter should work', () => {
    expect(component.resetFilter()).toEqual({
      names: '',
      labels: '',
      members: 0
    });
  });
});
