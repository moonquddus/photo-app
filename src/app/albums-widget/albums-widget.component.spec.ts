import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumsWidgetComponent } from './albums-widget.component';
import { SwiperModule, SWIPER_CONFIG, SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AlbumsWidgetComponent', () => {
  let component: AlbumsWidgetComponent;
  let fixture: ComponentFixture<AlbumsWidgetComponent>;

  const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 5,
    navigation: true,
    spaceBetween: 15
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumsWidgetComponent ],
      imports: [ SwiperModule, RouterTestingModule, HttpClientTestingModule ],
      providers: [{
        provide: SWIPER_CONFIG,
        useValue: DEFAULT_SWIPER_CONFIG
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the carousel', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('swiper')).toBeTruthy();
  });

  it('should render the nav buttons', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('swiper .swiper-button-next')).toBeTruthy();
  });
});
