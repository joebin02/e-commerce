import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  standalone: false,
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrl: './sales-person-list.component.css'
})

export class SalesPersonListComponent implements OnInit {

  salesPersonList: SalesPerson[]= [
    new SalesPerson("Joebin","Fernando","joe@gmail",500),
    new SalesPerson("Janani","Kamraj","janani@gmail",200),
    new SalesPerson("Nisha","Kamraj","nisha@gmail",400)
  ];


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
