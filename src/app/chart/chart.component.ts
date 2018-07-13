import { Component, AfterViewInit, OnChanges, SimpleChanges, ViewChild, ElementRef, Input } from '@angular/core';
import { Chart, ChartType, ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements AfterViewInit, OnChanges {

  @ViewChild('myCanvas') myCanvas: ElementRef;

  @Input() type: ChartType | string;
  @Input() data: ChartData;
  @Input() options: ChartOptions;

  chart: Chart;

  ngAfterViewInit() {
    const canvas = this.myCanvas.nativeElement;
    this.drawChart(canvas);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.chart !== undefined) {
      if (changes.type !== undefined) {
        this.chart.config.type = changes.type.currentValue;
      }
      if (changes.data !== undefined) {
        this.chart.config.data = changes.data.currentValue;
      }
      if (changes.options !== undefined) {
        this.chart.config.options = changes.options.currentValue;
      }
      this.chart.update();
    }
  }

  drawChart(ctx: string | CanvasRenderingContext2D | HTMLCanvasElement | ArrayLike<CanvasRenderingContext2D | HTMLCanvasElement>) {
    this.chart = new Chart(ctx, {
      type: this.type,
      data: this.data,
      options: this.options
    });
  }
}
