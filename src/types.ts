export interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
  priority: "Low" | "Medium" | "High";
  assignedUser: string | null;
}

export interface IUser {
  id: string;
  name: string;
}
