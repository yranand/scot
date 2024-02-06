// nav background
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})

//Filter
// $(document).ready(function () {
//     $(".filter-item").click(function () {
//         const value = $(this).attr("data-filter");
//         if (value == "all"){
//             $(".post-box").show("1000")
//         } else{
//             $(".post-box")
//                 .not("." + value)
//                 .hide(1000);
//             $(".post-box")
//             .filter("." + value)
//             .show("1000")
//         }
//     });
//     $(".filter-item").click(function () {
//         $(this).addClass("active-filter").siblings().removeClass("active-filter")
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    var popup = document.getElementById("popup");
    var acceptBtn = document.getElementById("acceptBtn");
    var declineBtn = document.getElementById("declineBtn");

    acceptBtn.addEventListener("click", function() {
        popup.style.display = "none";
        // Add your logic for accepting the terms
    });

    declineBtn.addEventListener("click", function() {
        // Add your logic for declining the terms
        alert("You have declined the terms.");
    });

    // Show the popup when the page loads
    popup.style.display = "block";
});

function callNow() {
    // You can replace '1234567890' with the desired phone number
    window.location.href = "tel:+917651999386";
}

// // JavaScript Logic
// let currentPage = 1;
// const postsPerPage = 6;
// const totalPosts = document.querySelectorAll('.post-box').length;
// const totalPages = Math.ceil(totalPosts / postsPerPage);

// function showPosts(page) {
//     const posts = document.querySelectorAll('.post-box');
//     const start = (page - 1) * postsPerPage;
//     const end = page * postsPerPage;

//     posts.forEach((post, index) => {
//         if (index >= start && index < end) {
//             post.style.display = 'block';
//         } else {
//             post.style.display = 'none';
//         }
//     });
// }

// function nextPage() {
//     currentPage = (currentPage === totalPages) ? totalPages : currentPage + 1;
//     showPosts(currentPage);
// }

// function prevPage() {
//     currentPage = (currentPage === 1) ? 1 : currentPage - 1;
//     showPosts(currentPage);
// }

// // Initially show the first page of posts
// showPosts(currentPage);

let currentPage = 1;
const postsPerPage = 6;
const totalPosts = document.querySelectorAll('.post-box').length;
const totalPages = Math.ceil(totalPosts / postsPerPage);

const pageInfoElement = document.getElementById('pageInfo');

function showPosts(page) {
    const posts = document.querySelectorAll('.post-box');
    const start = (page - 1) * postsPerPage;
    const end = page * postsPerPage;

    posts.forEach((post, index) => {
        if (index >= start && index < end) {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
    });

    updatePageInfo();
}

function updatePageInfo() {
    pageInfoElement.textContent = `Page ${currentPage} of ${totalPages}`;
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        showPosts(currentPage);
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPosts(currentPage);
    }
}

// Initially show the first page of posts
showPosts(currentPage);


function filterPosts(category) {
    const posts = document.querySelectorAll('.post-box');

    posts.forEach(post => {
        const postCategory = post.querySelector('.category').textContent.toLowerCase();
        if (category === 'all' || postCategory === category) {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
    });
}

// Add event listeners for filter items
const filterItems = document.querySelectorAll('.filter-item');
filterItems.forEach(item => {
    item.addEventListener('click', function () {
        // If the clicked item is already the active filter, reset to 'All'
        const isActive = item.classList.contains('active-filter');
        if (isActive) {
            item.classList.remove('active-filter');
            document.querySelector('.filter-item[data-filter="all"]').classList.add('active-filter');
            filterPosts('all'); // Show all posts
        } else {
            // Remove 'active-filter' class from all items
            filterItems.forEach(i => i.classList.remove('active-filter'));
            // Add 'active-filter' class to the clicked item
            item.classList.add('active-filter');
            // Get the data-filter value and filter posts accordingly
            const category = item.getAttribute('data-filter');
            filterPosts(category);
        }
    });
});