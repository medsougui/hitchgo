import { Component, OnInit } from '@angular/core';
import { LangService } from '../../services/lang.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currentLang = 'en';
  labels: any = {};

  constructor(private langService: LangService) {}

  ngOnInit() {
    this.langService.currentLang$.subscribe(lang => {
      this.currentLang = lang;
      this.labels = this.getLabels(lang);
    });
  }

  getLabels(lang: string) {
    return {
      en: {
        tagline: 'Choose your way. Making transportation greener, smarter, and more collaborative.',
        contactUs: 'Contact Us',
        address: '1234 HITCHGO Street, City, Country',
        phone: '(123) 456-7890',
        email: 'contact@hitchgo.com',
        quickLinks: 'Quick Links',
        home: 'Home',
        aboutUs: 'About Us',
        ourServices: 'Our Services',
        contact: 'Contact',
        blog: 'Blog',
        copyright: '© 2025 HITCHGO. All rights reserved.',
        ecoTagline: 'Eco-Friendly • Collaborative • Responsible'
      },
      es: {
        tagline: 'Elige tu camino. Haciendo el transporte más ecológico, inteligente y colaborativo.',
        contactUs: 'Contáctanos',
        address: '1234 Calle HITCHGO, Ciudad, País',
        phone: '(123) 456-7890',
        email: 'contacto@hitchgo.com',
        quickLinks: 'Enlaces Rápidos',
        home: 'Inicio',
        aboutUs: 'Acerca de Nosotros',
        ourServices: 'Nuestros Servicios',
        contact: 'Contacto',
        blog: 'Blog',
        copyright: '© 2025 HITCHGO. Todos los derechos reservados.',
        ecoTagline: 'Ecológico • Colaborativo • Responsable'
      }
    }[lang];
  }
}
