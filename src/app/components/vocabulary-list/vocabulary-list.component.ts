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

  public displayedArray: Vocabulary[] = [];

  @ViewChild('filterSearch') private filterSearch: ElementRef | undefined;

  constructor() { }

  ngOnInit(): void {
    this.displayedArray = this.testarray;
  }

  ngAfterViewInit(): void {

    console.log(this.filterSearch)
    this.filterByVocavularyName();
  }

  private filterByVocavularyName(): void {
    let value: string;
    this.filterSearch = this.filterSearch?.nativeElement;

    this.filterSearch?.addEventListener('keyup', (e: any) => {
      value = this.filterSearch.value;
      if (value.length === 0) {
        this.displayedArray = this.testarray;
      } else {
        this.displayedArray = this.testarray.filter(x => x.name === value);
      }
      console.log(value);
    })
  }

}
