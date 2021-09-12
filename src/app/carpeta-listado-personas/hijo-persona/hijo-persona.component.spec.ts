import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoPersonaComponent } from './hijo-persona.component';

describe('HijoPersonaComponent', () => {
  let component: HijoPersonaComponent;
  let fixture: ComponentFixture<HijoPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoPersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HijoPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
