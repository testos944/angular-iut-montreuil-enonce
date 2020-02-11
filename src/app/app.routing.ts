import { Routes } from '@angular/router';

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    {
      path: 'employees',
      component: EmployeeListComponent
    },
    {
      path: 'home',
      component: HomeComponent
    },
    { path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    { path: '**', component: HomeComponent }
  ];


export default appRoutes;