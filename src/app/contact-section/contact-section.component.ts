import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent {
  contactForm: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  async sendMail() {
    if (this.contactForm.valid) {
      this.isSubmitted = true;
      this.contactForm.disable();

      
        const formData = new FormData();

        const nameControl = this.contactForm.get('name');
        const emailControl = this.contactForm.get('email');
        const messageControl = this.contactForm.get('message');

        if (nameControl && emailControl && messageControl) {
          formData.append('name', nameControl.value);
          formData.append('email', emailControl.value);
          formData.append('message', messageControl.value);

          const response = await fetch('https://kaser-mahmood.de/./portfolio/send_mail/send_mail.php', {
            method: 'POST',
            body: formData
          });

          if (!response.ok) {
            throw new Error('Netzwerkantwort war nicht ok.');
          }

          const responseData = await response.text();
          console.log(responseData);
        } 
      
  }

  }
}
