import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPostInfoComponent } from './search-post-info.component';

describe('SearchPostInfoComponent', () => {
  let component: SearchPostInfoComponent;
  let fixture: ComponentFixture<SearchPostInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPostInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPostInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
