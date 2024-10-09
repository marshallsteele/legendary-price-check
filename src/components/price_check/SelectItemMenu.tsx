import { useState } from "react";

let gen1Legendaries = [
    {
        id: 30684, 
        name: "Frostfang",
        icon: "https://render.guildwars2.com/file/0F9C08DE12ADD1082A103DC6EF7401281B23985E/456009.png"
    },
    {
        id: 30687, 
        name: "Incinerator",
        icon: "https://render.guildwars2.com/file/D9B12A1EBEDC04047295CF0A66E43E650297D429/456012.png"
    },
    {
        id: 30692, 
        name: "The Moot",
        icon: "https://render.guildwars2.com/file/C0302BC8DDD84D20F0B73C1D702438F5534F3308/456017.png"
    },
    {
        id: 30693, 
        name: "Quip",
        icon: "https://render.guildwars2.com/file/03342FFE0E35B35D5207B65ECB0C1D06442377AB/456018.png"
    }, 
    {
        id: 30695, 
        name: "Meteorlogicus",
        icon: "https://render.guildwars2.com/file/AC940BF377C5D3EF13B2060D53EF19F1BC34BE48/456020.png"
    },
    {
        id: 30699, 
        name: "Bolt",
        icon: "https://render.guildwars2.com/file/FE47E046D10DF27508910869B5EB040F6BBBE793/456026.png"
    },
    {
        id: 30688, 
        name: "The Minstrel",
        icon: "https://render.guildwars2.com/file/D3DBEB4FE4C81401AF6EA905FE16E4F3050F540B/456013.png"
    },
    {
        id: 30696, 
        name: "The Flameseeker Prophecies",
        icon: "https://render.guildwars2.com/file/BE58181BEA0559E60873ED940D0408D0596B4464/456021.png"
    },
    {
        id: 30700, 
        name: "Rodgort",
        icon: "https://render.guildwars2.com/file/B1D6CB3AB4017633280ACDB36470F46829FDDD13/456027.png"
    },
    {
        id: 30702, 
        name: "Howler",
        icon: "https://render.guildwars2.com/file/19E01CC637F4F370B43E132ACEBFD7C6E1570DE7/456029.png"
    },
    {
        id: 30703, 
        name: "Sunrise",
        icon: "https://render.guildwars2.com/file/EFF16C4F19792627355DC294E6D7093F544921E7/456030.png"
    },
    {
        id: 30704, 
        name: "Twilight",
        icon: "https://render.guildwars2.com/file/CE3AF0B7B9BB6244726779F5B6A930541BA6C15F/456031.png"
    },
    {
        id: 30689, 
        name: "Eternity",
        icon: "https://render.guildwars2.com/file/A30DA1A1EF05BD080C95AE2EF0067BADCDD0D89D/456014.png"
    },
    {
        id: 30690, 
        name: "The Juggernaut",
        icon: "https://render.guildwars2.com/file/F9FAEDF77052A514E876145908B3B3346314A13E/456015.png"
    },
    {
        id: 30685, 
        name: "Kudzu",
        icon: "https://render.guildwars2.com/file/B604C764D3E19E391F5E24CCFBC414500606BD29/456010.png"
    },
    {
        id: 30694, 
        name: "The Predator",
        icon: "https://render.guildwars2.com/file/3ECD99482DD865AA7D42B2EF6AFEFA705294555C/456019.png"
    },
    {
        id: 30686, 
        name: "The Dreamer",
        icon: "https://render.guildwars2.com/file/98F0ED6A7F7A310FCE6D161C0B36B0071E4D1917/456011.png"
    },
    {
        id: 30698, 
        name: "The Bifrost",
        icon: "https://render.guildwars2.com/file/FD221A90427ADBD29B7E2DF8BDAF98BB16391162/456025.png"
    },
    {
        id: 30697, 
        name: "Frenzy",
        icon: "https://render.guildwars2.com/file/67EB25E29BA73D96B34523C02B256516DD60DA06/456024.png"
    },
    {
        id: 30691, 
        name: "Kamohoali'i Kotaki",
        icon: "https://render.guildwars2.com/file/4705EC549A3296F493312C4018754816175E5D28/456016.png"
    },
    {
        id: 30701, 
        name: "Kraitkin",
        icon: "https://render.guildwars2.com/file/1FAD3D4BE1FA503C49FCF532582867FB060664E4/456028.png"
    }
]

