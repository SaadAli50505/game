document.addEventListener("keydown", (e) => {
  if (
    e.key.toLowerCase() === "s" &&
    document.getElementById("btnblue").disabled
  ) {
    redTurn();
  }
});
document.addEventListener("keydown", (e) => {
  if (
    e.key.toLowerCase() === "k" &&
    document.getElementById("btnred").disabled
  ) {
    blueTurn();
  }
});

//-Getting Stored Players Name from Local Storage-//
var out = localStorage.getItem("link");
console.log(out);

//-Player 1 Name-//
var index = out.indexOf("&");
var player_1_name = out.slice(0, index);
document.getElementById("heading1").innerHTML = player_1_name;

//-Player 2 Name-//
var afterIndex = index + 1;
var len = out.length;
var player_2_name = out.slice(afterIndex, len);
document.getElementById("heading2").innerHTML = player_2_name;

//-All 200 Div Token Array-//
var elements = [
  "redtoken1",
  "bluetoken1",
  "redtoken2",
  "bluetoken2",
  "redtoken3",
  "bluetoken3",
  "redtoken4",
  "bluetoken4",
  "redtoken5",
  "bluetoken5",
  "redtoken6",
  "bluetoken6",
  "redtoken7",
  "bluetoken7",
  "redtoken8",
  "bluetoken8",
  "redtoken9",
  "bluetoken9",
  "redtoken10",
  "bluetoken10",
  "redtoken1",
  "bluetoken1",
  "redtoken2",
  "bluetoken2",
  "redtoken3",
  "bluetoken3",
  "redtoken4",
  "bluetoken4",
  "redtoken5",
  "bluetoken5",
  "redtoken6",
  "bluetoken6",
  "redtoken7",
  "bluetoken7",
  "redtoken8",
  "bluetoken8",
  "redtoken9",
  "bluetoken9",
  "redtoken10",
  "bluetoken10",
  "redtoken11",
  "bluetoken11",
  "redtoken12",
  "bluetoken12",
  "redtoken13",
  "bluetoken13",
  "redtoken14",
  "bluetoken14",
  "redtoken15",
  "bluetoken15",
  "redtoken16",
  "bluetoken16",
  "redtoken17",
  "bluetoken17",
  "redtoken18",
  "bluetoken18",
  "redtoken19",
  "bluetoken19",
  "redtoken20",
  "bluetoken20",
  "redtoken21",
  "bluetoken21",
  "redtoken22",
  "bluetoken22",
  "redtoken23",
  "bluetoken23",
  "redtoken24",
  "bluetoken24",
  "redtoken25",
  "bluetoken25",
  "redtoken26",
  "bluetoken26",
  "redtoken27",
  "bluetoken27",
  "redtoken28",
  "bluetoken28",
  "redtoken29",
  "bluetoken29",
  "redtoken30",
  "bluetoken30",
  "redtoken31",
  "bluetoken31",
  "redtoken32",
  "bluetoken32",
  "redtoken33",
  "bluetoken33",
  "redtoken34",
  "bluetoken34",
  "redtoken35",
  "bluetoken35",
  "redtoken36",
  "bluetoken36",
  "redtoken37",
  "bluetoken37",
  "redtoken38",
  "bluetoken38",
  "redtoken39",
  "bluetoken39",
  "redtoken40",
  "bluetoken40",
  "redtoken41",
  "bluetoken41",
  "redtoken42",
  "bluetoken42",
  "redtoken43",
  "bluetoken43",
  "redtoken44",
  "bluetoken44",
  "redtoken45",
  "bluetoken45",
  "redtoken46",
  "bluetoken46",
  "redtoken47",
  "bluetoken47",
  "redtoken48",
  "bluetoken48",
  "redtoken49",
  "bluetoken49",
  "redtoken50",
  "bluetoken50",
  "redtoken51",
  "bluetoken51",
  "redtoken52",
  "bluetoken52",
  "redtoken53",
  "bluetoken53",
  "redtoken54",
  "bluetoken54",
  "redtoken55",
  "bluetoken55",
  "redtoken56",
  "bluetoken56",
  "redtoken57",
  "bluetoken57",
  "redtoken58",
  "bluetoken58",
  "redtoken59",
  "bluetoken59",
  "redtoken60",
  "bluetoken60",
  "redtoken61",
  "bluetoken61",
  "redtoken62",
  "bluetoken62",
  "redtoken63",
  "bluetoken63",
  "redtoken64",
  "bluetoken64",
  "redtoken65",
  "bluetoken65",
  "redtoken66",
  "bluetoken66",
  "redtoken67",
  "bluetoken67",
  "redtoken68",
  "bluetoken68",
  "redtoken69",
  "bluetoken69",
  "redtoken70",
  "bluetoken70",
  "redtoken71",
  "bluetoken71",
  "redtoken72",
  "bluetoken72",
  "redtoken73",
  "bluetoken73",
  "redtoken74",
  "bluetoken74",
  "redtoken75",
  "bluetoken75",
  "redtoken76",
  "bluetoken76",
  "redtoken77",
  "bluetoken77",
  "redtoken78",
  "bluetoken78",
  "redtoken79",
  "bluetoken79",
  "redtoken80",
  "bluetoken80",
  "redtoken81",
  "bluetoken81",
  "redtoken82",
  "bluetoken82",
  "redtoken83",
  "bluetoken83",
  "redtoken84",
  "bluetoken84",
  "redtoken85",
  "bluetoken85",
  "redtoken86",
  "bluetoken86",
  "redtoken87",
  "bluetoken87",
  "redtoken88",
  "bluetoken88",
  "redtoken89",
  "bluetoken89",
  "redtoken90",
  "bluetoken90",
  "redtoken91",
  "bluetoken91",
  "redtoken92",
  "bluetoken92",
  "redtoken93",
  "bluetoken93",
  "redtoken94",
  "bluetoken94",
  "redtoken95",
  "bluetoken95",
  "redtoken96",
  "bluetoken96",
  "redtoken97",
  "bluetoken97",
  "redtoken98",
  "bluetoken98",
  "redtoken99",
  "bluetoken99",
  "redtoken100",
  "bluetoken100",
];

