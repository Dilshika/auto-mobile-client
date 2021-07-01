import { Injectable } from '@angular/core';
import { Observable } from '@apollo/client/utilities';
import { Apollo, gql } from 'apollo-angular';
import { UpdateVehicleInput } from '../model/update-vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private apollo:Apollo) { }

  getQuery=gql`
  query getVehicles($orderBy:String!,$first:Int!,$offset:Int!,$VehicleModel:String!){
    getFilteredVehicles(orderBy:$orderBy,first: $first,offset:$offset,VehicleModel :$VehicleModel){
      nodes{
        id
       firstName
        lastName
        email
        carMake
        carModel
        vinNumber
        manufacturedDate
        ageOfVehicle
      }
      totalCount
    }
  }
  `;
 public getVehicles(first:number,offset:number){
   const Vehicles=this.apollo.query({
     query:this.getQuery,
     variables:{
      "orderBy": "MANUFACTURED_DATE_ASC",
      "first": first,
      "offset": offset,
      "VehicleModel": ""
     }
   })

   return Vehicles;
 };

 deleteQuery=gql`
 mutation delete($id:Int!){
  deleteVehicle(id:$id){
    id
  }
}
  `

  public deleteVehicles(id:number){
    const output=this.apollo.mutate({
      mutation:this.deleteQuery,
      variables:{
        "id":id
      }
    })
    return output;
  }

  updateQuery=gql`
  mutation update($id:Int!,$updateVehicleInput:UpdateVehicleInput!){
    updateVehicle(id:$id,updateVehicleInput:$updateVehicleInput){
      id
      firstName
       lastName
       email
       carMake
       carModel
       vinNumber
       manufacturedDate
       ageOfVehicle
    }
  }
  `

  public updateVehicles(id:number,vehicle:UpdateVehicleInput){
    const response=this.apollo.mutate({
      mutation:this.updateQuery,
      variables:{
        "id":id,
        "updateVehicleInput":vehicle,
      }
    })
  }
}
