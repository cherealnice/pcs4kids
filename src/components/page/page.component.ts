import { Component, Input, Directive } from '@angular/core';

@Component({
    selector: 'page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.css'],
})

class Page {
    @Input() title: string;
    books = []
};

export class Book {
    title: string;
    imgSrc: string;
    url: string;
}

const Books = [
    {
        title: 'The Wizard Of Oz',
        imgSrc: 'https://resizing.flixster.com/0ODXHPXBVOp7zWCGziA4qFHu2kA=/206x305/v1.bTsxMTE2ODA4NjtqOzE3NDk5OzEyMDA7ODAwOzEyMDA',
        url: 'https://resizing.flixster.com/0ODXHPXBVOp7zWCGziA4qFHu2kA=/206x305/v1.bTsxMTE2ODA4NjtqOzE3NDk5OzEyMDA7ODAwOzEyMDA',
    }
]

export const onBookClick = book => history.pushState({}, '', book.url);

export default Page;