// src/app/services/lang.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LangService {
  private currentLangSubject = new BehaviorSubject<string>('en');
  currentLang$ = this.currentLangSubject.asObservable();

  setLang(lang: string) {
    this.currentLangSubject.next(lang);
  }

  getCurrentLang(): string {
    return this.currentLangSubject.value;
  }
}
