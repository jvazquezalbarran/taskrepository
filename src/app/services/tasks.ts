import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private api = 'https://tasksapi-services31-ftafeceyf0fjgzdd.francecentral-01.azurewebsites.net/api/tasks';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(this.api);
  }


  addTask(task: any) {
    return this.http.post(this.api, task);
  }
}

