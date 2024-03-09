import React, {useContext} from "react";
import {Button, Card, CardContent} from "@mui/material";
import ImagesCarousel from "./ImagesCarousel";
import Cookies from "universal-cookie";
import CartContext from "../CartContext";


export default function DetailsProductCard(props) {
    const {updateCartQuantity} = useContext(CartContext);

    const images = JSON.parse(props.data.images);

    const handleAddToCart = () => {
        const cookies = new Cookies();
        if(cookies.get('cart') === undefined) {
            cookies.set('cart',[{id: props.data.id, title: props.data.title, quantity: 1, price: props.data.price}], {path: '/'})
        } else {
            let cart = cookies.get('cart');
            let index = cart.findIndex((item) => item.id === props.data.id);
            if(index === -1) {
                cart.push({id: props.data.id, title: props.data.title, quantity: 1, price: props.data.price});
            } else {
                cart[index].quantity += 1;
                cart[index].price += props.data.price;
            }
            cookies.set('cart', cart, {path: '/'});
        }
        updateCartQuantity();
    };

    return (
        <Card className="w-10/12 md:w-2/3 lg:w-1/2 bg-white rounded-lg border border-gray-200 shadow-md">
            <CardContent className="flex flex-wrap">
                <ImagesCarousel images={images} className="w-full"/>
                <div className="flex flex-col space-y-3 p-5 w-full">
                    <h2 className="text-2xl font-bold">{props.data.title}</h2>
                    <p className="text-gray-600">{props.data.price} €</p>
                    <p className="text-gray-600">{props.data.description}</p>
                    <Button
                        variant="contained"
                        className='w-full'
                        onClick={handleAddToCart}>
                        Ajouter au panier
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}