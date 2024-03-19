// task.model.ts

export interface Task {
    id: number;
    name: string;
    description: string;
    deadline: Date;
    assignedTo: string;
    status: string;
    completionDetails: string;
  }
  