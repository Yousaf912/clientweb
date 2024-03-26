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



        function sendMail() {
            var name = document.getElementById('name').value;
            var mail = document.getElementById('mail').value;
            var message = document.getElementById('message').value;
            var date = document.getElementById('date').value;
        
            if (name === "" || mail === "" || message === "" || date === "") {
                alert("Please type something in all fields.");
            } else {
                const serviceId = "service_681vp7r";
                const templateId = "template_ea0vxde";
        
                emailjs.send(serviceId, templateId, {
                    name: name,
                    mail: mail,
                    message: message,
                    date: date
                }).then(function(response) {
                    document.getElementById('name').value = "";
                    document.getElementById('mail').value = "";
                    document.getElementById('message').value = "";
                    document.getElementById('date').value = "";
                    console.log("Email sent successfully:", response);
                    alert('Your message has been sent to Khalid Haider.');
                }).catch(function(error) {
                    console.error("Email sending failed:", error);
                    alert("An error occurred while sending your message. Please try again later.");
                });
            }
        }
        

