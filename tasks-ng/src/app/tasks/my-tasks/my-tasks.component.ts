import {Component, OnInit} from '@angular/core';
import {Task} from "../../interfaces/task.model";
import {map, Observable, of} from "rxjs";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.css']
})
export class MyTasksComponent implements OnInit{

  tasks$: Observable<Task[]> = of([])
  private username?: string
  constructor(private userService : UserService) {
  }

  ngOnInit(): void{
    this.retriveUsername();
    this.tasks$ = this.getTasks();
  }

  retriveUsername(): void {
    const username = this.userService.getUsername();
  }

  getTasks(): Observable<Task[]> {
    return this.userService.getTasks(this.username).pipe(
      map(tasks => tasks.sort((a, b) => new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime()))
    );
  }
}
