let rbtn = document.getElementById("rwrite");
let parent = document.getElementsByClassName("parent")[0];
let child = document.getElementsByClassName("child")[0];
let cancel = document.getElementById("cancel");
let container = document.getElementsByClassName("container")[0];
let Name = document.getElementById("name");
let Rating = document.getElementById("selectRate");
let Review = document.getElementById("review");
const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

let result = "resources/img/default1.png";

rbtn.addEventListener("click", () => {
    console.log(child, parent);
    parent.classList.add("padd");
    parent.classList.remove("pz");
    child.classList.add("cadd");
})

let undo = (e) => {
    e.preventDefault();
    child.classList.remove("cadd");
    parent.classList.remove("padd");
    setTimeout(() => {
        parent.classList.add("pz");
    }, 300);
}
let ratingFuntion = (value) => {
    let RateArray = "";
    for (i = 0; i < value; i++) {
        RateArray += `<img class="star" 
src="./resources/img/star-solid.svg" alt="">  `;
    }
    return RateArray;
}
let addReview = () => {
 let date = new Date();
 let year= date.getFullYear();
 let month= monthNames[(date.getMonth())];
 let day= date.getDate();
    container.innerHTML += ` <section class="review">
      <div class="image">
        <img src=${result} alt="" srcset="" />
        <div class="rating">
          <span>
            <h3>${Name.value}</h3>
            <img src="./resources/img/verified.png" alt="" class="verify" />
          </span>

         ${ratingFuntion(Rating.value)}
        
        </div>
      </div>
      <p class="text">
        ${Review.value};
      </p>
      <p class="date"><b> ${day} ${month} ${year} </b></p>
      <div class="source">
        <p>Source:</p>
        <img src="resources/img/google.webp" alt="" />
      </div>
    </section>`
}


cancel.addEventListener("click", (e) => {
    undo(e);
})


child.addEventListener("submit", (e) => {
    e.preventDefault();
    undo(e);
    addReview();
    Name.value = "";
    Rating.value = "5";
    Review.value = "";
    console.log(result);
})







document.getElementById("fileInput").addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById("preview").src = e.target.result;
            result = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});


