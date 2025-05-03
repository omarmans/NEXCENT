import { AfterViewInit, Component } from '@angular/core';
import { AnimateOnScrollDirective } from '../../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-clients',
  imports: [AnimateOnScrollDirective],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss',
})
export class ClientsComponent implements AfterViewInit {
  ngAfterViewInit(): void {}
}
