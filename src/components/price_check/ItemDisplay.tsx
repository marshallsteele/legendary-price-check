import { useEffect, useState } from "react"

interface ItemDisplayProps {
    handleCloseItemCard: () => void
    itemId:number
    itemName:string
}

interface ItemPrice {
    id:number,
    whitelisted: boolean,
    buys: {
        quantity:number,
        unit_price:number
    },
    sells: {
        quantity:number,
        unit_price:number
    }
}

const tpLookupURL = "https://api.guildwars2.com/v2/commerce/prices"

function ItemDisplay ({ handleCloseItemCard, itemId, itemName }: ItemDisplayProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [itemPrice, setItemPrice] = useState<ItemPrice | null>(null);

    async function handleFetchAPIData(itemId:number) {
        setIsLoading(true);
        fetch(tpLookupURL + "/" + itemId)
            .then(response => response.json())
            .then(data => {
                setItemPrice(data);
                setIsLoading(false);
            })
    }

    useEffect(() => {
        handleFetchAPIData(itemId);
    }, []);

    return (
        <div onClick={handleCloseItemCard} className="pcItemCardContainer pcClickable">
            { isLoading ?
                <h1>Loading</h1>
                :
                    <div>
                        <h1>{itemName}</h1>
                        <h1>{itemPrice ? itemPrice.buys.unit_price : "Error Loading Price"}</h1>
                    </div>
            }
        </div>
    )
}

export default ItemDisplay;