const teamMembers = [
  {
    name: "Harry Nguyen",
    position: "Driver, Builder",
    job: "I am the lead packer!",
    bioId: 0 // Reference to the bio array
  },
  {
    name: "Brian Kwon",
    position: "Programmer",
    job: "I’m one of the coders on our team!",
    bioId: 1 // Reference to the bio array
  },
  {
    name: "Jeremy Leung",
    position: "Notebooker",
    job: "Blank",
    bioId: 2 // Reference to the bio array
  },
  {
    name: "Tilman Wyss",
    position: "Builder",
    job: "I’m one of the builders on our team!",
    bioId: 3 // Reference to the bio array
  },
  {
    name: "Kenan Khatib",
    position: "Notebooker",
    job: "📝I am one of the team notebookers📝",
    bioId: 4 // Reference to the bio array
  },
  {
    name: "Henry Xing",
    position: "Notebooker",
    job: "📝I am one of the team notebookers📝",
    bioId: 5 // Reference to the bio array
  },
  {
    name: "Z’ev Danielli",
    position: "Programmer",
    job: "I’m awesome.",
    bioId: 6 // Reference to the bio array
  },
  // Add more team members here
];

const bio = [
  {
    about: "Bio information for Harry", //harry
    imgSrc: "path-to-image-0",
  },
  {
    about: "Bio information for Brian", //brian
    imgSrc: "path-to-image-1",
  },
  {
    about: "Bio information for Jeremy", //jeremy
    imgSrc: "path-to-image-2",
  },
  {
    about: "Bio information for Tilman", //til
    imgSrc: "path-to-image-3",
  },
  {
    about: "Bio information for Kenan", //kenan
    imgSrc: "path-to-image-4",
  },
  {
    about: "Bio information for Henry", //henry
    imgSrc: "path-to-image-5",
  },
  {
    about: "Bio information for Z’ev", //zevi
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
        <p>${member.job}</p>
      </div>
      <div class="bio-container" data-bio-id="${member.bioId}">
        <div class="bio">
          <p>${memberBio.about}</p>
        </div>
        <div class="bio">
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