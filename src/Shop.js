import React, { useEffect, useState } from 'react';
import Product from './Product';
import "./Shop.css";
import {Link} from 'react-router-dom';

function Shop() {

   useEffect(() => {
      fetchItems();
      
   }, []);

   const [items, setItems] = useState([]);

   const fetchItems = async () =>{
      const data = await fetch('https://fortnite-api.com/v2/cosmetics/br');
      // convert data to JSON

      const items = await data.json();

      const allItems = items.data;
      
      console.log(allItems);
         
      setItems(allItems);

   }
   return (
      <div className="shop">
         <h1>Shop with us!</h1>
         {/* <Product prodName="Samsung Tv" price={2000.99}/>
         <Product prodName="Apple watch" price={220.99}/>
         <Product prodName="Macbook Pro 13'" price={2300.99}/>
         <Product prodName="Galaxy Buds" price={302.99}/> */}

         <h1>Banners!</h1>
         <div className="shop__button-container">
            {items.slice(0, 20).map(item =>(
               <button className="shop__buttons" key={item.id}>
                     <Link to={`/shop/${item.id}`}>{
                        item.id.toString().split('BannerToken_')
                     }</Link>
                  </button>
            
            ))}  
         </div>
      </div>
   )
}

export default Shop
