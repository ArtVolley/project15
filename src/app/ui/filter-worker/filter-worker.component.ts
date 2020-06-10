import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyWorker, MyWorkerType } from 'src/app/shared/worker.model';
import { WorkerService } from 'src/app/shared/services/worker.service';

@Component({
  selector: 'app-filter-worker',
  templateUrl: './filter-worker.component.html',
  styleUrls: ['./filter-worker.component.css']
})
export class FilterWorkerComponent implements OnInit {

  workers;
  filterName: string;
  filteringName: string;
  myWorkerType = MyWorkerType;

  constructor(private workerService: WorkerService){}

  filterForm: FormGroup;

  ngOnInit(): void 
  {
    this.getData();
    this.filterForm = new FormGroup
    ({
      filterName: new FormControl('',[Validators.required,]),
    });
  }
  
  getByType(type: number) {
    return this.workers.filter((worker) => worker.type === type);
  }

  onFilterWorker()
  {
    this.getData();
    this.filteringName = this.filterForm.value.filterName;
  }

  async onEdit(data: MyWorker) {
    try {
      await this.workerService.changeWorker(data);
      this.getData();
    } catch (err) {
      console.error(err);
    } 
  }
  
  async onDeleteById(data:number) {
    try {
    await this.workerService.deleteWorker(data);
    this.getData();
    } catch (err) {
      console.error(err);
    } 
  }


  
  async getData() {
    try {
      this.workers = await this.workerService.getWorker();
    } catch (err) {
      console.error(err);
    }
  }
}
