import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent implements OnInit {


  @Output() sendValueEvent=new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick($event:number){
    this.sendValueEvent.emit($event);
  }

}
