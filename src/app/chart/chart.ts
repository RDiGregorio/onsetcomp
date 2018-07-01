import {GoogleCharts} from 'google-charts';

export function drawChart(data) {
  GoogleCharts.load(() => new GoogleCharts
    .api
    .visualization
    .BarChart(document.querySelector('.chart'))
    .draw(GoogleCharts.api.visualization.arrayToDataTable(data), {
      width: 1000,
      height: 500,
      hAxis: {
        viewWindow: {
          max: 100,
          min: 0
        }
      }
    }));
}
