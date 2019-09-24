import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  loginToken: string;
  userName = 'Ali';
  appURL =  'http://localhost:3000/';
  constructor() { }
}
