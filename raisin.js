const raisinAlarm = function (cookie) {
  let raisins;
  for (let i = 0; i < cookie.length; i++) {
    if (cookie[i] === "🍇") {
      raisins = true;
      break;
    } else {
      raisins = false;
    }
  }
  if (raisins === true) {
    return "Raisin alert!"
  } else {
    return "All good!"
  }
};


console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

