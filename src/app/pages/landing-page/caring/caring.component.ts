import { Component } from '@angular/core';
import { AnimateOnScrollDirective } from '../../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-caring',
  imports: [AnimateOnScrollDirective],
  templateUrl: './caring.component.html',
  styleUrl: './caring.component.scss',
})
export class CaringComponent {}
