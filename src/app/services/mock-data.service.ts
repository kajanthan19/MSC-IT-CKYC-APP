import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ConsumerGroup } from '../models/ConsumerGroup';
import { CONSUMERDATA } from '../mock/mock-consumergroup';
import { APIName } from '../models/APImanagement';
import { APINameDATA } from '../mock/mock-api-management';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  constructor() { }


  getConsumersGroup(): Observable<ConsumerGroup[]> {
    return of(CONSUMERDATA);
  }

  getApiNameList(): Observable<APIName[]> {
    return of(APINameDATA);
  }

}
