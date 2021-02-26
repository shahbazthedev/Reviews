// local reviews data
const reviews = [
    {
      id: 1,
      name: "Rahim zahid",
      job: "Full stack developer",
      img:
        "rahim.jpg",
      text:
        " Working with the Shahbaz has been a most pleasant experience! The dedication and passion for what he does is attentiveness to the specific needs of our business. ",
    },
    {
      id: 2,
      name: "Saim Ahmed",
      job: "MERN Stack developer",
      img:
        "person-1.jpg",
      text:
        "Working with the Shahbaz was great experience. ",
    },
    {
      id: 3,
      name: "Ateeb Rizwan",
      job: "Wordpress Developer",
      img:
        "ateeb.jpg",
      text:
        "Highly Skilled Developer and Designer, worked like an essential team mate behind our project! Highly Recommended. ",
    },
    {
      id: 4,
      name: "Maaz Navaid",
      job: "Web desinger",
      img:
        "maaz.jpg",
      text:
        "Brilliant. Quick and smart. Mo also gives great input to the project. ",
    },
  ];
  // select items
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");
  
  // set starting item
  let currentItem = 0;
  
  // load initial item
  window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
  // show person based on item
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  // show next person
  nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
      }
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
