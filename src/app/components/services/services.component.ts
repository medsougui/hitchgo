import { Component, OnInit } from '@angular/core';
import { LangService } from '../../services/lang.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  activeTab: string = 'search';
  currentLang = 'en';
  labels: any = {};

  searchForm = {
    departure: '',
    arrival: '',
    date: '',
    passengers: 1
  };

  createForm = {
    departure: '',
    arrival: '',
    date: '',
    time: '',
    seats: 3,
    price: null,
    notes: ''
  };

  constructor(private langService: LangService) {}

  ngOnInit(): void {
    this.langService.currentLang$.subscribe(lang => {
      this.currentLang = lang;
      this.labels = this.getLabels(lang);
    });
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  searchRides(): void {
    console.log('Searching rides:', this.searchForm);
  }

  publishRide(): void {
    console.log('Publishing ride:', this.createForm);
  }

  getLabels(lang: string) {
    return {
      en: {
        findRide: 'Find a Ride',
        offerRide: 'Offer a Ride',
        findAvailableRides: 'Find Available Rides',
        offerYourRide: 'Offer Your Own Ride',
        departure: 'Departure',
        destination: 'Destination',
        travelDate: 'Travel Date',
        passengers: 'Number of Passengers',
        search: 'Search Rides',
        time: 'Departure Time',
        seats: 'Available Seats',
        price: 'Price per Seat',
        notes: 'Additional Notes',
        publish: 'Publish Ride',
        currency: 'TND'
      },
      es: {
        findRide: 'Buscar un viaje',
        offerRide: 'Ofrecer un viaje',
        findAvailableRides: 'Buscar viajes disponibles',
        offerYourRide: 'Ofrece tu propio viaje',
        departure: 'Salida',
        destination: 'Destino',
        travelDate: 'Fecha del viaje',
        passengers: 'Número de pasajeros',
        search: 'Buscar viajes',
        time: 'Hora de salida',
        seats: 'Asientos disponibles',
        price: 'Precio por asiento',
        notes: 'Notas adicionales',
        publish: 'Publicar viaje',
        currency: 'TND'
      }
    }[lang];
  }
}
