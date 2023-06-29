window.addEventListener("load", function () {
    var loader = document.getElementById("loader");
    loader.style.display = "none"; // Hide the loader once the website finishes loading
});


var form = document.getElementById("myForm");
var passwordField = document.getElementById("passwordField");
var confirmPasswordField = document.getElementById("confirmPasswordField");
var passwordMismatchMessage = document.getElementById("passwordMismatchMessage");

function validatePasswords(event) {
    if (passwordField.value !== confirmPasswordField.value) {
        passwordMismatchMessage.style.display = "block";
        event.preventDefault(); // Prevent form submission
    } else {
        passwordMismatchMessage.style.display = "none";
    }
}

let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let amount = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
});

closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
});

let products = [
    {
        id: 1,
        name: 'Spiderman',
        image: '1.jpg',
        price: 1500,
        quantity: 5
    },
    {
        id: 2,
        name: 'comic book',
        image: '2.jpg',
        price: 700,
        quantity: 20
    },
    {
        id: 3,
        name: 'Superman',
        image: '3.jpg',
        price: 1200,
        quantity: 13
    },
    {
        id: 4,
        name: 'Superman Adventures',
        image: '4.jpg',
        price: 1500,
        quantity: 7
    },
    {
        id: 5,
        name: 'Doctor Strange',
        image: '5.jpg',
        price: 1250,
        quantity: 2
    },
    {
        id: 6,
        name: 'Incredible Hulk',
        image: '6.jpg',
        price: 1150,
        quantity: 15
    },
    {
        id: 7,
        name: 'Spectacular Spiderman',
        image: '7.jpg',
        price: 2000,
        quantity: 2
    },
    {
        id: 8,
        name: 'Shazam',
        image: '8.jpg',
        price: 1000,
        quantity: 13
    },
    {
        id: 9,
        name: 'Flash',
        image: '9.jpg',
        price: 1050,
        quantity: 9
    },
    {
        id: 10,
        name: 'Batman Detective',
        image: '10.jpg',
        price: 1400,
        quantity: 4
    },
    {
        id: 11,
        name: 'Green Arrow',
        image: '11.jpg',
        price: 800,
        quantity: 25
    },
    {
        id: 12,
        name: 'Doctor Doom',
        image: '12.jpg',
        price: 950,
        quantity: 18
    },
    {
        id: 13,
        name: 'Avengers',
        image: '20.jpg',
        price: 1025,
        quantity: 8
    },
    {
        id: 14,
        name: 'Captain Marvel',
        image: '19.jpg',
        price: 1070,
        quantity: 5
    },
    {
        id: 15,
        name: 'Dark Dawn',
        image: '14.jpg',
        price: 1180,
        quantity: 2
    },
    {
        id: 16,
        name: 'Ironman',
        image: '16.jpg',
        price: 1195,
        quantity: 15
    },
    {
        id: 17,
        name: 'Los Lane',
        image: '18.jpg',
        price: 1220,
        quantity: 2
    },
    {
        id: 18,
        name: 'Tomb of Darkness',
        image: '17.jpg',
        price: 1250,
        quantity: 7
    },
    {
        id: 19,
        name: 'Wizard of Oz',
        image: '13.jpg',
        price: 1350,
        quantity: 11
    },
    {
        id: 20,
        name: 'Wonder Woman',
        image: '15.jpg',
        price: 1400,
        quantity: 3
    }
];

let listCards = [];

function initApp() {
    createListCards(products);
}

function createListCards(productsArray, searchQuery = '') {
    list.innerHTML = ''; // Clear the existing list
    productsArray.forEach((value, key) => {
        // Check if the book name contains the search query
        if (searchQuery === '' || value.name.toLowerCase().includes(searchQuery.toLowerCase())) {
            let newDiv = document.createElement('div');
            newDiv.classList.add('item');
            newDiv.innerHTML = `
            <div class="quantityCard">${value.quantity}</div>
            <img src="images/${value.image}"/>
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}$</div>
            <button onclick="addToCart(${key})">Add to Cart</button>
          `;
            list.appendChild(newDiv);
        }
    });
}

