import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
    selector: 'app-sales-person-list',
    templateUrl: './sales-person-list-bootstrap.component.html',
    styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {


    salesPersonList: SalesPerson[] = [
        new SalesPerson("Adham", "Eldda", "adamel2@ac.sce.ac.il", 50000),
        new SalesPerson("May", "Merfi", "may@ac.sce.ac.il", 40000),
        new SalesPerson("Moshe", "Moshee", "moshe@ac.sce.ac.il", 90000),
        new SalesPerson("Max", "Avi", "max@ac.sce.ac.il", 60000)

    ];

    constructor() { }

    ngOnInit(): void {
    }

}
