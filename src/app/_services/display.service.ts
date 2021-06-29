import { Injectable } from '@angular/core';
import { Observable } from '@apollo/client/utilities';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

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
}
