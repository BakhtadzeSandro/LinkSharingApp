import { Component } from '@angular/core';
import { Header, LinksBuilder, Preview, ProfileDetails } from './components';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [Header, Preview, LinksBuilder, ProfileDetails, RouterOutlet],
  templateUrl: './main.html',
  styleUrl: './main.scss',
  standalone: true,
})
export class Main {}
