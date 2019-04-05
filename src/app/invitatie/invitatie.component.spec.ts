import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitatieComponent } from './invitatie.component';

describe('InvitatieComponent', () => {
  let component: InvitatieComponent;
  let fixture: ComponentFixture<InvitatieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitatieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitatieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
