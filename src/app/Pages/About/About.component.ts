import { animation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-About',
  templateUrl: './About.component.html',
  styleUrls: ['./About.component.css']
})
export class AboutComponent implements OnInit {
  constructor(private router: Router) {

  }

  ngOnInit() {
    var element = document.getElementById("custom-effect");
    console.log(element);
    if(element != null){
     // element.classList.remove("animate-box");
      element.classList.add("animate-box animate-box fadeInUp animated-fast");
    }

  }




}
