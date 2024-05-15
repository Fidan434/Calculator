// function of clear button 
function clearScreen() {
    document.getElementById("result").value = "";
}


// function of  display values
function display(value) {
    document.getElementById("result").value += value;
}

// This function evaluates the expression and return result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}

//const switchbutton = document.getElementById('dark-mode');
//switchbutton.onclick = function(e) {}


function switchTheme() {
    let darkMode = document.getElementById("darkmode");
    let theme = document.getElementById("theme");
    if (theme.getAttribute("href") == "lightmode.css") {
        theme.href = "darkmode.css";
        darkMode.innerHTML = "Light Mode 🌞";
    } else {
        theme.href = "lightmode.css";
        darkMode.innerHTML = "Dark Mode 🌙";
    } 
  
}



