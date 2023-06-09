import {Status} from "./Status";

export interface Task {

  id?: number;
  subject: string;
  dueDate: Date;
  status: Status;
  assignedTo:any;
}
