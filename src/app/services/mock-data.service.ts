import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ConsumerGroup } from '../models/ConsumerGroup';
import { CONSUMERDATA } from '../mock/mock-consumergroup';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  constructor() { }


  getConsumersGroup(): Observable<ConsumerGroup[]> {
    return of(CONSUMERDATA);
  }

}
