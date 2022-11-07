import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'; 

const Planet = props => {

    const[data, setData] = useState({});

    const {category, id} = useParams();

    useEffect(() => {
        console.log(category, id)
        axios.get(`https://swapi.dev/api/planets/${id}`)
        .then(res => {
            console.log(res)
        })
        .catch(err => {console.log(err)})
    }, []);

    return (
        <>
            <h1>Hello im a planet</h1>
            <Link to={"/about"}>Go about </Link>
            <Link to={"/"}>Go Home </Link>
        </>
    )
}

export default Planet;