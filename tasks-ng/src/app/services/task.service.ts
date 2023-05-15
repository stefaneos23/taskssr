import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Task} from "../interfaces/task.model";
import {AuthenticationService} from "./authentication.service";

const baseUrl= 'http://localhost:8080/api/tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient, private authService: AuthenticationService ) { }

  getAll(): Observable<Task[]> {
    return this.http.get<Task[]> (baseUrl, this.authService.httpOptions);
  }

  get(id: any): Observable<Task> {
    return this.http.get<Task>(`${baseUrl}/${id}`, this.authService.httpOptions);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/add`, data, this.authService.httpOptions);
  }

  edit(task: Task): Observable<any> {
    return this.http.put(`${baseUrl}/edit`, task, this.authService.httpOptions)
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`, this.authService.httpOptions);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl, this.authService.httpOptions);
  }
}
