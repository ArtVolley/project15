import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MyWorker } from '../worker.model';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {
  baseApi = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  getWorker(){
    return this.http.get(`${this.baseApi}workers`).toPromise();
  }

  addWorker(data: MyWorker){
    return this.http.post(`${this.baseApi}workers`, data).toPromise();
  }

  deleteWorker(data) {
    return this.http.delete(`${this.baseApi}workers/${data}`).toPromise();
  }

  changeWorker(data: MyWorker) {
    return this.http.put(`${this.baseApi}workers/${data.id}`, data).toPromise();
  }
}
