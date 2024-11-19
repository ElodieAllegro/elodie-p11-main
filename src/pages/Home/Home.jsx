import './home.scss'
import { useEffect, useState } from 'react'

import Card from '../../components/Card/Card'
import HeaderImage from '../../components/HeaderImage/HeaderImage'

const Home = () => {

    const [locations, setLocations] = useState([])

    useEffect(() => {
        fetch('data.json')  //Appel vers le fichier JSON
        .then(res => res.json()) //conversion des objets en javascript
        .then((data) => { 
            setLocations(data) //Mise à jour du state avec les données des logements
        })
    }, [])

    return (
        <>
         
      <HeaderImage 
        image="/src/assets/banner1.svg" 
        title="Chez vous, partout et ailleurs" 
      />
            <div className="container-locations"> 
                <ul className="locations">
                    {locations.map((location) => {
                        return <li key={location.id}>
                            <Card 
                              title={location.title} 
                              image={location.cover}  
                              id={location.id}
                            />
                        </li>
                    })}
                </ul>
            </div>
        </>
    )

}

export default Home;
