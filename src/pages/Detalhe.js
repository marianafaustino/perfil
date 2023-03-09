import { Link, useParams } from "react-router-dom"
import {useFetch} from '../hooks/useFetch'
import './Detalhe.css'

const Detalhe = () => {
    const {id}= useParams()
    const url = "http://localhost:3004/cursos/" + id
    const {data: curso, loading, error}= useFetch(url)

   
  return (
    <>
    {error && <p>Ocorreu um erro...</p>}
    {loading && <p>Carregando...</p>}
    {curso &&
    <div className="detalhes">
    <h2>{curso.grau}</h2>
    <h3>{curso.curso}</h3>
    <p>Instituição: {curso.instituicao}</p>
    <p>Período: {curso.periodo}</p>
    <p>Status: {curso.status}</p>
    </div>}
    <p className="p">
      <Link to={'/formacao'}>&#x1F519; voltar</Link>
    </p>
    </>
  )
}

export default Detalhe