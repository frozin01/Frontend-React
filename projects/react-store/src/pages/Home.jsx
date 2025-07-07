import { Link } from 'react-router-dom'
import imageGym from '../../public/image2.png'

export function Home() {
    return (
        <>
            <h1>Welcome to Gym Supplement Store!</h1>
            <img src={imageGym}/>
            <br></br>
            <Link to="/Products">
                <button>
                    View All Products
                </button>
            </Link>
        </>
    )
}