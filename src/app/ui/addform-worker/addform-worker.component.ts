import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { WorkerService } from 'src/app/shared/services/worker.service';
// import NumberFormat from 'react-number-format';

@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css'],
})
export class AddformWorkerComponent implements OnInit {
  myWorkerType = MyWorkerType;
  buttonEnabled = false;
  type = 0;
  
  types = 
  [
    { num: this.myWorkerType.programmer, type: 'Программист'},
    { num: this.myWorkerType.designer, type: 'Дизайнер'},
    { num: this.myWorkerType.copywriter, type: 'Рекламщик'},
    { num: this.myWorkerType.manager, type: 'Менеджер'},
  ]


  
  
  addForm: FormGroup;

  @Output() addWorker = new EventEmitter<MyWorker>();


  public mask = ['+', '7', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/,]

  constructor(private workerService: WorkerService) {}

  ngOnInit(): void 
  {
    let checkNum = /^[+,0-9]+$/;
    this.addForm = new FormGroup
    ({
      name: new FormControl('',[Validators.required,]),
      surname: new FormControl('',[Validators.required,]),
      phone: new FormControl('',[Validators.pattern(checkNum), Validators.required,]),
      selectType: new FormControl(this.types[0]),
    });
  }

  onAddWorker()
  {
    this.addWorker.emit({
      name: this.addForm.value.name,
      surname: this.addForm.value.surname,
      phone: this.addForm.value.phone,
      type: this.addForm.value.selectType.num,
    });
    // document.getElementById('form-phone').mask("8(999) 999-99-99");
  }
}


