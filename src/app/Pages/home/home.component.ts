import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @HostListener('window:popstate', ['$event'])
onpopstate() {
  location.reload()
}
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(['']);
  }

}
