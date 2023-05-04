import {Component, Input, OnInit} from '@angular/core';
import {Task} from "../../interfaces/task.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Status} from "../../interfaces/Status";
import {ActivatedRoute, Router} from "@angular/router";
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit{
  @Input() viewMode = false;

  @Input() currentTask: Task = {
    title: '',
    subject: '',
    dueDate: ''
  };

  message = '';
  taskForm: FormGroup;
  statuses = Object.values(Status)

  constructor(private route: ActivatedRoute, private taskService: TaskService, private router: Router) {
    this.taskForm = new FormGroup({
      subject: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      dueDate: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required)
    });
    this.taskForm.disable();
  }

  ngOnInit(): void{
    if (this.viewMode){
      this.message = '';
      this.getTask(this.route.snapshot.params["id"]);
    }
  }

  getTask(id: string): void {
    this.taskService.get(id)
      .subscribe({
        next: (data) => {
          this.currentTask = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateTask(): void {
    this.message = '';

    this.taskService.update(this.currentTask.id, this.currentTask)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.message = res.message ? res.message: "Task succesfully updated"!
          },
          error: (e) => console.error(e)
        });
  }

  deleteTask(): void {
    this.taskService.delete(this.currentTask.id)
      .subscribe({
        next: (res) => {
          this.router.navigate(['/tasks'])
        },
        error: (e) => console.error(e)
      });
  }
}
