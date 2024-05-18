import { Link } from "react-router-dom"
import './styles.css'

export default function PspMenu(){
    return(
        <div>
            <Link to={'/'}>Voltar</Link>
        
            <div className="container">
                
                <h1>PSP MENU</h1>
                <h2>Menu</h2>
                <Link id='btn' to={'/psppc'}>Prova de Conhecimentos</Link>
            </div>
        </div>
    )
}