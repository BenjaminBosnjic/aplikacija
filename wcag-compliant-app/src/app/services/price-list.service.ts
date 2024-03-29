import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PriceListService {

    constructor(
        private http: HttpClient
    ) { }

    getCards(): any {
        return this.http.get('http://localhost:3000/cards');
    }

    getCard(id: number): any {
        return this.http.get('http://localhost:3000/cards/' + id);
    }
    
    getPrices(serviceId: number): any {
        return this.http.get('http://localhost:3000/services?serviceId='+ serviceId)
    }
}