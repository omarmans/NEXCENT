import { Component } from '@angular/core';
import { AnimateOnScrollDirective } from '../../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-shepherds',
  imports: [AnimateOnScrollDirective],
  templateUrl: './shepherds.component.html',
  styleUrl: './shepherds.component.scss',
})
export class ShepherdsComponent {}
