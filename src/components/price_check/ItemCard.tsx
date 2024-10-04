import { useState } from "react";
import ItemDisplay from "./ItemDisplay";
import SelectItemMenu from "./SelectItemMenu";

interface ItemCardProps {
    id:number
    handleCloseItemCard: (id:number) => void
}

function ItemCard ({ id, handleCloseItemCard }: ItemCardProps) {
    const [itemId, setItemId] = useState<number | null>(null)
    const [itemName, setItemName] = useState("")

    function handleItemSelected(itemId: number, itemName: string) {
        setItemId(itemId)
        setItemName(itemName)
    }

    return (
        itemId ? 
            <ItemDisplay itemId={itemId} itemName={itemName} handleCloseItemCard={() => handleCloseItemCard(id)} /> 
        : 
            <SelectItemMenu handleItemSelected={(itemId:number, itemName:string) => handleItemSelected(itemId, itemName)} />
    )
}

export default ItemCard;