let date_button = document.querySelector('.date__button');

date_button.addEventListener('click', function () {
  let UTCdate = new Date().toUTCString();
  let current_hour = new Date().getUTCHours();

  console.log(UTCdate);
  if (current_hour > 11 && current_hour < 18) {
    console.log('Какое удивительное время!');
  }
})

