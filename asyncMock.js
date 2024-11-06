const productos = [

    {
        id:1,
        name: "Iphone x",
        price:10000,
        category: "Celulares",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iplace.com.uy%2Fusado-iphone-x-64gb-gris-espacial%2F100000934001&psig=AOvVaw3AytQ8MIbGUMFDVabv_kom&ust=1730935411229000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCICH1ISrxokDFQAAAAAdAAAAABAE",
        stock: 20,
        description: "Celular iphone x",
    },
    
    {
        id:2,
        name: "Iphone 11",
        price:12000 ,
        category: "Celulares",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mercadolibre.com.uy%2Fapple-iphone-11-128-gb-verde%2Fp%2FMLU15149569&psig=AOvVaw39vzVJ0jVKHm4P7uPlfzCo&ust=1730935488161000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOCm0KirxokDFQAAAAAdAAAAABAE",
        stock:20,
        description: "Celular Iphone 11",
    },
    {
        id:3,
        name: "Iphone 12 mini",
        price: 15000,
        category: "Celulares",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.market.com.uy%2Fcatalogo%2Fcelular-iphone-12-mini-128gb-pre-utilizado_EU296_v01&psig=AOvVaw36Yy3kBMJt1tIPaWmZhb3a&ust=1730935570777000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLDQ-c-rxokDFQAAAAAdAAAAABAE",
        stock:15,
        description: "Celular Iphone 12 mini",
    },
    {
        id:4,
        name: "Samsung s21",
        price:8000,
        category: "Celulares",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftiendamia.com%2Fproducto%3Famz%3DB09478TZZY&psig=AOvVaw1MtaR2mhTbF7-K3oFWdiZ_&ust=1730935629692000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNC32PyrxokDFQAAAAAdAAAAABAE",
        stock: 5,
        description: "Celular Samsung s21",
    },
    {
        id:5,
        name: "Samsung s22",
        price: 9000,
        category: "Celulares",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftiendamia.com%2Fproducto%3Famz%3DB09VX9S6F9&psig=AOvVaw0U8JCyXD8vBXs-XL4_4yAy&ust=1730935727946000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLCt9JqsxokDFQAAAAAdAAAAABAE",
        stock: 12,
        description: "Celular Samsung s22",
    },
    {
        id:6,
        name: "Ipad 10a generacion",
        price:11000 ,
        category: "Tablets",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Farticulo.mercadolibre.com.uy%2FMLU-645298160-ipad-apple-ipad-10-generacion-a2696-109-64gb-azul-_JM&psig=AOvVaw0Wa0UJQCkFKp7BBpr-6z_z&ust=1730935760669000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKihuKusxokDFQAAAAAdAAAAABAE",
        stock: 5,
        description: "Tablet Apple generacion 10",
    },
    {
        id:7,
        name: "Ipad mini",
        price: 18000,
        category: "Tablets",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iplace.com.uy%2Fapple-ipad-mini-6-generacion-a15-bionic-wifi-64gb-rosa-mlwl3ci-a%2F100001875&psig=AOvVaw2fkjGhlspM9s5I8m2j18iV&ust=1730935842834000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOip1dGsxokDFQAAAAAdAAAAABAE",
        stock: 7,
        description: "Tablet Apple mini 6ta generacion",
    },
    
    {
        id:8,
        name: "Tablet Samsung Galaxy tab A9",
        price:13500 ,
        category: "Tablets",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstienda.uy%2Fcatalogo%2Ftablet-samsung-galaxy-tab-a9-wifi-64gb-graphite_MS-X110NZ_8806095387420&psig=AOvVaw36Ckx8W9l_nZLOwULLikL2&ust=1730935900862000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLC9xu2sxokDFQAAAAAdAAAAABAE",
        stock: 3,
        description: "Tablet Samsung A9",
    },
    {
        id:9,
        name: "Tablet Samsung A7",
        price:12700 ,
        category: "Tablets",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mosca.com.uy%2F4881118-tablet-samsung-galaxy-tab-a7-lite-8-7-32gb-3gb-lte-gris&psig=AOvVaw36Ckx8W9l_nZLOwULLikL2&ust=1730935900862000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLC9xu2sxokDFQAAAAAdAAAAABAP",
        stock: 8,
        description: "Tablet Samsung A7",
    },
    {
        id:10,
        name: "Tablet Xiaomi Redmi Pad SE",
        price: 12000,
        category: "Tablets",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.zonatecno.com.uy%2Fcatalogo%2Ftablet-xiaomi-redmi-pad-se-128gb-4gb-11-grey_104564_104564&psig=AOvVaw0daf5z2duOJNYtTmLcAYfX&ust=1730936129008000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCICIkNqtxokDFQAAAAAdAAAAABAE",
        stock: 18,
        description: "Tablet Redmi Xiaomi",
    },
    {
        id:11,
        name: "Notebook Asus",
        price: 25000,
        category: "Notebooks",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.zonatecno.com.uy%2Fnotebooks-y-pc%2Fnotebook&psig=AOvVaw0bbgRdLFtQPjs7IVsVeTQr&ust=1730936203945000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLD9yP6txokDFQAAAAAdAAAAABAE",
        stock:16 ,
        description: "Notebook Asus",
    },
    {
        id:12,
        name: "Notebook HP",
        price:17350 ,
        category: "Notebooks",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.compupel.com.uy%2Fcatalogo%2Fnotebook-hp-240-g9-intel-dualcore-n4500-ram-8gb-disco-solido-256gb-pantalla-14-hd-teclado-en-espanol-win11_1012484_1012484&psig=AOvVaw0E-KW_WiPPy7YvdaANKYiy&ust=1730936270523000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIiC0J2uxokDFQAAAAAdAAAAABAE",
        stock:6 ,
        description: "Notebook HP",
    },
    {
        id:13,
        name: "Notebook Acer ASPIRE",
        price:12500 ,
        category: "Notebooks",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftienda.antel.com.uy%2Fproducto%2F1356%2Fnotebook-acer-aspire-a315-510p&psig=AOvVaw1-USejD-FsP4CoIhNCGCSx&ust=1730936413952000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLjmgeKuxokDFQAAAAAdAAAAABAE",
        stock: 18,
        description: "Notebook Acer ASPIRE",
    },
    {
        id:14,
        name: "Notebook MSI",
        price: 29000,
        category: "Notebooks",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fnetpc.uy%2Ftienda%2Fnotebook-gaming-msi-156-i5-10ma-gen-8gb-256gb-gtx1650%2F&psig=AOvVaw3nd4zQlsoVlVkATWKMPbpE&ust=1730936494771000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNjXxYivxokDFQAAAAAdAAAAABAE",
        stock: 3,
        description: "Notebook MSI",
    },
    {
        id:15,
        name: "Notebook Apple Pro",
        price:18500 ,
        category: "Notebooks",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.apple.com%2Fla%2Fnewsroom%2F2021%2F10%2Fapple-unveils-game-changing-macbook-pro%2F&psig=AOvVaw2VSvv6stTVz1FPftwflf-T&ust=1730936575724000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKjd67SvxokDFQAAAAAdAAAAABAE",
        stock: 9,
        description: "Notebook Apple Pro",
    },
    {
        id:16,
        name: "Cable USB tipo C",
        price:1000 ,
        category: "Cables",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Felectrocentro.uy%2Fcatalogo%2Fcable-usb-tipo-c-carga-rapida_LE-645C_LE-645C&psig=AOvVaw3IZcNFHz6x55m3ntU_vh3-&ust=1730936681359000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDX1uGvxokDFQAAAAAdAAAAABAE",
        stock: 100,
        description: "Cable USB tipo c",
    },
    {
        id:17,
        name: "Cable USB Iphone",
        price: 1000,
        category: "Cables",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mercadolibre.com.uy%2Fcable-lightning-2-mt-para-iphone%2Fp%2FMLU19983785&psig=AOvVaw2RA4APD-9Plupr7kk_Ai4J&ust=1730936760173000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNj324iwxokDFQAAAAAdAAAAABAE",
        stock: 100,
        description: "Cable para Iphone",
    },
    {
        id:18,
        name: "Cable micro USB ",
        price: 1000,
        category: "Cables",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.circuit.com.uy%2Fcable-micro-usb-gen%25C3%25A9rico&psig=AOvVaw288AZxN0VL3S9qmwOF2GXP&ust=1730936812854000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLDT0qOwxokDFQAAAAAdAAAAABAE",
        stock: 100,
        description: "Cable micro USB",
    },
    {
        id:19,
        name: "Mouse Logitech",
        price: 1500,
        category: "Mouses",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mercadolibre.com.uy%2Fmouse-gamer-de-juego-logitech-g-g-series-g203-lightsync-negro%2Fp%2FMLU16211422&psig=AOvVaw3fFkqmoBEb558U_fCNDDaV&ust=1730936865335000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMCAnLmwxokDFQAAAAAdAAAAABAE",
        stock: 20,
        description: "Mouse gamer Logitech",
    },
    {
        id:20,
        name: "Mouse HP",
        price: 1350,
        category: "Mouses",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hp.com%2Fuy-es%2Fproducts%2Faccessories%2Fproduct-details%2F14309025&psig=AOvVaw3pLEqdGzVLZkZnYHOcetT3&ust=1730936938578000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLitlNywxokDFQAAAAAdAAAAABAE",
        stock: 25,
        description: "Mouse HP",
    },
    {
        id:21,
        name: "Mouse Razer",
        price: 1700,
        category: "Mouses",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fthotcomputacion.com.uy%2Fproducto%2Fmouse-razer-cobra%2F&psig=AOvVaw3wCYMJxt3dP5DYoXJJ1OvQ&ust=1730936991189000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIj2s_WwxokDFQAAAAAdAAAAABAE",
        stock: 30,
        description: "Mouse Razer",
    },




];


//para renderizar todos los productos
export  const getProducts = ()=>
    {   
       return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(productos)
        },2500)
    })
};
console.log(getProducts())

//para renderizar los productos por categoria 
export  const getProductsByCategoryId = (categoryId)=>
    {   
       return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productos.filter((product)=>product.category === categoryId))
        },2500)
    })
};
//para renderizar un producto en base al ID
export const getProductsById=(productId)=>
    {
        return new Promise ((resolve)=>{
            setTimeout(()=>{
                resolve(productos.find((prod)=>prod.id=== productId)
            )}, 2500)
        })
    };