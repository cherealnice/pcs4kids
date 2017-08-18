import { Component, Input, Directive } from '@angular/core'

class AudioBook {
    title: string;
    imgSrc: string;
    url: string;
}

@Component({
    selector: 'book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css'],
})

export class Book {
    @Input() book: AudioBook
}
