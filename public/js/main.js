const cityname = document.getElementById('cityname');
const city_name = document.getElementById('city_name');
const submitBtn = document.getElementById("submitBtn");


const temp_real = document.getElementById('temp_real');
const temp_status = document.getElementById("temp_status");
const datahide = document.querySelector('.middle_layer');

const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityname.value;
    if (cityVal === "") {
        city_name.innerText = 'Enter city Name';
        datahide.classList.add('data_hide');
    }
    else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=5406a726c586afca03ee2a68f7f9f5d4`;
            const res = await fetch(url);
            const data = await res.json();
            const arrdata = [data];

            city_name.innerText = `${arrdata[0].name}, ${arrdata[0].sys.country}`;
            temp_real.innerText = (arrdata[0].main.temp - 273.15).toFixed(1);
            const tempStatus = arrdata[0].weather[0].main;
            //console.log(data);

            if (tempStatus == 'Clear')
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'></i>";
            else if (tempStatus == "Clouds")
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f5f0f0;'></i>";
            else if (tempStatus == 'Rain')
                temp_status.innerHTML = "<i class='fa fa-tint' style='color:#a4b0be;></i>";
            else
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#44c3de;'></i>";

            datahide.classList.remove('data_hide');

        } catch {
            city_name.innerText = 'Enter valid City Name';
            datahide.classList.add('data_hide');
        }
    }

}

submitBtn.addEventListener('click', getInfo);