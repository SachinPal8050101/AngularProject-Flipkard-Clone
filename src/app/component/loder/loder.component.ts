import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/service/loading.service';

@Component({
  selector: 'app-loder',
  templateUrl: './loder.component.html',
  styleUrls: ['./loder.component.scss']
})
export class LoderComponent implements OnInit {
  showLoder:boolean=false
  constructor(private loderService:LoadingService) { }

  ngOnInit(): void {
   this.loderService.loading$.subscribe(res=>this.showLoder=res)
  }
}
