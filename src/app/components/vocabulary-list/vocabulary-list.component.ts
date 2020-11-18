import { Component, OnInit } from '@angular/core';
import { Vocabulary } from 'src/app/shared/class/vocabulary';

@Component({
  selector: 'app-vocabulary-list',
  templateUrl: './vocabulary-list.component.html',
  styleUrls: ['./vocabulary-list.component.css']
})
export class VocabularyListComponent implements OnInit {

  testarray: Vocabulary[] = [
    {
      id: 1,
      name: "Test",
      definition: "Je suis la description du test numero 1",
      chapterId: 0,
      booksId: 0
    },
    {
      id: 2,
      name: "Numero",
      definition: "Je suis la description du test numero 2",
      chapterId: 0,
      booksId: 0
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
