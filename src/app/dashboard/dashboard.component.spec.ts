import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DashboardComponent } from './dashboard.component';
import { AlbumsWidgetComponent } from '../albums-widget/albums-widget.component';
import { PhotoGridComponent } from '../photo-grid/photo-grid.component';
import { SwiperModule, SWIPER_CONFIG, SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { LightboxModule } from 'ngx-lightbox';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 5,
    navigation: true,
    spaceBetween: 15
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent, AlbumsWidgetComponent, PhotoGridComponent ],
      imports: [ RouterTestingModule, SwiperModule, HttpClientTestingModule, LightboxModule ],
      providers: [{
        provide: SWIPER_CONFIG,
        useValue: DEFAULT_SWIPER_CONFIG
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render "View All Albums" button', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p a.view-all-button').textContent).toContain('View All Albums');
  });

  it('should contain AlbumsWidgetComponent', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-albums-widget')).toBeTruthy();
  });

  it('should contain PhotoGridComponent', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-photo-grid')).toBeTruthy();
  });
});
