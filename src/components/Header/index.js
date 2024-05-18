import './styles.css'
import { Link } from 'react-router-dom'

export default function Header(){
    return(
        <div className="sidebar">
            <Link to={'/'}><h1>EuQueroEntrar</h1></Link>
            
        </div>
    )
}