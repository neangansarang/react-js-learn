import { Fragment, useState } from "react";
import CardProduct from "../Fragments/CardProduct";
import Button from "../Elements/Button";
import Counter from "../Fragments/Counter";

// Stateless / Functional Component 

const products = [
    {
        id: 1,
        name: "Sepatu Adidas",
        price: 1500000,
        image: "/images/shoes-1.jpg",
        description: "Sepatu kulit cokelat tua itu mengeluarkan bunyi derit lembut di setiap langkah, seolah menyimpan ribuan cerita perjalanan di balik solnya yang mulai menipis."
    },
    {
        id: 2,
        name: "Sepatu Puma",
        price: 1850000,
        image: "/images/shoes-2.jpg",
        description: "Sneaker putih itu masih terlalu bersih untuk disebut milik seseorang yang benar-benar hidup."
    },
    {
        id: 3,
        name: "Sepatu Cats",
        price: 550000,
        image: "/images/shoes-3.jpg",
        description: "Sepatu Cats dengan sol karet tebalnya berdiri kokoh seperti punya pendirian — tidak peduli medan berlumpur, aspal retak, atau hati yang patah."
    },
    {
        id: 4,
        name: "Sepatu Bots",
        price: 2000000,
        image: "/images/shoes-4.jpg",
        description: "Boots kulit itu melangkah dengan percaya diri, seolah tahu bahwa ke mana pun ia pergi, tanah di bawahnya yang harusnya merasa terhormat."
    },
    {
        id: 5,
        name: "Sepatu Pantopel",
        price: 550000,
        image: "/images/shoes-5.jpg",
        description: "Pantofel hitam mengkilap itu tampak terlalu serius untuk pesta, namun terlalu elegan untuk diabaikan."
    },
]

const getEmail = localStorage.getItem("email");

const ProductsPage = () => {

    const [cart, setCart] = useState([]);

    const handleLogout = () => {
        localStorage.removeItem('email')
        localStorage.removeItem('password')
        window.location.href = "/login"
    }

    const handleAddToCart = (id) => {
        if(cart.find((item) => item.id === id)) {
            setCart(
                cart.map((item) => item.id === id ? {...item, qty: item.qty + 1} : item)
            )
        } else {
            setCart([...cart, {id, qty: 1}])
        }
    }

    return (
        <Fragment>
            <div className="flex justify-end h-15 bg-blue-600 text-white items-center px-5">
                {getEmail}
                <Button classname="ml-5 bg-black" onClick={handleLogout}>
                    Logout
                </Button>
            </div>
            <div className="flex justify-center py-5">
                <div className="w-4/6 flex flex-wrap">
                    {/* Nested Component */}
                    {products.map((product) => (
                        <CardProduct key={product.id}>
                            <CardProduct.Header images={product.image   } />
                            <CardProduct.Body name={product.name}>
                                {product.description}
                            </CardProduct.Body>
                            <CardProduct.Footer 
                                price={product.price} 
                                id={product.id}
                                addToCart={handleAddToCart} 
                             />
                        </CardProduct>
                    ))}
                </div>
                <div className="w-2/6 mr-2">
                    <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
                    <table className="text-left table-auto border-separate border-spacing-x-5">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => {
                                const product = products.find((product) => product.id === item.id);
                                return (
                                    <tr key={item.id}>
                                        <td>{product.name}</td>
                                        <td>
                                            Rp{" "}
                                            {product.price.toLocaleString('id-ID')}
                                        </td>
                                        <td>{item.qty}</td>
                                        <td>
                                            Rp{" "}
                                            {(product.price * item.qty).toLocaleString('id-ID')}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

            </div>
            <div className="mt-5 flex justify-center">
                <Counter></Counter>
            </div>
        </Fragment>
    )
};

export default ProductsPage;