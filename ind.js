var experience = document.getElementById('experience')
var second = document.getElementById('secondH')
function calculateExperience() {
    var currentDate = new Date();
    var startDate = new Date('2013-01-01');
    var difference = currentDate - startDate;
    var years = difference / (1000 * 60 * 60 * 24 * 365);
    years = Math.round(years) 
    return years;
}
var experienceYears = calculateExperience();
experience.innerHTML = experienceYears
second.innerHTML = experienceYears;

function sendMail(){
   
    const serviceId = "service_681vp7r";
    const templateId = "template_ea0vxde";
    
    emailjs.send(serviceId,templateId,{
        name:document.getElementById('name').value,
        mail:document.getElementById('mail').value,
        message:document.getElementById('message').value,
        date:document.getElementById('date').value,
    }).then(function(res){
        document.getElementById('name').value="";
        document.getElementById('mail').value="";
        document.getElementById('message').value="";
        document.getElementById('date').value="";
        console.log(res);
        alert('Your message has been sent to Khalid Haider')
    }).catch(function(eror){
        console.log(eror.message);
    })
}

