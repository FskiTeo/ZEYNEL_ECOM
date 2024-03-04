import { React, useEffect, useState } from "react"

//Components Import
import Product from "../Components/Product"
import { FormControl, MenuItem, Select, TextField, InputLabel } from "@mui/material";

const styles = {
    bannerTop:{
        backgroundImage: 'url("/images/products-banner.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
}

export default function Products() {
    let [items, setItems] = useState();
    let [categories, setCategories] = useState();

    const handleCategoryChange = ((event)=>{
        if(event.target.value == "0"){
            fetchAllProducts()
        } else {
            fetchAllProductsFromCategory(event.target.value)
        }
    });

    const handleSearchChange = ((event)=>{
        if(event.target.value == ""){
            fetchAllProducts()
        } else {
            fetchAllProductsBySearchQuery(event.target.value)
        }
    })

    const fetchAllCategories = (async ()=>{
        return await fetch("https://api.escuelajs.co/api/v1/categories?limit=10")
            .then((response)=>{
                return response
            })
            .catch((error)=>{console.log("IMPOSSIBLE DE RECUPERER LES CATEGORIES : " + error)});
    })
    
    const fetchAllProducts = (async ()=>{
        return await fetch("https://api.escuelajs.co/api/v1/products?limit=16&offset=0")
            .then((response)=>response.json())
            .then((data)=>{
                let productCounter = 0;
                setItems(data.map((productData)=>{
                    productCounter+=1;
                    if(productCounter <=16){
                        return(<div className="flex flex-wrap justify-center">
                        <Product key={productData.title} data={productData}/>
                        </div>)
                    }
                }))
            })
            .catch((error)=>{console.log("IMPOSSIBLE DE RECUPERER LES ITEMS : " + error)});
    })
    
    const fetchAllProductsFromCategory = ( async (category_id)=>{
        return await fetch("https://api.escuelajs.co/api/v1/products/?limit=16&categoryId=" + category_id)
            .then((response)=>response.json())
            .then((data)=>{
                let productCounter = 0;
                setItems(data.map((productData)=>{
                    productCounter+=1;
                    if(productCounter <=16){
                        return(<div className="flex flex-wrap justify-center">
                        <Product key={productData.title} data={productData}/>
                        </div>)
                    }
                }))
            })
            .catch((error)=>{console.log("IMPOSSIBLE DE RECUPERER LES ITEMS : " + error)});
    })

    const fetchAllProductsBySearchQuery = ( async (searchQuery)=>{
        return await fetch("https://api.escuelajs.co/api/v1/products/?limit=16&title=" + searchQuery)
            .then((response)=>response.json())
            .then((data)=>{
                let productCounter = 0;
                setItems(data.map((productData)=>{
                    productCounter+=1;
                    if(productCounter <=16){
                        return(<div className="flex flex-wrap justify-center">
                        <Product key={productData.title} data={productData}/>
                        </div>)
                    }
                }))
            })
            .catch((error)=>{console.log("IMPOSSIBLE DE RECUPERER LES ITEMS : " + error)});
    })
    

    useEffect(()=>{
        fetchAllProducts()

        fetchAllCategories()
            .then((response)=>response.json())
            .then((data)=>{
                setCategories(data.map((categoryData)=>{
                    return <MenuItem value={categoryData.id}>{categoryData.name}</MenuItem>
                }));
            })

    },[]) 

    return(<div className="">
        <div className="h-36" style={{...styles.bannerTop}}></div>
        <div id="content" className="w-full flex flex-wrap justify-center">
            <div className="container">
                <div className="w-full bg-gray-300 flex flex-wrap justify-evenly">
                    <div className=" my-4 w-1/3">
                        <FormControl fullWidth>
                            <InputLabel id="categories-label">Catégorie</InputLabel>
                            <Select labelId="categories-label" id="category-select" className="category-select123" label="Categorie" onChange={handleCategoryChange}>
                                <MenuItem value="0">--</MenuItem>
                                {categories}
                            </Select>
                        </FormControl>
                    </div>
                    <div className="my-4 w-1/3">
                        <TextField 
                            id="outlined-search" 
                            label="Rechercher" 
                            type="search"
                            onChange={handleSearchChange}
                        />
                    </div>
                </div>
                <div id="products-container" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                    {items}
                </div>
            </div>
        </div>
    </div>)
}