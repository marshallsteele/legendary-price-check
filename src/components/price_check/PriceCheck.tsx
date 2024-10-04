import './PriceCheck.css';
import NewItemCard from './NewItemCard';
import ItemCard from './ItemCard';
import { useState } from 'react';

function PriceCheck() {
  //GET CONTEXT FOR ALL ITEM IMAGES USING API, IF API DOWN, SHOW ERROR MESSAGE

  const [items, setItems] = useState<number[]>([])
  const [counter, setCounter] = useState(0)

  function handleAddCardClicked() {
    setItems(items => [...items, counter])
    setCounter(counter => counter + 1)
  }

  function handleCloseItemCard(itemId: number) {
    setItems(items.filter((id) => {return id != itemId}))
  }

  return (
      <div className="pcGridContainer">
        {items.map((id) => <ItemCard key={id} id={id} handleCloseItemCard={(itemId:number) => handleCloseItemCard(itemId)}/>)}
        <NewItemCard cardClicked={handleAddCardClicked}></NewItemCard>
      </div>
  )
}

export default PriceCheck