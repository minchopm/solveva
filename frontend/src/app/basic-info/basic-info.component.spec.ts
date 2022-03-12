import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BasicInfoComponent} from './basic-info.component';
import {mockProvider} from "@ngneat/spectator";
import {Store} from "@ngrx/store";
import {RouterTestingModule} from "@angular/router/testing";
import {ActivatedRoute} from "@angular/router";

describe('BasicInfoComponent', () => {
  let component: BasicInfoComponent;
  let fixture: ComponentFixture<BasicInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicInfoComponent],
      imports: [
        RouterTestingModule,
      ],
      providers: [mockProvider(Store), {
        provide: ActivatedRoute,
        useValue: {
          params: {
            subscribe: () => {}
          },
          snapshot: {params: {id: 1}}
        }
      }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
