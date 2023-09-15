import { animate, style, transition, trigger } from '@angular/animations';

export const slideInOutAnimation = trigger('slideInOut', [
  transition(':enter', [
    style({ transform: 'translateY(-100%)', opacity: 0 }),
    animate(
      '1000ms ease-in',
      style({ transform: 'translateY(0)', opacity: 1 })
    ),
  ]),
  transition(':leave', [
    animate(
      '1000ms ease-out',
      style({transform: 'translateY(-100%)', opacity: 0 })
    ),
  ]),
]);
