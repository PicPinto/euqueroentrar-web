import { Link } from "react-router-dom"

export default function GnrMenu(){
    return(
        <div>
            <Link className="voltar" to={'/'}>Voltar</Link>
            <h1>GNR MENU</h1>
            <h2>Em Construção</h2>

            {/* <Link id='btn' to={'/gnrpc'}>Prova de Conhecimentos</Link> */}
        </div>
    )
}