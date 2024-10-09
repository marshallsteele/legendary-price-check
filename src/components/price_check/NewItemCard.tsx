import plusCircle from "/PlusCircle.svg"

interface NewItemCardProps {
    cardClicked: () => void
}

/**
   @todo: Update icon so it changes colour on hover
**/

function NewItemCard ({ cardClicked }: NewItemCardProps) {
    return (
        <div onClick={cardClicked} className="pcItemCardContainer pcCardContainer pcClickable">
            <img className="pcPlusIcon" src={plusCircle} alt="Plus Icon" />
        </div>
    )
}

export default NewItemCard;