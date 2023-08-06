// function query1(teacherNameInputId, usernameInputId, timetableInputId, submitButtonId) {
//     document.getElementById(submitButtonId).addEventListener('click', function () {
//         var teacherName = document.getElementById(teacherNameInputId).value;
//         var username = document.getElementById(usernameInputId).value;
//         var timetableFile = document.getElementById(timetableInputId).files[0];
//         var timetableData = null;

//         // Show alert message with teacher name and username
//         alert("Teacher Name: " + teacherName + "\nUsername: " + username);

//         // Check if a file is selected
//         if (timetableFile) {
//             // Assuming you have a function to read the CSV file and store the data in an object.
//             // For simplicity, we will just create an empty object in this example.
//             timetableData = {};
//         }

//         // You can use 'timetableData' object for future reference.
//         console.log("Timetable Data:", timetableData);
//     });
// }

// // List of fruit names
// const fruits_1 = ["apple","banana","cherry","mango","orange","pineapple","strawberry","watermelon"];

//     function query2(inputId, dropdownListId, submitButtonId) {
//         const inputElement = document.getElementById(inputId);
//         const dropdownListElement = document.getElementById(dropdownListId);
//         const submitButton = document.getElementById(submitButtonId);

//         // Function to filter and display relevant fruits
        
//     }

// const fruits_2 = ["apple","banana","cherry","mango","orange","pineapple","strawberry","watermelon"];

//     function query3(inputId, dropdownId, fileInputId, submitButtonId) {
//         const inputElement = document.getElementById(inputId);
//         const fileInputElement = document.getElementById(fileInputId);
//         const dropdownListElement = document.getElementById(dropdownId);
//         const submitButton = document.getElementById(submitButtonId);

//         // Function to filter and display relevant fruits
//         function updateDropdownList() {
//             const inputValue = inputElement.value.toLowerCase();
//             const filteredFruits = fruits_2.filter(fruit =>
//                 fruit.toLowerCase().includes(inputValue)
//             );

//             // Clear the existing dropdown items
//             dropdownListElement.innerHTML = "";

//             // Add filtered fruits to the dropdown list
//             filteredFruits.forEach(fruit => {
//                 const option = document.createElement("div");
//                 option.textContent = fruit;
//                 option.classList.add("dropdown-item");

//                 // Handle click on the dropdown item
//                 option.addEventListener("click", function () {
//                     // Display the selected fruit in the input field
//                     inputElement.value = fruit;

//                     // Hide the dropdown after selection
//                     dropdownListElement.style.display = "none";
//                 });

//                 dropdownListElement.appendChild(option);
//             });

//             // Display the dropdown
//             dropdownListElement.style.display = "block";
//         }

//         // Update the dropdown list when the input field value changes
//         inputElement.addEventListener("input", updateDropdownList);

//         // Handle the input field focus event
//         inputElement.addEventListener("focus", function () {
//             // Show the whole dropdown
//             updateDropdownList();
//         });

//         // Hide the dropdown when the input field loses focus
//         document.addEventListener("click", function (event) {
//             if (!inputElement.contains(event.target) && !dropdownListElement.contains(event.target)) {
//                 dropdownListElement.style.display = "none";
//             }
//         });

//         // Handle the submit button click
//         submitButton.addEventListener("click", function () {
//             const teacherName = inputElement.value.trim();
//             alert("Submitted Teacher Name: " + teacherName);

//             // Store the file input in an object for future reference (if needed)
//             const fileObject = fileInputElement.files[0];
//             console.log(fileObject);
//         });
//     }

//     function query4(inputId, fileInputId, submitButtonId) {
//         const inputElement = document.getElementById(inputId);
//         const fileInputElement = document.getElementById(fileInputId);
//         const submitButton = document.getElementById(submitButtonId);

//         // Function to handle the submit button click
//         function handleSubmitButtonClick() {
//             const className = inputElement.value.trim();
//             alert("Entered Class Name: " + className);
//         }

//         // Handle the submit button click
//         submitButton.addEventListener("click", handleSubmitButtonClick);

//         // Handle the file input change
//         fileInputElement.addEventListener("change", function () {
//             // Store the file input in an object for future reference (if needed)
//             const fileObject = fileInputElement.files[0];
//             console.log(fileObject);
//         });
//     }


// const fruits_3 = ["apple","banana","cherry","mango","orange","pineapple","strawberry","watermelon"];

//     function query5(inputId, dropdownListId, submitButtonId) {
//         const inputElement = document.getElementById(inputId);
//         const dropdownListElement = document.getElementById(dropdownListId);
//         const submitButton = document.getElementById(submitButtonId);

//         // Function to filter and display relevant fruits
//         function updateDropdownList() {
//             const inputValue = inputElement.value.toLowerCase();
//             const filteredFruits = fruits_3.filter(fruit =>
//                 fruit.toLowerCase().includes(inputValue)
//             );

