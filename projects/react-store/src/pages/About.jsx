import { Link } from "react-router-dom"

export function About() {
    return (
        <>
            <h1>About us Page</h1>
            <h2>We were founded in 2025</h2>
            <Link to="/Contact">
                <button>
                    Contact Us
                </button>
            </Link>
        </>
    )
}