// src/app/components/document-detail/document-detail.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Document } from '../../models/document.model';

@Component({
  selector: 'app-document-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.css']
})
export class DocumentDetailComponent {
  @Input() document!: Document;
}
