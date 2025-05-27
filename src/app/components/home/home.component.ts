import { Component, OnInit } from '@angular/core';
import { LangService } from '../../services/lang.service';
import { BlogService } from '../../services/blog.service';
import { BlogPost } from '../../models/blog-post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentLang = 'en';
  labels: any = {};
  blogPosts: BlogPost[] = [];

  constructor(
    private langService: LangService,
    private blogService: BlogService
  ) {}

  ngOnInit() {
    this.langService.currentLang$.subscribe(lang => {
      this.currentLang = lang;
      this.labels = this.getLabels(lang);
      
      // Fetch blog posts
      this.blogService.getBlogPosts().subscribe(posts => {
        this.blogPosts = posts;
      });
    });
  }

  getLabels(lang: string) {
    return {
      en: {
        tagline: 'Choose your way and join us on a journey where every path we take together brings us closer to asustainable tomorrow',
        cta: 'Start Your Journey',
        announcementTitle: 'Introducing: HITCHGO Business ',
        announcementText: 'HITCHGO is a collaborative carpooling platform active throughout Spain. It connects drivers and passengers to share rides, reducing costs, CO₂ emissions, and the use of unnecessary vehicles.',
        exploreBtn: 'start your Journey',
        ecoFriendlyTitle: 'Eco-Friendly',
        ecoFriendlyText: 'We reduce CO2 emissions through smart ride-sharing strategies, making every mile count for our planet\'s future.',
        collaborativeTitle: 'Collaborative',
        collaborativeText: 'Share rides, connect with others, and help make a better world through community-driven transportation solutions.',
        responsibleTitle: 'Responsible',
        responsibleText: 'Built for people and planet. Travel with purpose, not pollution. Make every journey count toward a sustainable future.',
        ctaTitle: 'Need Help to travel and discover Spain ?',
        contactBtn: 'We’re Here for You',
        latestBlogTitle: 'Latest from Our Blog',
        by: 'By',
        readMore: 'Read More',
        viewAllPosts: 'View All Posts'
      },
      es: {
        tagline: 'Elige tu camino y acompáñanos en un viaje donde cada paso que damos juntos nos acerca a un mañana sostenible.',
        cta: 'Comienza tu viaje',
        announcementTitle: 'Presentamos: HITCHGO para Empresas',
        announcementText: 'HITCHGO es una plataforma de coche compartido colaborativa activa en toda España.Conecta a conductores y pasajeros para compartir trayectos, reduciendo los costes,las emisiones de CO₂ y el uso innecesario de vehículos',
        exploreBtn: 'Empieza tu viaje',
        ecoFriendlyTitle: 'Ecológico',
        ecoFriendlyText: 'Reducimos las emisiones de CO2 a través de estrategias inteligentes de compartición de viajes, haciendo que cada milla cuente para el futuro de nuestro planeta.',
        collaborativeTitle: 'Colaborativo',
        collaborativeText: 'Comparte viajes, conéctate con otros y ayuda a crear un mundo mejor a través de soluciones de transporte impulsadas por la comunidad.',
        responsibleTitle: 'Responsable',
        responsibleText: 'Creado para las personas y el planeta. Viaja con propósito, no con contaminación. Haz que cada viaje cuente hacia un futuro sostenible.',
        ctaTitle: '¿Necesitas ayuda para viajar y descubrir España?',
        contactBtn: 'Estamos aquí para ayudarte',
        latestBlogTitle: 'Lo Último de Nuestro Blog',
        by: 'Por',
        readMore: 'Leer más',
        viewAllPosts: 'Ver Todas las Publicaciones'
      }
    }[lang];
  }
}

