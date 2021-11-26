import { Injectable } from '@angular/core';
interface Person {
  id: number;
  name: string;
  d: string;
  status: boolean;
}

const PERSONS: Person[] = [
  {
    id: 1,
    name: 'Shahbaz',
    d: '2021-08-30' ,
    status: true,
  },
  {
    id: 2,
    name: 'Usama',
    d: '2021-08-30',
    status: true,
  },
  {
    id: 3,
    name: 'Hanan',
    d: '2021-08-30',
    status: false,
  },
  {
    id: 4,
    name: 'Abubakar',
    d: '2021-08-30',
    status: true,
  },
  {
    id: 5,
    name: 'Hamza',
    d: '2021-08-30',
    status: false,
  },
];
interface Login {
  email: string;
  password: string;
}

const LOGIN: Login[] = [
  {
    email: 'test@it.com',
    password: '12345678',
  },
];

@Injectable({
  providedIn: 'root',
})
export class DataService {
  persons = PERSONS;
  logins = LOGIN;
  constructor() {}
}
