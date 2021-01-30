import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BarcodscannenPage } from './barcodscannen.page';

describe('BarcodscannenPage', () => {
  let component: BarcodscannenPage;
  let fixture: ComponentFixture<BarcodscannenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarcodscannenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BarcodscannenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
