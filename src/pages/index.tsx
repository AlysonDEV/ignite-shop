import { GetServerSideProps } from "next"
import Head from "next/head"
import Image from "next/image"

import { useKeenSlider } from 'keen-slider/react'



import { stripeAPI } from "@/lib/stripe"
import { HomeContainer, Product } from "@/styles/pages/home"

import 'keen-slider/keen-slider.min.css'
import Stripe from "stripe"

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[]
}

export default function Home({products}: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1.8,
      spacing: 48,
    }
  })
  
  return (
    <>
    <Head>
      <title>Ignite | Ig.Shop</title>
    </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => {
          return (
            <Product key={product.id} className="keen-slider__slide">
              <Image src={product.imageUrl} width={520} height={480} alt=""/>
              <footer>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </footer>
            </Product>
          )
        })}
      </HomeContainer>
    </>
  )
}


export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripeAPI.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount / 100
    }
  })


  // return response.data
  return {
    props: {
      products,
    }
  }
}