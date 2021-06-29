import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Vehicle } from 'src/app/model/vehicle.model';
import { DisplayService } from 'src/app/_services/display.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {

  constructor(private displayService:DisplayService) { }

  vehicleId:number=0;
  Vehicles:Vehicle[]=[];
  total:number=0;

   first:number=100;
   offset:number=0;

  ngOnInit(): void {
    this.onLoad(this.first,this.offset);
  }

  async onLoad(first:number,offset:number){
    await this.displayService.getVehicles(first,offset)
    .subscribe(
      (data:any)=>{
         this.Vehicles=data.data.getFilteredVehicles.nodes;
        this.total=data.data.getFilteredVehicles.totalCount;
        
      },
      (error)=>{
        console.log(error);
      }
    );

  }

  async onBackClick($event:number){
    if(this.offset>0){
      this.first=this.first+$event;
      this.offset=this.offset+$event;
      await this.onLoad(this.first,this.offset);
      }
  }

  async onNextClick($event:number){
    if(this.first<900){
      this.first=this.first+$event;
      this.offset=this.offset+$event;
      await this.onLoad(this.first,this.offset)
      }
    
  }

  onDeleteClick(vehicle:number){
    this.vehicleId=vehicle;
  }

}
