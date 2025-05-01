import { Component, OnInit } from '@angular/core';
import { LangService } from '../../services/lang.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
        tagline: 'Choose your way. Join our mission to make transportation greener, smarter, and more collaborative.',
        cta: 'Start Your Journey',
        announcementTitle: 'Introducing: HITCHGO Business Rides',
        announcementText: 'Our new service tailored for businesses! Offer your employees eco-friendly, collaborative rides to work. Let\'s reduce traffic and emissions while saving costs for your company.',
        exploreBtn: 'Explore Services',
        ecoFriendlyTitle: 'Eco-Friendly',
        ecoFriendlyText: 'We reduce CO2 emissions through smart ride-sharing strategies, making every mile count for our planet\'s future.',
        collaborativeTitle: 'Collaborative',
        collaborativeText: 'Share rides, connect with others, and help make a better world through community-driven transportation solutions.',
        responsibleTitle: 'Responsible',
        responsibleText: 'Built for people and planet. Travel with purpose, not pollution. Make every journey count toward a sustainable future.',
        ctaTitle: 'Ready to Choose Your Way?',
        contactBtn: 'Contact Us Today'
      },
      es: {
        tagline: 'Elige tu camino. Únete a nuestra misión de hacer el transporte más ecológico, inteligente y colaborativo.',
        cta: 'Comienza tu viaje',
        announcementTitle: 'Presentamos: HITCHGO Rides para Empresas',
        announcementText: '¡Nuestro nuevo servicio diseñado para empresas! Ofrezca a sus empleados viajes colaborativos y ecológicos al trabajo. Reduzcamos el tráfico y las emisiones mientras ahorramos costos para su empresa.',
        exploreBtn: 'Explorar Servicios',
        ecoFriendlyTitle: 'Ecológico',
        ecoFriendlyText: 'Reducimos las emisiones de CO2 a través de estrategias inteligentes de compartición de viajes, haciendo que cada milla cuente para el futuro de nuestro planeta.',
        collaborativeTitle: 'Colaborativo',
        collaborativeText: 'Comparte viajes, conéctate con otros y ayuda a crear un mundo mejor a través de soluciones de transporte impulsadas por la comunidad.',
        responsibleTitle: 'Responsable',
        responsibleText: 'Creado para las personas y el planeta. Viaja con propósito, no con contaminación. Haz que cada viaje cuente hacia un futuro sostenible.',
        ctaTitle: '¿Listo para elegir tu camino?',
        contactBtn: 'Contáctanos hoy'
      }
    }[lang];
  }
}
