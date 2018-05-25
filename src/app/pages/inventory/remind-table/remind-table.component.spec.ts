import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemindTableComponent } from './remind-table.component';
import { SharedModule } from '../../../shared/shared.module';
import { RemindTableMock, RemindTableRow } from '../../../shared/models';
import { CommonService } from '../../../shared/services/common.service';

describe('RemindTableComponent', () => {
  let component: RemindTableComponent;
  let fixture: ComponentFixture<RemindTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemindTableComponent ],
      imports: [ SharedModule ],
      providers: [
        CommonService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemindTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Func:initData() should work', () => {
    component.initData();
    expect(component.data).toEqual({
      rows: [],
      filter: {
        names: '',
        labels: '',
        members: 0
      }
    });
    expect(component.hideEmail).toEqual(false);
    expect(component.nameSort).toEqual(false);
    expect(component.checked).toEqual([]);
  });

  it('Func:allChecked get and set should work', () => {
    component.checked = [true, false];
    expect(component.allChecked).toEqual(false);
    component.allChecked = true;
    expect(component.checked).toEqual([true, true]);
  });

  it('Func:selectAll() should work', () => {
    component.allChecked = false;
    expect(component.selectAll()).toEqual(true);
  });

  it('Func:toggleNameSort() should work', () => {
    component.nameSort = false;
    expect(component.toggleNameSort()).toEqual(true);
  });

  it('Func:rows() get should work', () => {
    component.data = RemindTableMock;
    component.data.filter.names = 'Julie';
    component.nameSort = true;
    expect(component.rows.map((row: RemindTableRow) => row.email)).toEqual(['juliepatterson@gmail.com', 'julie.goff@organization.com']);
  });
});
