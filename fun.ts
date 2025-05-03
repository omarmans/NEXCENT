implements AfterViewInit {
    ngAfterViewInit(): void {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate__backInLeft');
            obs.unobserve(entry.target);
          }
        },
        { threshold: 0.5 }
      );
      obs.observe(this.careHeader.nativeElement);
    }
    @ViewChild('careHeader') careHeader!: ElementRef;