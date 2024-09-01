

let navBar = document.querySelector('.navbar');
let menuBtn = document.querySelector('#menuBtn');

menuBtn.onclick = () => {
    navBar.classList.toggle('active');
}

/* number section */
let valueDisplay = document.querySelectorAll('.num');
let interval = 3000;

valueDisplay.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-value"));

    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue = startValue + 1;
        valueDisplay.textContent = `${startValue}%`;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});

/* scroll section */
let sections = document.querySelectorAll('section');

window.onscroll = () => {
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 150);
}



//menu
document.addEventListener("DOMContentLoaded", function() {
    const menuItems = {
        "mini-loaf-cakes": [
            { name: "Chai", price: "8 for $28.00" },
            { name: "Lemon", price: "8 for $28.00" },
            { name: "Blueberry Lemon", price: "8 for $28.00" },
            { name: "White Chocolate Raspberry", price: "8 for $28.00" },
            { name: "Chocolate Chip", price: "8 for $28.00" },
            { name: "Butterscotch Chocolate Chip", price: "8 for $28.00"},
            { name: "Pumpkin Spice Chocolate Chip", price: "8 for $28.00" },
            { name: "Pumpkin Snickerdoodle", price: "8 for $28.00" },
            { name: "Banana Walnut", price: "8 for $28.00" },
            { name: "Banana Walnut Chocolate Chip", price: "8 for $28.00" },
        ],
        "regular-loaf-cakes": [
            { name: "Chai", price: "$26.00" },
            { name: "Lemon", price: "$26.00" },
            { name: "Blueberry Lemon", price: "$26.00" },
            { name: "White Chocolate Raspberry", price: "$26.00" },
            { name: "Chocolate Chip", price: "$26.00" },
            { name: "Butterscotch Chocolate Chip", price: "$26.00" },
            { name: "Pumpkin Spice Chocolate Chip", price: "$26.00" },
            { name: "Pumpkin Snickerdoodle", price: "$26.00" },
            { name: "Banana Walnut", price: "$26.00" },
            { name: "Banana Walnut Chocolate Chip", price: "$26.00" },
        ],
        "cookies": [
            { name: "Butterscotch Chocolate Chip", price: "6 for $12.00" },
            { name: "Chocolate Chip", price: "6 for $12.00" },
            { name: "Double Chocolate with Chocolate Frosting", price: "6 for $12.00" },
            { name: "Snickerdoodle with Cream Cheese Frosting", price: "6 for $12.00" },
        ],
        "cupcakes": [
            { name: "Vanilla", price: "6 for $20.00" },
            { name: "Chocolate", price: "6 for $20.00" },
            { name: "Funfetti", price: "6 for $20.00" },
            { name: "Red Velvet", price: "6 for $20.00" },
            { name: "Blueberry Lemon", price: "6 for $20.00" },
            { name: "Lemon", price: "6 for $20.00" },
        ],
        "mini-cheesecakes": [
            { name: "Caramel", price: "6 for $22.00" },
            { name: "Blueberry Lemon", price: "6 for $22.00" },
            { name: "Ferrero Rocher", price: "6 for $22.00" },
            { name: "Cookies and Cream", price: "6 for $22.00" },
            { name: "New York Cheesecake", price: "6 for $22.00" },
            { name: "Red Velvet", price: "6 for $22.00" },
            { name: "Gulab Jamun", price: "6 for $22.00" },
        ],
        "cake-pops": [
            { name: "Vanilla", price: "12 for $35.00" },
            { name: "Chocolate", price: "12 for $35.00" },
            { name: "Funfetti", price: "12 for $35.00" },
            { name: "Red Velvet", price: "12 for $35.00" },
            { name: "Lemon", price: "12 for $35.00" },
            { name: "Strawberry", price: "12 for $35.00" },
        ]
    };

    const categoryImages = {
        "mini-loaf-cakes": "/Users/aymancharania/Desktop/BatterBar Website/img/loaf.JPG",
        "regular-loaf-cakes": "/Users/aymancharania/Desktop/BatterBar Website/img/loaf.JPG",
        "cookies": "/Users/aymancharania/Desktop/BatterBar Website/img/cookies.JPG",
        "cupcakes": "/Users/aymancharania/Desktop/BatterBar Website/img/cupcake.JPEG",
        "mini-cheesecakes": "/Users/aymancharania/Desktop/BatterBar Website/img/cheese.JPEG",
        "cake-pops": "/Users/aymancharania/Desktop/BatterBar Website/img/cakepop2.jpg"
    };

    function renderMenu(category) {
        const container = document.getElementById("menu-items");
        const categoryImage = document.getElementById("category-image");
        container.innerHTML = "";

        if (menuItems[category]) {
            menuItems[category].forEach(item => {
                const itemElement = `
                    <div class="items ${category}">
                        <div class="info">
                            <h4>${item.name}</h4>
                            <p class="price">${item.price}</p>
                            <p>Information about the ${item.name} Here</p>
                        </div>
                    </div>
                `;
                container.innerHTML += itemElement;
            });
            categoryImage.src = categoryImages[category];
        }
    }

    const buttons = document.querySelectorAll(".menu-row .title .col-1 button");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
            const category = this.getAttribute("data-category");
            renderMenu(category);
        });
    });

    // Render the first category by default
    renderMenu("mini-loaf-cakes");
});



//play video
document.addEventListener("DOMContentLoaded", function() {
    const playButton = document.getElementById("play-button");
    const videoPlayer = document.getElementById("video-player");
    const video = document.getElementById("video");
    
    playButton.addEventListener("click", function() {
        if (videoPlayer.style.display === "block") {
            // If the video player is visible, hide it and pause the video
            videoPlayer.style.display = "none";
            video.pause(); // Pause the video if it's playing
            video.currentTime = 0; // Reset the video to the beginning
        } else {
            // If the video player is hidden, show it and play the video
            videoPlayer.style.display = "block";
            video.play(); // Start playing the video
        }
    });
});

