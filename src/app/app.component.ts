import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  decimalValue: number = 0;
  binaryValue: string;
  inputValue: any;

  constructor(){}

  binaryInput(value: string ) {
    return parseInt((value ),2)
  }

  formatInput() {
    setTimeout(() => {
      this.binaryValue = this.binaryValue.replace(/[^0-1]/gi,'')
    } , 1)
  }

  convertValues(value: string){
    const result = this.binaryInput(value)
    this.decimalValue = result

  }


  ngOnInit(){

  }

}
