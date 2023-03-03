import {Link} from 'react-router-dom'
import {useFetch} from '../hooks/useFetch'
import './Formacao.css'

const Formacao = () => {

  const url = 'http://localhost:3004/cursos'

  const {data: items, loading, error}= useFetch(url)

  return (
    <div>
      <h1>Formação:</h1>
      {error && <p>{error}</p>}
      <ul className='cursos'>
        {items && 
        items.map((item)=>(
          <li key={item.id}>
            <h2>{item.grau} em {item.curso}</h2>
            <p>{item.periodo}</p>
            <Link to={`/cursos/${item.id}`}>Detalhes</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Formacao