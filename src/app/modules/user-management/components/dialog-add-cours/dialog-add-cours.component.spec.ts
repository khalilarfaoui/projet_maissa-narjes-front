import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddCoursComponent } from './dialog-add-cours.component';

describe('DialogAddCoursComponent', () => {
  let component: DialogAddCoursComponent;
  let fixture: ComponentFixture<DialogAddCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddCoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
