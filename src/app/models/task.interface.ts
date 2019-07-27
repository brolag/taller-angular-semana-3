export interface Task {
  id: string;
  title: string;
  date: Date;
  status: TaskStatus;
}

export enum TaskStatus {
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE'
}
