import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MaterialModule } from './Material/material/material.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MaterialModule,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HotelReservationApp';
}
