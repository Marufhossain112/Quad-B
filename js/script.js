// function toggleDropdown() {
//     var dropdownContent = document.getElementById("myDropdown");
//     if (dropdownContent.style.display === "block") {
//         dropdownContent.style.display = "none";
//     } else {
//         dropdownContent.style.display = "block";
//     }
// }

// // Close the dropdown if the user clicks outside of it
// window.onclick = function (event) {
//     if (!event.target.matches('.dropdown-button')) {
//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         for (var i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.style.display === "block") {
//                 openDropdown.style.display = "none";
//             }
//         }
//     }
// };


// function selectDropdwn() {
//     var dropdownContent = document.getElementById("selectDropdwn");
//     if (dropdownContent.style.display === "block") {
//         dropdownContent.style.display = "none";
//     } else {
//         dropdownContent.style.display = "block";
//     }
// }

// // Close the dropdown if the user clicks outside of it
// window.onclick = function (event) {
//     if (!event.target.matches('.dropdown-button')) {
//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         for (var i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.style.display === "block") {
//                 openDropdown.style.display = "none";
//             }
//         }
//     }
// };



// function toggleDropdown() {
//     var dropdownContent = document.getElementById("myDropdown");
//     if (dropdownContent.style.display === "block") {
//         dropdownContent.style.display = "none";
//     } else {
//         dropdownContent.style.display = "block";
//     }
// }

// // Close the dropdown if the user clicks outside of it
// window.onclick = function (event) {
//     if (!event.target.matches('.dropdown-button')) {
//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         for (var i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.style.display === "block") {
//                 openDropdown.style.display = "none";
//             }
//         }
//     }
// };


const toggleDropdown = (dropdownBox) => {
    const dropdownContent = document.getElementById(dropdownBox);
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
};


window.onclick = function (event) {
    if (!event.target.matches('.dropdown-button')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
};


