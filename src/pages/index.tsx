import { styled } from "@/styles"
import Head from "next/head"

const Button = styled('button', {
  backgroundColor: "$green500",
  borderRadius: 4,
  border: 0,
  padding: '4px 8px',

  span: {
    fontWeight: 'bold'
  },

  '&:hover': {
    filter: 'brightness(0.8)'
  }

  

})


export default function Home() {
  return (
    <>
    <Head>
      <title>Ignite | Ig.Shop</title>
    </Head>
      <h1>Olá Mundo</h1>
      <Button>
        <span>Teste</span>
        Alyson
      </Button>
    </>
  )
}
