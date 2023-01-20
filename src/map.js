<script>
        anychart.onDocumentReady(function () {

            // create data
            var data = [
                { x: "Left Sidebar", y: "1", heat: 20 },
                { x: "LinkedIn Feed (Left)", y: "1", heat: 17 },
                { x: "LinkedIn Feed (Right)", y: "1", heat: 21 },
                { x: "Right Sidebar", y: "1", heat: 34 },
                { x: "Left Sidebar", y: "2", heat: 33 },
                { x: "LinkedIn Feed (Left)", y: "2", heat: 32 },
                { x: "LinkedIn Feed (Right)", y: "2", heat: 51 },
                { x: "Right Sidebar", y: "2", heat: 50 },
                { x: "Left Sidebar", y: "3", heat: 47 },
                { x: "LinkedIn Feed (Left)", y: "3", heat: 34 },
                { x: "LinkedIn Feed (Right)", y: "3", heat: 60 },
                { x: "Right Sidebar", y: "3", heat: 12 }
                ];
            // create a chart and set the data
            var chart = anychart.heatMap(data);

            // set the chart title
            chart.title("This heat map shows which parts of the page have been interacted/clicked on most");

            // set the container id
            chart.container("container");

            // initiate drawing the chart
            chart.draw();
        });
    </script>