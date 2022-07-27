const products = [
    {id: '1',
    name: 'Smartwatch Reloj Xiaomi Mibro X1',
    price: 11000,
    category: 'smartwatch',
    img:'https://www.google.com/aclk?sa=l&ai=DChcSEwi9_8Gb6Jf5AhX7QkgAHc99BpQYABAJGgJjZQ&sig=AOD64_0k5sWdiyC0CMIwF5YXq17AMHiWnQ&adurl&ctype=5&ved=2ahUKEwiq9LGb6Jf5AhXsA7kGHYapDzoQvhd6BAgBEEg',
    stock: 25,
    description:'Smartwatch Reloj Xiaomi Mibro X1 Negro 5 Atm'},
    { id: '2',
    name: 'Motorola edge 30 XT2203-1',
    price: 100000,
    category: 'cell phone',
    img:'https://www.google.com/aclk?sa=l&ai=DChcSEwi0hMb_6Jf5AhUDxpEKHb3JCAEYABADGgJjZQ&sig=AOD64_0ab3rYOkGSUW4xtJn_NPXni9phBw&adurl&ctype=5&ved=2ahUKEwii6rn_6Jf5AhXdArkGHS27ADEQvhd6BAgBEFA',
    stock: 16,
    description:'CELULAR MOTOROLA EDGE 30 XT2203-1 GRIS GRIS'},
    { id: '3',
    name: 'tablet samsung A8',
    price: 73000,
    category: 'tablet',
    img:'https://www.google.com/aclk?sa=l&ai=DChcSEwjqqtHJ6Zf5AhUIbpEKHU4_DOwYABABGgJjZQ&sig=AOD64_2j_Ui5Nd5kRDTUMMm3XEsVsVuJUQ&adurl&ctype=5&ved=2ahUKEwjZxsTJ6Zf5AhUUJrkGHQaKAGAQvhd6BAgBEFM',
    stock: 10,
    description:'TABLET SAMSUNG A8 GRIS 10.5 64 GRIS'}
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        },2000)

    })
}