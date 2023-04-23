import { Component, EventEmitter, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { ConsumerGroup } from 'src/app/models/ConsumerGroup';
import { MockDataService } from 'src/app/services/mock-data.service';

@Component({
  selector: 'kyc-add-edit-consumer',
  templateUrl: './add-edit-consumer.component.html',
  styleUrls: ['./add-edit-consumer.component.scss']
})
export class AddEditConsumerComponent implements OnInit {
  errormessage: string = '';
  isEdit: boolean = false;
  public onClose!: Subject<any>;
  submitted: boolean = false;
  loading: boolean = false;
  modalDataPass: any;
  consumer: any;
  selectedIndex: any;
  mainform: FormGroup = new FormGroup({
    ID:  new FormControl(''),
    consumer_name: new FormControl('', Validators.required),
    consumer_type: new FormControl('', Validators.required),
    consumer_ref: new FormControl(''),
    ClientPublicKeyPath: new FormControl(''),
    ClientPrivateKeyPath: new FormControl(''),
    ServerPublicKeyPath: new FormControl(''),
    ServerPrivateKeyPath: new FormControl(''),
    Is_active: new FormControl('Active'),
  });
  consumerTypeList: ConsumerGroup []= [];
  onSelectedData: EventEmitter<ConsumerGroup> = new EventEmitter<ConsumerGroup>();
  constructor(private bsModalRef: BsModalRef, private modalService: BsModalService,
    private formBuilder: FormBuilder,
    public options: ModalOptions,  private mockDataService: MockDataService) { }

  ngOnInit(): void {
    this.getLoadConsumerList();
    this.onClose = new Subject();
    this.modalDataPass = this.options.initialState;
    if (this.modalDataPass && this.modalDataPass != null) {
      this.isEdit =this.modalDataPass.isEdit;
      if(this.isEdit){
        this.consumer = this.modalDataPass.consumer;
        console.log(this.consumer)
        this.selectedIndex = this.modalDataPass.index;
        this.updateInformatioin(this.consumer);
       
      }
    }
  }

  updateInformatioin(data: any){
    this.mainform = new FormGroup({
      ID: new FormControl(data.ID, Validators.required),
      consumer_name: new FormControl(data.consumer_name, Validators.required),
      consumer_type: new FormControl(data.consumer_type, Validators.required),
      consumer_ref: new FormControl(data.consumer_ref),
      ClientPublicKeyPath: new FormControl(data.ClientPublicKeyPath),
      ClientPrivateKeyPath: new FormControl(data.ClientPrivateKeyPath),
      ServerPublicKeyPath: new FormControl(data.ServerPublicKeyPath),
      ServerPrivateKeyPath: new FormControl(data.ServerPrivateKeyPath),
      Is_active: new FormControl('Active'),
      });
  }


  getLoadConsumerList(){
    this.mockDataService.getConsumersGroup().subscribe((res) => {
       this.consumerTypeList = res;
    }, error => {
      console.log(error)
    })
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
