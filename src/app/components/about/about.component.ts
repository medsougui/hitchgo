import { Component, OnInit } from '@angular/core';
import { LangService } from '../../services/lang.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
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
        tagline: 'CHOOSE YOUR WAY',
        aboutUs: 'About Us',
        ourJourney: 'Our Journey',
        hitchgoDescription: 'HITCHGO is a company dedicated to providing sustainable transport solutions. Our mission is to reduce carbon emissions through collaborative transportation methods.',
        visionTitle: 'Our Vision',
        visionText: 'We believe in a future where transportation doesn\'t harm the planet, where people work together to make the most out of every trip they take, and where businesses thrive while reducing their carbon footprints.',
        sustainability: 'Sustainability',
        sustainabilityDescription: 'We are committed to innovative solutions that minimize environmental impact and preserve our planet for future generations.',
        community: 'Community',
        communityDescription: 'By bringing people together, we create a network of travelers who share resources and reduce waste.',
        innovation: 'Innovation',
        innovationDescription: 'Our technology constantly evolves to provide smarter, more efficient transportation options.',
        theTeam: 'The Team',
        teamDescription: 'Our founder created HITCHGO with a clear vision to lead the charge in sustainable transport.',
        founder: 'Founder',
        founderPosition: 'CEO & Visionary',
        founderDescription: 'With a background in sustainable transportation, our founder brought HITCHGO to life with a mission to transform how we travel.',
        experts: 'Our Experts',
        expertsPosition: 'Transportation Specialists',
        expertsDescription: 'Our team consists of passionate professionals dedicated to creating efficient and eco-friendly travel solutions.',
        innovators: 'Tech Innovators',
        innovatorsPosition: 'Development Team',
        innovatorsDescription: 'Behind our platform are brilliant minds working to make sustainable transportation accessible to everyone.',
        joinJourney: 'Join Our Journey',
        joinJourneyDescription: 'Be part of the transportation revolution and help us create a greener future.',
        getStarted: 'Get Started'
      },
      es: {
        tagline: 'ELIGE TU CAMINO',
        aboutUs: 'Acerca de Nosotros',
        ourJourney: 'Nuestro Viaje',
        hitchgoDescription: 'HITCHGO es una empresa dedicada a proporcionar soluciones de transporte sostenible. Nuestra misión es reducir las emisiones de carbono mediante métodos de transporte colaborativos.',
        visionTitle: 'Nuestra Visión',
        visionText: 'Creemos en un futuro en el que el transporte no dañe el planeta, donde las personas trabajen juntas para aprovechar al máximo cada viaje que hagan, y donde las empresas prosperen mientras reducen sus huellas de carbono.',
        sustainability: 'Sostenibilidad',
        sustainabilityDescription: 'Estamos comprometidos con soluciones innovadoras que minimicen el impacto ambiental y preserven nuestro planeta para las futuras generaciones.',
        community: 'Comunidad',
        communityDescription: 'Al reunir a las personas, creamos una red de viajeros que comparten recursos y reducen desperdicios.',
        innovation: 'Innovación',
        innovationDescription: 'Nuestra tecnología evoluciona constantemente para proporcionar opciones de transporte más inteligentes y eficientes.',
        theTeam: 'El Equipo',
        teamDescription: 'Nuestro fundador creó HITCHGO con una visión clara para liderar la carga en el transporte sostenible.',
        founder: 'Fundador',
        founderPosition: 'CEO & Visionario',
        founderDescription: 'Con una formación en transporte sostenible, nuestro fundador trajo a la vida HITCHGO con una misión de transformar la forma en que viajamos.',
        experts: 'Nuestros Expertos',
        expertsPosition: 'Especialistas en Transporte',
        expertsDescription: 'Nuestro equipo está compuesto por profesionales apasionados dedicados a crear soluciones de transporte eficientes y ecológicas.',
        innovators: 'Innovadores Tecnológicos',
        innovatorsPosition: 'Equipo de Desarrollo',
        innovatorsDescription: 'Detrás de nuestra plataforma están mentes brillantes que trabajan para hacer el transporte sostenible accesible para todos.',
        joinJourney: 'Únete a Nuestro Viaje',
        joinJourneyDescription: 'Sé parte de la revolución del transporte y ayúdanos a crear un futuro más verde.',
        getStarted: 'Comienza Ahora'
      }
    }[lang];
  }
}
