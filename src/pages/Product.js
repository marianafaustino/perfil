import { Link, useParams } from "react-router-dom"
import {useFetch} from '../hooks/useFetch'

const Product = () => {
// 4- rota dinâmica
    const {id}= useParams()

// 5- carregamento dinâmico de dados individuais
    const url = "http://localhost:3004/products/" + id
    const {data: product, loading, error}= useFetch(url)

    console.log(product)
  return (
    <>
    <p>ID do produto: {id}</p>
    {error && <p>Ocorreu um erro...</p>}
    {loading && <p>Carregando...</p>}
    {product &&
    <div>
    <h2>{product.name}</h2>
    <p>R$: {product.price}</p>
{/* 6- nested routes */}
    <Link to={`/products/${product.id}/info`}>Mais informações</Link>
    </div>}
    </>
  )
}

export default Product