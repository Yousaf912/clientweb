var date  = new Date();
var a = date.getDate();
var b = date.getMonth()+1;
var c = date.getFullYear()
var d =`${a}/${b}/${c}`;

var dateS = document.getElementById('date')
var year = document.getElementById('fulyr')
dateS.innerHTML = d;
  
function calculateExperience() {
    var currentDate = new Date();
    var startDate = new Date('2013-01-01');
    var difference = currentDate - startDate;
    var years = difference / (1000 * 60 * 60 * 24 * 365);
    years = Math.round(years) 
    return years;
}
var experienceYears = calculateExperience();
year.innerHTML = experienceYears;











