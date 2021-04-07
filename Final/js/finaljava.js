function date () {
    var day = new Date();
    var today = day.getDay();
    var todaylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    var date = day.getDate();
    var month = day.getMonth();
    var monthlist = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    var year = day.getFullYear();
    var newDate = "Site Last Modification: " + todaylist[today] + ", " + date + " " + monthlist[month] + " " + year + "."; 
    document.getElementById("date").innerHTML = newDate;
}