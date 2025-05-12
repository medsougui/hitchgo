import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BlogPost } from '../models/blog-post.model';
import { LangService } from '../services/lang.service';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private postsen: BlogPost[] = [
    {
      id: '1',
      title: 'Importance of Collaborative Transport',
      content: 'Collaborative transport is the future of sustainable travel...',
      imageUrl: 'assets/blog1.jpg',
      publishDate: new Date(),
      author: 'John Doe',
    },
    {
      id: '2',
      title: 'How HITCHGO Contributes to Reducing CO2 Emissions',
      content: 'At HITCHGO, we’re committed to reducing CO2 emissions...',
      imageUrl: 'assets/blog2.jpg',
      publishDate: new Date(),
      author: 'Jane Smith',
    },
    {
      id: '3',
      title: 'Top 5 Benefits of Carpooling',
      content: 'Carpooling saves money, reduces traffic, and helps the environment...',
      imageUrl: 'assets/blog3.jpg',
      publishDate: new Date(),
      author: 'Alex Johnson',
    },
    {
      id: '4',
      title: 'A Day in the Life of a HITCHGO Driver',
      content: 'Join us as we follow a HITCHGO driver through a typical day...',
      imageUrl: 'assets/blog4.jpg',
      publishDate: new Date(),
      author: 'Sara Lee',
    },
    {
      id: '5',
      title: 'How to Stay Safe While Sharing Rides',
      content: 'Safety is a top priority when it comes to shared transport...',
      imageUrl: 'assets/blog5.jpg',
      publishDate: new Date(),
      author: 'Chris Evans',
    },
    {
      id: '6',
      title: 'Why Shared Mobility Is the Future',
      content: 'Shared mobility offers efficient and eco-friendly travel alternatives...',
      imageUrl: 'assets/blog6.png',
      publishDate: new Date(),
      author: 'Emily Clark',
    },
    {
      id: '7',
      title: 'Student Stories: Saving Money with HITCHGO',
      content: 'Hear how students are cutting down travel costs with HITCHGO...',
      imageUrl: 'assets/blog7.jpg',
      publishDate: new Date(),
      author: 'Michael Lee',
    },
    {
      id: '8',
      title: 'The Role of Technology in Ride-Sharing',
      content: 'Technology plays a vital role in making ride-sharing seamless...',
      imageUrl: 'assets/blog8.jpg',
      publishDate: new Date(),
      author: 'Olivia Brown',
    },
    {
      id: '9',
      title: 'Eco-Friendly Travel Tips for the Everyday Commuter',
      content: 'Small changes can make a big impact on your carbon footprint...',
      imageUrl: 'assets/blog9.jpg',
      publishDate: new Date(),
      author: 'David Wilson',
    },
    {
      id: '10',
      title: 'How HITCHGO Supports Local Communities',
      content: 'We’re not just a ride-sharing platform—we’re building community...',
      imageUrl: 'assets/blog10.jpg',
      publishDate: new Date(),
      author: 'Laura Green',
    }
  ];
  private postses: BlogPost[] = [
    {
      id: '1',
      title: 'Importancia del Transporte Colaborativo',
      content: 'El transporte colaborativo es el futuro de los viajes sostenibles...',
      imageUrl: 'assets/blog1.jpg',
      publishDate: new Date(),
      author: 'John Doe',
    },
    {
      id: '2',
      title: 'Cómo HITCHGO Contribuye a Reducir las Emisiones de CO2',
      content: 'En HITCHGO, estamos comprometidos con la reducción de emisiones de CO2...',
      imageUrl: 'assets/blog2.jpg',
      publishDate: new Date(),
      author: 'Jane Smith',
    },
    {
      id: '3',
      title: '5 Beneficios Principales del Carpooling',
      content: 'Compartir coche ahorra dinero, reduce el tráfico y ayuda al medio ambiente...',
      imageUrl: 'assets/blog3.jpg',
      publishDate: new Date(),
      author: 'Alex Johnson',
    },
    {
      id: '4',
      title: 'Un Día en la Vida de un Conductor HITCHGO',
      content: 'Acompáñanos mientras seguimos a un conductor de HITCHGO en un día típico...',
      imageUrl: 'assets/blog4.jpg',
      publishDate: new Date(),
      author: 'Sara Lee',
    },
    {
      id: '5',
      title: 'Cómo Mantenerse Seguro al Compartir Viajes',
      content: 'La seguridad es una prioridad cuando se trata del transporte compartido...',
      imageUrl: 'assets/blog5.jpg',
      publishDate: new Date(),
      author: 'Chris Evans',
    },
    {
      id: '6',
      title: 'Por Qué la Movilidad Compartida es el Futuro ',
      content: 'La movilidad compartida ofrece alternativas de viaje eficientes y ecológicas...',
      imageUrl: 'assets/blog6.png',
      publishDate: new Date(),
      author: 'Emily Clark',
    },
    {
      id: '7',
      title: 'Historias de Estudiantes: Ahorrando Dinero con HITCHGO',
      content: 'Descubre cómo los estudiantes están reduciendo los costos de viaje con HITCHGO...',
      imageUrl: 'assets/blog7.jpg',
      publishDate: new Date(),
      author: 'Michael Lee',
    },
    {
      id: '8',
      title: 'El Papel de la Tecnología en el Ride-Sharing',
      content: 'La tecnología juega un papel clave en hacer que el ride-sharing sea fluido...',
      imageUrl: 'assets/blog8.jpg',
      publishDate: new Date(),
      author: 'Olivia Brown',
    },
    {
      id: '9',
      title: 'Consejos de Viaje Ecológicos para el Commuter Diario',
      content: 'Pequeños cambios pueden tener un gran impacto en tu huella de carbono...',
      imageUrl: 'assets/blog9.jpg',
      publishDate: new Date(),
      author: 'David Wilson',
    },
    {
      id: '10',
      title: 'Cómo HITCHGO Apoya a las Comunidades Locales',
      content: 'No somos solo una plataforma de ride-sharing, estamos construyendo comunidad...',
      imageUrl: 'assets/blog10.jpg',
      publishDate: new Date(),
      author: 'Laura Green',
    }
  ];
  
  constructor(private langService: LangService) {}

  getBlogPosts(): Observable<BlogPost[]> {
    const lang = this.langService.getCurrentLang(); // Assuming 'en' or 'es'
    return of(lang === 'es' ? this.postses : this.postsen);
  }

  getBlogPostById(id: string): Observable<BlogPost | undefined> {
    const lang = this.langService.getCurrentLang();
    const posts = lang === 'es' ? this.postses : this.postsen;
    return of(posts.find(post => post.id === id));
  }
}
