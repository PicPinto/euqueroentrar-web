import { Link } from "react-router-dom"
import './styles2.css'

export default function PspMenu(){
    return(
        <div>
            <Link id='voltar' to={'/'}>Voltar</Link>
        
            <div className="container">
                
                <h1>PSP MENU</h1>
                <Link id='btn' to={'/psppc'}>Prova de Conhecimentos</Link>
            </div>
        </div>
    )
}