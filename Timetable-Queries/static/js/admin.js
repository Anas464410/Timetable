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
    var teacherName = $('#filterInput1a').val();
    var timetableFile = $('#filterInput1b').val();

    var formData = new FormData();
    formData.append('teacher_name', teacherName);
    formData.append('csv_data', timetableFile);

    $.ajax({
        url: "/admin-form1", // Replace with your Flask backend endpoint
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
    var teacherName = $('#filterInput2').val();

    var formData = new FormData();
    formData.append('teacher_name', teacherName);

    $.ajax({
        url: "/admin-form2",
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
    var teacherName = $('#filterInput3a').val();
    var timetable = $('#filterInput3b').val();

    var formData = new FormData();
    formData.append('teacher_name', teacherName);
    formData.append('csv_data', timetable);

    $.ajax({
        url: "/admin-form3",
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
    var className = $('#filterInput4a').val();
    var timetable = $('#filterInput4b').val();

    var formData = new FormData();
    formData.append('class_name', className);
    formData.append('csv_data', timetable);

    $.ajax({
        url: "/admin-form4",
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
    var teacherName = $('#filterInput5').val();

    var formData = new FormData();
    formData.append('teacher_name', teacherName);

    $.ajax({
        url: "/admin-form5",
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
    var className = $('#filterInput6a').val();
    var timetable = $('#filterInput6b').val();

    var formData = new FormData();
    formData.append('class_name', className);
    formData.append('csv_data', timetable);

    $.ajax({
        url: "/admin-form6",
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
    var placeName = $('#filterInput7a').val();
    var locationName = $('#filterInput7b').val();

    var formData = new FormData();
    formData.append('place_name', placeName);
    formData.append('location_name', locationName);

    $.ajax({
        url: "/admin-form7",
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
    var placeName = $('#filterInput8').val();

    var formData = new FormData();
    formData.append('place_name', placeName);

    $.ajax({
        url: "/admin-form8",
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
function query9() {
    // Get the values from the input fields
    var placeName = $('#filterInput9a').val();
    var locationName = $('#filterInput9b').val();

    var formData = new FormData();
    formData.append('place_name', placeName);
    formData.append('location_name', locationName);

    $.ajax({
        url: "/admin-form9",
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

            var dropdownValues = response;

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






