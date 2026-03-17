import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../../services/tasks';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tasks.html',
  styleUrls: ['./tasks.css']
})
export class TasksComponent implements OnInit {
  tasks: any[] = [];
  title = '';

  constructor(private service: TasksService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.service.getTasks().subscribe({
      next: (res: any) => {
        this.tasks = res.value ?? res; // array de tareas
        this.cdr.detectChanges();       // fuerza que Angular actualice la vista
      },
      error: (err) => console.error(err)
    });
  }

  //load(): void {
  //  this.service.getTasks().subscribe(res => this.tasks = res);
  //}

  //add(): void {
  //  if (!this.title.trim()) return;
  //  this.service.addTask({ title: this.title, isCompleted: false })
  //    .subscribe(() => {
  //      this.title = '';
  //      this.load();
  //    });
  //}

  add() {
    if (!this.title.trim()) return;
    this.service.addTask({ title: this.title, isCompleted: false })
      .subscribe({
        next: () => {
          this.title = '';
          this.load();
        },
        error: (err) => console.error('Error adding task:', err)
      });
  }

  
  toggleComplete(task: any): void {
    // opcional: marcar como completada/incompleta si tu API soporta PUT
    task.isCompleted = !task.isCompleted;
    // Aquí podrías llamar a service.updateTask(task)
  }

  
  delete(task: any): void {
    // opcional: eliminar si tu API soporta DELETE
    // this.service.deleteTask(task.id).subscribe(() => this.load());
    this.tasks = this.tasks.filter(t => t.id !== task.id); // temporal
  }
}
