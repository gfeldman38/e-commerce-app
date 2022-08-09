const products = [
    {
        id: '1',
        name: 'Smartwatch Reloj Xiaomi Mibro X1',
        category: 'smartwatch',
        price: 11000,
        stock: 25,
        img:'images/relox-xiaomi.jpg',
        description:'Smartwatch Reloj Xiaomi Mibro X1 Negro 5 Atm'
},
    { id: '2',
        name: 'Motorola edge 30 XT2203-1',
        price: 100000,
        category: 'celular',
        img:'https://www.motorola.com.ar/motorola-edge-30/p',
        stock: 16,
        description:'CELULAR MOTOROLA EDGE 30 XT2203-1 GRIS GRIS'
    },
    { 
        id: '3',
        name: 'tablet samsung A8',
        price: 73000,
        category: 'tablet',
        img:'https://www.google.com/aclk?sa=l&ai=DChcSEwjqqtHJ6Zf5AhUIbpEKHU4_DOwYABABGgJjZQ&sig=AOD64_2j_Ui5Nd5kRDTUMMm3XEsVsVuJUQ&adurl&ctype=5&ved=2ahUKEwjZxsTJ6Zf5AhUUJrkGHQaKAGAQvhd6BAgBEFM',
        stock: 10,
        description:'TABLET SAMSUNG A8 GRIS 10.5 64 GRIS'
    }
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        },500)

    })
}

export const getProductById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id !== id))
            console.log(getProductById);
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        },500)

    })
}
