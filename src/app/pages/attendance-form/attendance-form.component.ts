import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-attendance-form',
  templateUrl: './attendance-form.component.html',
  styleUrls: ['./attendance-form.component.css']
})
export class AttendanceFormComponent {
  childName: string='';
  attendanceStatus: string='';

  constructor(private http: HttpClient) {}

  registerAttendance() {
    const message = `Su hijo ${this.childName} ha ${this.attendanceStatus === 'entrada' ? 'entrado' : 'salido'} de la escuela.`;

    this.http.post<any>('http://localhost:3000/send-text-message', { message }).subscribe(
      () => {
        console.log('Mensaje enviado correctamente.');
      },
      (error) => {
        console.error('Error al enviar el mensaje:', error);
      }
    );
  }
}
