import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'

const Home = props => {
    

    return (
        <>
            <h1>Hello im home</h1>
            <Link to={"/about"}>Go Home </Link>
        </>
    )
}

export default Home;