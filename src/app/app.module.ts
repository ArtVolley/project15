import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TextMaskModule } from 'angular2-text-mask';
import { HttpClientModule } from '@angular/common/http';
// import NumberFormat from 'react-number-format';

import { AppComponent } from './app.component';
import { TableWorkersComponent } from './ui/table-workers/table-workers.component';
import { AddformWorkerComponent } from './ui/addform-worker/addform-worker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditformWorkerComponent } from './ui/editform-worker/editform-worker.component';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { FilterWorkerComponent } from './ui/filter-worker/filter-worker.component';

@NgModule({
  declarations: [AppComponent, TableWorkersComponent, AddformWorkerComponent, EditformWorkerComponent, FilterPipe, FilterWorkerComponent],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    TextMaskModule,
    HttpClientModule,
    // NumberFormat,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
