google.charts.load("current", { packages: ["corechart","bar"] });
google.charts.setOnLoadCallback(loadCharts);
function loadCharts(){
  drawPieChart("piechart");
  drawBarChart("barChart");
  draw3DPieChart("piechart_3d");
}
function drawPieChart(elemID) {
  var isDarkMode=$("body").hasClass("dark");
  var textColor=isDarkMode?"#FFFFFF":"#000000";
  var bgColor=isDarkMode?"#000000":"#FFFFFF";
var data = google.visualization.arrayToDataTable([
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 5],
    ["Commute", 2],
    ["Watch TV", 3],
    ["Sleep", 7],
  ]);
  var options = {
    title: "My Daily Activities",
    backgroundColor: bgColor,
    legendTextStyle: { color: textColor },
  titleTextStyle: { color: textColor },
};
  var chart = new google.visualization.PieChart(
    document.getElementById("piechart")
  );
  chart.draw(data, options);
}
function drawBarChart(elemID) {
  var isDarkMode=$("body").hasClass("dark");
  var textColor=isDarkMode?"#FFFFFF":"#000000";
  var bgColor=isDarkMode?"#000000":"#FFFFFF";

    var data = google.visualization.arrayToDataTable([
        ['City', '2010 Population', '2000 Population'],
        ['New York City, NY', 8175000, 8008000],
        ['Los Angeles, CA', 3792000, 3694000],
        ['Chicago, IL', 2695000, 2896000],
        ['Houston, TX', 2099000, 1953000],
        ['Philadelphia, PA', 1526000, 1517000]
      ]);

      var options = {
        backgroundColor: bgColor,
        legendTextStyle: { color: textColor },
      titleTextStyle: { color: textColor },
      title: 'Population of Largest U.S. Cities',
        chartArea: {width: '50%'},
        colors: ['#b0120a', '#ffab91'],
        hAxis: {
          title: 'Total Population',
          minValue: 0
        },
        vAxis: {
          title: 'City'
        }
      };
      var chart = new google.visualization.BarChart(document.getElementById('barChart'));
      chart.draw(data, options);
}
function draw3DPieChart(elemID) {
  var isDarkMode=$("body").hasClass("dark");
  var textColor=isDarkMode?"#FFFFFF":"#000000";
  var bgColor=isDarkMode?"#000000":"#FFFFFF";
var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work',     11],
        ['Eat',      2],
        ['Commute',  2],
        ['Watch TV', 2],
        ['Sleep',    7]
      ]);

      var options = {
        title: 'My Daily Activities',
        is3D: true,
        backgroundColor: bgColor,
        legendTextStyle: { color: textColor },
      titleTextStyle: { color: textColor },
   };

      var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
      chart.draw(data, options);
}      
