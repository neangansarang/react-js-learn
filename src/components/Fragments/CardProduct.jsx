import Button from "../Elements/Button";

const CardProduct = (props) => {
    const { children } = props;
    return (
        <div className="w-full max-w-xs bg-gray-800 border-gray-700 rounded-lg shadow mx-2 my-2 flex flex-col justify-between">
            {children}
        </div>
    )
};

const Header = (props) => {
    const { images } = props;
    return (
        <a href="">
            <img 
                src={images} 
                alt="product"
                className="p-5 rounded-md"
            />
        </a>
    )
}

const Body = (props) => {
    const { children, name } = props;
    return (
        <div className="px-5 pb-5 h-full">
            <a href="">
                <h5 className="text-xl font-semibold tracking-tight text-white">
                    {name}
                </h5>
            </a>
            <p className="text-m text-white">
                {children}
            </p>
        </div>
    )
}

const Footer = (props) => {
    const { price, addToCart, id } = props;
    return (
        <div className="flex item-center justify-between px-5 pb-5">
            <span className="text-xl font-bold text-white">
                Rp{" "}
                {price.toLocaleString('id-ID')}
            </span>
            <Button classname="bg-blue-600" onClick={() => addToCart(id)}>
                Add to Cart
            </Button>
        </div>
    )
}

// Activate Nested Component
CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;