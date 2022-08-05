import {Player, PlayerColor} from "../../types";
import {discColorClass} from "../../func/color";

type ColorSelectorProps = {
    onSelect: (color: PlayerColor) => void,
    players: Player[],
    colors: PlayerColor[]
}


function ColorSelector({onSelect, players, colors}: ColorSelectorProps) {

    return <>
        <div className="players">
            {players.map(player => <div key={player.id} className="player">
                {player.name}
                {player.color && <div className={discColorClass(player.color)}></div>}
            </div>)}
        </div>
        <h3>Sélectionner une couleur</h3>
        <div className="selector">
            {colors.map(color => <button className={discColorClass(color)} key={color} onClick={() => onSelect(color)}></button>)}
        </div>
    </>

}

export default ColorSelector