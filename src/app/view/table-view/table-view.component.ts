import { Component,OnDestroy,OnInit} from '@angular/core';
import { UpdateVehicleInput } from 'src/app/model/update-vehicle.model';
import { Vehicle } from 'src/app/model/vehicle.model';
import { DataService } from 'src/app/_services/data.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit,OnDestroy {

  constructor(private displayService:DataService) { }

  vehicleId:number=0;
  Vehicles:any;
  total:number=0;
  updateData:any;
  result:any;

  first:number=100;
  offset:number=0;
  cars:any;
  
  ngOnInit(): void {
    this.onLoad(this.first,this.offset);
  }

   async onLoad(first:number,offset:number){
     
      this.result=this.displayService.getVehicles(first, offset).subscribe(
       async (data: any) => {
         this.Vehicles = await data.data.getFilteredVehicles.nodes;
         this.total = data.data.getFilteredVehicles.totalCount; 
       },
       (error) => {
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

  async onDeleteClick(vehicle:number){
     this.vehicleId=await vehicle;
     window.location.reload();
  }

  async onUpdateClick(id:number,vehicle:UpdateVehicleInput){
    this.updateData=await [id,vehicle];
    window.location.reload();
  }
 
  onClick(car:any){
   car.selected=true;
  }
  onCancel(car:any){
    this.cars={selected:false,car}
  }

  ngOnDestroy() {
   this.result.unsubscribe();
  }

}
