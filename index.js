const teamMembers = [
  {
    name: "Harry Nguyen",
    position: "Packer, Cleaner",
    bioId: 0 // Reference to the bio array
  },
  {
    name: "Brian Kwon",
    position: "Programmer",
    bioId: 1 // Reference to the bio array
  },
  {
    name: "Henry Xing",
    position: "Notebooker",
    bioId: 2 // Reference to the bio array
  },
  {
    name: "Jeremy Leung",
    position: "Notebooker",
    job: "Blank",
    bioId: 3 // Reference to the bio array
  },
  {
    name: "Tilman Wyss",
    position: "Builder",
    bioId: 4 // Reference to the bio array
  },
  {
    name: "Kenan Khatib",
    position: "Notebooker",
    bioId: 5 // Reference to the bio array
  },
  {
    name: "Z’ev Danielli",
    position: "Programmer",
    bioId: 6 // Reference to the bio array
  },
  // Add more team members here
];

const bio = [
  {
    about: "I’m the team lead and driver of 98040C and a freshman at MIHS. Besides robotics I like playing tennis and hanging out with friends.", //harry
    imgSrc: "images/Harry.jpeg",
  },
  {
    about: "During my free time I like to code small games, swim, spend time with my family, learn other languages of code, and play the violin.", //brian
    imgSrc: "images/Brian.png",
  },
  {
    about: "Outside of robotics, I enjoy swimming, playing my oboe, playing piano, hanging out with friends, and watching movies with my family.", //henry
    imgSrc: "path-to-image-2",
  },
  {
    about: "Outside of robotics I like to play the Sax and work on woodworking. This year I am hoping to improve my build quality and efficiency.", //jeremy
    imgSrc: "path-to-image-3",
  },
  {
    about: "In my free time I like to play football and tennis. And let’s face it I also like to eat McDonald’s and play Brawl stars.", //til
    imgSrc: "path-to-image-4",
  },
  {
    about: "Outside of robotics I enjoy playing tennis and golf. I like working on the notebook and am learning Cad this year.", //kenan
    imgSrc: "images/Kenan.png",
  },
  {
    about: "In my free time I like to mod for Tmodloader and grind rowing I also know multiple programming languages This year I would like to do more work and go further on the team ", //zevi
    imgSrc: "path-to-image-6",
  },
  // Add more bios here
];

function createMemberCard(member) {
  const memberBio = bio[member.bioId]; // Retrieve bio information using bioId
  return `
    <div class="member-card-container">
      <div class="member-card" data-bio-id="${member.bioId}">
        <h3>${member.name}</h3>
        <p>${member.position}</p>
      </div>
      <div class="bio-container" data-bio-id="${member.bioId}">
        <div class="bio">
          <div class="bio-content">
            <div class="about-me">
              <h2>About Me</h2>
              <p>${memberBio.about}</p>
            </div>
          </div>
          <img src="${memberBio.imgSrc}" alt="${member.name}">
        </div>
      </div>
      <div class="element"></div>
    </div>
  `;
}

// Function to render team members
function renderTeamMembers() {
  const teamSection = document.querySelector(".team-section");
  teamMembers.forEach((member) => {
    teamSection.innerHTML += createMemberCard(member);
  });
}

// Call the function to render team members
  renderTeamMembers();
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    let slides = document.getElementsByClassName("mySlide");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 4 seconds
  }

  window.addEventListener("scroll", function () {
    var scrollValue = window.scrollY;
    var slideshow = document.querySelector(".slideshow-container");

    if (scrollValue > 150) {
      // Adjust the scroll threshold as needed
      slideshow.classList.add("fade-out");
    } else {
      slideshow.classList.remove("fade-out");
    }
  });
  document.getElementById('penguin_mode_select').addEventListener('click', function() {
    document.body.classList.toggle('penguin-mode');
});
document.addEventListener('DOMContentLoaded', function () {
  const memberCards = document.querySelectorAll('.member-card');

  memberCards.forEach(card => {
    const element = card.nextElementSibling;

    card.addEventListener('mouseenter', () => {
      element.style.opacity = '1';
      element.style.visibility = 'visible';
    });

    card.addEventListener('mouseleave', () => {
      element.style.opacity = '0';
      element.style.visibility = 'hidden';
    });
  });
});