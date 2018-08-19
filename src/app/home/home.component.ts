import { Component, OnInit, Attribute } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  today: Date = new Date();
  id: string;
  booklist = [
    { 'name': 'My experiments with Truth', 'author': 'M.K.Gandhi ', 'price': '$145' },
    { 'name': 'The Merchant of venice', 'author': 'William shakespeare', 'price': '$543' },
    { 'name': 'A Tale of Two Cities', 'author': 'Charles Dickens ', 'price': '$64' },
    { 'name': 'Origin of species ', 'author': ' charles Darwin ', 'price': '$283' },
    { 'name': 'Time Machine ', 'author': 'H.G. Wells ', 'price': '$12' },
    { 'name': 'Mein Kampf ', 'author': ' Adolf Hitler ', 'price': '$384' },
    { 'name': 'Invisible Man ', 'author': 'H.G. Wells', 'price': '$123' }
  ];

  constructor(private router: Router, public authService: AuthService) {
  }

  ngOnInit() {
    this.id = localStorage.getItem('token');
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
