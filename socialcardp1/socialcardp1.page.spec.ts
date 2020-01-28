import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Socialcardp1Page } from './socialcardp1.page';

describe('Socialcardp1Page', () => {
  let component: Socialcardp1Page;
  let fixture: ComponentFixture<Socialcardp1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Socialcardp1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Socialcardp1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
