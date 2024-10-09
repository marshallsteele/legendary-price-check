import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface NewItemCardProps {
    cardClicked: () => void
}

/**
   @todo: Update icon so it changes colour on hover
**/

function NewItemCard ({ cardClicked }: NewItemCardProps) {
    return (
        <div onClick={cardClicked} className="pcItemCardContainer pcCardContainer pcClickable">
            <FontAwesomeIcon size="6x" icon={faCirclePlus} />
        </div>
    )
}

export default NewItemCard;