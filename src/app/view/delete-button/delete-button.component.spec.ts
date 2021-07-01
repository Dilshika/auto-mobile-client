import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DOMHelper } from 'src/app/test_helper/domHelper';

import { DeleteButtonComponent } from './delete-button.component';

describe('DeleteButtonComponent', () => {
  let component: DeleteButtonComponent;
  let fixture: ComponentFixture<DeleteButtonComponent>;
  let domHelper:DOMHelper<DeleteButtonComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    domHelper=new DOMHelper(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have delete button',()=>{
     expect(domHelper.elementPresent('button')).toBe('Delete')
  })
});
