import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/model/vehicle.model';
import { DataService } from 'src/app/_services/data.service';

@Component({
  selector: 'app-update-button',
  templateUrl: './update-button.component.html',
  styleUrls: ['./update-button.component.scss']
})
export class UpdateButtonComponent implements OnInit,OnDestroy {

  @Input('vehicle') vehicle:Vehicle={id:0,firstName:"",lastName:"",ageOfVehicle:0,carMake:"",carModel:"",email:"",manufacturedDate:"",vinNumber:""};
  updateVehicle:{firstName:string,lastName:string,ageOfVehicle:number,carMake:string,carModel:string,email:string,manufacturedDate:string,vinNumber:string}=this.vehicle
  result:any;

  constructor(private service:DataService) { }

  ngOnInit(): void {
  }

  onUpdate(){
    this.result=this.service.updateVehicles(this.vehicle.id,this.updateVehicle);
  }

  ngOnDestroy() {
    this.result.unsubscribe();
   }
}
