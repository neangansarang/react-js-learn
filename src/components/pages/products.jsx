import CardProduct from "../Fragments/CardProduct";

const products = [
    {
        id: 1,
        name: "Sepatu Adidas",
        price: "Rp. 1.500.000",
        image: "/images/shoes-1.jpg",
        description: "Sepatu kulit cokelat tua itu mengeluarkan bunyi derit lembut di setiap langkah, seolah menyimpan ribuan cerita perjalanan di balik solnya yang mulai menipis."
    },
    {
        id: 2,
        name: "Sepatu Puma",
        price: "Rp. 1.850.000",
        image: "/images/shoes-2.jpg",
        description: "Sneaker putih itu masih terlalu bersih untuk disebut milik seseorang yang benar-benar hidup."
    },
    {
        id: 3,
        name: "Sepatu Cats",
        price: "Rp. 550.000",
        image: "/images/shoes-3.jpg",
        description: "Sepatu Cats dengan sol karet tebalnya berdiri kokoh seperti punya pendirian — tidak peduli medan berlumpur, aspal retak, atau hati yang patah."
    },
    {
        id: 4,
        name: "Sepatu Bots",
        price: "Rp. 1.550.000",
        image: "/images/shoes-4.jpg",
        description: "Boots kulit itu melangkah dengan percaya diri, seolah tahu bahwa ke mana pun ia pergi, tanah di bawahnya yang harusnya merasa terhormat."
    },
    {
        id: 5,
        name: "Sepatu Pantopel",
        price: "Rp. 550.000",
        image: "/images/shoes-5.jpg",
        description: "Pantofel hitam mengkilap itu tampak terlalu serius untuk pesta, namun terlalu elegan untuk diabaikan."
    },
]

const ProductsPage = () => {
    return (
        
        <div className="flex justify-center py-5">
            {/* Nested Component */}
            {products.map((product) => (
                <CardProduct key={product.id}>
                    <CardProduct.Header images={product.image} />
                    <CardProduct.Body name={product.name}>
                        {product.description}
                    </CardProduct.Body>
                    <CardProduct.Footer price={product.price} />
                </CardProduct>
            ))}
        </div>
    )
};

export default ProductsPage;