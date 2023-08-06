// const selectedValues = {};

// function handleDropdownItemClick(item, dropdownList, input) {
//   const selectedValue = item.textContent;
//   input.value = selectedValue;
//   selectedValues[input.id] = selectedValue;
//   dropdownList.style.display = "none";
// }

// function populateDropdownList(dropdownList, values, input) {
//   dropdownList.innerHTML = "";
//   values.forEach((value) => {
//     const item = document.createElement("div");
//     item.classList.add("dropdown-item");
//     item.textContent = value;
//     item.addEventListener("click", () => {
//       handleDropdownItemClick(item, dropdownList, input);
//     });
//     dropdownList.appendChild(item);
//   });
// }

// // Fruit names for each dropdown
// const names1 = ["Apple", "Banana", "Cherry", "Grape", "Orange", "Pear"];
// const names2 = ["Lemon", "Mango", "Kiwi", "Pineapple", "Watermelon"];
// const names3 = ["Strawberry", "Blueberry", "Raspberry", "Blackberry", "Cranberry"];
// const names4 = ["Peach", "Plum", "Apricot", "Nectarine", "Fig"];
// const names5a = ["Coconut", "Guava", "Papaya", "Lychee", "Dragon Fruit"];
// const names5b = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// const names5c = ["Apple", "Banana", "Cherry", "Grape", "Orange", "Pear"];
// const names6 = ["Coconut", "Guava", "Papaya", "Lychee", "Dragon Fruit"];
// const names7 = ["Coconut", "Guava", "Papaya", "Lychee", "Dragon Fruit"];
// const names8 = ["Coconut", "Guava", "Papaya", "Lychee", "Dragon Fruit"];
// const names9 = ["Coconut", "Guava", "Papaya", "Lychee", "Dragon Fruit"];
// const names10 = ["Coconut", "Guava", "Papaya", "Lychee", "Dragon Fruit"];

// // Function to handle the dropdown filtering
// function handleDropdownFilter(event, dropdownList) {
//   const filterValue = event.target.value.toLowerCase();
//   const dropdownItems = dropdownList.querySelectorAll(".dropdown-item");

//   let hasVisibleItems = false;

//   dropdownItems.forEach((item) => {
//       const itemText = item.textContent.toLowerCase();
//       if (itemText.includes(filterValue)) {
//           item.style.display = "block";
//           hasVisibleItems = true;
//       } else {
//           item.style.display = "none";
//       }
//   });

//   dropdownList.style.display = hasVisibleItems ? "block" : "none";
// }

// // Function to initialize each dropdown with values and event listeners
// function initializeDropdown(inputId, listId, values, submitButtonId) {
//   const dropdownList = document.getElementById(listId);
//   const input = document.getElementById(inputId);
//   const submitButton = document.getElementById(submitButtonId);

//   populateDropdownList(dropdownList, values, input);

//   input.addEventListener("focus", (event) => handleDropdownFilter(event, dropdownList));
//   input.addEventListener("input", (event) => handleDropdownFilter(event, dropdownList));

//   if(inputId !== "filterInput5a" && inputId !== "filterInput5b") {
//     submitButton.addEventListener("click", () => {
//       alert(`Selected Fruit: ${selectedValues[inputId]}`);
//       // let allSelectedValues = "Selected Values:\n";
//       // for (const key in selectedValues) {
//       //   allSelectedValues += `${key}: ${selectedValues[key]}\n`;
//       // }
//       // alert(allSelectedValues);
//     });
//   }

//   else {
//     submitButton.addEventListener("click", () => {
//       const input = document.getElementById("filterInput5c");
//       selectedValues["filterInput5c"] = input.value;
//       const teacher = selectedValues["filterInput5a"];
//       const day = selectedValues["filterInput5b"];
//       const time = selectedValues["filterInput5c"];

//       if (teacher && day && time) {
//         alert(`Teacher: ${teacher}\nDay: ${day}\nTime: ${time}`);
//       }
//       else {
//         alert("Please select both a fruit and a flower.");
//       }
//       // let allSelectedValues = "Selected Values:\n";
//       // for (const key in selectedValues) {
//       //   allSelectedValues += `${key}: ${selectedValues[key]}\n`;
//       // }
//       // alert(allSelectedValues);
//     });
//   }

//   document.addEventListener("click", (event) => {
//     if (!event.target.matches(`#${inputId}, .dropdown-item`)) {
//       dropdownList.style.display = "none";
//     }
//   });
// }


// // Call the function to initialize each dropdown
// initializeDropdown("filterInput1", "dropdownList1", names1, "submitButton1");
// initializeDropdown("filterInput2", "dropdownList2", names2, "submitButton2");
// initializeDropdown("filterInput3", "dropdownList3", names3, "submitButton3");
// initializeDropdown("filterInput4", "dropdownList4", names4, "submitButton4");
// initializeDropdown("filterInput5a", "dropdownList5a", names5a, "submitButton5");
// initializeDropdown("filterInput5b", "dropdownList5b", names5b, "submitButton5");
// initializeDropdown("filterInput6", "dropdownList6", names6, "submitButton6");
// initializeDropdown("filterInput7", "dropdownList7", names7, "submitButton7");
// initializeDropdown("filterInput8", "dropdownList8", names8, "submitButton8");
// initializeDropdown("filterInput9", "dropdownList9", names9, "submitButton9");
// initializeDropdown("filterInput10", "dropdownList10", names10, "submitButton10");

