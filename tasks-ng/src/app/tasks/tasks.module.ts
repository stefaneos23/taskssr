import {RouterModule, Routes} from "@angular/router";
import {MyTasksComponent} from "./my-tasks/my-tasks.component";
import {TaskDetailsComponent} from "./task-details/task-details.component";
import {AddTaskComponent} from "./add-task/add-task.component";
import {AllTasksComponent} from "./all-tasks/all-tasks.component";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SearchTaskComponent } from './search-task/search-task.component';
import {AuthGuard} from "../guard/auth.guard";

const routes: Routes = [
  {path: 'my-tasks', component: MyTasksComponent, canActivate: [AuthGuard]},
  {path: 'tasks/:id', component: TaskDetailsComponent},
  {path: 'add-task', component: AddTaskComponent, canActivate: [AuthGuard]},
  {path: 'all-tasks', component: AllTasksComponent, canActivate: [AuthGuard]}
]

@NgModule({
  declarations: [
    MyTasksComponent,
    TaskDetailsComponent,
    AddTaskComponent,
    AllTasksComponent,
    SearchTaskComponent,
  ],

  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],

  exports: [
    MyTasksComponent,
    TaskDetailsComponent,
    AddTaskComponent,
    AllTasksComponent,
    SearchTaskComponent
  ],
})
export class TasksModule {
}
