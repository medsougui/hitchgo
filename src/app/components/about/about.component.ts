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
        ourJourney: 'Mission',
        hitchgoDescription: 'At HITCHGO, our mission is to facilitate sustainable and accessible mobility by offering collaborative transportation solutions that allow users to share rides easily, affordably, and in an environmentally friendly way. We are committed to providing a transportation service that meets the needs of our customers, taking them from any point of origin to their desired destination in a convenient and user-friendly manner.',
        visionTitle: 'Vision',
        visionText: 'We aim to lead the way in collaborative transportation by offering unmatched availability and turning every trip into a moment of joy, connection, and shared experience. At HITCHGO, we believe that a journey should be more than just reaching a destination it should be pleasant, enjoyable, and social. Whether you are commuting or exploring, we want every ride to be an opportunity to connect with others and truly enjoy the road.',
        valuestitle:'Values',
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
        experts: 'Marketing and Communication Team',
        expertsPosition: 'Transportation Specialists',
        expertsDescription: 'Behind every message and design, our creative team builds bridges between HITCHGO and its community, inspiring a shift toward smarter, shared mobility',
        innovators: 'Technical Team',
        innovatorsPosition: 'Development Team',
        innovatorsDescription: 'Behind the technology, our developers and SEO experts power a seamless experience—making every search, click, and ride efficient and reliable.',
        joinJourney: 'Join Our Journey',
        joinJourneyDescription: 'Be part of the transportation revolution and help us create a greener future.',
        getStarted: 'Get Started'
      },
      es: {
        tagline: 'ELIGE TU CAMINO',
        aboutUs: 'Acerca de Nosotros',
        ourJourney: 'Misión',
        hitchgoDescription: 'En HITCHGO, nuestra misión es facilitar una movilidad sostenible y accesible mediante soluciones de transporte colaborativo que permitan a los usuarios compartir viajes de manera fácil, económica y respetuosa con el medio ambiente. Estamos comprometidos a ofrecer un servicio de transporte que satisfaga las necesidades de nuestros clientes, llevándolos desde cualquier punto de origen hasta su destino deseado de manera conveniente y amigable.',
        visionTitle: 'Visión',
        visionText: 'Aspiramos a liderar el camino en el transporte colaborativo ofreciendo una disponibilidad inigualable y convirtiendo cada viaje en un momento de alegría, conexión y experiencia compartida. En HITCHGO, creemos que un viaje debe ser más que simplemente llegar a un destino: debe ser agradable, placentero y social. Ya sea que estés viajando al trabajo o explorando nuevos lugares, queremos que cada trayecto sea una oportunidad para conectar con los demás y disfrutar verdaderamente del camino.',
        valuestitle:'Valores',
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
        experts: 'Equipo de Marketing y Comunicación',
        expertsPosition: 'Especialistas en Transporte',
        expertsDescription: 'Detrás de cada mensaje y diseño, nuestro equipo creativo construye puentes entre HITCHGO y su comunidad, inspirando un cambio hacia una movilidad compartida más inteligente.',
        innovators: 'Equipo Técnico',
        innovatorsPosition: 'Equipo de Desarrollo',
        innovatorsDescription: 'Detrás de la tecnología, nuestros desarrolladores y expertos en SEO impulsan una experiencia fluida, haciendo que cada búsqueda, clic y viaje sea eficiente y confiable.',
        joinJourney: 'Únete a Nuestro Viaje',
        joinJourneyDescription: 'Sé parte de la revolución del transporte y ayúdanos a crear un futuro más verde.',
        getStarted: 'Comienza Ahora'
      }
    }[lang];
  }
}
