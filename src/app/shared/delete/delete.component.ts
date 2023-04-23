import { Component, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'kyc-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {
  @Input() dataItem: any;
  public onClose!: Subject<any>;
  @Input() userDataItem: any;
  
  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit(): void {
    this.onClose = new Subject();
  }

  delete(): void {
    this.onClose.next({ Action: 'DELETE' });
    this.bsModalRef.hide();

  }
  cancel(): void {
    this.onClose.next({ Action: 'CANCEL' });
    this.bsModalRef.hide();

  }
}
