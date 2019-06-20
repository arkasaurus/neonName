import { Component, OnInit } from '@angular/core';
import {holdingService } from '../holding.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  theData =  {
    value: null
  }
  constructor(private service: holdingService ) { }

  ngOnInit() {
    this.service.setVar(this.theData);
  }

  buttonClicked(e){
    this.theData.value = e;
  }

}
