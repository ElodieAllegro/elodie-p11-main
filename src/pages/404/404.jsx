import { Link } from 'react-router-dom';
import ErrorImage from '../../assets/404.svg'

import'./404.scss';



const Error404 = () => {
    return <div className='error-page'>
        <div className="container">
            <img src={ErrorImage} alt="Error image" />
            <p>Oups! La page que vous demandez n'existe pas.</p>

            <Link to='/'>Retourner sur la page d’accueil</Link>
        </div>        
    </div>
}

export default Error404;