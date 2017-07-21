import { NgModule } from '@angular/core';
//import { SharedModule } from '../shared/shared.module';
import { PortalComponent } from './portal.component';
import { PortalService } from './portal.service';
import { routing } from './portal.routes';

@NgModule({
    imports: [routing],//, SharedModule],
    declarations: [PortalComponent],
    providers: [PortalService]
})
export class PortalModule { }
