export interface TaskFormData {
  title: string;
  description: string;
  asignedTo: string;
  createdAt: string;
  status: number;
}

export interface Task extends TaskFormData {
  id: number;
}
