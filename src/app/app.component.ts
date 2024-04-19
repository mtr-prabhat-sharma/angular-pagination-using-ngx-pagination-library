import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'custom_pagination';
  dataArray: any = [];
  error: any;
  loading: boolean = true;
  p: number = 1;
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.getData()
    .pipe(
      delay(3000)
    )
    .subscribe(
      (res) => {
      this.dataArray = res;
      this.loading = false;
    }, (error) => {
      this.error = error;
      this.loading = false;
    })
  }
}
