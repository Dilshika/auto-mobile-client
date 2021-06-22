import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/_services/upload.service';

@Component({
  selector: 'app-upload-preview',
  templateUrl: './upload-preview.component.html',
  styleUrls: ['./upload-preview.component.scss']
})
export class UploadPreviewComponent implements OnInit {

  isFileSelected=false;
  selectedFile:any;

  constructor(private uploadService:UploadService) { }

  ngOnInit(): void {
  }

  onFileSelected($event:any){
    this.selectedFile=$event.target.files[0];
    this.isFileSelected=true;
  }

  onUpload(){
    this.uploadService.uploadFile(this.selectedFile).subscribe(({data})=>{
      console.log(data);
    },(error)=>{
      console.log(error);
    });
  }

}
