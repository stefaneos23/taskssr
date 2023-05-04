import {Component, OnInit} from '@angular/core';
import {map, Observable, of} from "rxjs";
import {Task} from "../../interfaces/task.model";
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent implements OnInit{
    tasks: Observable<Task[]> = of([])

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void{
      this.tasks = this.getAll();
  }

  getAll(): Observable<Task[]> {
    return this.taskService.getAll().pipe(
        map(tasks => tasks.sort((a: any, b: any) => new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime()))
    );
  }
}
