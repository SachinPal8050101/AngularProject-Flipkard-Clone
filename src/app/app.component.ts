import { Component } from '@angular/core';
import { LoadingService } from './service/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'add-to-cart';
  showLoder:boolean=false
  constructor(private loderService:LoadingService) { }

  ngOnInit(): void {
   this.loderService.loading$.subscribe(res=>this.showLoder=res)
  }
}

