

// export function StoreItem({title, desc, price}) {

//     return (
//         <>
//             <h1>{title}</h1>
//             <p>{desc}</p>
//             <button>{price}</button>
//         </>
//     )
// }

export function StoreItem({item}) {

    return (
        <>
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
            <button>{item.price}</button>
        </>
    )
}