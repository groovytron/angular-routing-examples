import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithResolverComponent } from './with-resolver.component';

describe('WithResolverComponent', () => {
  let component: WithResolverComponent;
  let fixture: ComponentFixture<WithResolverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WithResolverComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WithResolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