//             // Clear the existing dropdown items
//             dropdownListElement.innerHTML = "";

//             // Add filtered fruits to the dropdown list
//             filteredFruits.forEach(fruit => {
//                 const option = document.createElement("div");
//                 option.textContent = fruit;
//                 option.classList.add("dropdown-item");

//                 // Handle click on the dropdown item
//                 option.addEventListener("click", function () {
//                     // Display the selected fruit in the input field
//                     inputElement.value = fruit;

//                     // Hide the dropdown after selection
//                     dropdownListElement.style.display = "none";
//                 });

//                 dropdownListElement.appendChild(option);
//             });

//             // Display the dropdown
//             dropdownListElement.style.display = "block";
//         }

//         // Update the dropdown list when the input field value changes
//         inputElement.addEventListener("input", updateDropdownList);

//         // Handle the input field focus event
//         inputElement.addEventListener("focus", function () {
//             // Show the whole dropdown
//             updateDropdownList();
//         });

//         // Hide the dropdown when the input field loses focus
//         document.addEventListener("click", function (event) {
//             if (!inputElement.contains(event.target) && !dropdownListElement.contains(event.target)) {
//                 dropdownListElement.style.display = "none";
//             }
//         });

//         // Handle the submit button click
//         submitButton.addEventListener("click", function () {
//             // You can add your desired functionality here for handling the form submission
//             alert("Submitted Class Name: " + inputElement.value);
//         });
//     }

// const fruits_4 = ["apple","banana","cherry","mango","orange","pineapple","strawberry","watermelon"];

//     function query6(inputId, dropdownListId, fileInputId, submitButtonId) {
//         const inputElement = document.getElementById(inputId);
//         const dropdownListElement = document.getElementById(dropdownListId);
//         const fileInputElement = document.getElementById(fileInputId);
//         const submitButton = document.getElementById(submitButtonId);

//         // Function to filter and display relevant fruits
//         function updateDropdownList() {
//             const inputValue = inputElement.value.toLowerCase();
//             const filteredFruits = fruits_4.filter(fruit =>
//                 fruit.toLowerCase().includes(inputValue)
//             );

//             // Clear the existing dropdown items
//             dropdownListElement.innerHTML = "";

//             // Add filtered fruits to the dropdown list
//             filteredFruits.forEach(fruit => {
//                 const option = document.createElement("div");
//                 option.textContent = fruit;
//                 option.classList.add("dropdown-item");

//                 // Handle click on the dropdown item
//                 option.addEventListener("click", function () {
//                     // Display the selected fruit in the input field
//                     inputElement.value = fruit;

//                     // Hide the dropdown after selection
//                     dropdownListElement.style.display = "none";
//                 });

//                 dropdownListElement.appendChild(option);
//             });

//             // Display the dropdown
//             dropdownListElement.style.display = "block";
//         }

//         // Update the dropdown list when the input field value changes
//         inputElement.addEventListener("input", updateDropdownList);

//         // Handle the input field focus event
//         inputElement.addEventListener("focus", function () {
//             // Show the whole dropdown
//             updateDropdownList();
//         });

//         // Hide the dropdown when the input field loses focus
//         document.addEventListener("click", function (event) {
//             if (!inputElement.contains(event.target) && !dropdownListElement.contains(event.target)) {
//                 dropdownListElement.style.display = "none";
//             }
//         });

//         // Handle the submit button click
//         submitButton.addEventListener("click", function () {
//             // Show an alert message with the selected fruit
//             if(inputElement && fileInputElement) {
//                 alert("Selected Class Name: " + inputElement.value);
//             }
//             else {
//                 alert("please provide input to both the inputs.")
//             }

//             // Store the file input in an object for future reference (if needed)
//             const fileObject = fileInputElement.files[0];
//             console.log(fileObject);
//         });
//     }



//     function query7(inputId1, inputId2, submitButtonId) {
//         const inputElement1 = document.getElementById(inputId1);
//         const inputElement2 = document.getElementById(inputId2);
//         const submitButton = document.getElementById(submitButtonId);

//         // Handle the submit button click
//         submitButton.addEventListener("click", function () {
//             const inputValue1 = inputElement1.value.trim();
//             const inputValue2 = inputElement2.value.trim();

//             // Check if at least one input has a value
//             if (inputValue1 && inputValue2) {
//                 // Show an alert message with the entered values
//                 alert("Place Name: " + inputValue1 + "\nLocation Name: " + inputValue2);
//             } else {
//                 // Show an alert message to provide at least one input
//                 alert("Please enter both values.");
//             }
//         });
//     }


// const fruits_5 = ["apple","banana","cherry","mango","orange","pineapple","strawberry","watermelon"];
//     function query8(inputId, dropdownListId, submitButtonId) {
//         const inputElement = document.getElementById(inputId);
//         const dropdownListElement = document.getElementById(dropdownListId);
//         const submitButton = document.getElementById(submitButtonId);

