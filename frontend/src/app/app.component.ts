import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DataComponent } from './data/data.component';

@Component({
  standalone: true,
  imports: [RouterModule, DataComponent],
  selector: 'finup-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
