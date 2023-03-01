import { Injectable } from '@angular/core';
import DATA from '../assets/gaffiot.json';

export interface Entry {
  id: number;
  latin_raw: string;
  latin: string;
  french: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  data: Entry[] = DATA as any;

  constructor() {}
}
