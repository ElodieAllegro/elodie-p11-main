// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import Accordeon from "../../components/Accordeon/Accordeon";
import Author from "../../components/Author/Author";
import Tags from "../../components/Tags/Tags";
import Rating from "../../components/Rating/Rating";

import './location.scss';


const Location = () => {

    const location = useLoaderData()

    if(!location){
        return ''
    }

    return  <div>
        <Slider
            pictures={location.pictures}
        />

        <div className="location-info">
            <div className="left">
                <h1 className="title-location">{location.title}</h1>
                <p>{location.location}</p>
                <Tags tags={location.tags} />
            </div>
            
            <div className="right">
                <Author name={location.host.name} picture={location.host.picture} />
                <Rating rating={location.rating} /> 
            </div>
        </div>
        <div className="accordeons">
            <Accordeon 
                title="Description"
            >
                <p>{location.description}</p>
            </Accordeon>

            <Accordeon 
                title="Equipements"
                content={location.equipments}
            >
                <ul>
                    {location.equipments.map(e => <li key={e}>{e}</li>)}
                </ul> 
            </Accordeon>
        </div>
    </div>
    
}

export default Location;