import { Component, Input, Directive } from '@angular/core';

@Component({
    selector: 'book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css'],
})

class Book {
    @Input() book: object;
};

export default Book;