let gen3Legendaries = [
    {
        id: 96937,
        name: "Aurene's Rending",
        icon: "https://render.guildwars2.com/file/7AE67A529B6960E955B8BCDE02343C704D01B7F8/2593577.png"
    },
    {
        id: 96203,
        name: "Aurene's Claw",
        icon: "https://render.guildwars2.com/file/08769D9DC9EC1A9D94EC19A802DA2106CB0CF741/2594358.png"
    },
    {
        id: 95612,
        name: "Aurene's Tail",
        icon: "https://render.guildwars2.com/file/A56EAC4E2EFA53EDC7ECFA7B9131AB32262269FD/2595159.png"
    },
    {
        id: 95808,
        name: "Aurene's Argument",
        icon: "https://render.guildwars2.com/file/42B56CCE6997200828B06B7652F5DEAC0507A95E/2595779.png"
    }, 
    {
        id: 96221,
        name: "Aurene's Wisdom",
        icon: "https://render.guildwars2.com/file/46C3662430F1CEA74CCB062FD248FC260D129B43/2596776.png"
    },
    {
        id: 95675,
        name: "Aurene's Fang",
        icon: "https://render.guildwars2.com/file/CD7F0C7B39AE4529781EE126D7F4B8FDE220FAD3/2596930.png"
    },
    {
        id: 97165,
        name: "Aurene's Gaze",
        icon: "https://render.guildwars2.com/file/3FFD5043BAB5710341A166C900BED8D47409600F/2594769.png"
    },
    {
        id: 96028,
        name: "Aurene's Scale",
        icon: "https://render.guildwars2.com/file/4F29EC22EA359F2EAA01E2924F9CF0733F3CA2A9/2596828.png"
    },
    {
        id: 97099,
        name: "Aurene's Breath",
        icon: "https://render.guildwars2.com/file/C3B21B45AA1A47A1470FAFFC1BFD9E426FC29D5C/2596992.png"
    },
    {
        id: 97783,
        name: "Aurene's Voice",
        icon: "https://render.guildwars2.com/file/480D1EBF4A468059631D11C100406AE1C617C3D4/2597054.png"
    },
    {
        id: 96356,
        name: "Aurene's Bite",
        icon: "https://render.guildwars2.com/file/94D19303448005274F24F433016D2CE1AC54057E/2594851.png"
    },
    {
        id: 95684,
        name: "Aurene's Weight",
        icon: "https://render.guildwars2.com/file/C1B30BCF7A11E56066A46004262D01F67094B834/2595011.png"
    },
    {
        id: 97590,
        name: "Aurene's Flight",
        icon: "https://render.guildwars2.com/file/F36B984CF57CF901A00526BAC1FA56979904C929/2593844.png"
    },
    {
        id: 97377,
        name: "Aurene's Persuasion",
        icon: "https://render.guildwars2.com/file/7309BE5518786B002106F59110E7F9CDFE541969/2596715.png"
    },
    {
        id: 97077,
        name: "Aurene's Wing",
        icon: "https://render.guildwars2.com/file/15B9AECD7B05250D4D90721CE67ACBE0E8E3DEA1/2593873.png"
    },
    {
        id: 96652,
        name: "Aurene's Insight",
        icon: "https://render.guildwars2.com/file/3B74D76E0400CC03E17097CE5E0BEFC0325EAD21/2596889.png"
    }
]

interface SelectItemMenuProps {
    handleItemSelected: (itemId:number, itemName:string) => void
}

/**
   @todo: Update scroll bar on legendary list to be custom colours
**/

function SelectItemMenu ({handleItemSelected} : SelectItemMenuProps) {
    const [generation, setGeneration] = useState<number | null>(null)

    return (
        <div className="pcItemCardContainer pcCardContainer">
            {generation ? 
                <div className="pcLegendaryListContainer"> 
                    {generation == 1 ?
                        gen1Legendaries.map((legendary) => <LegendaryListItem key={legendary.id} name={legendary.name} icon={legendary.icon} onClick={() => handleItemSelected(legendary.id, legendary.name)}></LegendaryListItem>)
                        :
                        gen3Legendaries.map((legendary) => <LegendaryListItem key={legendary.id} name={legendary.name} icon={legendary.icon} onClick={() => handleItemSelected(legendary.id, legendary.name)}></LegendaryListItem>)
                    }
                </div>
            :
                <div className="pcGenButtonContainer">
                    <div className="pcGenButton pcClickable" onClick={() => setGeneration(1)}>Gen1</div>
                    <div className="pcGenButton pcClickable" onClick={() => setGeneration(3)}>Gen3</div>
                </div>
            }
        </div>
    )
}

function LegendaryListItem({name, icon, onClick} : {name:string, icon:string, onClick:() => void }) {
    return (
        <div onClick={onClick} className="pcLegendaryListItemContainer pcClickable">
            <img className="pcLegendaryListItemIcon" src={icon} />
            <p className="pcLegendaryListItemName">{name}</p>
        </div>
    )
}

export default SelectItemMenu;