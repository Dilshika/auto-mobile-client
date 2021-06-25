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
 public getVehicles(){
   const Vehicles=this.apollo.query({
     query:this.getQuery,
     variables:{
      "orderBy": "MANUFACTURED_DATE_ASC",
      "first": 5,
      "offset": 0,
      "VehicleModel": "S"
     }
   })
   return Vehicles;
 };

 ;
}
