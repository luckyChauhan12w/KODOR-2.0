const products = [
    {
        id: 1,
        name: 'Wireless Headphones',
        category: 'Electronics',
        price: 99.99,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60',
    },
    {
        id: 2,
        name: 'Smart Watch',
        category: 'Wearables',
        price: 199.99,
        image: 'https://images.unsplash.com/photo-1642101373432-a9c683c34902?w=500&auto=format&fit=crop&q=60',
    },
    {
        id: 3,
        name: 'Gaming Mouse',
        category: 'Accessories',
        price: 49.99,
        image: 'https://images.unsplash.com/photo-1613141412501-9012977f1969?q=80&w=1170&auto=format&fit=crop',
    },
    {
        id: 4,
        name: 'Bluetooth Speaker',
        category: 'Electronics',
        price: 59.99,
        image: 'https://images.unsplash.com/photo-1668649175276-fa4f96beb185?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 5,
        name: 'DSLR Camera',
        category: 'Photography',
        price: 799.99,
        image: 'https://plus.unsplash.com/premium_photo-1673349178750-b35929b751b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RFNMUiUyMENhbWVyYSUyQ3xlbnwwfHwwfHx8MA%3D%3D',
    },
    {
        id: 6,
        name: 'Laptop',
        category: 'Computers',
        price: 999.99,
        image: 'https://plus.unsplash.com/premium_photo-1681566925246-cc584a44d7fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8TGFwdG9wJTJDJTIwQ29tcHV0ZXJzfGVufDB8fDB8fHww',
    },
    {
        id: 7,
        name: 'Mechanical Keyboard',
        category: 'Accessories',
        price: 89.99,
        image: 'https://images.unsplash.com/photo-1602025882379-e01cf08baa51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWVjaGFuaWNhbCUyMEtleWJvYXJkfGVufDB8fDB8fHww',
    },
    {
        id: 8,
        name: 'Fitness Tracker',
        category: 'Wearables',
        price: 79.99,
        image: 'https://images.unsplash.com/photo-1557935728-e6d1eaabe558?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Rml0bmVzcyUyMFRyYWNrZXJ8ZW58MHx8MHx8fDA%3D',
    },
    {
        id: 9,
        name: 'Tablet',
        category: 'Electronics',
        price: 299.99,
        image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VGFibGV0fGVufDB8fDB8fHww',
    },
    {
        id: 10,
        name: 'VR Headset',
        category: 'Gaming',
        price: 399.99,
        image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VlIlMjBIZWFkc2V0fGVufDB8fDB8fHww',
    },
    {
        id: 11,
        name: 'Drone',
        category: 'Photography',
        price: 499.99,
        image: 'https://images.unsplash.com/photo-1668836733970-9ed7e53cd2ca?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },

    {
        id: 12,
        name: 'E-Reader',
        category: 'Gadgets',
        price: 129.99,
        image: 'https://images.unsplash.com/photo-1713470599399-aa0d2b068eae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RSUyMFJlYWRlciUyQyUyMEdhZGdldHN8ZW58MHx8MHx8fDA%3D',
    },
    {
        id: 13,
        name: 'Smartphone',
        category: 'Electronics',
        price: 699.99,
        image: 'https://plus.unsplash.com/premium_photo-1666298863696-8e8da5d85f2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U21hcnRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
        id: 14,
        name: 'Portable Charger',
        category: 'Accessories',
        price: 39.99,
        image: 'https://images.unsplash.com/photo-1574494462163-91285e2386c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFBvcnRhYmxlJTIwQ2hhcmdlcnxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
        id: 15,
        name: '4K Monitor',
        category: 'Computers',
        price: 299.99,
        image: 'https://plus.unsplash.com/premium_photo-1669380425564-6e1a281a4d30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8NEslMjBNb25pdG9yfGVufDB8fDB8fHww',
    },
    {
        id: 16,
        name: 'Smart Thermostat',
        category: 'Home',
        price: 149.99,
        image: 'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U21hcnQlMjBUaGVybW9zdGF0fGVufDB8fDB8fHww',
    },
    {
        id: 17,
        name: 'Robot Vacuum',
        category: 'Home',
        price: 249.99,
        image: 'https://images.unsplash.com/photo-1590164409291-450e859ccb87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Um9ib3QlMjBWYWN1dW18ZW58MHx8MHx8fDA%3D',
    },
    {
        id: 18,
        name: 'Smart Light Bulb',
        category: 'Home',
        price: 19.99,
        image: 'https://plus.unsplash.com/premium_photo-1661922429968-b4794e688dc4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U21hcnQlMjBMaWdodCUyMEJ1bGJ8ZW58MHx8MHx8fDA%3D',
    },
    {
        id: 19,
        name: 'Streaming Stick',
        category: 'Media',
        price: 49.99,
        image: 'https://images.unsplash.com/photo-1701318134614-adb5d5b14537?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U3RyZWFtaW5nJTIwU3RpY2t8ZW58MHx8MHx8fDA%3D',
    },
    {
        id: 20,
        name: 'Noise Cancelling Earbuds',
        category: 'Audio',
        price: 149.99,
        image: 'https://images.unsplash.com/photo-1733641839301-58d84137548c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Tm9pc2UlMjBDYW5jZWxsaW5nJTIwRWFyYnVkc3xlbnwwfHwwfHx8MA%3D%3D',
    },
];


let cards = document.querySelector('.cards')
let inp = document.querySelector('#input')


function filterData(dets) {

    let search = dets.target.value
    return products.filter((e) => {
        return e.name.toLowerCase().includes(search.toLowerCase()) ||
            e.category.toLowerCase().includes(search.toLowerCase());
    });
}

function setProducts() {
    cards.innerHTML = ''

    products.forEach((e) => {

        let card = document.createElement('div')
        card.classList.add('card')

        card.innerHTML = `
            <div class="card">
                    <div class="image">
                        <img src="${e.image}"
                             alt="">
                    </div>
                    <div class="text">
                        <h3>${e.name}, ${e.category}</h3>
                        <h4 style="text-align: center; margin-top: 10px;">${e.price}</h4>
                    </div>
                </div>
            `
        cards.append(card)

    })
}

function setFilteredProduct(filteredData) {

    if (filteredData) {
        cards.innerHTML = ''

        filteredData.forEach((e) => {
            let card = document.createElement('div')
            card.classList.add('card')

            card.innerHTML = `
            <div class="card">
                    <div class="image">
                        <img src="${e.image}"
                             alt="">
                    </div>
                    <div class="text">
                        <h3>${e.name}, ${e.category}</h3>
                        <h4 style="text-align: center; margin-top: 10px;">${e.price}</h4>
                    </div>
                </div>
            `
            cards.append(card)
        })
    }
}

function run(dets) {

    if (inp.value == '') {
        setProducts()
        
    } else {
        let filteredData = filterData(dets)
        setFilteredProduct(filteredData)
    }
}

run()


inp.addEventListener('input', (dets) => {
    run(dets)
})



