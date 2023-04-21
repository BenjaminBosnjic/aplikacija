import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
  export class SearchService {
  
    constructor() { }

    @Output() keywordEmit = new EventEmitter<string>();

    searched(msg: string) {
        this.keywordEmit.emit(msg);
    }
}