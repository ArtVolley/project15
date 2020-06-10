import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyWorker, MyWorkerType } from 'src/app/shared/worker.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { WorkerService } from 'src/app/shared/services/worker.service';



@Component({
  selector: 'app-editform-worker',
  templateUrl: './editform-worker.component.html',
  styleUrls: ['./editform-worker.component.css']
})
export class EditformWorkerComponent implements OnInit {

  @Input() worker: MyWorker;
  @Output() editWorker = new EventEmitter<MyWorker>();

  editForm: FormGroup;
  workerType = MyWorkerType;

  types = 
  [
    { num: this.workerType.programmer, type: 'Программист'},
    { num: this.workerType.designer, type: 'Дизайнер'},
    { num: this.workerType.copywriter, type: 'Рекламщик'},
    { num: this.workerType.manager, type: 'Менеджер'},
  ]

  public mask = ['+', '7', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/,]
  

  constructor(private workerService: WorkerService) { }
  
  ngOnInit(): void 
  {
    let checkNum = /^[+,0-9]+$/;
    this.editForm = new FormGroup
    ({
      name: new FormControl('',[Validators.required,]),
      surname: new FormControl('',[Validators.required,]),
      phone: new FormControl('',[Validators.pattern(checkNum), Validators.required,]),
      selectType: new FormControl(),
    });
    this.editForm.patchValue({
      name: this.worker.name,
      surname: this.worker.surname,
      phone: this.worker.phone,
      selectType: this.types[this.worker.type],
    });
  }

  onEditWorker() {
    this.editWorker.emit({
      id: this.worker.id,
      name: this.editForm.value.name,
      surname: this.editForm.value.surname,
      phone: this.editForm.value.phone,
      type: this.editForm.value.selectType.num,
    });
    console.log(this.editForm.value);
  }  
}
