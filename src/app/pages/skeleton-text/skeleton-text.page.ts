import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-skeleton-text',
  templateUrl: './skeleton-text.page.html',
  styleUrls: ['./skeleton-text.page.scss'],
})
export class SkeletonTextPage implements OnInit {
  @ViewChild(IonSegment) segment: IonSegment;

  public superHeroes: Observable<any>;
  public publisher: string = '';

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.superHeroes = this.dataService.getHeroesTimeOut();
  }

  ionViewDidEnter(){
    this.segment.value = "todos";
  }

  segmentChanged(evento){
    const valorSegmento = evento.detail.value;
    
    if(valorSegmento === 'todos'){
      this.publisher = '';
      return;
    }

    this.publisher = valorSegmento;
  }

}
