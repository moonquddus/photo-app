import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PhotoGridComponent } from './photo-grid.component';
import { RouterTestingModule } from '@angular/router/testing';
import { LightboxModule } from 'ngx-lightbox';
import { I18nSelectPipe } from '@angular/common';

describe('PhotoGridComponent', () => {
  let component: PhotoGridComponent;
  let fixture: ComponentFixture<PhotoGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoGridComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule, LightboxModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a title', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1')).toBeTruthy();
  });

  it('should render a photo grid list element', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('ul#photo-grid')).toBeTruthy();
  });
});
