// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCQcVj-0Be5_riZGy78furc9QI1gTl2vno",
    authDomain: "train-scheduler-b6603.firebaseapp.com",
    databaseURL: "https://train-scheduler-b6603.firebaseio.com",
    projectId: "train-scheduler-b6603",
    storageBucket: "train-scheduler-b6603.appspot.com",
    messagingSenderId: "995481655505"
  };
  
  firebase.initializeApp(config);
  var database = firebase.database();

  // Whenever a user clicks the submit-train button
$("#submit").on("click", function(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get the input values
  var trainName = $("#train-input").val()
  var destination = $("#destination-input").val()
  var firstTime = $("#time-input").val()
  var frequency = $("#freq-input").val()

  //log for debugging
  console.log(trainName)
  console.log(destination)
  console.log(firstTime)
  console.log(frequency)

    // Save the new price in Firebase
    //TODO: change to .push()
    database.ref().set({
      trainName: trainName,
      destination: destination,
      firstTime: firstTime,
      frequency: frequency
    });

    // Change the HTML to reflect the new train
    var newTR = $("<tr>")
    var newTDName = $("<td>").text(trainName)
    var vewTDDest = $("<td>").text(destination)
    //TODO: calculate first time and minutes away
    var newTDTime = $("<td>").text("*need to calc")
    var newTDMin = $("<td>").text("*need to calc")

    newTR.append(newTDName).append(vewTDDest).append(newTDTime).append(newTDMin)
    $("#train-table-body").append(newTR)

});

// At the initial load and subsequent value changes, get a snapshot of the stored data.
database.ref().on("value", function(snapshot) {

    //TODO: loop through all records and display to the grid


}, function(error) {
    console.log("Database call failed: " + error.code)
});