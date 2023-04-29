import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'kyc-add-edit-institution',
  templateUrl: './add-edit-institution.component.html',
  styleUrls: ['./add-edit-institution.component.scss']
})
export class AddEditInstitutionComponent implements OnInit {
  errormessage: string = '';
  isEdit: boolean = false;
  public onClose!: Subject<boolean>;
  submitted: boolean = false;
  loading: boolean = false;
  modalDataPass: any;
  institution: any;
  mainform: FormGroup = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    identityNo: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    district: new FormControl('', Validators.required),
    dob: new FormControl(''),
    contactno:new FormControl('', Validators.required),
    homecontact: new FormControl(''),
    livingStatus: new FormControl(''),
    marriageStatus: new FormControl(''),
    status: new FormControl(''),
    occupation: new FormControl('')
  });
  constructor(private bsModalRef: BsModalRef, private modalService: BsModalService,
    private formBuilder: FormBuilder,
    public options: ModalOptions) { }

  ngOnInit(): void {
    this.onClose = new Subject();
    this.modalDataPass = this.options.initialState;
    if (this.modalDataPass && this.modalDataPass != null) {
      if(this.isEdit){
        this.institution = this.modalDataPass.data;
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
