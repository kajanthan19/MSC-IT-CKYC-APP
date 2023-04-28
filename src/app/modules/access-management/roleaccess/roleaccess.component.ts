import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { RoleAccess } from 'src/app/models/role-access';
import { MockDataService } from 'src/app/services/mock-data.service';

@Component({
  selector: "kyc-roleaccess",
  templateUrl: "./roleaccess.component.html",
  styleUrls: ["./roleaccess.component.scss"],
})
export class RoleaccessComponent implements OnInit {
  public onClose!: Subject<boolean>;
  public modalRef!: BsModalRef;
  rolelist: RoleAccess[] = [];
  submitted: boolean = false;
  loading = false;
  refineSearchValue!: string;
  constructor(
    private modalService: BsModalService,
    private mockDataService: MockDataService
  ) {}

  ngOnInit(): void {
    this.getloadRoleAccess();
  }

  getloadRoleAccess() {
    this.mockDataService.getRoleAccessPages().subscribe(
      (res) => {
        this.rolelist = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onOpenModal(): void {
    const initialState = {
      isEdit: false,
    };
    let modalConfig = {
      animated: true,
      keyboard: true,
      backdrop: true,
      ignoreBackdropClick: false,
    };
    // this.modalRef = this.modalService.show(AddEditConsumerGroupComponent, Object.assign({}, modalConfig, {class: 'modal-md', initialState}));
    // this.modalRef.content.onClose.subscribe((result: any) => {
    //   if (result && result.data !=null) {
    //     let data: Role = {
    //                  ID : 40,
    //                 rolename: result.data.rolename,
    //                 description : result.data.description,
    //     }
    //     this.rolelist.push(data)
    //   }
    // });
  }

  onEditRow(data: any, index: any): void {
    const initialState = { isEdit: true, consumerGroup: data, index: index };
    let modalConfig = {
      animated: true,
      keyboard: true,
      backdrop: true,
      ignoreBackdropClick: false,
    };
    // this.modalRef = this.modalService.show(AddEditConsumerGroupComponent, Object.assign({}, modalConfig, {class: 'modal-md', initialState}));
    // this.modalRef.content.onClose.subscribe((result: any) => {
    //   if (result && result.data !=null) {
    //     this.rolelist[result.index].rolename = result.data.rolename;
    //     this.rolelist[result.index].description =  result.data.description;
    //   }
    // });
  }

  refineSearch(): void {
    const filterValue = this.refineSearchValue;
  //   this.usersList = this.allUserList;

    // this.usersList = this.usersList.filter((x) => {
    //   // tslint:disable-next-line:max-line-length
    //   if (
    //     (this.isFirstName &&
    //       x.firstName
    //         .toLowerCase()
    //         .includes(filterValue.toLowerCase().trim())) ||
    //     (this.isLastName &&
    //       x.lastName
    //         .toLowerCase()
    //         .includes(filterValue.toLowerCase().trim())) ||
    //     (this.isEmail &&
    //       x.email.toLowerCase().includes(filterValue.toLowerCase().trim())) ||
    //     (this.isRole &&
    //       x.roleName.toLowerCase().includes(filterValue.toLowerCase().trim()))
    //   ) {
    //     return true;
    //   }
    // });
  }
}
