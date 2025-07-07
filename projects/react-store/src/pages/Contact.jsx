import { useState } from "react"


export function Contact() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [comment, setComment] = useState("")

    function handleSubmit() {

    }

    return (
        <>
            <h1>Contact Us Below</h1>
            <input onChange={(e) => setName(e.target.value)} placeholder="Name"/>
            <input onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
            <input onChange={(e) => setComment(e.target.value)} placeholder="Comment"/>
            <button onClick={() => handleSubmit()}>Submit</button>
        </>
    )
}