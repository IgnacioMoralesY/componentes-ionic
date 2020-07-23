import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  @ViewChild(IonSegment) segment: IonSegment;

  public superHeroes: Observable<any>;
  public publisher: string = '';

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.superHeroes = this.dataService.getHeroes();
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
