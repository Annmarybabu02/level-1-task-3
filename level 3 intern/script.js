console.log('Welcome to 🌡️ Temperature Converter');

const tempLoad = () => {
    let fa = document.getElementById('fa');
    fa.innerHTML = "&#xf2cb";
    fa.style.color = "#ffa41b";

    setTimeout(() => {
        fa.innerHTML = "&#xf2ca;";
        fa.style.color = "#ffa41b";
    }, 1000)

    setTimeout(() => {
        fa.innerHTML = "&#xf2c9;";
    }, 2000)

    setTimeout(() => {
        fa.innerHTML = "&#xf2c8;";
    }, 3000)

    setTimeout(() => {
        fa.innerHTML = "&#xf2c7;";
        fa.style.color = "#ff5151";
    }, 4000)
}

setInterval(() => {
    fa.style.color = "#ffa41b";
    tempLoad();
}, 5000);


tempLoad();

const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;
    // console.log(numberTemp);

    const tempSelected = document.querySelector('#temp_diff');
    const valeTemp = temp_diff.options[tempSelected.selectedIndex].value;

    const tempresSelected = document.querySelector('#temp_res');
    const resTemp = temp_res.options[tempresSelected.selectedIndex].value;


   
    const celTOfah=(cel)=>{
        let fahrenheit =(cel*(9/5)+32);
        return fahrenheit;
    }
    const celTOkel=(cel)=>{
        let kelvin =((cel*1)+273.15);
        return kelvin;
    }

    const celTOcel=(cel)=>{
        return cel;
    }
   
    const fahTOcel=(fehr)=>{
        let celsius=((fehr-32)*5/9);
        return celsius;
    }
    const fahTOkel=(fehr)=>{
        let kelvin=(((fehr-32)*5/9)+273.15);
        return kelvin;
    }
    const fahTOfah=(fehr)=>{
        return fehr;
    }
    const kelTOcel=(kel)=>{
        let celsius=(kel-273.15);
        return celsius;
    }
    const kelTOfah=(kel)=>{
        let fahrenheit=(9/5*(kel-273)+32);
        return fahrenheit;
    }
    const kelTOkel=(kel)=>{
        return kel;
    }


    let result;
    if (valeTemp == "cel") {
        if(resTemp=="rfah"){
            result = celTOfah(numberTemp);
            document.getElementById('resultContainer').innerHTML = `= ${result}Fahrenheit`;
        }else if(resTemp=="rkel") {
            result =celTOkel(numberTemp);
            document.getElementById('resultContainer').innerHTML = `= ${result}Kelvin`;
        }else{
            result =celTOcel(numberTemp);
            document.getElementById('resultContainer').innerHTML = `= ${result}Celsius`;
        }
    }
    else if (valeTemp == "fah") {
        if(resTemp=="rcel"){
            result =fahTOcel(numberTemp);
            document.getElementById('resultContainer').innerHTML = `= ${result}Celsius`;
        }else if(resTemp=="rkel") {
            result =fahTOkel(numberTemp);
            document.getElementById('resultContainer').innerHTML = `= ${result}Kelvin`;
        }else{
            result =fahTOfah(numberTemp);
            document.getElementById('resultContainer').innerHTML = `= ${result}Fahrenheit`;
        }
    }
    else{
        if(resTemp=="rfah"){
            result =kelTOfah(numberTemp);
            document.getElementById('resultContainer').innerHTML = `= ${result}Fahrenheit`;
        }else if(resTemp=="rcel") {
            result =kelTOcel(numberTemp);
            document.getElementById('resultContainer').innerHTML = `= ${result}Celsius`;
        }else{
            result =kelTOkel(numberTemp);
            document.getElementById('resultContainer').innerHTML = `= ${result}Kelvin`;
        }

    }
}

function refreshTime() {
    const timeDisplay = document.getElementById("time");
    const dateString = new Date().toLocaleString();
    const formattedString = dateString.replace(", ", "  ");
    timeDisplay.textContent = formattedString;
  }
    setInterval(refreshTime, 1000);