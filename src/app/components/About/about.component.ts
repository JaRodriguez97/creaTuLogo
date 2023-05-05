import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  saberMas() {
    Swal.fire({
      icon: 'info',
      title: 'visita nuestras redes sociales',
      html: `
      <a
      class="btn"
      href="http://facebook.com/"
      target="_blank"
      rel="noopener noreferrer">
      Facebook
      </a>
      <a 
      class="btn"
      href="http://Instagram.com/"
      target="_blank"
      rel="noopener noreferrer">
      Instagram
      </a>`,
    });
  }
}
