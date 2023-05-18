import {Component, OnInit} from '@angular/core';
import {map, Observable, of, Subscription} from "rxjs";
import {Task} from "../../interfaces/taskl";
import {TaskService} from "../../services/task.service";
import {FormGroup} from "@angular/forms";
import {SearchReq} from "../../interfaces/SearchReq";

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent implements OnInit{
    private RefreshSub?: Subscription;
    tasks: Observable<Task[]> = of([])
    searchParams?: SearchReq;
  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void{
      this.RefreshSub = this.taskService.refreshComponent$.subscribe(() => {
        this.tasks = this.getAllTasks();
      })
      this.tasks = this.getAllTasks();
  }

  getAllTasks(): Observable<Task[]> {
    return this.taskService.getAll().pipe(
        map(tasks => tasks.sort((a, b) => new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime()))
    );
  }

  onSearch(searchParams: FormGroup) {
      const searchTerms : SearchReq = {
        subject: searchParams.get('subject')!.value,
        assignedTo: searchParams.get('assignedTo')!.value,
        dueDate: searchParams.get('dueDate')!.value,
        status: searchParams.get('status')!.value
      }
      this.tasks = this.taskService.getTaskBySearchTerms(searchTerms)
  }
}
