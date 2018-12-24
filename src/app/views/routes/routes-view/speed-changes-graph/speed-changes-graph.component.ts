import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Chart } from 'chart.js';
import { Route, RoutePoint } from '../../interfaces/Route'
import * as moment from 'moment';

@Component({
    selector: 'app-speed-changes-graph',
    templateUrl: './speed-changes-graph.component.html',
    styleUrls: ['./speed-changes-graph.component.scss']
})
export class SpeedChangesGraphComponent implements OnInit, OnChanges {
    private readonly TIME_FORMAT = 'DD/MM/YYYY HH:mm:SS';
    private chart;
    @Input() selectedRoute: Route;

    ngOnChanges(changes) {
        if (this.chart) {
            this.chart.data.datasets[0].data = this.parsePoints(changes.selectedRoute.currentValue.points);
            this.chart.update();
        }
    }

    ngOnInit() {
        this.chart = new Chart('canvas', {
            type: 'line',
            data: {
                datasets: [{
                    data: this.parsePoints(this.selectedRoute.points),
                    fill: false,
                    borderColor: 'DeepSkyBlue',
                    borderWidth: 2,
                    pointRadius: 2,
                    pointHoverRadius: 2,
                    pointBorderColor: 'DodgerBlue'
                }]
            },
            options: {
                legend: {
                    display: false
                },
                scales: {
                    responsive: true,
                    xAxes: [{
                        type: 'time',
                        time: {
                            parser: this.TIME_FORMAT,
                            displayFormats: {
                                minute: 'MMM DD,HH:mm',
                                hour: 'MMM DD,HH:mm',
                                day: 'MMM DD,HH:mm',
                                week: 'MMM DD,HH:mm'
                             }
                        },
                        ticks: {
                            fontSize: 10
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'time'
                        }
                    }],
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'knots'
                        }
                    }]
                }
            }
        })
    }

    private parsePoints(routePoints: Array<RoutePoint>) {
        return routePoints.map(point => ({
            x: moment(new Date(point.timestamp)).format(this.TIME_FORMAT),
            y: point.speed
        }));
    }
}
