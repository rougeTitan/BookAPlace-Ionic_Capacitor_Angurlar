import { Injectable } from "@angular/core";
import { Place } from "./place.model";

@Injectable({
    providedIn:'root'
})
export class PlacesService {
    private _places:Place[]=[
        new Place(
        'p1',
        'manhatten mantion',
        'In the heart of new york city',
        'url',
        149.99
        ),
        new Place(
        'p2',
        'manhatten mantion',
        'In the heart of new york city',
        'url',
        139.99
        ),
        new Place(
        'p3',
        'manhatten mantion',
        'In the heart of new york city',
        'url',
        49.99
        )
    ];

    get places() {
        return [...this._places];
    }

    constructor(){}

    getPlace(id:string){
        return {...this._places.find(p=>p.id===id)};
    }
}