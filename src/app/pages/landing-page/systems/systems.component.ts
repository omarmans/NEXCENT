import { Component } from '@angular/core';
import { AnimateOnScrollDirective } from '../../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-systems',
  imports: [AnimateOnScrollDirective],
  templateUrl: './systems.component.html',
  styleUrl: './systems.component.scss',
})
export class SystemsComponent {}
