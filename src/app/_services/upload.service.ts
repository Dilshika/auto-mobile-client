import { Injectable } from '@angular/core';
import { Apollo,gql} from 'apollo-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private apollo:Apollo) { }
  

  //save files to browsers local storage
  public uploadFile(chosenFile:File){
    console.log(chosenFile);
    return this.apollo.mutate({
     mutation:gql`mutation uploadFile($file:Upload!){
      uploadFile(file:$file){}
     }`,
     variables:{
      chosenFile
     }
    })
  }
}
