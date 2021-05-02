document.addEventListener("DOMContentLoaded",docIsReady);
var feedbackBook;
function docIsReady(){

	feedbackBook= localStorage["Feedback List"]
  console.log(feedbackBook)
	if (feedbackBook==null){
		feedbackBook=[];
	}
	else {
		feedbackBook= JSON.parse(feedbackBook)
	}
}

function saveToStorage() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var fullName = firstName + " " + lastName;

  var reason = reasonForFeedback()

  var country = document.getElementById("countrieslist").value;

  var email = document.getElementById("email").value;

  var feedback = document.getElementById("textarea").value;

  var obj = {"name" : fullName, "reason" : reason, "email" : email, "country": country, "feedback" : feedback};
  feedbackBook.push(obj)
  localStorage["Feedback List"] = JSON.stringify(feedbackBook);
  console.log(obj)
  console.log(localStorage["Feedback List"])

  alert("Thank you for your feedback, " + fullName + "!");

  emptyForm()
  }

function reasonForFeedback() {
  var complaint = document.getElementById("complaint").checked;
  var improvement = document.getElementById("improvement").checked;
  var suggestion = document.getElementById("suggestion").checked;
  var reason = ""

  if (complaint == true) {
      reason = "Complaint";
    } else if (improvement == true) {
      reason = "Improvement";
    } else if (suggestion == true) {
      reason = "Suggestion";
    }

  return reason;
}

function emptyForm() {
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("complaint").checked = false;
  document.getElementById("improvement").checked = false;
  document.getElementById("suggestion").checked = false;
  document.getElementById("countrieslist").value = "";
  document.getElementById("email").value = "";
  document.getElementById("textarea").value = "";
}

function extractFromStorage() {
    for (i = 0; i < feedbackBook.length; i++) {
      var row = document.getElementById("lists").insertRow(-1);

      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);

      cell1.innerHTML = feedbackBook[i].name
      cell2.innerHTML = feedbackBook[i].reason
      cell3.innerHTML = feedbackBook[i].country
      cell4.innerHTML = feedbackBook[i].email
      cell5.innerHTML = feedbackBook[i].feedback
    }
  }


function validateLogin() {
  var adminID = document.getElementById("admin").value;
  var adminPass = document.getElementById("adminPass").value;

  if (adminID != "admin" || adminPass != "cs1902") {
    alert("Incorrect ID or Password");
    return false
    }
  else {
    window.location = "feedback.html"
  }
}

document.addEventListener("DOMContentLoaded", extractFromStorage)
