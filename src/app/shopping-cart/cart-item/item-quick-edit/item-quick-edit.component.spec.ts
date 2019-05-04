import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemQuickEditComponent } from './item-quick-edit.component';

describe('ItemQuickEditComponent', () => {
  let component: ItemQuickEditComponent;
  let fixture: ComponentFixture<ItemQuickEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemQuickEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemQuickEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
