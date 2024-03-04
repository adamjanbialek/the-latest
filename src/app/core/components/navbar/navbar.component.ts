import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild
} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";

/* TODO: Add a mobile navigation. Add some links to the navbar. */

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  constructor(private renderer: Renderer2) { }

  @ViewChild(MatToolbar, {read: ElementRef})
  navbar!: ElementRef;

  lastScrollPos = 0;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const navbar = this.navbar.nativeElement;

    if (window.scrollY > this.lastScrollPos) {
      this.renderer.addClass(navbar, 'navbar--hide');
    } else {
      this.renderer.removeClass(navbar, 'navbar--hide');
    }

    this.lastScrollPos = window.scrollY;
  }
}
