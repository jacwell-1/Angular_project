import { Injectable } from '@angular/core';
import { Document } from '../models/document.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private documents: Document[] = [
    {
      id: 1,
      name: 'Math Notes',
      type: 'pdf',
      category: 'School',
      dateAdded: new Date('2024-05-01'),
      tags: ['math', 'algebra'],
      url: 'https://example.com/math-notes.pdf',
      description: 'Algebra revision notes'
    },
    {
      id: 2,
      name: 'Resume',
      type: 'doc',
      category: 'Career',
      dateAdded: new Date('2024-04-20'),
      tags: ['cv', 'work'],
      url: 'https://example.com/resume.doc',
      description: 'My professional resume'
    },
    {
      id: 3,
      name: 'Vacation Photo',
      type: 'image',
      category: 'Personal',
      dateAdded: new Date('2024-03-15'),
      tags: ['travel', 'photo'],
      url: 'https://example.com/photo.jpg',
    }
  ];

  getDocuments(): Document[] {
    return this.documents;
  }

  getById(id: number): Document | undefined {
    return this.documents.find(d => d.id === id);
  }
}
