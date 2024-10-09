import { useEffect, useState } from "react"

interface ItemDisplayProps {
    handleCloseItemCard: () => void
    itemId:number
    itemName:string
}

interface TPPrices {
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

interface ItemValue {
    gold:number,
    silver:number,
    copper:number
}

const tpLookupURL = "https://api.guildwars2.com/v2/commerce/prices"
const DEFAULT_PERCENTAGE = 85;

function calculateItemValue(price:number): ItemValue {
    price = Math.round(price);
    var copper:number = price % 100;
    price = Math.floor(price / 100)
    var silver:number = price % 100;
    price = Math.floor(price / 100);
    var gold:number = price;
    
    return {copper:copper, silver:silver, gold:gold};
}

function ItemDisplay ({ handleCloseItemCard, itemId, itemName }: ItemDisplayProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [tPPrices, setTPPrices] = useState<TPPrices | null>(null);
    const [itemValue, setItemValue] = useState<ItemValue | null>(null);
    const [pricePercentage, setPricePercentage] = useState<number>(DEFAULT_PERCENTAGE);


    async function handleFetchAPIData(itemId:number) {
        setIsLoading(true);
        fetch(tpLookupURL + "/" + itemId)
            .then(response => response.json())
            .then(data => {
                setTPPrices(data);
                setIsLoading(false);
            })
    }

    function handlePercentageChange(event:React.FormEvent<HTMLInputElement>) {
        setPricePercentage(parseInt((event.target as HTMLInputElement).value))
    }

    useEffect(() => {
        handleFetchAPIData(itemId);
    }, []);

    useEffect(() => {
        if (tPPrices) setItemValue(calculateItemValue(tPPrices.sells.unit_price * (pricePercentage / 100)));
    }, [tPPrices, pricePercentage]);

    return (
        <div className="pcCardContainer">
            <div className="pcCardTabsContainer">
                <div className="pcCardTab active">
                    Depth: 1
                </div>
                <div className="pcCardTab active">
                    Depth: 2
                </div>
                <div className="pcCardTab active">
                    Depth: 5
                </div>
            </div>
            <div className="pcItemCardContainer">
            { isLoading ?
                <div className="pcItemDisplayContainer">
                    <h2>Loading</h2>
                </div>
                :
                <div className="pcItemDisplayContainer">
                    <div className="pcItemDisplayButtonsContainer">
                        <button onClick={() => handleFetchAPIData(itemId)} className="pcItemDisplayButton">R</button>
                        <button onClick={handleCloseItemCard} className="pcItemDisplayButton">X</button>
                    </div>
                    <h2 className="pcItemDisplayItemName">{itemName}</h2>
                    <p className="pcItemDisplayPercentage">{pricePercentage}%</p>
                    <input className="percentageSlider" 
                    type="range" min="0" max="100" value={pricePercentage} step="1" 
                    onInput={handlePercentageChange}
                    onChange={handlePercentageChange}/>
                    
                    <div>
                        { itemValue ?  
                            <div className="pcItemValueContainer">
                                <p className="pcItemDisplayValueGold">{itemValue.gold} <span style={{color:'#EDAC4A'}}>g</span></p>
                                <p className="pcItemDisplayValueSilver">{itemValue.silver} <span style={{color:'#CACACA'}}>s</span></p>
                                <p className="pcItemDisplayValueCopper">{itemValue.copper} <span style={{color:'#D16630'}}>c</span></p>
                            </div>
                        : 
                            "Error Loading Price"}
                    </div>
                </div>
            }
            </div>
        </div>
        
    )
}

export default ItemDisplay;