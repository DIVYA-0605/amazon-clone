import { StarIcon,MinusIcon,PlusIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Currency from "react-currency-formatter"
import { useDispatch } from "react-redux";
import {addToBasket,removeFromBasket,removeGroupedFromBasket} from '../slices/basketSlice'
import { selectItems } from "../slices/basketSlice";
import { useSelector } from "react-redux";
import { groupBy } from "lodash";


function CheckoutProduct({id,title,price,rating,description,category,image,hasPrime,quantity}) {
    const dispatch = useDispatch ()
    const items =  useSelector(selectItems) ;
    const groupedItems = Object.values(groupBy(items, "id"));

    const addItemToBasket =()=>{
        const product ={
            id,title,price,description,category,image,rating,hasPrime
        };
        // sending the product as an action to the Redux store... the basket slice
        dispatch(addToBasket(product))


    }

    const removeItemFromBasket=()=>{
        dispatch(removeFromBasket({id}))
    }

    const removeGroupedBasket=()=>{
        dispatch(removeGroupedFromBasket({id}))
        dispatch
    }
    return (
        <div className="grid grid-cols-5">
            <Image src={image} alt=" " height={200} width={200} objectFit="contain"/>
            {/* Middle */}
            <div className="col-span-3 mx-5">
            <p>{title}</p>
            <div className="flex">
                {Array(rating).fill().map((_,i)=>(
                    <StarIcon key={i} className="h-5 text-yellow-500"/>

                ))}
            </div>
            <p className="text-xs my-2 line-clamp-3">{description}</p>
            <div>
                <span>{`${quantity} x ${Math.floor(price*45)} =`}</span>
                <span> <Currency quantity={`${quantity*price*45}`} currency="INR"/></span>
            </div>
          
            {hasPrime && (
               <div className="flex items-center space-x-2 ">
                   <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
                   <p className="text-xs text-gray-500">Free Next-day Delivery</p>
               </div>
             
           )}
            </div>
            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <div className="flex items-center space-x-1">
                <button onClick={removeItemFromBasket} className="button"><MinusIcon className="text-black-500 h-4"/></button> 
                    {/* <span className="text-xs font-bold">{`Quantity : ${quantity}`}</span> */}
                    <p className="text-sm">Quantity : <span className="font-bold">{quantity}</span></p>
                    <button onClick={addItemToBasket} className="button"><PlusIcon className="text-black-500 h-4"/></button> 
                
                </div>
            {/* <button  onClick={addItemToBasket} className=" button">Add to Basket</button>  */}
            <button onClick={removeGroupedBasket} className=" button">Remove from Basket</button> 

            </div>
           
        </div>
    )
}

export default CheckoutProduct
