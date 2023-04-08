import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'kyc-add-edit-consumer-group',
  templateUrl: './add-edit-consumer-group.component.html',
  styleUrls: ['./add-edit-consumer-group.component.scss']
})
export class AddEditConsumerGroupComponent implements OnInit {
  errormessage: string = '';
  isEdit: boolean = false;
  public onClose!: Subject<boolean>;
  submitted: boolean = false;
  loading: boolean = false;
  modalDataPass: any;
  consumerGroup: any;
  consumerTypeList: Array<any> = [];
  mainform: FormGroup = new FormGroup({
    GroupName: new FormControl('', Validators.required),
    description: new FormControl(''),
    status: new FormControl('')
  });
  constructor(private bsModalRef: BsModalRef, private modalService: BsModalService,
    private formBuilder: FormBuilder,
    public options: ModalOptions) { }

  ngOnInit(): void {
    this.onClose = new Subject();
    this.modalDataPass = this.options.initialState;
    if (this.modalDataPass && this.modalDataPass != null) {
      if(this.isEdit){
        this.consumerGroup = this.modalDataPass.data;
       // this.updateEditInformation(this.project);
      }
    }
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
