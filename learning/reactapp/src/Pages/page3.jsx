import { useState } from "react"
import { Button } from "../Components/Button"
import { StoreItem } from "../Components/StoreItem"

export function Page3() {
    const [showItem, setShowItem] = useState(false)

  const item1 = {title: "Bat1", desc: "Metal1", price: 10}

  return (
    <>
      <Button show={showItem} setShow={setShowItem}/>
      {showItem == true ? <StoreItem item={item1}/> : <></>}
    </>
  )
}