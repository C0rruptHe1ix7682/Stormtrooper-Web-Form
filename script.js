document.querySelector('Stormtrooper-web-form button').addEventListener('submit', function(e) {
    e.preventDefault();
 
 
    const name = document.getElementById('name').value;
    const age =  document.getElementById('age').value;
    const phone = document.getElementById('phone').value;
    const street = document.getElementById('street').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zip = document.getElementById('zip').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
 
    alert("form submitted");
   
   
   

   
 
   
   let submissionCount = localStorage.getItem('submissionCount') || 0;
   submissionCount = parseInt(submissionCount) + 1;

if (submissionCount <=5) { localStorage.setItem('submissionCount', submissionCount);
      alert(' submited ');


} else {
alert("Submission limit reached. You cannot submit again.");
document.querySelector('button').disabled = true; 
}
});