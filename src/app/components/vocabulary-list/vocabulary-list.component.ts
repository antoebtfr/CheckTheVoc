import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Vocabulary } from 'src/app/shared/class/vocabulary';

@Component({
  selector: 'app-vocabulary-list',
  templateUrl: './vocabulary-list.component.html',
  styleUrls: ['./vocabulary-list.component.css']
})
export class VocabularyListComponent implements OnInit, AfterViewInit {

  public testarray: Vocabulary[] = [
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

  @ViewChild('filterSearch') private filterSearch: ElementRef |undefined;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{

    console.log(this.filterSearch)
    this.filterByVocavularyName();
  }

  private filterByVocavularyName(): void{
      this.filterSearch = this.filterSearch?.nativeElement;
      this.filterSearch?.addEventListener('keypress', (e: any) => {
        console.log(this.filterSearch.value);
      })
  }

}
