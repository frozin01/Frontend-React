import { StoreItem } from "../Components/StoreItem"

export function Home() {
    // const myArray = ["Dog", "Cat"]

    const item1 = {title: "Bat1", desc: "Metal1", price: 50}
    const item2 = {title: "Bat2", desc: "Metal2", price: 40}
    const item3 = {title: "Bat3", desc: "Metal3", price: 30}

    const myArray = [item1, item2, item3]

  return (
    <>
      {myArray.map((element, index) => {
        return (
          // <TextBlock text={element} key={index}/>
          // <StoreItem title={element.title} desc={element.desc} price={element.price}/>
          <StoreItem item={element} key={index}/>
        )
      })}
    </>
  )
}