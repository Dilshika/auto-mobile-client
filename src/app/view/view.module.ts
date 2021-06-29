import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableViewComponent } from './table-view/table-view.component';
import { UpdateButtonComponent } from './update-button/update-button.component';
import { DeleteButtonComponent } from './delete-button/delete-button.component';
import { SearchComponent } from './search/search.component';
import { ExportComponent } from './export/export.component';
import { FormsModule } from '@angular/forms';
import { BackButtonComponent } from './back-button/back-button.component';
import { NextButtonComponent } from './next-button/next-button.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [
    TableViewComponent,
    UpdateButtonComponent,
    DeleteButtonComponent,
    SearchComponent,
    ExportComponent,
    BackButtonComponent,
    NextButtonComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[ViewComponent]
})
export class ViewModule { }
