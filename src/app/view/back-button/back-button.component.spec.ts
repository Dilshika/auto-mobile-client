import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DOMHelper } from 'src/app/test_helper/domHelper';

import { BackButtonComponent } from './back-button.component';

describe('BackButtonComponent', () => {
  let component: BackButtonComponent;
  let fixture: ComponentFixture<BackButtonComponent>;
  let domHelper:DOMHelper<BackButtonComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    domHelper=new DOMHelper(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have button named back',()=>{
    expect(domHelper.elementPresent('button')).toBe('<< Back')
  })
});
