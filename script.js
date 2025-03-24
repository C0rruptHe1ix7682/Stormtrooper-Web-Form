document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();
 
 
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const phone = document.getElementById('phone').value;
    const street = document.getElementById('street').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zip = document.getElementById('zip').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
 
    alert('Feedback submitted successfully!');
    let subissionCount = localStorage.getItem("subissionCount") || 0;

 document.getElementById('Stromtrooper-Web-Form').addEventListener('submit', function(e) {e.preventDefault();

 })});
 /*submissionCount = parseInt(submissionCount) + 1;

 if (submissionCount <=5) { localStorage.setItem('submissionCount', submissionCount)}

 // this disables the submit buttn after 5 submissions
 if (submissionCOunt >=5) {
    alert("You have reached the submission limit (5 times if you wish to proced do so at your own risk).");
    document.querySelector('button').disabled = true;
 }else{
    alert("submission limit reached you cannot submit again.)");
    document.querySelector('submit').disabled = true;
 }

 });*/
 