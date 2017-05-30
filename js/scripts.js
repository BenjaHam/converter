var mlsToCups = function(mls) {
	var mls = parseInt(prompt("How many milileters of vegetable oil are you using?"));
  var cups = mls / 250;
  alert("You are using " + mls + " milileters of vegetable oil, which equals " + cups + " cups");
};

mlsToCups();
