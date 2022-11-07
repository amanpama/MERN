import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const People = props => {

    const [person, setPerson] = useState({
        name: "",
        hair_color: ""
    });

    const { id } = useParams();

    useEffect(() => {
        console.log(id)
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => { console.log(err) })
    }, []);

    return (
        <>
            <h1>Hello im a person</h1>
            <div>
                <li>{person.name}</li>
                <li>{person.hair_color}</li>
            </div>
            <Link to={"/about"}>Go about </Link>
            <Link to={"/"}>Go Home </Link>

        </>
    )
}

export default People;