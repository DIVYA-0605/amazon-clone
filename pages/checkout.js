import Header from "../components/Header"
import Image from "next/image";
import { selectItems, selectTotal } from "../slices/basketSlice";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Currency from "react-currency-formatter"
import { useSession} from 'next-auth/react'
import { groupBy } from "lodash";

function Checkout() {
    const items =  useSelector(selectItems) 
    const total = useSelector(selectTotal)
    const {data:session} = useSession();
    const groupedItems = Object.values(groupBy(items, "id"));
     return (
        <div className="bg-gray-100">
          <Header />
          <main className="lg:flex max-w-screen-2xl mx-auto">
              {/* left */}
              <div className="flex-grow  m-5 shadow-sm">
                  <Image
                  src="https://links.papareact.com/ikj"
                  alt=" "
                  width={1020}
                  height={250}
                  objectFit="contain"/>

                  <div className="flex flex-col p-5 space-y-10 bg-white">
                        <h1 className="text-3xl border-b pb-4">{items.length ===0 ? "Your Amazon Basket is Empty." : "Shopping Basket"}</h1>

                {groupedItems.map((group, i) => (
                                    <CheckoutProduct
                                            key={i} 
                                            id={group[0].id}
                                            title={group[0].title}
                                            rating={group[0].rating}
                                            price={group[0].price}
                                            description={group[0].description}
                                            category={group[0].category}
                                            image={group[0].image}
                                            hasPrime={group[0].hasPrime}
                                            quantity={group.length}
                                    />
                                
                ))}

                  </div>
              </div>



              {/* right */}
              <div className="flex flex-col  bg-white p-10 shadow-md ">
                  {items.length>0 && (
                      <>
                      <h2 className="whitespace-nowrap">Subtotal ({items.length} items):
                      <span className="font-bold">
                      <Currency quantity={total*45} currency="INR"/>
                      </span>
                      </h2>
                      <button
                      disabled={!session} 
                      className={`button mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-200  text-gray-300 cursor-not-allowed' }`}>
                          {
                              !session ? 'Sign in to checkout' : 'Proceed to Checkout'
                          }
                      </button>
                      </>
                  )}
              </div>

          </main>
        </div>
    )
}

export default Checkout
