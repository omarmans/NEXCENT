import { Component } from '@angular/core';
import { AnimateOnScrollDirective } from '../../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-spending',
  imports: [AnimateOnScrollDirective],
  templateUrl: './spending.component.html',
  styleUrl: './spending.component.scss',
})
export class SpendingComponent {}
