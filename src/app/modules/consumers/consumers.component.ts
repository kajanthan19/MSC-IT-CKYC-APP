import { Component, OnInit } from "@angular/core";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { Subject } from "rxjs";
import { Consumer } from "src/app/models/Consumer";
import { ConsumerService } from "src/app/services/consumer.service";
import { AddEditConsumerComponent } from "./add-edit-consumer/add-edit-consumer.component";

@Component({
  selector: "kyc-consumers",
  templateUrl: "./consumers.component.html",
  styleUrls: ["./consumers.component.scss"],
})
export class ConsumersComponent implements OnInit {
  public onClose!: Subject<boolean>;
  public modalRef!: BsModalRef;
  consumerList: Consumer[] = [];
  submitted: boolean = false;
  loading = false;
  constructor(
    private modalService: BsModalService,
    private consumerService: ConsumerService
  ) {}

  ngOnInit(): void {
    this.getLoadConsumerList();
  }

  getLoadConsumerList(){
    this.consumerService.getConsumers().subscribe((res) => {
       this.consumerList = res;
    }, error => {
      console.log(error)
    })
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
    this.modalRef = this.modalService.show(
      AddEditConsumerComponent,
      Object.assign({}, modalConfig, { class: "modal-md", initialState })
    );
    this.modalRef.content.onClose.subscribe((result: boolean) => {
      if (result) {
        // call or bind it
      }
    });
  }

  onEditRow(data: any): void {
    const initialState = { isEdit: true, project: data };
    let modalConfig = {
      animated: true,
      keyboard: true,
      backdrop: true,
      ignoreBackdropClick: false,
    };
    this.modalRef = this.modalService.show(
      AddEditConsumerComponent,
      Object.assign({}, modalConfig, { class: "modal-md", initialState })
    );
    this.modalRef.content.onClose.subscribe((result: boolean) => {
      if (result) {
        // call list or bind it
      }
    });
  }

  onDeleteRow(data: any, index: number): void {}

  delete(data: any, index: number): void {}
}
