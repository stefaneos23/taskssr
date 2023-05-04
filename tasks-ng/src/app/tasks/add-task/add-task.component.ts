import {Component, OnInit} from '@angular/core';
import {Task} from "../../interfaces/task.model";
import {Status} from "../../interfaces/Status";
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  task: Task = {
    title: '',
    subject: '',
    dueDate: '',
    status: Status.NEW
  };

  submited = false;

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void{
  }

  saveTask(): void {
    const data = {
      title: this.task.title,
      description: this.task.subject
    };

    this.taskService.create(data)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.submited = true;
          },
          error: (e) => console.error(e)
        });
  }

  newTask(): void {
this.submited = false;
this.task = {
  title: '',
  subject: '',
  dueDate: '',
  status: Status.NEW
    }
  }
}
