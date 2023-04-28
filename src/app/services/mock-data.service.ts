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
import { CustomerData } from '../models/customer';
import { CUSTOMERDATALIST } from '../mock/mock-customer';
import { ROLEDATA } from '../mock/mock.role';
import { Role } from '../models/role';
import { User } from '../models/user';
import { USERDATA } from '../mock/mock-user';
import { RoleAccess } from '../models/role-access';
import { ROLEACCESSDATA } from '../mock/mock-role-access';

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

  getCustomerList(): Observable<CustomerData[]> {
    return of(CUSTOMERDATALIST);
  }


  getRoleList(): Observable<Role[]> {
    return of(ROLEDATA);
  }

  getUserList(): Observable<User[]> {
    return of(USERDATA);
  }

  getRoleAccessPages(): Observable<RoleAccess[]> {
    return of(ROLEACCESSDATA);
  }

}
