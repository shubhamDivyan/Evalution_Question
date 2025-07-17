import React, { useEffect, useState } from 'react'
// import ProductItem from './ProductItem';
import ProductItem from './ProductItem';
import Pagination from './Pagination';

const Product = () => {
    const [products,setProduct]=useState([]);
    const [currentPage,setCurrentPage]=useState(1);
    const itemPage=10;

    useEffect(()=>{
        const fetchData=async ()=>{
            try{
                const res=await fetch("https://dummyjson.com/products");
                const data=await res.json();
                console.log("Product_Item:",data)
                setProduct(data.products)
            }catch(error){
                    console.log("Error Message",error);
                    
            }
        }

        fetchData()
    },[])

    const lastProduct=currentPage * itemPage;
    const firstProduct=lastProduct - itemPage;
    const currentitem=products.slice(firstProduct,lastProduct)
    console.log("currentPage",currentPage)
    const totalPage=Math.ceil(products.length/itemPage);

    const page=(PN)=>setCurrentPage(PN);
  return (
    <div>
        <>
            <p>Product Item</p>
            {/* <ProductItem/> */}
            {currentitem.map((product)=>(
                <ProductItem key={product.id} product={product}/>
                // console.log(product)
                // console.log(product.id)
            ))}

            <Pagination totalPage={totalPage} currentPage={currentPage} page={page}/>
        </>
    </div>
  )
}

export default Product