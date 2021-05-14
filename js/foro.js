function ratio(starPush){
    var starOne = document.getElementById("starOne");
    var starTwo = document.getElementById("starTwo");
    var starThree = document.getElementById("starThree");
    var starFour = document.getElementById("starFour");
    var starFive = document.getElementById("starFive");
    switch (starPush) {

        case "starOne":
            starOne.classList.replace("far","fas");
            starTwo.classList.replace("fas","far");
            starThree.classList.replace("fas","far");
            starFour.classList.replace("fas","far");
            starFive.classList.replace("fas","far");
            break;
        case "starTwo":
            starOne.classList.replace("far","fas");
            starTwo.classList.replace("far","fas");
            starThree.classList.replace("fas","far");
            starFour.classList.replace("fas","far");
            starFive.classList.replace("fas","far");
            
            break;
        case "starThree":
            starOne.classList.replace("far","fas");
            starTwo.classList.replace("far","fas");
            starThree.classList.replace("far","fas");
            starFour.classList.replace("fas","far");
            starFive.classList.replace("fas","far");
            break;
            
        case "starFour":
            starOne.classList.replace("far","fas");
            starTwo.classList.replace("far","fas");
            starThree.classList.replace("far","fas");
            starFour.classList.replace("far","fas");
            starFive.classList.replace("fas","far");
            break;
        case "starFive":
            starOne.classList.replace("far","fas");
            starTwo.classList.replace("far","fas");
            starThree.classList.replace("far","fas");
            starFour.classList.replace("far","fas");
            starFive.classList.replace("far","fas");
            break;
        default:
            
            break;
    }
    
}
  