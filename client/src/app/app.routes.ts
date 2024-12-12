import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./products/features/product-shell/product.route')
    },
    {
        path: 'cart',
        loadChildren: () => import('./cart/cart.routes')
    },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.routes'),
        canActivate: [AuthGuard]
    },
    {
        path: 'create-product',
        loadChildren: () => import('./admin/admin.routes'),
    },
    {
        path: '**',
        redirectTo: ''
    },
];
