import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helpers';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login', 
    component: LoginComponent
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'profile',
    loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'consumers',
    loadChildren: () => import('./modules/consumers/consumers.module').then(m => m.ConsumersModule),
    data : {
      title: 'Consumers'
    },
    // canActivate: [AuthGuard]
  },
  {
    path: 'consumer-group',
    loadChildren: () => import('./modules/consumer-group/consumer-group.module').then(m => m.ConsumerGroupModule),
    data : {
      title: 'ConsumerGroup'
    },
    // canActivate: [AuthGuard] 
  },
  {
    path: 'api-management',
    loadChildren: () => import('./modules/apimanagement/apimanagement.module').then(m => m.APIManagementModule),
    data : {
      title: 'APIManagement'
    },
    // canActivate: [AuthGuard] 
  },
  {
    path: 'approvals',
    loadChildren: () => import('./modules/approvals/approvals.module').then(m => m.ApprovalsModule),
    data : {
      title: 'Approvals'
    },
    // canActivate: [AuthGuard] 
  },
  {
    path: 'projects',
    loadChildren: () => import('./modules/projects-management/projects-management.module').then(m => m.ProjectsManagementModule),
    data : {
      title: 'Projects'
    },
    // canActivate: [AuthGuard] 
  },
  {
    path: 'products',
    loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule),
    data : {
      title: 'Products'
    },
    // canActivate: [AuthGuard] 
  },
  {
    path: 'accessmanagement',
    loadChildren: () => import('./modules/access-management/access-management.module').then(m => m.AccessManagementModule),
    data : {
      title: 'AccessManagement'
    },
    // canActivate: [AuthGuard] 
  },
  {
    path: 'customers',
    loadChildren: () => import('./modules/institutions/institutions.module').then(m => m.InstitutionsModule),
    data : {
      title: 'Customers'
    },
    // canActivate: [AuthGuard] 
  },
  {
    path: 'pricing',
    loadChildren: () => import('./modules/pricing/pricing.module').then(m => m.PricingModule),
    data : {
      title: 'Pricing'
    },
    // canActivate: [AuthGuard] 
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
