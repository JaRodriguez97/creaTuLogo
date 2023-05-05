import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '@services/Contact/contact.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(
    private contactService: ContactService,
    private router: Router,
    private readonly formBuilder: FormBuilder,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.contactForm = this.initForm();
  }

  async sendContactMail(contactForm: FormGroup) {
    this.spinner.show().then(() => {
      if (contactForm.invalid)
        Swal.fire({
          icon: 'warning',
          html: '<span>Por favor diligencie los campos obligatorios para poder enviar el mensaje</span>',
          scrollbarPadding: false,
        });
      else
        this.contactService.sendMesage(contactForm.value).subscribe(
          (res) => console.log(res),
          (err) =>
            this.spinner
              .hide()
              .then(() => console.error(err))
              .then(() =>
                Swal.fire({
                  icon: 'error',
                  html: '<span>Ha ocurrido un error al enviar el correo</span>',
                  confirmButtonText: 'Intentar por WhatsApp',
                  confirmButtonColor: 'green',
                  showDenyButton: true,
                  denyButtonText: 'Usar app email',
                  denyButtonColor: 'black',
                }).then((response) => {
                  if (response.isConfirmed) {
                    console.log(
                      '🚀 ~ file: contactanos.component.ts:55 ~ ContactanosComponent ~ sendContactMail ~ response.isConfirmed',
                      response.isConfirmed
                    );
                    this.router.navigateByUrl('https://wa.me/573185051107');
                  }
                  if (response.isDenied)
                    this.router.navigate([
                      `http://mailto:centralnacionaldegruasynineras@gmail.com`,
                    ]);
                })
              ),
          () =>
            this.spinner.hide().then(() =>
              Swal.fire({
                icon: 'success',
                html: '<span>Su mensaje ha sido enviado satisfactoriamente, prontamente uno de nuestros operadores le contactará</span>',
              })
            )
        );
    });
  }

  initForm() {
    return this.formBuilder.group({
      nombreCompleto: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.minLength(5)]],
      celular: ['', [Validators.required, Validators.minLength(7)]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]],
    });
  }
}
