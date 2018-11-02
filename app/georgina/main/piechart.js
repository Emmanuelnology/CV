 // Load google charts
 google.charts.load('current', {'packages':['corechart']});
 google.charts.setOnLoadCallback(drawChart);
 
 // Draw the chart and set the chart values
 function drawChart() {
     var data = google.visualization.arrayToDataTable([
     ['Task', 'Hours per Day'],
     ['Working on projects', 8],
     ['Cooking', 2],
     ['Watching funny videos', 2],
     ['Travelling', 4],
     ['Socialising', 8]
     
     ]);
     
     // Optional; add a title and set the width and height of the chart
     var options = 
     {
         width: 450, 
         height: 400,
         pieHole: 0.4,
         colors: ['#06AED5', '#086788', '#F0C808', '#DD1C1A', '#B1B9BA'],

     };
     
     // Display the chart inside the <div> element with id="piechart"
         var chart = new google.visualization.PieChart(document.getElementById('piechart'));
         chart.draw(data, options);
     }