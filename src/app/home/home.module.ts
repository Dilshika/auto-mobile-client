import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from '../file-upload/file-upload.module';
import { ViewModule } from '../view/view.module';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    FileUploadModule,
    ViewModule
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
