import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CancelHistoryComponent } from '../cancel-history/cancel-history.component';
@Component({
  selector: 'app-edit-history',
  templateUrl: './edit-history.component.html',
  styleUrls: ['./edit-history.component.css']
})
export class EditHistoryComponent implements OnInit {

  constructor(private modalService: NgbModal,) { }

  ngOnInit(): void {
  }
  clickCancel(){
    const modalRef = this.modalService.open(CancelHistoryComponent, { centered: true });
  }
}
