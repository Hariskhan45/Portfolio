import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroheaderComponent } from './heroheader.component';

describe('HeroheaderComponent', () => {
  let component: HeroheaderComponent;
  let fixture: ComponentFixture<HeroheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroheaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
