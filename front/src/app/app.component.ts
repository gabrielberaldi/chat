import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fontAwesomeIcons } from './shared/font-awesome-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'front';

  private readonly _faIconLibrary: FaIconLibrary = inject(FaIconLibrary);

  ngOnInit(): void {
    this._initFontAwesomeIcons()
  }

  private _initFontAwesomeIcons(): void {
    this._faIconLibrary.addIcons(...fontAwesomeIcons);
  }
}
