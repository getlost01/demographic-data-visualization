$(document).ready(function () {
    // Your routing logic can go here if needed

    // Event listener for file input change
    $('#fileInput').on('change', function (e) {
        var file = e.target.files[0];

        if (file) {
            // Read the Excel file
            var reader = new FileReader();
            reader.onload = function (e) {
                var data = e.target.result;
                var workbook = XLSX.read(data, { type: 'binary' });
                var jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], { header: 1 });

                // Convert Excel data to Mapael format
                var mapData = {};
                for (var i = 1; i < jsonData.length; i++) {
                    var state = jsonData[i][0];
                    var value = parseInt(jsonData[i][1]);

                    mapData[state] = { value: value, tooltip: { content: state + ': ' + value } };
                }
                console.log(mapData);   
                // Render Mapael map
                $('#content').mapael({
                    map: {
                        name: 'usa_states',
                        defaultArea: {
                            attrs: {
                                fill: '#dddddd',
                                stroke: '#FFFFFF'
                            },
                            attrsHover: {
                                fill: '#0088db'
                            }
                        }
                    },
                    areas: mapData
                });
            };

            reader.readAsBinaryString(file);
        }
    });
});
