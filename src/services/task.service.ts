import { Task, TaskFormData } from "interfaces/task";
import { ListRequest } from "interfaces/request";
import axios from "./axios";

const endpoint = "/kanbans";

function getList({ params, signal }: ListRequest): Promise<Task[]> {
  return axios.get<undefined, Task[]>(`${endpoint}/`, {
    data: {},
    params,
    signal,
  });
}

function getUnregisteredList({ params, signal }: ListRequest): Promise<Task[]> {
  return axios.get<undefined, Task[]>(`${endpoint}/unregistered/`, {
    data: {},
    params,
    signal,
  });
}

function getById(id: number): Promise<Task> {
  return axios.get<undefined, Task>(`${endpoint}/${id}/`, { data: {} });
}

function create(formData: TaskFormData): Promise<Task> {
  return axios.post<TaskFormData, Task>(`${endpoint}/`, formData);
}

function update(id: number, formData: TaskFormData): Promise<Task> {
  return axios.put<TaskFormData, Task>(`${endpoint}/${id}/`, formData);
}

function eliminar(id: number): Promise<Task> {
  return axios.delete<undefined, Task>(`${endpoint}/${id}/`);
}

const KanbanService = {
  getList,
  getUnregisteredList,
  getById,
  update,
  create,
  delete: eliminar,
};

export default KanbanService;
