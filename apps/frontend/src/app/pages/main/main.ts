import { Component } from '@angular/core';
import { Header, Preview } from './components';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [Header, Preview, RouterOutlet],
  templateUrl: './main.html',
  styleUrl: './main.scss',
  standalone: true,
})
export class Main {}
