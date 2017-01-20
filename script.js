$(document).ready(function() 
    $("#Search").click(function() {
        var id = ($("#SearchBox").val())
        var url = "https://api.apixu.com/v1/current.json?key=83003f0fa69c489ea63132540171201&q="
        var inputField = "#SearchBox"
        var result = url + id
        $.getJSON(result, function(response) {
            console.log(response)
            $("#temperature").append(response.current.temp_f);
            $("#humidity").append(response.current.humidity);

        })
    });
});





// http://api.apixu.com/v1/current.json?key=83003f0fa69c489ea63132540171201&q=Paris
