import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'kyc-add-edit-consumer',
  templateUrl: './add-edit-consumer.component.html',
  styleUrls: ['./add-edit-consumer.component.scss']
})
export class AddEditConsumerComponent implements OnInit {
  errormessage: string = '';
  isEdit: boolean = false;
  public onClose!: Subject<boolean>;
  submitted: boolean = false;
  loading: boolean = false;
  modalDataPass: any;
  consumer: any;
  consumerTypeList: Array<any> = [];
  mainform: FormGroup = new FormGroup({
    FullName: new FormControl('', Validators.required),
    TypeId: new FormControl(''),
    ConsumerNumber: new FormControl(''),
    ConsumerAddress: new FormControl(''),
    ConsumerOccupation: new FormControl(''),
    ConsumerMobileNo: new FormControl(''),
    Description: new FormControl(''),
  });

  constructor(private bsModalRef: BsModalRef, private modalService: BsModalService,
    private formBuilder: FormBuilder,
    public options: ModalOptions) { }

  ngOnInit(): void {
    this.onClose = new Subject();
    this.modalDataPass = this.options.initialState;
    if (this.modalDataPass && this.modalDataPass != null) {
      if(this.isEdit){
        this.consumer = this.modalDataPass.consumer;
       // this.updateEditInformation(this.project);
      }
    }
  }

  onSubmit(value: any): void {
    this.submitted = true;
    this.errormessage = '';
    if (this.mainform.invalid) {
      return;
    }
   
  }

  cancel(state: boolean): void {
    this.onClose.next(state);
    this.bsModalRef.hide();
  }
  
  
}