for (i = 0; i < elements.length; i++) {
  document.getElementById(elements[i]).style.display = "none";
}
var previousSumOfRed = 0;
var previousSumOfblue = 0;
var previousRedNumber = 0;
var previousBlueNumber = 0;

var redTurn = () => {
  var number1 = Math.trunc(Math.random() * 6) + 1;
  if (previousRedNumber === number1) {
    number1 = Math.trunc(Math.random() * 6) + 1;
    if (previousRedNumber === number1) {
      number1 = Math.trunc(Math.random() * 6) + 1;
      if (previousRedNumber === number1) {
        number1 = Math.trunc(Math.random() * 6) + 1;
      }
    }
  }
  previousRedNumber = number1;
  console.log(number1);

  if (number1 == 1) {
    document.getElementById("reddice").style.display = "none";
    document.getElementById("reddice2").style.display = "none";
    document.getElementById("reddice3").style.display = "none";
    document.getElementById("reddice4").style.display = "none";
    document.getElementById("reddice5").style.display = "none";
    document.getElementById("reddice6").style.display = "none";
    document.getElementById("reddice1").style.display = "block";
    document.getElementById("reddice1").style.animation = "spin 1s linear";
    document.getElementById("btnred").disabled = true;
    document.getElementById("btnblue").disabled = false;
    setTimeout(slower, 2000);
    function slower() {
      document.getElementById("btnred").style.visibility = "hidden";
      document.getElementById("btnblue").style.visibility = "visible";
    }
  } else if (number1 == 2) {
    document.getElementById("reddice").style.display = "none";
    document.getElementById("reddice1").style.display = "none";
    document.getElementById("reddice3").style.display = "none";
    document.getElementById("reddice4").style.display = "none";
    document.getElementById("reddice5").style.display = "none";
    document.getElementById("reddice6").style.display = "none";
    document.getElementById("reddice2").style.display = "block";
    document.getElementById("reddice2").style.animation = "spin 1s linear";
    document.getElementById("btnred").disabled = true;
    document.getElementById("btnblue").disabled = false;
    setTimeout(slower, 2000);
    function slower() {
      document.getElementById("btnred").style.visibility = "hidden";
      document.getElementById("btnblue").style.visibility = "visible";
    }
  } else if (number1 == 3) {
    document.getElementById("reddice").style.display = "none";
    document.getElementById("reddice1").style.display = "none";
    document.getElementById("reddice2").style.display = "none";
    document.getElementById("reddice4").style.display = "none";
    document.getElementById("reddice5").style.display = "none";
    document.getElementById("reddice6").style.display = "none";
    document.getElementById("reddice3").style.display = "block";
    document.getElementById("reddice3").style.animation = "spin 1s linear";
    document.getElementById("btnred").disabled = true;
    document.getElementById("btnblue").disabled = false;
    setTimeout(slower, 2000);
    function slower() {
      document.getElementById("btnred").style.visibility = "hidden";
      document.getElementById("btnblue").style.visibility = "visible";
    }
  } else if (number1 == 4) {
    document.getElementById("reddice").style.display = "none";
    document.getElementById("reddice1").style.display = "none";
    document.getElementById("reddice2").style.display = "none";
    document.getElementById("reddice3").style.display = "none";
    document.getElementById("reddice5").style.display = "none";
    document.getElementById("reddice6").style.display = "none";
    document.getElementById("reddice4").style.display = "block";
    document.getElementById("reddice4").style.animation = "spin 1s linear";
    document.getElementById("btnred").disabled = true;
    document.getElementById("btnblue").disabled = false;
    setTimeout(slower, 2000);
    function slower() {
      document.getElementById("btnred").style.visibility = "hidden";
      document.getElementById("btnblue").style.visibility = "visible";
    }
  } else if (number1 == 5) {
    document.getElementById("reddice").style.display = "none";
    document.getElementById("reddice1").style.display = "none";
    document.getElementById("reddice2").style.display = "none";
    document.getElementById("reddice3").style.display = "none";
    document.getElementById("reddice4").style.display = "none";
    document.getElementById("reddice6").style.display = "none";
    document.getElementById("reddice5").style.display = "block";
    document.getElementById("reddice5").style.animation = "spin 1s linear";
    document.getElementById("btnred").disabled = true;
    document.getElementById("btnblue").disabled = false;
    setTimeout(slower, 2000);
    function slower() {
      document.getElementById("btnred").style.visibility = "hidden";
      document.getElementById("btnblue").style.visibility = "visible";
    }
  } else {
    document.getElementById("reddice").style.display = "none";
    document.getElementById("reddice1").style.display = "none";
    document.getElementById("reddice2").style.display = "none";
    document.getElementById("reddice3").style.display = "none";
    document.getElementById("reddice4").style.display = "none";
    document.getElementById("reddice5").style.display = "none";
    document.getElementById("reddice6").style.display = "block";
    document.getElementById("reddice6").style.animation = "spin 1s linear";
    document.getElementById("btnred").disabled = true;
    function sixdisabled() {
      document.getElementById("btnred").disabled = false;
    }
    setTimeout(sixdisabled, 1500);
  }

  // document.getElementById("reddice").style.animation = "spin 1s linear";
  //document.getElementById("btnred").style.visibility = "hidden";
  //document.getElementById("btnblue").style.visibility = "visible";

  setTimeout(red, 1500, number1);
};

