import React from "react";
import { Stripe } from "stripe";

const LoadPrices = async () => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const prices = await stripe.prices.list();
  return prices.data;
};

const Pricing = async () => {
  const prices = await LoadPrices();
  console.log(prices);

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-8 bg-app">
      <h1 className="text-5xl text-white font-bold">Precios</h1>
      <div className="flex gap-5">
        {prices.map((price) => (
          <div
            key={price.id}
            className="bg-card w-48 text-center h-80 rounded-md pb-10 text-white"
          >
            <div className="bg-header h-10 flex justify-center items-center">
              <h3 className="font-light rounded-t-xl">{price.nickname}</h3>
            </div>
            <div className="flex flex-col justify-evenly h-full flex-1 text-w">
              <div className="line-through">
                <h4 className="inline-block font-light text-sm">{price.currency}</h4>
                <h2 className="inline-block text-xl font-bold ml-1 line-through">{`${
                  price.unit_amount / 100 * 2
                },00$`}</h2>
              </div>
              <div>
                <h4 className="inline-block font-light">{price.currency}</h4>
                <h2 className="inline-block text-4xl font-bold ml-1">{`${
                  price.unit_amount / 100
                },00$`}</h2>
              </div>
              <div>
                <button className="font-bold py-2 rounded-full border border-white w-40">
                  Suscribirme
                </button>
              </div>
              <p>{price.lookup_key}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
