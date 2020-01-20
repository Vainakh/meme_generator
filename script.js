let myForm = document.querySelector(".form");//console.log(myForm);
let topText = myForm.querySelector("#top-text"); //console.log(topText);
let myUrl = myForm.querySelector("#url");//console.log(myUrl);
let bottomText = myForm.querySelector("#bottom-text");//console.log(bottomText);
let button = myForm.querySelector("button[type=submit]");// console.log(button);
let holder = myForm.querySelector(".meme-holder"); //console.log(holder);



// deleting meme on click
let removeMyMeme = function (event) {
    if (!event.target.closest('.myMeme')) return;
    event.target.remove();
};

myForm.addEventListener("submit", function(event) {
  event.preventDefault();

    let img = new Image();
    img.src = myUrl.value;


    // create meme div
    let myMeme = document.createElement('div');
    myMeme.classList.add('myMeme');

    // function fillBar(seconds) {
    //     // console.log("click");
    //     let bar = document.querySelector(".bar");
    //     bar.style.transition = `${seconds}s linear width`;
    //     bar.style.width = '100%';
    //     // let atPercent = 0;
    //     // let interval = setInterval(() => {
    //     //     atPercent ++;
    //     //     console.log("running at", atPercent + "%");
    //     //     bar.style.width =  atPercent + "%";
    //     //     if(atPercent >= 100) {
    //     //         clearInterval(interval);
    //     //     }
    //     // }, (seconds * 1000) / 100);

    // }

            //  top text
            if (topText.value) {
                let top = document.createElement('span');
                top.classList.add('top-text');
                top.textContent = topText.value;
                myMeme.appendChild(top);
            }

            // bottom text
            if (bottomText.value) {
                let bottom = document.createElement('span');
                bottom.classList.add('bottom-text');
                bottom.textContent = bottomText.value;
                myMeme.appendChild(bottom);
            }

            //add meme
            myMeme.appendChild(img);
            holder.appendChild(myMeme);


            // let removeButton = document.createElement("button");
            // removeButton.innerText = "Delete Meme!";
            // let buttonli = document.createElement("li");
            // buttonli.classList.add("remove-btn");
            // myMeme.appendChild(buttonli);
            // buttonli.appendChild(removeButton);


            myForm.reset();

    
});


// listening for click inside holder area
holder.addEventListener('click', function (event) {
    removeMyMeme(event);
}, false);

