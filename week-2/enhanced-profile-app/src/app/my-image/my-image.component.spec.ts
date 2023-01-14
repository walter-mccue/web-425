/**
 * Title: my-image.component.spec.ts
 * Author: Walter McCue
 * Date: 01/13/23
 * Description: my-image.component.spec.ts for the enhanced-profile-app project
*/

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyImageComponent } from './my-image.component';

describe('MyImageComponent', () => {
  let component: MyImageComponent;
  let fixture: ComponentFixture<MyImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
