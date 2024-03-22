import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditCoursComponent } from './dialog-edit-cours.component';

describe('DialogEditCoursComponent', () => {
  let component: DialogEditCoursComponent;
  let fixture: ComponentFixture<DialogEditCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditCoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
