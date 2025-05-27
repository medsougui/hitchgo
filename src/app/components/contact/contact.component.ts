import { Component, OnInit } from '@angular/core';
import { LangService } from '../../services/lang.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
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
        contactTitle: 'Contact Us',
        contactSubtitle:
          "If you're looking for personalized advice for businesses, or want to join our team of Storers while we get to know each other, request an appointment and we'll get back to you within 12 hours.",
        name: 'Name',
        email: 'Email',
        message: 'How can we help you?',
        submit: 'Submit',
        requiredSymbol: '*',
         joinJourney: 'Join Our Journey',
        joinJourneyDescription: 'Be part of the transportation revolution and help us create a greener future.',
        getStarted: 'Get Started'
      },
      es: {
        contactTitle: 'Contáctanos',
        contactSubtitle:
          "Si estás buscando asesoramiento personalizado para empresas o deseas unirte a nuestro equipo de Storers mientras nos conocemos, solicita una cita y te responderemos en un plazo de 12 horas.",
        name: 'Nombre',
        email: 'Correo electrónico',
        message: '¿Cómo podemos ayudarte?',
        submit: 'Enviar',
        requiredSymbol: '*',
        joinJourney: 'Únete a Nuestra Trayectoria',
        joinJourneyDescription: 'Únete a la revolución del transporte y ayúdanos a construir un futuro más verde.',
        getStarted: 'Comenzar'
      }
    }[lang];
  }
}
