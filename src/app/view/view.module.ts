import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableViewComponent } from './table-view/table-view.component';
import { UpdateButtonComponent } from './update-button/update-button.component';
import { DeleteButtonComponent } from './delete-button/delete-button.component';
import { SearchComponent } from './search/search.component';
import { ExportComponent } from './export/export.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TableViewComponent,
    UpdateButtonComponent,
    DeleteButtonComponent,
    SearchComponent,
    ExportComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[TableViewComponent]
})
export class ViewModule { }
