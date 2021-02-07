window.onload = function date () {
    var day = new Date();
    var today = day.getDay();
    var todaylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    var date = day.getDate();
    var month = day.getMonth();
    var monthlist = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    var year = day.getFullYear();
    var newDate = todaylist[today] + ", " + date + " " + monthlist[month] + " " + year + "."; 
    document.getElementById("date").innerHTML = newDate;

    var pop = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";
    if (today == 5){
        pop = document.getElementById("popup").style.visibility = 'visible';
    }else
        document.getElementById("popup").style.visibility = 'hidden';

        var todaylist1 = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
        switch (today){
            case 0:
                var futureDay = todaylist1[1];
                document.getElementById("day1").innerHTML = futureDay;
                var futureDay2 = todaylist1[2];
                document.getElementById("day2").innerHTML = futureDay2;
                var futureDay3 = todaylist1[3];
                document.getElementById("day3").innerHTML = futureDay3;
                var futureDay4 = todaylist1[4];
                document.getElementById("day4").innerHTML = futureDay4;
                var futureDay5 = todaylist1[5];
                document.getElementById("day5").innerHTML = futureDay5;
                break;
    
            case 1:
                var futureDay = todaylist1[2];
                document.getElementById("day1").innerHTML = futureDay;
                var futureDay2 = todaylist1[3];
                document.getElementById("day2").innerHTML = futureDay2;
                var futureDay3 = todaylist1[4];
                document.getElementById("day3").innerHTML = futureDay3;
                var futureDay4 = todaylist1[5];
                document.getElementById("day4").innerHTML = futureDay4;
                var futureDay5 = todaylist1[6];
                document.getElementById("day5").innerHTML = futureDay5;
                break;
    
            case 2:
                var futureDay = todaylist1[3];
                document.getElementById("day1").innerHTML = futureDay;
                var futureDay2 = todaylist1[4];
                document.getElementById("day2").innerHTML = futureDay2;
                var futureDay3 = todaylist1[5];
                document.getElementById("day3").innerHTML = futureDay3;
                var futureDay4 = todaylist1[6];
                document.getElementById("day4").innerHTML = futureDay4;
                var futureDay5 = todaylist1[0];
                document.getElementById("day5").innerHTML = futureDay5;
                break;
    
            case 3:
                var futureDay = todaylist1[4];
                document.getElementById("day1").innerHTML = futureDay;
                var futureDay2 = todaylist1[5];
                document.getElementById("day2").innerHTML = futureDay2;
                var futureDay3 = todaylist1[6];
                document.getElementById("day3").innerHTML = futureDay3;
                var futureDay4 = todaylist1[0];
                document.getElementById("day4").innerHTML = futureDay4;
                var futureDay5 = todaylist1[1];
                document.getElementById("day5").innerHTML = futureDay5;
                break;
    
            case 4:
                var futureDay = todaylist1[5];
                document.getElementById("day1").innerHTML = futureDay;
                var futureDay2 = todaylist1[6];
                document.getElementById("day2").innerHTML = futureDay2;
                var futureDay3 = todaylist1[0];
                document.getElementById("day3").innerHTML = futureDay3;
                var futureDay4 = todaylist1[1];
                document.getElementById("day4").innerHTML = futureDay4;
                var futureDay5 = todaylist1[2];
                document.getElementById("day5").innerHTML = futureDay5;
                break;
    
            case 5:
                var futureDay = todaylist1[6];
                document.getElementById("day1").innerHTML = futureDay;
                var futureDay2 = todaylist1[0];
                document.getElementById("day2").innerHTML = futureDay2;
                var futureDay3 = todaylist1[1];
                document.getElementById("day3").innerHTML = futureDay3;
                var futureDay4 = todaylist1[2];
                document.getElementById("day4").innerHTML = futureDay4;
                var futureDay5 = todaylist1[3];
                document.getElementById("day5").innerHTML = futureDay5;
                break;
    
            case 6:
                var futureDay = todaylist1[0];
                document.getElementById("day1").innerHTML = futureDay;
                var futureDay2 = todaylist1[1];
                document.getElementById("day2").innerHTML = futureDay2;
                var futureDay3 = todaylist1[2];
                document.getElementById("day3").innerHTML = futureDay3;
                var futureDay4 = todaylist1[3];
                document.getElementById("day4").innerHTML = futureDay4;
                var futureDay5 = todaylist1[4];
                document.getElementById("day5").innerHTML = futureDay5;
                break;
        }        
}


/*menu */
function toggleMenu() {
const hambutton = document.querySelector('.menu');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};
}
