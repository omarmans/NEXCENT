import { Component } from '@angular/core';
import { AnimateOnScrollDirective } from '../../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-design-site',
  imports: [AnimateOnScrollDirective],
  templateUrl: './design-site.component.html',
  styleUrl: './design-site.component.scss',
})
export class DesignSiteComponent {}
