import { Routes, RouterModule } from '@angular/router';

import { PortalComponent } from './portal.component';

const routes: Routes = [
  { path: '', component: PortalComponent }
];

export const routing = RouterModule.forChild(routes);
