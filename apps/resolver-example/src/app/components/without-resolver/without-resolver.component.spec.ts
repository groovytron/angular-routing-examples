import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutResolverComponent } from './without-resolver.component';

describe('WithoutResolverComponent', () => {
  let component: WithoutResolverComponent;
  let fixture: ComponentFixture<WithoutResolverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WithoutResolverComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WithoutResolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
