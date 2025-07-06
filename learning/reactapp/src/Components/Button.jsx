import { useState, useEffect } from "react"

export function Button({color}) {

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("page rendered")
    }, [])

    useEffect(() => {
        console.log("count is " + count)
    }, [count])

    return(
        <button onClick={() => setCount(count + 1)}
            style={{backgroundColor: color}}>
            <p>{count}</p>
        </button>
    )
}