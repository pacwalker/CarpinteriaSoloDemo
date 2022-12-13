import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_nvlraqt', 'template_p4ljijq', e.target as HTMLFormElement, 'Jke9fthaiu8J4cGr5')
      .then((result: EmailJSResponseStatus) => {
        alert('Mensaje Enviado'),
        (document.getElementById('contactForm') as HTMLFormElement).reset();
      }, (error) => {
        alert('No se pudo mandar el mensaje');
      });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
