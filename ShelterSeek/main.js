
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

const hoverBuyers = document.querySelector('.for_buyers');
const hoverContent1 = document.querySelector('.for_buyers_hover');

// Event listeners for both hoverBuyers and hoverContent
hoverBuyers.addEventListener('mouseover', () => {
    hoverContent1.style.display = 'flex';
});

hoverContent1.addEventListener('mouseover', () => {
    hoverContent1.style.display = 'flex';
});

hoverBuyers.addEventListener('mouseout', () => {
    hoverContent1.style.display = 'none';
});

hoverContent1.addEventListener('mouseout', () => {
    hoverContent1.style.display = 'none';
});


//  +++++++++++++++++++++++++  ON CLICKING BUY RENT etc.. IN SEARCHBAR   +++++++++++++++++++++++++++

const h5 = document.querySelector('#searchbar_2_div_change_h5');
const buy = document.querySelector('#buy_searchbar_1');
const rent = document.querySelector('#rent_searchbar_1');
const new_launch = document.querySelector('#new_launch_searchbar_1');
const pg = document.querySelector('#pg_searchbar_1');
const commercial = document.querySelector('#commercial_searchbar_1');
const plots = document.querySelector('#plots_searchbar_1');
const projects = document.querySelector('#projects_searchbar_1');



//Event listeners

buy.addEventListener('click' , () => {
    h5.innerHTML = "Buy Now"
});

rent.addEventListener('click' , () => {
  h5.innerHTML = "Rent now"
});

new_launch.addEventListener('click' , () => {
  h5.innerHTML = "Newly Launched"
});

pg.addEventListener('click' , () => {
  h5.innerHTML = "PG/Co-living"
});

commercial.addEventListener('click' , () => {
  h5.innerHTML = "All Residentials"
});

plots.addEventListener('click' , () => {
  h5.innerHTML = "Find Plots/Lands"
});

projects.addEventListener('click' , () => {
  h5.innerHTML = "Residential Project"
});
