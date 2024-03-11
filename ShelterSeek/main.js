
//  +++++++++++++++++++++++++  ALERT MESSAGE ON CLICKING LOCATION AND MIC ICONS   +++++++++++++++++++++++++++

// Getting icons
const locationIcon = document.getElementById('locationlogo');
const microphoneIcon = document.getElementById('microphonelogo');

// Add event listeners to the icons using arrow functions
locationIcon.addEventListener('click', (e) => {
  alert('Please Allow Location Access From Settings!');
});

microphoneIcon.addEventListener('click', (e) => {
  alert('Please Allow Voice Speech Access From Settings!');
});


//  +++++++++++++++++++++++++  NEW DIV ON HOVER ON (FOR BUYERS) IN NAVIGATION   +++++++++++++++++++++++++++

// const hoverTarget = document.querySelector('.for_buyers');
// const hoverContent = document.querySelector('.for_buyers_hover');

// hoverTarget.addEventListener('mouseover', (e) => {
//   hoverContent.style.display = 'block';
// });

// hoverTarget.addEventListener('mouseout', (e) => {
//   hoverContent.style.display = 'none';
// });
