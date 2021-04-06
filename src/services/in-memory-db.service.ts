import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { books } from '../environment/books';


@Injectable()
export class InMemoryDatabaseService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const db = {
      books
    }
    return db;
  }

}