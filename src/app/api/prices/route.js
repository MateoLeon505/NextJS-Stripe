import { NextResponse } from "next/server";
import { Stripe } from "stripe";

export const GET = async () => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const prices = await stripe.prices.list();
  console.log(prices);

  return NextResponse.json({
    message: `Hello from /api/prices`,
  });
};