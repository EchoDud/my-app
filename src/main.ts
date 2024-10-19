import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { ShoppingListComponent } from './app/components/shopping-list/shopping-list.component';

bootstrapApplication(ShoppingListComponent, appConfig)
  .catch((err) => console.error(err));
