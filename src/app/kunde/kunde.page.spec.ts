import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KundePage } from './kunde.page';

describe('KundePage', () => {
  let component: KundePage;
  let fixture: ComponentFixture<KundePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KundePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KundePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
