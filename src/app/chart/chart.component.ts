import { Component, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Chart, ChartType, ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements AfterViewInit {

  @ViewChild('myCanvas') myCanvas: ElementRef;

  @Input() type: ChartType | string;
  @Input() data: ChartData;
  @Input() options: ChartOptions;

  ngAfterViewInit() {
    const canvas = this.myCanvas.nativeElement;
    this.drawChart(canvas);
  }

  drawChart(ctx: string | CanvasRenderingContext2D | HTMLCanvasElement | ArrayLike<CanvasRenderingContext2D | HTMLCanvasElement>) {
    return new Chart(ctx, {
      type: this.type,
      data: this.data,
      options: this.options
    });
  }
}
