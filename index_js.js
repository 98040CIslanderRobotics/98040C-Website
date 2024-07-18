const teamMembers = [
    {
      name: "Harry Nguyen",
      position: "Driver, Builder",
      imgSrc: "path-to-image",
      bio: "I am the lead packer!",
    },
    {
      name: "Brian Kwon",
      position: "Programmer",
      imgSrc: "path-to-image",
      bio: "I’m one of the coders on our team!",
    },
    {
      name: "Jeremy Leung",
      position: "Notebooker",
      imgSrc: "path-to-image",
      bio: "Blank",
    },
    {
      name: "Tilman Wyss",
      position: "Builder",
      imgSrc: "path-to-image",
      bio: "I,m one of the builders on our team!",
    },
    {
      name: "Kenan Khatib",
      position: "Notebooker",
      imgSrc: "path-to-image",
      bio: "📝I am one of the team notebookers📝",
    },
    {
      name: "Henry Xing",
      position: "Notebooker",
      imgSrc: "path-to-image",
      bio: "📝I am one of the team notebookers📝",
    },
    {
      name: "Z’ev Danielli",
      position: "Programmer",
      imgSrc: "path-to-image",
      bio: "I’m awesome.",
    },
    // Add more team members here
  ];

  function createMemberCard(member) {
    return `
<div class="member-card">
  <img src="${member.imgSrc}" alt="${member.name}" />
  <h3>${member.name}</h3>
  <p>${member.position}</p>
  <p>${member.bio}</p>
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
  document.getElementById('dark_mode_select').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});