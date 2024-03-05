import React, {} from "react";
import {Card, CardContent} from "@mui/material";
import ImagesCarousel from "./ImagesCarousel";

export default function DetailsProductCard(props) {

    const images = JSON.parse(props.data.images);
    console.log(images)

    return (
        <Card className="w-10/12 md:w-2/3 lg:w-1/2 bg-white rounded-lg border border-gray-200 shadow-md">
            <CardContent className="flex flex-wrap">
                <ImagesCarousel images={images} className="w-full"/>
                <div className="flex flex-col space-y-3 p-5 w-full">
                    <h2 className="text-2xl font-bold">{props.data.title}</h2>
                    <p className="text-gray-600">{props.data.price} €</p>
                    <p className="text-gray-600">{props.data.description}</p>
                </div>
            </CardContent>
        </Card>
    )
}