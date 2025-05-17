import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentManagerComponent } from './components/document-manager/document-manager.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DocumentManagerComponent],
  template: `<app-document-manager />`,
})
export class AppComponent {}
