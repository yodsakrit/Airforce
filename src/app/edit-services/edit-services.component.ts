import { Component, OnInit,VERSION } from '@angular/core';

@Component({
  selector: 'app-edit-services',
  templateUrl: './edit-services.component.html',
  styleUrls: ['./edit-services.component.css']
})
export class EditServicesComponent implements OnInit {
name = 'Angular ' + VERSION.major;
  value = 0;
  constructor() { }

  ngOnInit(): void {
  }


  handleMinus() {
    this.value--;
  }
  handlePlus() {
    this.value++;
  }
  clickCancel(){

  }
  clickSave(){

  }
}
