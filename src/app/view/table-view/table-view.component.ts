import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/model/vehicle.model';
import { DisplayService } from 'src/app/_services/display.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {

  constructor(private displayService:DisplayService) { }

  Vehicles:Vehicle[]=[];
  total:number=0;

  ngOnInit(): void {
    this.onLoad();
  }

  async onLoad(){
    await this.displayService.getVehicles()
    .subscribe(
      (data:any)=>{
         this.Vehicles=data.data.getFilteredVehicles.nodes;
        this.total=data.data.getFilteredVehicles.totalCount;
        
      },
      (error)=>{
        console.log(error);
      }
    );
    await console.log(this.Vehicles)
    
  }

}
