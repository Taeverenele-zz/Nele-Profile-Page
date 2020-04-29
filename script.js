function get_random_color() {
    const letters = '0123456789ABCDEF'.split('');
    let color = '#';
    for (let i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
  }
  
  const listItem = document.getElementsByClassName('list-item');
  for(let i = 0; i < listItem.length; i++) {
    listItem[i].style.backgroundColor = get_random_color();
  }
  
//   var container = document.getElementsByClassName('container')[0]; // Identify target
  

//   window.addEventListener('scroll', function(event) { // To listen for event
//       event.preventDefault();
  
//       if (window.scrollY > 100) { // Just an example
//           container.style.backgroundColor = '#000'; // or default color
//       } else {
//           container.style.backgroundColor = 'transparent';
//       }
//   });

//   $('#Contact').on('submit', function(e){
//     $('#Contact').modal('hide');
//     $('#myModal').modal('show');
//     e.preventDefault();
//   });

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', function() {
    navbarLinks.classList.toggle('active');
})