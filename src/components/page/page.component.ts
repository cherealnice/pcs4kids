import { Component, Input, Directive } from '@angular/core'

@Component({
    selector: 'page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.css'],
})

export class Page {
    @Input() title: string;
    books = []
}

export const onBookClick = book => history.pushState({}, '', book.url)

export default Page
