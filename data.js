// Product data
const products = [
    // Men's Products
    {
        id: 1,
        name: "Classic Black Suit",
        price: 199.99,
        image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "men",
        type: "clothes"
    },
    {
        id: 2,
        name: "Leather Dress Shoes",
        price: 89.99,
        image: "https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "men",
        type: "shoes"
    },
    {
        id: 3,
        name: "Business Leather Bag",
        price: 129.99,
        image: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "men",
        type: "bags"
    },
    {
        id: 4,
        name: "Classic Fedora Hat",
        price: 45.99,
        image: "https://images.pexels.com/photos/1661471/pexels-photo-1661471.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "men",
        type: "hats"
    },
    {
        id: 5,
        name: "Casual Denim Jacket",
        price: 79.99,
        image: "https://images.pexels.com/photos/1300550/pexels-photo-1300550.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "men",
        type: "clothes"
    },
    {
        id: 6,
        name: "Sneakers White",
        price: 65.99,
        image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "men",
        type: "shoes"
    },

    // Women's Products
    {
        id: 7,
        name: "Elegant Black Dress",
        price: 149.99,
        image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "women",
        type: "clothes"
    },
    {
        id: 8,
        name: "High Heel Pumps",
        price: 95.99,
        image: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "women",
        type: "shoes"
    },
    {
        id: 9,
        name: "Designer Handbag",
        price: 179.99,
        image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "women",
        type: "bags"
    },
    {
        id: 10,
        name: "Summer Sun Hat",
        price: 39.99,
        image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "women",
        type: "hats"
    },
    {
        id: 11,
        name: "Floral Summer Dress",
        price: 89.99,
        image: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "women",
        type: "clothes"
    },
    {
        id: 12,
        name: "Ankle Boots",
        price: 119.99,
        image: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "women",
        type: "shoes"
    },

    // Boys' Products
    {
        id: 13,
        name: "Boys Casual T-Shirt",
        price: 25.99,
        image: "https://images.pexels.com/photos/1620653/pexels-photo-1620653.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "boys",
        type: "clothes"
    },
    {
        id: 14,
        name: "Boys Sports Shoes",
        price: 49.99,
        image: "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "boys",
        type: "shoes"
    },
    {
        id: 15,
        name: "School Backpack",
        price: 35.99,
        image: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "boys",
        type: "bags"
    },
    {
        id: 16,
        name: "Boys Baseball Cap",
        price: 19.99,
        image: "https://images.pexels.com/photos/1661471/pexels-photo-1661471.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "boys",
        type: "hats"
    },
    {
        id: 17,
        name: "Boys Denim Jeans",
        price: 39.99,
        image: "https://images.pexels.com/photos/1300550/pexels-photo-1300550.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "boys",
        type: "clothes"
    },

    // Girls' Products
    {
        id: 18,
        name: "Girls Pink Dress",
        price: 45.99,
        image: "https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "girls",
        type: "clothes"
    },
    {
        id: 19,
        name: "Girls Ballet Shoes",
        price: 29.99,
        image: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "girls",
        type: "shoes"
    },
    {
        id: 20,
        name: "Girls School Bag",
        price: 32.99,
        image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "girls",
        type: "bags"
    },
    {
        id: 21,
        name: "Girls Sun Hat",
        price: 22.99,
        image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "girls",
        type: "hats"
    },
    {
        id: 22,
        name: "Girls Floral Top",
        price: 28.99,
        image: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "girls",
        type: "clothes"
    },

    // Babies' Products
    {
        id: 23,
        name: "Baby Onesie Set",
        price: 24.99,
        image: "https://images.pexels.com/photos/1648359/pexels-photo-1648359.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "babies",
        type: "clothes"
    },
    {
        id: 24,
        name: "Baby Soft Shoes",
        price: 18.99,
        image: "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "babies",
        type: "shoes"
    },
    {
        id: 25,
        name: "Baby Diaper Bag",
        price: 55.99,
        image: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "babies",
        type: "bags"
    },
    {
        id: 26,
        name: "Baby Sun Hat",
        price: 15.99,
        image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "babies",
        type: "hats"
    },
    {
        id: 27,
        name: "Baby Romper",
        price: 32.99,
        image: "https://images.pexels.com/photos/1648359/pexels-photo-1648359.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "babies",
        type: "clothes"
    },
    {
        id: 28,
        name: "Baby Booties",
        price: 14.99,
        image: "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "babies",
        type: "shoes"
    }
];

// Get product by ID
function getProductById(id) {
    return products.find(product => product.id === parseInt(id));
}

// Filter products
function filterProducts(category = 'all', type = 'all') {
    return products.filter(product => {
        const categoryMatch = category === 'all' || product.category === category;
        const typeMatch = type === 'all' || product.type === type;
        return categoryMatch && typeMatch;
    });
}

// Sort products
function sortProducts(productsArray, sortBy) {
    const sorted = [...productsArray];
    
    switch(sortBy) {
        case 'name':
            return sorted.sort((a, b) => a.name.localeCompare(b.name));
        case 'price-low':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sorted.sort((a, b) => b.price - a.price);
        default:
            return sorted;
    }
}