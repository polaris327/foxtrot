import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { RemindTableFilter, FilterLabel, FilterLabelMocks } from '../../../shared/models';
import { CommonService } from '../../../shared/services/common.service';

@Component({
  selector: 'app-remind-table-filter',
  templateUrl: './remind-table-filter.component.html',
  styleUrls: ['./remind-table-filter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RemindTableFilterComponent implements OnInit {
  @Input() filter: RemindTableFilter;
  @Output() filterChange: EventEmitter<RemindTableFilter> = new EventEmitter();
  dropdownLabelsOpened: boolean;
  filters: FilterLabel[];

  constructor(
    public commonService: CommonService
  ) { }

  ngOnInit() {
    this.initData();
  }

  initData() {
    this.filter = this.filter || {
      names: '',
      members: 0,
      labels: ''
    };
    this.dropdownLabelsOpened = false;
    this.filters = FilterLabelMocks;
  }

  toggleDropdownLabels(event: any): boolean {
    event.stopPropagation();
    this.dropdownLabelsOpened = !this.dropdownLabelsOpened;
    return this.dropdownLabelsOpened;
  }

  changeLabelFilter(label: string): string {
    this.filter.labels = label;
    return this.filter.labels;
  }

  resetFilter(): RemindTableFilter {
    this.filter = {
      names: '',
      members: 0,
      labels: ''
    };

    return this.filter;
  }
}
