import { Link } from "react-router-dom";


export default function index() {
    return (
        <main>
            <h1>Home</h1>
            
        <ul>
            <li> <Link to='/corPrimaria'> Cor primaria </Link></li>
            <li> <Link to='/frequencia'> Frequencia </Link></li>
            <li> <Link to='/ingresso'> Ingresso </Link></li>
            <li> <Link to='/maiorNumero'> Maior Numero </Link></li>
        </ul>
        </main>

    )

}