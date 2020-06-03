import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SessionManager } from './session-manager.component';

describe('SessionManager', () => {
  let component: SessionManager;
  let fixture: ComponentFixture<SessionManager>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionManager ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionManager);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
