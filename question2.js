let count = 5;
const timer = setInterval(function() {
  count--;
  console.log(count);
  let t=document.getElementById("timer");
  t.innerHTML="<h1>Time remaining: "+count+" seconds.";
  if (count === 0) {
    clearInterval(timer);
    let t=document.getElementById("timer");
    t.innerHTML= '<h1>Times up!</h1>';
    }
}, 1000);
 

function notification () {
    const notification = document.getElementById("alert");
    notification.innerHTML= '<p>3 seconds have passed</p>'

}


setTimeout(notification, 3000);
function alert() {
    alert('10 seconds have passed!');
  }
  
setInterval(alert, 10000);

