import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentManagerComponent } from './document-manager.component';

describe('DocumentManagerComponent', () => {
  let component: DocumentManagerComponent;
  let fixture: ComponentFixture<DocumentManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
