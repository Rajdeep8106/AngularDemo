import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pipecomponent } from './pipecomponent';

describe('Pipecomponent', () => {
  let component: Pipecomponent;
  let fixture: ComponentFixture<Pipecomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pipecomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pipecomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