function sortByName(ascending) {
    let sortedProducts = [
        {
            id: 13,
            name: 'Avengers',
            image: '20.jpg',
            price: 1025,
            quantity: 8
        },
        {
            id: 10,
            name: 'Batman Detective',
            image: '10.jpg',
            price: 1400,
            quantity: 4
        },
        {
            id: 14,
            name: 'Captain Marvel',
            image: '19.jpg',
            price: 1070,
            quantity: 5
        },
        {
            id: 2,
            name: 'comic book',
            image: '2.jpg',
            price: 700,
            quantity: 20
        },
        {
            id: 15,
            name: 'Dark Dawn',
            image: '14.jpg',
            price: 1180,
            quantity: 2
        },
        {
            id: 12,
            name: 'Doctor Doom',
            image: '12.jpg',
            price: 950,
            quantity: 18
        },
        {
            id: 5,
            name: 'Doctor Strange',
            image: '5.jpg',
            price: 1250,
            quantity: 2
        },
        {
            id: 9,
            name: 'Flash',
            image: '9.jpg',
            price: 1050,
            quantity: 9
        },
        {
            id: 11,
            name: 'Green Arrow',
            image: '11.jpg',
            price: 800,
            quantity: 25
        },
        {
            id: 6,
            name: 'Incredible Hulk',
            image: '6.jpg',
            price: 1150,
            quantity: 15
        },
        {
            id: 16,
            name: 'Ironman',
            image: '16.jpg',
            price: 1195,
            quantity: 15
        },
        {
            id: 17,
            name: 'Los Lane',
            image: '18.jpg',
            price: 1220,
            quantity: 2
        },
        {
            id: 8,
            name: 'Shazam',
            image: '8.jpg',
            price: 1000,
            quantity: 13
        },
        {
            id: 7,
            name: 'Spectacular Spiderman',
            image: '7.jpg',
            price: 2000,
            quantity: 2
        },
        {
            id: 1,
            name: 'Spiderman',
            image: '1.jpg',
            price: 1500,
            quantity: 5
        },
        {
            id: 3,
            name: 'Superman',
            image: '3.jpg',
            price: 1200,
            quantity: 13
        },
        {
            id: 4,
            name: 'Superman Adventures',
            image: '4.jpg',
            price: 1500,
            quantity: 7
        },
        {
            id: 18,
            name: 'Tomb of Darkness',
            image: '17.jpg',
            price: 1250,
            quantity: 7
        },
        {
            id: 19,
            name: 'Wizard of Oz',
            image: '13.jpg',
            price: 1350,
            quantity: 11
        },
        {
            id: 20,
            name: 'Wonder Woman',
            image: '15.jpg',
            price: 1400,
            quantity: 3
        }
    ];

    sortedProducts.sort((a, b) => {
        let nameA = a.name.toLowerCase();
        let nameB = b.name.toLowerCase();

        if (ascending) {
            return nameA.localeCompare(nameB);
        } else {
            return nameB.localeCompare(nameA);
        }
    });

    createListCards(sortedProducts);
}

function sortByPrice(ascending) {
    let sortedProducts = [
        {
            id: 2,
            name: 'comic book',
            image: '2.jpg',
            price: 700,
            quantity: 20
        },
        {
            id: 11,
            name: 'Green Arrow',
            image: '11.jpg',
            price: 800,
            quantity: 25
        },
        {
            id: 12,
            name: 'Doctor Doom',
            image: '12.jpg',
            price: 950,
            quantity: 18
        },
        {
            id: 8,
            name: 'Shazam',
            image: '8.jpg',
            price: 1000,
            quantity: 13
        },
        {
            id: 13,
            name: 'Avengers',
            image: '20.jpg',
            price: 1025,
            quantity: 8
        },
        {
            id: 9,
            name: 'Flash',
            image: '9.jpg',
            price: 1050,
            quantity: 9
        },
        {
            id: 14,
            name: 'Captain Marvel',
            image: '19.jpg',
            price: 1070,
            quantity: 5
        },
        {
            id: 6,
            name: 'Incredible Hulk',
            image: '6.jpg',
            price: 1150,
            quantity: 15
        },
        {
            id: 15,
            name: 'Dark Dawn',
            image: '14.jpg',
            price: 1180,
            quantity: 2
        },
        {
            id: 16,
            name: 'Ironman',
            image: '16.jpg',
            price: 1195,
            quantity: 15
        },
        {
            id: 3,
            name: 'Superman',
            image: '3.jpg',
            price: 1200,
            quantity: 13
        },
        {
            id: 17,
            name: 'Los Lane',
            image: '18.jpg',
            price: 1220,
            quantity: 2
        },
        {
            id: 5,
            name: 'Doctor Strange',
            image: '5.jpg',
            price: 1250,
            quantity: 2
        },
        {
            id: 18,
            name: 'Tomb of Darkness',
            image: '17.jpg',
            price: 1250,
            quantity: 7
        },
        {
            id: 19,
            name: 'Wizard of Oz',
            image: '13.jpg',
            price: 1350,
            quantity: 11
        },
        {
            id: 20,
            name: 'Wonder Woman',
            image: '15.jpg',
            price: 1400,
            quantity: 3
        },
        {
            id: 10,
            name: 'Batman Detective',
            image: '10.jpg',
            price: 1400,
            quantity: 4
        },
        {
            id: 1,
            name: 'Spiderman',
            image: '1.jpg',
            price: 1500,
            quantity: 5

        },
        {
            id: 4,
            name: 'Superman Adventures',
            image: '4.jpg',
            price: 1500,
            quantity: 7
        },
        {
            id: 7,
            name: 'Spectacular Spiderman',
            image: '7.jpg',
            price: 2000,
            quantity: 2
        }
    ];

    sortedProducts.sort((a, b) => {
        if (ascending) {
            return a.price - b.price;
        } else {
            return b.price - a.price;
        }
    });

    createListCards(sortedProducts);
}

document.addEventListener('DOMContentLoaded', function () {
    initApp();
});

function addToCart(key) {
    if (listCards[key] == null) {
        listCards[key] = products[key];
        listCards[key].amount = 1;
    }
    reloadCart();
}

function reloadCart() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.amount;

        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="images/${value.image}"/></div>
                <div class="liName">${value.name}</div>
                <div class="liPrice">${value.price.toLocaleString()}$</div>
            `;
            listCard.appendChild(newDiv);
        }

    })
    total.innerText = totalPrice.toLocaleString();
    amount.innerText = count;
}

function searchBooks() {
    let searchInput = document.getElementById('searchInput');
    let searchQuery = searchInput.value.trim();
    createListCards(products, searchQuery);
}

let searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', searchBooks);

function buyProduct(key) {
    setTimeout(() => {
        listCards.splice(key, 1);
        reloadCart();
    }, 1000);
}
