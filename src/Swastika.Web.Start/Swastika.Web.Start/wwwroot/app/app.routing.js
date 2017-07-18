"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
//import { AboutComponent } from './about.component';
var index_component_1 = require("./index.component");
//import { ContactComponent } from './contact.component';
//import { LoginComponent } from './login.component';
//import { RegisterComponent } from './register.component';
//import { ChangePasswordComponent } from './changePassword.component';
//import { ManageComponent } from './manage.component';
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: index_component_1.IndexComponent, data: { title: 'Home' } }
    //{ path: 'login', component: LoginComponent, data: { title: 'Login' } },
    //{ path: 'register', component: RegisterComponent, data: { title: 'Register' } },
    //{ path: 'changePassword', component: ChangePasswordComponent, data: { title: 'Change Password' }, canActivate: [AuthGuard] },
    //{ path: 'manage', component: ManageComponent, data: { title: 'Manage Account' }, canActivate: [AuthGuard] },
    //{ path: 'about', component: AboutComponent, data: { title: 'About' }, canActivate: [AuthGuard] },
    //{ path: 'contact', component: ContactComponent, data: { title: 'Contact' } }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
exports.routedComponents = [index_component_1.IndexComponent];
//# sourceMappingURL=app.routing.js.map