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
  isLoading = false;
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }
  resetSubmit() {
    this.isSubmitted = false;
    this.contactForm.reset();
}

  async sendMail() {
    if (this.contactForm.valid) {
      this.isLoading = true; 

      try {
        const formData = new FormData();
        formData.append('name', this.contactForm.get('name')?.value);
        formData.append('email', this.contactForm.get('email')?.value);
        formData.append('message', this.contactForm.get('message')?.value);

        const response = await fetch('https://formspree.io/f/xdorvqnj', {
          method: 'POST',
          headers: {
            'Accept': 'application/json'
          },
          body: formData
        });

        const responseData = await response.json();
        console.log(responseData);
        // Hier können Sie Logik hinzufügen, um dem Benutzer eine Erfolgsmeldung anzuzeigen
      } catch (error) {
        console.error('Fehler beim Senden des Formulars:', error);
        // Hier können Sie Logik hinzufügen, um dem Benutzer eine Fehlermeldung anzuzeigen
      } finally {
        setTimeout(() => {
          this.isLoading = false;
          this.isSubmitted = true; // Beenden der Ladeanimation nach 1 Sekunde
        }, 1500); 
      }
    }
  }
}
