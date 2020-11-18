import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VocabularyRoutingModule } from './vocabulary-routing.module';
import { VocabularyComponent } from './vocabulary.component';
import { VocabularyListComponent } from '../../components/vocabulary-list/vocabulary-list.component';


@NgModule({
  declarations: [
    VocabularyComponent,
    VocabularyListComponent
  ],
  imports: [
    CommonModule,
    VocabularyRoutingModule,
  ]
})
export class VocabularyModule { }
