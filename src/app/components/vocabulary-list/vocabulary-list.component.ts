import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Vocabulary } from 'src/app/shared/class/vocabulary';
import { VocabModalService } from 'src/app/shared/service/vocab-modal.service';

@Component({
  selector: 'app-vocabulary-list',
  templateUrl: './vocabulary-list.component.html',
  styleUrls: ['./vocabulary-list.component.css']
})
export class VocabularyListComponent implements OnInit, AfterViewInit {

  @ViewChild('filterSearch') private filterSearch: any;

  public baseArray: Vocabulary[] = [
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

  constructor(private modal: VocabModalService) { }

  ngOnInit(): void {
    this.displayedArray = this.baseArray;
  }

  ngAfterViewInit(): void {
    this.filterByVocavularyName();
    this.displayedArray = this.baseArray;
  }

  private filterByVocavularyName(): void {
    let value: string;
    this.filterSearch = this.filterSearch?.nativeElement;

    this.filterSearch?.addEventListener('keyup', () => {
      value = this.filterSearch.value;
      if (value.length <= 0) {
        this.displayedArray = this.baseArray;
      } else {
        this.displayedArray = this.baseArray.filter(x => x.name.toLowerCase().includes(value.toLocaleLowerCase()));
      }
    })

  }

  public openModalOnVocClic(voc: Vocabulary): void {
    this.modal.open();
    console.log(voc);
  }

  public modalStatus() {
    return this.modal.getStatus();
  }

}
