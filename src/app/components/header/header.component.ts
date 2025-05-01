import { Component, OnInit } from '@angular/core';
import { LangService } from '../../services/lang.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentLang = 'en';
  labels: any = {};

  constructor(private langService: LangService) {}

  ngOnInit() {
    this.langService.currentLang$.subscribe(lang => {
      this.currentLang = lang;
      this.labels = this.getLabels(lang);
    });
  }

  setLang(lang: string) {
    this.langService.setLang(lang);
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
