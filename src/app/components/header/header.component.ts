/* header.component.ts */
import { Component, OnInit, HostListener } from '@angular/core';
import { LangService } from '../../services/lang.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentLang = 'en';
  labels: any = {};
  isNavbarOpen = false;
  isLangDropdownOpen = false;

  constructor(private langService: LangService) {}

  ngOnInit() {
    this.langService.currentLang$.subscribe(lang => {
      this.currentLang = lang;
      this.labels = this.getLabels(lang);
    });
    
    // Check for scroll position on init
    if (window.scrollY > 10) {
      const navbar = document.getElementById('hitchgoNavbar');
      if (navbar) navbar.classList.add('scrolled');
    }
  }

  // Toggle navbar for mobile view
  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
    // Close language dropdown when toggling navbar
    this.isLangDropdownOpen = false;
  }

  // Handle language dropdown toggle
  toggleLangDropdown(event: Event) {
    event.stopPropagation(); // Prevent the click from bubbling up
    this.isLangDropdownOpen = !this.isLangDropdownOpen;
  }

  // Close dropdowns when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('#langDropdown')) {
      this.isLangDropdownOpen = false;
    }
  }

  // Handle window scroll
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = document.getElementById('hitchgoNavbar');
    if (navbar) {
      if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  }

  // Set language
  setLang(lang: string) {
    this.langService.setLang(lang);
    this.isLangDropdownOpen = false; // Close dropdown after selection
  }

  getLabels(lang: string) {
    return {
      en: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        contact: 'Contact',
        blog: 'Blog'
      },
      es: {
        home: 'Inicio',
        about: 'Acerca de',
        services: 'Servicios',
        contact: 'Contacto',
        blog: 'Blog'
      }
    }[lang];
  }
}