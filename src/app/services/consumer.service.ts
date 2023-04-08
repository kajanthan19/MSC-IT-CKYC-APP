import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CONSUMERDATA } from '../mock/mock-consumer';
import { Consumer } from '../models/Consumer';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  constructor() { }


  getConsumers(): Observable<Consumer[]> {
    return of(CONSUMERDATA);
  }
}
