import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent {
  settingsForm: FormGroup;
  profilePicUrl: string | ArrayBuffer | null = '';
settingForm: any;

  constructor(private fb: FormBuilder) {
    this.settingsForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      darkMode: [false],
      language: ['en'],
      notifications: [true],
      password: [''],
      confirmPassword: [''],
      twoFactorAuth: [false],
    });
  }

  onSubmit() {
    if (this.settingsForm.valid) {
      console.log('Settings updated:', this.settingsForm.value);
      alert('Settings saved successfully!');
    }
  }

  toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.profilePicUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
