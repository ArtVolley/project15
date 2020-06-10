import { Component } from '@angular/core';
import {
  MyWorker,
  MyWorkersDatabase,
  MyWorkerType,
} from './shared/worker.model';
import { WorkerService } from './shared/services/worker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Список сотрудников';
  // workers: MyWorker[] = MyWorkersDatabase;
  workers;
  myWorkerType = MyWorkerType;

  constructor(private workerService: WorkerService){}

  ngOnInit() {
    this.getData();
    // console.log( this.workerService.getWorker());
   
  }

  getByType(type: number) {
    return this.workers.filter((worker) => worker.type === type);
  }

  async onDeleteById(data:number) {
    try {
    await this.workerService.deleteWorker(data);
    this.getData();
    } catch (err) {
      console.error(err);
    } 
  }
  
  async onAddWorker(data: MyWorker) {
    try {
      await this.workerService.addWorker(data);
      this.getData();
    } catch (err) {
      console.error(err);
    } 
  }
  
  async onEdit(data: MyWorker) {
    try {
      await this.workerService.changeWorker(data);
      this.getData();
    } catch (err) {
      console.error(err);
    } 
  }
  
  // onDeleteById(id: number) {
  //   let index = this.workers.findIndex((worker) => worker.id === id);
  //   if (index !== -1) {
  //     this.workers.splice(index, 1);
  //   }
  // }
  
    // onAddWorker(worker) {
    //   let id =
    //   this.workers.length > 0
    //   ? this.workers[this.workers.length - 1].id + 1
    //   : 0;
    //   worker.id = id;
    //   this.workers.push(worker);
    // }
  
  // onEdit(worker : MyWorker)
  // { 
  //   let _worker = worker;
  //   this.onDeleteById(worker.id);
  //   this.workers.push(_worker);
  // }



  async getData() {
    try {
      this.workers = await this.workerService.getWorker();
    } catch (err) {
      console.error(err);
    }
  }
}
