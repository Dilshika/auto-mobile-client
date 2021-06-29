import { Component, Input, OnInit } from '@angular/core';
import { DisplayService } from 'src/app/_services/display.service';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.scss']
})
export class DeleteButtonComponent implements OnInit {

  @Input('vehicleId') id:number=0;

  constructor(private service:DisplayService) { }

  ngOnInit(): void {
  }

  delete(){
    this.service.deleteVehicles(this.id).subscribe((error)=>{
      
    });
    alert(`Successfully deleted ${this.id}`)
    console.log(this.id)
  }
}
