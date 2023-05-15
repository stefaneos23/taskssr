import {RouterModule, Routes} from "@angular/router";
import {MyTasksComponent} from "./my-tasks/my-tasks.component";
import {TaskDetailsComponent} from "./task-details/task-details.component";
import {AddTaskComponent} from "./add-task/add-task.component";
import {AllTasksComponent} from "./all-tasks/all-tasks.component";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

const routes: Routes = [
  {path: 'my-tasks', component: MyTasksComponent},
  {path: 'tasks/:id', component: TaskDetailsComponent},
  {path: 'add-task', component: AddTaskComponent},
  {path: 'all-tasks', component: AllTasksComponent}
]

@NgModule({
  declarations: [
    MyTasksComponent,
    TaskDetailsComponent,
    AddTaskComponent,
    AllTasksComponent
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
    AllTasksComponent
  ],
})
export class TasksModule {
}
