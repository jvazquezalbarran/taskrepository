import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { TasksComponent } from './app/components/tasks/tasks';

bootstrapApplication(TasksComponent, appConfig)
  .catch((err) => console.error(err));
