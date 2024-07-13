const generateBars = (noBar = 30) => {
  document.getElementById("bar").innerHTML = "";
  let bars = [];
  for (let i = 0; i < noBar; i++) {
      let Height = Math.floor(Math.random() * 600) + 1;
      bars.push(Height); // add 1 to ensure that bar height should not be zero
  }

  const divs = document.querySelector("#bar");

  for (let x = 0; x < noBar; x++) {
      const temp = document.createElement("div");
      // add classes to the div
      temp.classList.add("sort");
      temp.classList.add("baritem");
      temp.style.height = bars[x] + "px";
      divs.append(temp);
  }
};

let arrsizer = document.querySelector("#sizer");
arrsizer.addEventListener("input", function () {
  generateBars(parseInt(arrsizer.value));
});

generateBars();

let time = 100;
let sortspeed = document.querySelector("#speed");
sortspeed.addEventListener("input", function () {
  time = 300 - parseInt(sortspeed.value);
});


document.getElementById("newarr").addEventListener("click", function () {
  generateBars(arrsizer.value);
  enableSortingBtn();
  enableSizeSlider();
});

const swap = (ele1, ele2) => {
  let temp = ele1.style.height;
  ele1.style.height = ele2.style.height;
  ele2.style.height = temp;
};

const delay = (milisec) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, milisec);
  });
};

function disableSortingBtn() {
  document.querySelector("#bubble").disabled = true;
  document.querySelector("#insertion").disabled = true;
  document.querySelector("#merge").disabled = true;
  document.querySelector("#quick").disabled = true;
  document.querySelector("#selection").disabled = true;
}

function enableSortingBtn() {
  document.querySelector("#bubble").disabled = false;
  document.querySelector("#insertion").disabled = false;
  document.querySelector("#merge").disabled = false;
  document.querySelector("#quick").disabled = false;
  document.querySelector("#selection").disabled = false;
}

function disableSizeSlider() {
  document.getElementById("sizer").disabled = true;
}

function enableSizeSlider() {
  document.getElementById("sizer").disabled = false;
}

