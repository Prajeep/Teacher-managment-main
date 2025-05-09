import {Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {AuthGuard} from './core/guards/auth.guard';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {UserComponent} from './components/user/user.component';
import {AddEditUserComponent} from './components/user/add-edit-user/add-edit-user.component';
import {DepartmentComponent} from './components/department/department.component';
import {AddEditDepartmentComponent} from './components/department/add-edit-department/add-edit-department.component';
import {LogsComponent} from './components/logs/logs.component';
import { NonAcadamicComponent } from './components/employee/non-acadamic/non-acadamic.component';
import { AcadamicComponent } from './components/employee/acadamic/acadamic.component';


export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  // App Components
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full',
  },
  {
    path: 'admin',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: '/admin/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'users',
        component: UserComponent,
      },
      {
        path: 'acadamic',
        component: AcadamicComponent,
      },
      {
        path: 'non-acadamic',
        component:  NonAcadamicComponent,
      },
      {
        path: 'users/add-edit',
        component: AddEditUserComponent,
      },
      {
        path: 'users/add-edit/:id',
        component: AddEditUserComponent,
      },
      {
        path: 'departments',
        loadChildren: () =>
          import('./modules/department/department.module').then((m) => m.DepartmentModule),
      },
      {
        path: 'employees',
        loadChildren: () =>
          import('./modules/employee/employee.module').then((m) => m.EmployeeModule),
      },
      {
        path: 'leave',
        loadChildren: () =>
          import('./modules/leave/leave.module').then((m) => m.LeaveModule),
      },
      {
        path: 'logs',
        component: LogsComponent,
      },
    ]
  }
];
