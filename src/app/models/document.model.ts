// src/app/models/document.model.ts
export interface Document {
  id: number;
  name: string;
  type: 'pdf' | 'doc' | 'image' | 'other';
  category: string;
  dateAdded: Date;
  tags: string[];
  url: string;
  description?: string;
}
