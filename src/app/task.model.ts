export class Task {
  public taskStatus: string;

  constructor(public taskName: string, public taskDescription: string) {
    this.taskName = taskName;
    this.taskDescription = taskDescription;
    this.taskStatus = 'pending';
  }
}
