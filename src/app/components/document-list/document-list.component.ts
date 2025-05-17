// src/app/components/document-list/document-list.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Document } from '../../models/document.model';

@Component({
  selector: 'app-document-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent {
  @Input() documents: Document[] = [];
  @Output() documentSelected = new EventEmitter<Document>();

  selectDocument(doc: Document) {
    this.documentSelected.emit(doc);
  }
}
