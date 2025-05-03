import { Component } from '@angular/core';
import { ClientsComponent } from './clients/clients.component';
import { SystemsComponent } from './systems/systems.component';
import { SpendingComponent } from './spending/spending.component';
import { BusinessReinventComponent } from './business-reinvent/business-reinvent.component';
import { DesignSiteComponent } from './design-site/design-site.component';
import { ShepherdsComponent } from './shepherds/shepherds.component';
import { CaringComponent } from './caring/caring.component';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-landing-page',
  imports: [
    ClientsComponent,
    SystemsComponent,
    SpendingComponent,
    BusinessReinventComponent,
    DesignSiteComponent,
    ShepherdsComponent,
    CaringComponent,
    AnimateOnScrollDirective,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {}
