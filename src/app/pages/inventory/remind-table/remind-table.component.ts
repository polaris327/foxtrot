import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { RemindTable, RemindTableRow } from '../../../shared/models';
import { CommonService } from '../../../shared/services/common.service';

@Component({
  selector: 'app-remind-table',
  templateUrl: './remind-table.component.html',
  styleUrls: ['./remind-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RemindTableComponent implements OnInit {
  @Input() data: RemindTable;
  @Input() hideEmail: boolean;
  checked: boolean[];
  nameSort: boolean;

  constructor(
    public commonService: CommonService
  ) { }

  ngOnInit() {
    this.initData();
  }

  initData() {
    this.data = this.data || {
      rows: [],
      filter: {
        names: '',
        labels: '',
        members: 0
      }
    };
    this.hideEmail = this.hideEmail || false;
    this.checked = this.data.rows.map((row: RemindTableRow)  => false);
    this.nameSort = false;
  }

  selectAll(): boolean {
    this.allChecked = !this.allChecked;
    return this.allChecked;
  }

  toggleNameSort(): boolean {
    this.nameSort = !this.nameSort;
    return this.nameSort;
  }

  get allChecked(): boolean {
    return this.checked.every((checked: boolean) => checked);
  }

  set allChecked(value: boolean) {
    this.checked.fill(value);
  }

  get rows(): RemindTableRow[] {
    return this.data.rows.filter((row: RemindTableRow) => {
      const name = `${row.name.firstName} ${row.name.middleName} ${row.name.lastName}`;
      return name.toLowerCase().includes(this.data.filter.names.toLowerCase());
    }).sort((a: RemindTableRow, b: RemindTableRow) => {
      const nameA = `${a.name.firstName} ${a.name.middleName} ${a.name.lastName}`;
      const nameB = `${b.name.firstName} ${b.name.middleName} ${b.name.lastName}`;
      return this.nameSort ? nameA > nameB ? -1 : nameA === nameB ? 0 : 1
            : nameA > nameB ? 1 : nameA === nameB ? 0 : -1;
    });
  }
}
