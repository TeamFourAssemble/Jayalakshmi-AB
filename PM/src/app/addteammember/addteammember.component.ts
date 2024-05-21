import { Component } from '@angular/core';

@Component({
  selector: 'app-addteammember',
  templateUrl: './addteammember.component.html',
  styleUrl: './addteammember.component.css'
})
export class AddteammemberComponent {

  existingProfiles: string[] = [
    'balajijanani921@gmail.com',
    'hari2gmail.com',
    'sowmiyan@gmail.com',
    'mujumil2@gmail.com',
  ];

  rows: any[] = [
    { email: '', role: '', isExisting: false }
  ];

  checkProfile(email: string, index: number): void {
    this.rows[index].isExisting = this.existingProfiles.includes(email);
  }

  addRow(): void {
    this.rows.push({ email: '', role: '', isExisting: false });
  }
}
