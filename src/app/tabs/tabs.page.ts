import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsRoutingModule} from './tabs.router.module'
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {


  @ViewChild('tabs') tabs: IonTabs


  constructor() { }

  ngOnInit() {

    this.tabs.select("emergency")
  }

}
