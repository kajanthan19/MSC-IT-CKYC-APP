import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ConsumerGroup } from '../models/ConsumerGroup';
import { CONSUMERDATA } from '../mock/mock-consumergroup';
import { APIName } from '../models/APImanagement';
import { APINameDATA } from '../mock/mock-api-management';
import { ProductItem } from '../models/product';
import { PRODUCTDATA } from '../mock/mock-product';
import { APPROVALDATA } from '../mock/mock-approvals';
import { ApprovalData } from '../models/approval';

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

  getProductList(): Observable<ProductItem[]> {
    return of(PRODUCTDATA);
  }


  getApprovalList(): Observable<ApprovalData[]> {
    return of(APPROVALDATA);
  }

}
