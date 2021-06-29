import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-next-button',
  templateUrl: './next-button.component.html',
  styleUrls: ['./next-button.component.scss']
})
export class NextButtonComponent implements OnInit {

  @Output() sendEvent=new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick($event:number){
    this.sendEvent.emit($event);
  }
}