//         // Function to filter and display relevant fruits
//         function updateDropdownList() {
//             const inputValue = inputElement.value.toLowerCase();
//             const filteredFruits = fruits_5.filter(fruit =>
//                 fruit.toLowerCase().includes(inputValue)
//             );

//             // Clear the existing dropdown items
//             dropdownListElement.innerHTML = "";

//             // Add filtered fruits to the dropdown list
//             filteredFruits.forEach(fruit => {
//                 const option = document.createElement("div");
//                 option.textContent = fruit;
//                 option.classList.add("dropdown-item");

//                 // Handle click on the dropdown item
//                 option.addEventListener("click", function () {
//                     // Display the selected fruit in the input field
//                     inputElement.value = fruit;

//                     // Hide the dropdown after selection
//                     dropdownListElement.style.display = "none";
//                 });

//                 dropdownListElement.appendChild(option);
//             });

//             // Display the dropdown
//             dropdownListElement.style.display = "block";
//         }

//         // Update the dropdown list when the input field value changes
//         inputElement.addEventListener("input", updateDropdownList);

//         // Handle the input field focus event
//         inputElement.addEventListener("focus", function () {
//             // Show the whole dropdown
//             updateDropdownList();
//         });

//         // Hide the dropdown when the input field loses focus
//         document.addEventListener("click", function (event) {
//             if (!inputElement.contains(event.target) && !dropdownListElement.contains(event.target)) {
//                 dropdownListElement.style.display = "none";
//             }
//         });

//         // Handle the submit button click
//         submitButton.addEventListener("click", function () {
//             // Show an alert message with the selected fruit
//             alert("Selected Place Name: " + inputElement.value);
//         });
//     }


// const fruits_6 = ["apple","banana","cherry","mango","orange","pineapple","strawberry","watermelon"];
//     function query9(inputId1, dropdownListId, inputId2, submitButtonId) {
//         const inputElement1 = document.getElementById(inputId1);
//         const dropdownListElement = document.getElementById(dropdownListId);
//         const inputElement2 = document.getElementById(inputId2);
//         const submitButton = document.getElementById(submitButtonId);

//         // Function to filter and display relevant fruits
//         function updateDropdownList() {
//             const inputValue1 = inputElement1.value.toLowerCase();
//             const filteredFruits = fruits_6.filter(fruit =>
//                 fruit.toLowerCase().includes(inputValue1)
//             );

//             // Clear the existing dropdown items
//             dropdownListElement.innerHTML = "";

//             // Add filtered fruits to the dropdown list
//             filteredFruits.forEach(fruit => {
//                 const option = document.createElement("div");
//                 option.textContent = fruit;
//                 option.classList.add("dropdown-item");

//                 // Handle click on the dropdown item
//                 option.addEventListener("click", function () {
//                     // Display the selected fruit in the input field
//                     inputElement1.value = fruit;

//                     // Hide the dropdown after selection
//                     dropdownListElement.style.display = "none";
//                 });

//                 dropdownListElement.appendChild(option);
//             });

//             // Display the dropdown
//             dropdownListElement.style.display = "block";
//         }

//         // Update the dropdown list when the input field value changes
//         inputElement1.addEventListener("input", updateDropdownList);

//         // Handle the input field focus event
//         inputElement1.addEventListener("focus", function () {
//             // Show the whole dropdown
//             updateDropdownList();
//         });

//         // Hide the dropdown when the input field loses focus
//         document.addEventListener("click", function (event) {
//             if (!inputElement1.contains(event.target) && !dropdownListElement.contains(event.target)) {
//                 dropdownListElement.style.display = "none";
//             }
//         });

//         // Handle the submit button click
//         submitButton.addEventListener("click", function () {
//             const inputValue1 = inputElement1.value.trim();
//             const inputValue2 = inputElement2.value.trim();

//             // Check if both input values are entered
//             if (inputValue1 && inputValue2) {
//                 // Show an alert message with the entered values
//                 alert("Place Name: " + inputValue1 + "\nLocation Name: " + inputValue2);
//             } else {
//                 // Show an alert message to provide both values
//                 alert("Please enter both Place Name and Location Name.");
//             }
//         });
//     }

// query1("filterInput1a", "filterInput1b", "filterInput1c", "submitButton1");
// query2("filterInput2", "dropdownList2", "submitButton2");
// query3("filterInput3a", "dropdownList3a","filterInput3b","submitButton3");
// query4("filterInput4a", "filterInput4b", "submitButton4");
// query5("filterInput5", "dropdownList5", "submitButton5");
// query6("filterInput6a", "dropdownList6a", "filterInput6b", "submitButton6");
// query7("filterInput7a", "filterInput7b", "submitButton7");
// query8("filterInput8", "dropdownList8", "submitButton8");
// query9("filterInput9a", "dropdownList9a", "filterInput9b", "submitButton9");