import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { BlogPost } from '../../models/blog-post.model';
import { LangService } from '../../services/lang.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogPosts: BlogPost[] = [];
  currentLang = 'en';
  labels: any = {};

  constructor(private blogService: BlogService, private langService: LangService) {}

  ngOnInit(): void {
    this.langService.currentLang$.subscribe(lang => {
      this.currentLang = lang;
      this.labels = this.getLabels(lang);

      // Re-fetch posts based on updated language
      this.blogService.getBlogPosts().subscribe(posts => {
        this.blogPosts = posts;
      });
    });
  }

  getLabels(lang: string) {
    return {
      en: {
        blogTitle: 'Our Blog',
        readMore: 'Read More',
        by: 'By'
      },
      es: {
        blogTitle: 'Nuestro Blog',
        readMore: 'Leer más',
        by: 'Por'
      }
    }[lang];
  }
}
