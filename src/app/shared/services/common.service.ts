import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {

  constructor() { }

  public trackStringItem(index: any, item: string): string {
    return item ? item : index;
  }
}