function red(number1) {
  var sum = previousSumOfRed + number1;
  if (sum == 19) {
    sum = 58;
  }
  if (sum == 47) {
    sum = 75;
  }
  if (sum == 68) {
    sum = 89;
  }
  if (sum == 34) {
    sum = 15;
  }
  if (sum == 62) {
    sum = 21;
  }
  if (sum == 70) {
    sum = 31;
  }
  if (sum == 99) {
    sum = 45;
  }
  document.getElementById(`redtoken${sum}`).style.display = "";
  document.getElementById(`redtoken${previousSumOfRed}`).style.display = "none";
  previousSumOfRed = sum;
  if (sum == 100) {
    location.replace("./redWin.html");
  }
}

////////////////////////////////////////////////////
////////////////////////////////////////////////////
//blueturn function/////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////

const blueTurn = () => {
  var number2 = Math.trunc(Math.random() * 6) + 1;
  if (previousBlueNumber === number2) {
    number2 = Math.trunc(Math.random() * 6) + 1;
    if (previousBlueNumber === number2) {
      number2 = Math.trunc(Math.random() * 6) + 1;
      if (previousBlueNumber === number2) {
        number2 = Math.trunc(Math.random() * 6) + 1;
      }
    }
  }

  previousBlueNumber = number2;

  console.log(number2);
  switch (number2) {
    case 1:
      document.getElementById("bluedice").style.display = "none";
      document.getElementById("bluedice2").style.display = "none";
      document.getElementById("bluedice3").style.display = "none";
      document.getElementById("bluedice4").style.display = "none";
      document.getElementById("bluedice5").style.display = "none";
      document.getElementById("bluedice6").style.display = "none";
      document.getElementById("bluedice1").style.display = "block";
      document.getElementById("bluedice1").style.animation = "spin 1s linear";
      document.getElementById("btnblue").disabled = true;
      document.getElementById("btnred").disabled = false;
      setTimeout(slower, 2000);
      function slower() {
        document.getElementById("btnblue").style.visibility = "hidden";
        document.getElementById("btnred").style.visibility = "visible";
      }

      break;
    case 2:
      document.getElementById("bluedice").style.display = "none";
      document.getElementById("bluedice6").style.display = "none";
      document.getElementById("bluedice1").style.display = "none";
      document.getElementById("bluedice3").style.display = "none";
      document.getElementById("bluedice4").style.display = "none";
      document.getElementById("bluedice5").style.display = "none";
      document.getElementById("bluedice2").style.display = "block";
      document.getElementById("bluedice2").style.animation = "spin 1s linear";
      document.getElementById("btnblue").disabled = true;
      document.getElementById("btnred").disabled = false;
      setTimeout(slower, 2000);
      function slower() {
        document.getElementById("btnblue").style.visibility = "hidden";
        document.getElementById("btnred").style.visibility = "visible";
      }
      break;
    case 3:
      document.getElementById("bluedice").style.display = "none";
      document.getElementById("bluedice1").style.display = "none";
      document.getElementById("bluedice2").style.display = "none";
      document.getElementById("bluedice4").style.display = "none";
      document.getElementById("bluedice5").style.display = "none";
      document.getElementById("bluedice6").style.display = "none";
      document.getElementById("bluedice3").style.display = "block";
      document.getElementById("bluedice3").style.animation = "spin 1s linear";
      document.getElementById("btnblue").disabled = true;
      document.getElementById("btnred").disabled = false;
      setTimeout(slower, 2000);
      function slower() {
        document.getElementById("btnblue").style.visibility = "hidden";
        document.getElementById("btnred").style.visibility = "visible";
      }
      break;
    case 4:
      document.getElementById("bluedice").style.display = "none";
      document.getElementById("bluedice1").style.display = "none";
      document.getElementById("bluedice2").style.display = "none";
      document.getElementById("bluedice3").style.display = "none";
      document.getElementById("bluedice5").style.display = "none";
      document.getElementById("bluedice6").style.display = "none";
      document.getElementById("bluedice4").style.display = "block";
      document.getElementById("bluedice4").style.animation = "spin 1s linear";
      document.getElementById("btnblue").disabled = true;
      document.getElementById("btnred").disabled = false;
      setTimeout(slower, 2000);
      function slower() {
        document.getElementById("btnblue").style.visibility = "hidden";
        document.getElementById("btnred").style.visibility = "visible";
      }
      break;
    case 5:
      document.getElementById("bluedice").style.display = "none";
      document.getElementById("bluedice1").style.display = "none";
      document.getElementById("bluedice2").style.display = "none";
      document.getElementById("bluedice3").style.display = "none";
      document.getElementById("bluedice4").style.display = "none";
      document.getElementById("bluedice6").style.display = "none";
      document.getElementById("bluedice5").style.display = "block";
      document.getElementById("bluedice5").style.animation = "spin 1s linear";
      document.getElementById("btnblue").disabled = true;
      document.getElementById("btnred").disabled = false;
      setTimeout(slower, 2000);
      function slower() {
        document.getElementById("btnblue").style.visibility = "hidden";
        document.getElementById("btnred").style.visibility = "visible";
      }
      break;
    case 6:
      document.getElementById("bluedice").style.display = "none";
      document.getElementById("bluedice1").style.display = "none";
      document.getElementById("bluedice2").style.display = "none";
      document.getElementById("bluedice3").style.display = "none";
      document.getElementById("bluedice4").style.display = "none";
      document.getElementById("bluedice5").style.display = "none";
      document.getElementById("bluedice6").style.display = "block";
      document.getElementById("bluedice6").style.animation = "spin 1s linear";
      document.getElementById("btnblue").disabled = true;
      function sixdisabled() {
        document.getElementById("btnblue").disabled = false;
      }
      setTimeout(sixdisabled, 1500);
  }

  //document.getElementById("reddice").style.animation = "spin 1s linear";
  // document.getElementById("btnblue").style.visibility = "hidden";
  // document.getElementById("btnred").style.visibility = "visible";
  setTimeout(blue, 1500, number2);
};
function blue(number2) {
  var sum = previousSumOfblue + number2;
  if (sum == 19) {
    sum = 58;
  }
  if (sum == 47) {
    sum = 75;
  }
  if (sum == 68) {
    sum = 89;
  }
  
  if (sum == 34) {
    sum = 15;
  }
  if (sum == 62) {
    sum = 21;
  }
  if (sum == 70) {
    sum = 31;
  }
  if (sum == 99) {
    sum = 45;
  }
  document.getElementById(`bluetoken${sum}`).style.display = "";
  document.getElementById(`bluetoken${previousSumOfblue}`).style.display =
    "none";
  previousSumOfblue = sum;
  if (sum == 100) {
    location.replace("./blueWin.html");
  }
}
