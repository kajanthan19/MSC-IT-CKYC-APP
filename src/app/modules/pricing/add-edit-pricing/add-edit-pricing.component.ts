import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'kyc-add-edit-pricing',
  templateUrl: './add-edit-pricing.component.html',
  styleUrls: ['./add-edit-pricing.component.scss']
})
export class AddEditPricingComponent implements OnInit {
  errormessage: string = '';
  isEdit: boolean = false;
  public onClose!: Subject<any>;
  submitted: boolean = false;
  loading: boolean = false;
  modalDataPass: any;
  consumerGroup: any;
  consumerTypeList: Array<any> = [];
  mainform: FormGroup = new FormGroup({
    ID: new FormControl(''),
    groupname: new FormControl('', Validators.required),
    description: new FormControl(''),
    status: new FormControl('', Validators.required)
  });
  selectedIndex: any;
  constructor(private bsModalRef: BsModalRef, private modalService: BsModalService,
    private formBuilder: FormBuilder,
    public options: ModalOptions) { }

  ngOnInit(): void {
    this.onClose = new Subject();
    this.modalDataPass = this.options.initialState;
    if (this.modalDataPass && this.modalDataPass != null) {
      this.selectedIndex = this.modalDataPass.index;
      if(this.isEdit){
        this.consumerGroup = this.modalDataPass.consumerGroup;
        this.updateInformatioin(this.consumerGroup);
      }
    }
  }

  updateInformatioin(data: any){
    this.mainform = new FormGroup({
      ID: new FormControl(data.ID, Validators.required),
      groupname: new FormControl(data.groupname, Validators.required),
      status: new FormControl(data.status, Validators.required)
      });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.mainform.controls;
  }

  onSubmit(value: any): void {
    this.submitted = true;
    this.errormessage = '';
    if (this.mainform.invalid) {
      return;
    }
    if(!this.isEdit){
      this.onClose.next({
        data: value
      });
      this.bsModalRef.hide();
    }else{
      this.onClose.next({
        data: value,
        index: this.selectedIndex
      });
      this.bsModalRef.hide();
    }

  }

  cancel(state: boolean): void {
    this.onClose.next(state);
    this.bsModalRef.hide();
  }

  onReset(): void {
    this.submitted = false;
    this.mainform.reset();
  }
}
