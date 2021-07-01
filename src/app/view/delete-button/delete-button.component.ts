import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DataService } from 'src/app/_services/data.service';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.scss']
})
export class DeleteButtonComponent implements OnInit,OnDestroy {

  @Input('vehicleId') id:number=0;
  result:any;

  constructor(private service:DataService) { }

  ngOnInit(): void {
  }

  delete(){
    this.result=this.service.deleteVehicles(this.id).subscribe((error)=>{
      
    });
    alert(`Successfully deleted ${this.id}`)
    console.log(this.id)
  }

  ngOnDestroy() {
    this.result.unsubscribe();
   }
}
