google.charts.load("current", { packages: ["corechart","bar"] });
google.charts.setOnLoadCallback(loadCharts);
function loadCharts(){
  drawPieChart("piechart");
  drawBarChart("barChart");
  draw3DPieChart("piechart_3d");
  drawDoughNutChart("donutchart");
  drawSliceChart("slicechart");
  drawWaterfallChart("waterfallchart");
  drawCurvedLineChart("curve_line");
  drawMBarChart("mbar_chart");
}
function isElementPresent(elemID){
  return document.getElementById(elemID)!=undefined;
}
function drawPieChart(elemID) {
  if(isElementPresent(elemID)){
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
}
function drawBarChart(elemID) {
  if(isElementPresent(elemID)){
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
}
function draw3DPieChart(elemID) {
  if(isElementPresent(elemID)){
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
}      
function drawDoughNutChart(elemID) {
  if(isElementPresent(elemID)){
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
    pieHole: 0.4,
    backgroundColor: bgColor,
    legendTextStyle: { color: textColor },
};

  var chart = new google.visualization.PieChart(document.getElementById(elemID));
  chart.draw(data, options);
}
}
function drawSliceChart(elemID) {
  if(isElementPresent(elemID)){
    var isDarkMode=$("body").hasClass("dark");
  var textColor=isDarkMode?"#FFFFFF":"#000000";
  var bgColor=isDarkMode?"#000000":"#FFFFFF";
  var data = google.visualization.arrayToDataTable([
    ['Language', 'Speakers (in millions)'],
    ['Assamese', 13], ['Bengali', 83], ['Bodo', 1.4],
    ['Dogri', 2.3], ['Gujarati', 46], ['Hindi', 300],
    ['Kannada', 38], ['Kashmiri', 5.5], ['Konkani', 5],
    ['Maithili', 20], ['Malayalam', 33], ['Manipuri', 1.5],
    ['Marathi', 72], ['Nepali', 2.9], ['Oriya', 33],
    ['Punjabi', 29], ['Sanskrit', 0.01], ['Santhali', 6.5],
    ['Sindhi', 2.5], ['Tamil', 61], ['Telugu', 74], ['Urdu', 52]
  ]);

  var options = {
    title: 'Indian Language Use',
    legend: 'none',
    pieSliceText: 'label',
    backgroundColor: bgColor,
    legendTextStyle: { color: textColor },
    slices: {  4: {offset: 0.2},
              12: {offset: 0.3},
              14: {offset: 0.4},
              15: {offset: 0.5},
    },
  };

  var chart = new google.visualization.PieChart(document.getElementById(elemID));
  chart.draw(data, options);
  }}
function drawWaterfallChart(elemID) {
  if(isElementPresent(elemID)){
    var isDarkMode=$("body").hasClass("dark");
  var textColor=isDarkMode?"#FFFFFF":"#000000";
  var bgColor=isDarkMode?"#000000":"#FFFFFF";
  var data = google.visualization.arrayToDataTable([
    ['Mon', 28, 28, 38, 38],
    ['Tue', 38, 38, 55, 55],
    ['Wed', 55, 55, 77, 77],
    ['Thu', 77, 77, 66, 66],
    ['Fri', 66, 66, 22, 22]
    // Treat the first row as data.
  ], true);

  var options = {
    legend: 'none',
    bar: { groupWidth: '100%' }, // Remove space between bars.
    backgroundColor: bgColor,
    legendTextStyle: { color: textColor },
    candlestick: {
      fallingColor: { strokeWidth: 0, fill: '#a52714' }, // red
      risingColor: { strokeWidth: 0, fill: '#0f9d58' }   // green
    }
  };

  var chart = new google.visualization.CandlestickChart(document.getElementById(elemID));
  chart.draw(data, options);
  }}
function drawCurvedLineChart(elemID) {
  if(isElementPresent(elemID)){
    var isDarkMode=$("body").hasClass("dark");
  var textColor=isDarkMode?"#FFFFFF":"#000000";
  var bgColor=isDarkMode?"#000000":"#FFFFFF";
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Sales', 'Expenses'],
    ['2004',  1000,      400],
    ['2005',  1170,      460],
    ['2006',  660,       1120],
    ['2007',  1030,      540]
  ]);

  var options = {
    title: 'Company Performance',
    curveType: 'function',
    backgroundColor: bgColor,
    legendTextStyle: { color: textColor },
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById(elemID));

  chart.draw(data, options);
}
}
function drawMBarChart(elemID) {
  if(isElementPresent(elemID)){
    var isDarkMode=$("body").hasClass("dark");
  var textColor=isDarkMode?"#FFFFFF":"#000000";
  var bgColor=isDarkMode?"#000000":"#FFFFFF";

  var data = google.visualization.arrayToDataTable([
    ['Year', 'Sales', 'Expenses', 'Profit'],
    ['2014', 1000, 400, 200],
    ['2015', 1170, 460, 250],
    ['2016', 660, 1120, 300],
    ['2017', 1030, 540, 350]
  ]);

  var options = {
    backgroundColor: bgColor,
    legendTextStyle: { color: textColor },
    chart: {
      title: 'Company Performance',
      subtitle: 'Sales, Expenses, and Profit: 2014-2017',
      },
    bars: 'horizontal' // Required for Material Bar Charts.
  };

  var chart = new google.charts.Bar(document.getElementById(elemID));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}
}