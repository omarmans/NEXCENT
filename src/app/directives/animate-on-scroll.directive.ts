import {
  AfterViewInit,
  Directive,
  ElementRef,
  inject,
  input,
} from '@angular/core';

@Directive({
  selector: '[appAnimateOnScroll]',
})
export class AnimateOnScrollDirective implements AfterViewInit {
  animationClass = input<string>('', { alias: 'appAnimateOnScroll' });
  el = inject(ElementRef);

  // ngAfterViewInit(): void {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         this.el.nativeElement.classList.add(
  //           'animate__animated',
  //           this.animationClass()
  //         );
  //         observer.unobserve(this.el.nativeElement);
  //       }
  //     },
  //     {
  //       threshold: 0.6, // العنصر لازم 60% منه يظهر
  //       rootMargin: '0px 0px -20% 0px', // من تحت العنصر يستنى شوية
  //     }
  //   );

  //   observer.observe(this.el.nativeElement);
  // }
  ngAfterViewInit(): void {
    this.el.nativeElement.classList.add('hidden-before-scroll'); // 👈 اضف كلاس الإخفاء أولاً

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const el = this.el.nativeElement;
          el.classList.remove('hidden-before-scroll');
          el.classList.add('animate__animated', this.animationClass());
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.6,
        rootMargin: '0px 0px -20% 0px',
      }
    );

    observer.observe(this.el.nativeElement);
  }
}