// // Rest of the code remains the same as before

// function hideAllInputContainers(exceptContainer) {
//   const allInputContainers = document.querySelectorAll(".dropdown-container");
//   allInputContainers.forEach((container) => {
//     if (container !== exceptContainer) {
//       container.style.display = "none";
//     }
//   });
// }

// // Function to show the dropdown container when a button is clicked
// function showInputContainer(inputContainer) {
//   hideAllInputContainers(inputContainer);

//   // Show the clicked input container
//   inputContainer.style.display = "block";

  
// }

// // Add an event listener to each question button to show the respective input container
// function addEventListenerToQuestionBtns() {
//   const questionBtns = document.querySelectorAll(".set");
//   questionBtns.forEach((btn) => {
//     btn.addEventListener("click", () => {
//       const inputContainerId = btn.id.replace("-btn", "-input");
//       const inputContainer = document.getElementById(inputContainerId);
//       showInputContainer(inputContainer);
//     });
//   });
// }


// // Function to initialize the code on page load
// function init() {
//   addEventListenerToQuestionBtns();
// }

// // Call the init function on page load
// window.onload = init;


function filterDropdownItems(inputValue, dropdownListId) {
  const dropdownItems = document.querySelectorAll(`#${dropdownListId} .dropdown-item`);
  dropdownItems.forEach(item => {
      if (item.textContent.toLowerCase().includes(inputValue)) {
          item.style.display = "block";
      } else {
          item.style.display = "none";
      }
  });
}

// Function to show the dropdown list on focus and hide on focusout
function handleDropdownFocus(dropdownListId, inputId) {
  const dropdownListElement = document.getElementById(dropdownListId);
  const inputElement = document.getElementById(inputId);

  inputElement.addEventListener("focus", function () {
      const inputValue = inputElement.value.toLowerCase();
      filterDropdownItems(inputValue, dropdownListId);
      dropdownListElement.style.display = "block";
  });

  inputElement.addEventListener("keyup", function () {
      const inputValue = inputElement.value.toLowerCase();
      filterDropdownItems(inputValue, dropdownListId);
      dropdownListElement.style.display = "block";
  });

  document.addEventListener("click", function (event) {
      if (!event.target.closest(`#${dropdownListId}`) && event.target !== inputElement) {
          dropdownListElement.style.display = "none";
      }
  });
}

// Function to hide all the dropdown-container divs within the split right div
function hideAllDropdownContainers() {
  const dropdownContainers = document.querySelectorAll(".split.right .dropdown-container");
  dropdownContainers.forEach(div => {
      div.style.display = "none";
  });
}

// Function to show the respective dropdown-container div when a button is clicked
function showDropdownContainer(divId) {
  hideAllDropdownContainers();
  const div = document.getElementById(divId);
  if (div) {
      div.style.display = "block";
  }
}

// Array to store button IDs and corresponding dropdown-container IDs
const buttonContainerMap = [
  { buttonId: "q1-btn", containerId: "q1-input" },
  { buttonId: "q2-btn", containerId: "q2-input" },
  { buttonId: "q3-btn", containerId: "q3-input" },
  { buttonId: "q4-btn", containerId: "q4-input" },
  { buttonId: "q5-btn", containerId: "q5-input" },
  { buttonId: "q6-btn", containerId: "q6-input" },
  { buttonId: "q7-btn", containerId: "q7-input" },
  { buttonId: "q8-btn", containerId: "q8-input" },
  { buttonId: "q9-btn", containerId: "q9-input" },
  { buttonId: "q10-btn", containerId: "q10-input" },
];

// Add event listeners to the buttons using a loop
buttonContainerMap.forEach(({ buttonId, containerId }) => {
  document.getElementById(buttonId).addEventListener("click", function () {
      showDropdownContainer(containerId);
  });
});

function query1() {
  // Get the values from the input fields
  var teacherName = $('#filterInput1').val();

  var formData = new FormData();
  formData.append('teacher_name', teacherName);

  $.ajax({
      url: "/student-form1", // Replace with your Flask backend endpoint
      type: 'POST',
      data: formData,
      contentType: false,
      processData: false,
      success: function(response) {
          // Handle the response from the backend if needed
          console.log(response);
      },
      error: function(error) {
          // Handle any errors that occurred during the AJAX request
          console.error(error);
      }
  });
}

