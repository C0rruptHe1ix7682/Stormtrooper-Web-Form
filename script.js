document.getElementById('Stormtrooper-web-form button').addEventListener('submit', function(e) {
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
 
    alert('Feedback submitted successfully!');

   
 
   
   let submissionCount = localStorage.getItem('submissionCount') || 0;
   submissionCount = parseInt(submissionCount) + 1;

if (submissionCount <=5) { localStorage.setItem('submissionCount', submissionCount);
      alert(', submited ')

  //this disables the submit buttn after 5 submissions
 if (submissionCount >=5) {
   alert("You have reached the submission limit (5 times). You cannot submit again.");
   document.querySelector('button').disabled = true; 
}
} else {
alert("Submission limit reached. You cannot submit again.");
document.querySelector('button').disabled = true; 
}
});