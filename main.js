const horizScroll = document.querySelector(".wrappen__participants");
const rightBtn = document.getElementById("rightBtn");
const leftBtn = document.getElementById("leftBtn");
const kolPar = document.getElementById("kolPar");

let number = 3;
let numberMob = 1;
const numbers = 6;
if (document.documentElement.clientWidth > 400) {
  kolPar.textContent = `${number} / ${numbers}`;
} else {
  kolPar.textContent = `${numberMob} / ${numbers}`;
}

// leftBtn.disabled = true;
horizScroll.style.scrollBehavior = "smooth";

right = () => {
  if (document.documentElement.clientWidth > 400) {
    kolPar.textContent = `${number + 3} / ${numbers}`;
    horizScroll.scrollLeft += 394;
    rightBtn.disabled = true;
    leftBtn.disabled = false;
  } else {
    if (numberMob !== 5) {
      kolPar.textContent = `${numberMob + 1} / ${numbers}`;
      horizScroll.scrollLeft += 350;
      numberMob++;
      leftBtn.disabled = false;
    } else {
      kolPar.textContent = `${numberMob + 1} / ${numbers}`;
      horizScroll.scrollLeft += 350;
      rightBtn.disabled = true;
      leftBtn.disabled = false;
      numberMob++;
    }
  }
};
left = () => {
  if (document.documentElement.clientWidth > 400) {
    kolPar.textContent = `${number} / ${numbers}`;
    horizScroll.scrollLeft -= 394;
    leftBtn.disabled = true;
    rightBtn.disabled = false;
  } else {
    if (numberMob !== 2) {
      kolPar.textContent = `${numberMob - 1} / ${numbers}`;
      horizScroll.scrollLeft -= 350;
      rightBtn.disabled = false;
      numberMob--;
    } else {
      kolPar.textContent = `${numberMob - 1} / ${numbers}`;
      horizScroll.scrollLeft -= 350;
      leftBtn.disabled = true;
      rightBtn.disabled = false;
      numberMob--;
    }
  }
};

setInterval(() => {
  if (document.documentElement.clientWidth > 400) {
    if (number === 3) {
      right();
      number += 3;
    } else {
      number -= 3;
      left();
    }
  }
}, 4000);

const stageRightBtn = document.getElementById("stage__right");
const stageLeftBtn = document.getElementById("stage__left");
const horizScrollStage = document.querySelector(".stage");
const cirlce = document.querySelectorAll(".stage__slider-circle");
horizScrollStage.style.scrollBehavior = "smooth";
let a = 0;
cirlce[a].style.backgroundColor = "black";
console.log(cirlce.length);
stageRight = () => {
  stageLeftBtn.disabled = false;
  if (a < cirlce.length - 2) {
    horizScrollStage.scrollLeft += 352;
    cirlce[a + 1].style.backgroundColor = "black";
    a += 1;
    cirlce[a - 1].style.backgroundColor = "#D9D9D9";
  } else {
    stageRightBtn.disabled = true;
    horizScrollStage.scrollLeft += 352;
    cirlce[a + 1].style.backgroundColor = "black";
    a += 1;
    cirlce[a - 1].style.backgroundColor = "#D9D9D9";
  }
};

stageLeft = () => {
  if (a !== 1) {
    stageRightBtn.disabled = false;
    horizScrollStage.scrollLeft -= 352;
    cirlce[a].style.backgroundColor = "#D9D9D9";

    cirlce[a - 1].style.backgroundColor = "black";
    a -= 1;
  } else {
    stageLeftBtn.disabled = true;
    horizScrollStage.scrollLeft -= 352;
    cirlce[a].style.backgroundColor = "#D9D9D9";

    cirlce[a - 1].style.backgroundColor = "black";
    a -= 1;
  }
};
