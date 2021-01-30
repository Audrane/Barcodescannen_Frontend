import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KundenformularPage } from './kundenformular.page';

describe('KundenformularPage', () => {
  let component: KundenformularPage;
  let fixture: ComponentFixture<KundenformularPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KundenformularPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KundenformularPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
