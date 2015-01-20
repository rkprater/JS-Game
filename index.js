
  console.log("Welcome to Mayberry!");

  var ready = confirm("Howdy! Are you ready to play Andy Griffith trivia?");
  if (ready === true) {
    alert("Grab a Cherry Coke and wake your brain up")
  } else {
      alert("Sorry, we're going back to the 60's anyways!")
  };

  alert("Choose your helper first");

  var character = prompt("Which helper would you like? You can choose from: Goober, Gomer, Otis or Floyd").toLowerCase();
  if (character === "Goober") {
    alert("You must be feeling childlike and not very bright");
  } else if (character === "Gomer") {
    alert("You're a little smarter but a goofy member of the USMC");
  } else if (character === "Otis") {
    alert("You like to drink and have chosen the town drunk");
  } else if (character === "Floyd") {
    alert("You should consider a career change, Floyd was the town barber");
  };

  var questionOne = prompt("Who was Andy's trusty deputy? Barney, Cletus or Jedadiah").toLowerCase();
  if (questionOne === "Cletus", "Jedadiah") {
    alert("That is incorrect and you have been thrown in the Mayberry jail. Game over! ");

  } else if (questionOne === "Barney") {
    alert("You are correct. The next chance for points will be chosen by you");
  };
