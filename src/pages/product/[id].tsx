import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product"
import { useRouter } from "next/router"

export default function Products () {
  const { query } = useRouter()
  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, laudantium. Rem facere dolores autem porro, maiores assumenda esse officia temporibus quasi delectus magnam, amet maxime quos ipsam cupiditate, consequatur asperiores.</p>
        <button>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}