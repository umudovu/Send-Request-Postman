$(document).ready(function () {


    $("#serachloc").click(function () {

        axios.get('https://api.weatherapi.com/v1/current.json?key=6bc15cfb31414fbda9f95625221905&q=london')
            .then(function (response) {

                let locationVal = $("#location").val().toLowerCase();
                let select = $("#select").val();

                //console.log(locationVal);

                let City = response.data.location.name;
                let Country = response.data.location.country;
                let selsius = response.data.current.feelslike_c;
                let fahren = response.data.current.feelslike_f;
                let isDay = response.data.current.is_day;
                // console.log(City);
                // console.log(Country);
                // console.log(selsius);
                // console.log(fahren);
                console.log();
                if (locationVal == City.toLowerCase()) {
                    $("#city").text(City);
                    $("#country").text(Country);
                    if (select == 1) {
                        $("#weather").text(selsius);
                    } else {
                        $("#weather").text(fahren);
                    }

                    if (isDay == 0) {
                        $("#sky").text(` Night`);
                    } else {
                        $("#sky").text("Sunny")
                    }
                }else{
                    alert("Not formatting")
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    })






















});