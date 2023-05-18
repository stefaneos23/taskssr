import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {Task} from "../interfaces/taskl";
import {AuthenticationService} from "./authentication.service";
import {SearchReq} from "../interfaces/SearchReq";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  baseUrl: string;

  private refreshSubject = new Subject<void>();
  refreshComponent$ = this.refreshSubject.asObservable();

  triggerRefresh() {
    this.refreshSubject.next();
  }

  constructor(private http: HttpClient, private authService: AuthenticationService ) {
    this.baseUrl =  'http://localhost:8080/api/tasks'
  }

  getTaskBySearchTerms(searchTerms: SearchReq): Observable<Task[]> {
    return this.http.post<Task[]>(`${this.baseUrl}/search`, searchTerms, this.authService.httpOptions)
  }
  getAll(): Observable<Task[]> {
    return this.http.get<Task[]> (this.baseUrl, this.authService.httpOptions);
  }

  get(id: any): Observable<Task> {
    return this.http.get<Task>(`${this.baseUrl}/${id}`, this.authService.httpOptions);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, data, this.authService.httpOptions);
  }

  edit(task: Task): Observable<any> {
    return this.http.put(`${this.baseUrl}/edit`, task, this.authService.httpOptions)
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, this.authService.httpOptions);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl, this.authService.httpOptions);
  }
}