// Function to handle form submission for query2
function query2() {
  // Get the values from the input fields
  var subjectName = $('#filterInput2').val();

  var formData = new FormData();
  formData.append('subject_name', subjectName);

  $.ajax({
      url: "/student-form2",
      type: 'POST',
      data: formData,
      contentType: false,
      processData: false,
      success: function(response) {
          // Handle the response from the backend if needed
          console.log(response);
          
      },
      error: function(error) {
          // Handle any errors that occurred during the AJAX request
          console.error(error);
      }
  });

}


// Function to handle form submission for query2
function query3() {
  // Get the values from the input fields
  var subjectName = $('#filterInput3').val();

  var formData = new FormData();
  formData.append('subject_name', subjectName);

  $.ajax({
      url: "/student-form3",
      type: 'POST',
      data: formData,
      contentType: false,
      processData: false,
      success: function(response) {
          // Handle the response from the backend if needed
          console.log(response);
          
      },
      error: function(error) {
          // Handle any errors that occurred during the AJAX request
          console.error(error);
      }
  });
}

// Function to handle form submission for query2
function query4() {
  // Get the values from the input fields
  var teacherName = $('#filterInput4').val();

  var formData = new FormData();
  formData.append('teacher_name', teacherName);

  $.ajax({
      url: "/student-form4",
      type: 'POST',
      data: formData,
      contentType: false,
      processData: false,
      success: function(response) {
          // Handle the response from the backend if needed
          console.log(response);
          
      },
      error: function(error) {
          // Handle any errors that occurred during the AJAX request
          console.error(error);
      }
  });
}

// Function to handle form submission for query2
function query5() {
  // Get the values from the input fields
  var teacherName = $('#filterInput5a').val();
  var day = $('#dropdownList5b').val();
  var time = $('#filterInput5c').val();

  var formData = new FormData();
  formData.append('teacher_name', teacherName);
  formData.append('day', day);
  formData.append('time', time);

  $.ajax({
      url: "/student-form5",
      type: 'POST',
      data: formData,
      contentType: false,
      processData: false,
      success: function(response) {
          // Handle the response from the backend if needed
          console.log(response);
          
      },
      error: function(error) {
          // Handle any errors that occurred during the AJAX request
          console.error(error);
      }
  });
}

// Function to handle form submission for query2
function query6() {
  // Get the values from the input fields
  var placeName = $('#filterInput6').val();

  var formData = new FormData();
  formData.append('place_name', placeName);

  $.ajax({
      url: "/student-form6",
      type: 'POST',
      data: formData,
      contentType: false,
      processData: false,
      success: function(response) {
          // Handle the response from the backend if needed
          console.log(response);
          
      },
      error: function(error) {
          // Handle any errors that occurred during the AJAX request
          console.error(error);
      }
  });
}

// Function to handle form submission for query2
function query7() {
  // Get the values from the input fields
  var branchName = $('#filterInput7').val();

  var formData = new FormData();
  formData.append('class_name', branchName);

  $.ajax({
      url: "/student-form7",
      type: 'POST',
      data: formData,
      contentType: false,
      processData: false,
      success: function(response) {
          // Handle the response from the backend if needed
          console.log(response);
          
      },
      error: function(error) {
          // Handle any errors that occurred during the AJAX request
          console.error(error);
      }
  });
}

// Function to handle form submission for query2
function query8() {
  // Get the values from the input fields
  var areaOfInterest = $('#filterInput8').val();

  var formData = new FormData();
  formData.append('aoi', areaOfInterest);

  $.ajax({
      url: "/student-form8",
      type: 'POST',
      data: formData,
      contentType: false,
      processData: false,
      success: function(response) {
          // Handle the response from the backend if needed
          console.log(response);
          
      },
      error: function(error) {
          // Handle any errors that occurred during the AJAX request
          console.error(error);
      }
  });
}

function fun(dropdownListId, filterInputId, value) {
  var dropdownListElement = document.getElementById(dropdownListId);
  var filterInput = document.getElementById(filterInputId); // Get the input element itself

  var formData = new FormData();
  formData.append("q", value);

  $.ajax({
      url: "/get_dropdown_data",
      type: 'POST',
      data: formData,
      contentType: false,
      processData: false,
      success: function(response) {
          // Handle the response from the backend if needed
          console.log(response);
          
          dropdownValues = response;

          // Clear the existing dropdown items
          dropdownListElement.innerHTML = "";

          // Add the dropdown values to the dropdown list
          dropdownValues.forEach(value => {
              const option = document.createElement("div");
              option.textContent = value;
              console.log(value);
              option.classList.add("dropdown-item");

              // Handle click on the dropdown item
              option.addEventListener("click", function () {
                  // Display the selected item in the input field
                  filterInput.value = value;
                  dropdownListElement.style.display = "none"; // Hide the dropdown after selection
              });

              dropdownListElement.appendChild(option);
          });

          // If you want to handle focus for this dropdown list, you can call the handleDropdownFocus function here
          handleDropdownFocus(dropdownListId, filterInputId);

      },
      
      error: function(error) {
          // Handle any errors that occurred during the AJAX request
          console.error(error);
      }
  });
}







