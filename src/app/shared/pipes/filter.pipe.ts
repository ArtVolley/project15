import { Pipe, PipeTransform } from '@angular/core';
import { worker } from 'cluster';
import { WorkerService } from '../services/worker.service';
import { MyWorker } from '../worker.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

 

  transform(workers: any, filterName: string) {
    if (workers.filter((worker) => (worker.name + ' ' + worker.surname) === filterName)){
      return workers.filter((worker) => (worker.name + ' ' + worker.surname) === filterName);
    }else{
      return 0;
    }
  }
}
