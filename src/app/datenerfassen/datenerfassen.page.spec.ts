import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DatenerfassenPage } from './datenerfassen.page';

describe('DatenerfassenPage', () => {
  let component: DatenerfassenPage;
  let fixture: ComponentFixture<DatenerfassenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatenerfassenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DatenerfassenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
