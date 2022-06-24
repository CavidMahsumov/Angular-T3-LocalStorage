import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  model = new Model();
  firstname = '';
  lastname = '';
  birthday;
  hdate;
  constructor() {}

  getItems() {
    return this.model.items;
  }
  Add(name: any, surname: any, age: any, date: any) {
    this.model.items.push(
      new User(
        this.model.items.length,
        name.value,
        surname.value,
        age.value,
        date.value
      )
    );
    this.Set();
  }
  Set() {
    localStorage.setItem('items', JSON.stringify(this.model.items));
  }
  SpecialClass() {
    return {
      disabled:
        this.firstname == '' ||
        this.lastname == '' ||
        this.birthday == '' ||
        this.hdate == '',
      'bg-secondary':
        this.firstname == '' ||
        this.lastname == '' ||
        this.birthday == '' ||
        this.hdate == '',
    };
  }
  BorderColor(name) {
    return {
      'bd-green': name.value != '',
      'bd-red': name.value == '',
    };
  }
  ngOnInit() {
    this.model.items = JSON.parse(localStorage.getItem('items'));
  }
}
