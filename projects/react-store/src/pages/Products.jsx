import { ProductCard } from "../components/ProductCard"

export function Products({cart, setCart}) {

    const protein = {title: "Protein Powder", desc: "Protein Powder description", price: 10}
    const creatine = {title: "Creatine", desc: "Creatine description", price: 20}
    const massGainer = {title: "Mass Gainer", desc: "Mass Gainer description", price: 40}

    const products = [protein, creatine, massGainer]

    return (
        <>
            {products.map((product) => {
                return (
                    <ProductCard product={product} cart={cart} setCart={setCart}/>
                )
            })}
        </>
    )
}