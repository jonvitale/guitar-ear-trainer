import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { containsElement } from '@angular/animations/browser/src/render/shared';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
