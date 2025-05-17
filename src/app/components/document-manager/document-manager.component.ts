// src/app/components/document-manager/document-manager.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Document } from '../../models/document.model';
import { DocumentService } from '../../services/document.service';
import { DocumentListComponent } from '../document-list/document-list.component';
import { DocumentDetailComponent } from '../document-detail/document-detail.component';

@Component({
  selector: 'app-document-manager',
  standalone: true,
  imports: [CommonModule, DocumentListComponent, DocumentDetailComponent],
  templateUrl: './document-manager.component.html',
  styleUrls: ['./document-manager.component.css']
})
export class DocumentManagerComponent implements OnInit {
  documents: Document[] = [];
  selectedDocument: Document | null = null;

  constructor(private docService: DocumentService) {}

  ngOnInit(): void {
    this.documents = this.docService.getDocuments();
  }

  onDocumentSelected(doc: Document): void {
    this.selectedDocument = doc;
  }
}
