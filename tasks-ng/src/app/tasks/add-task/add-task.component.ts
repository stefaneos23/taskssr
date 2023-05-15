import {Component, OnInit} from '@angular/core';
import {TaskService} from "../../services/task.service";
import {Status} from "../../interfaces/Status";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  task: { subject: string; dueDate: undefined; status: Status , assignedTo: string} = {
    subject: '',
    dueDate: undefined,
    status: Status.NEW,
    assignedTo: ''
  };

  submited = true;

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void{
  }

  saveTask(): void {
    const data = {
      subject: this.task.subject,
      dueDate: this.task.dueDate,
      status: this.task.status,
      assignedTo: this.task.assignedTo
    };

    this.taskService.create(data)
        .subscribe({
          next: (res) => {
            console.log(res);
          }
        });
  }
}
