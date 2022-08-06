import NameSelector from "../component/NameSelector";
import {useGame} from "../hooks/useGame";
import ColorSelector from "../component/ColorSelector";
import {PlayerColor} from "../../types";
import {prevent} from "../../func/dom";

type LobbyScreenProps = {

}

function LobbyScreen(props: LobbyScreenProps) {
    
    const {send, context, can} = useGame()
    const colors = [PlayerColor.YELLOW, PlayerColor.RED]

    const joinGame = (name: string) => send({type: 'join', name: name, playerId: name})
    const chooseColor = (color: PlayerColor) => send({type: 'chooseColor', color, playerId: color == PlayerColor.YELLOW ? "John" : "Marc"})
    const startGame = () => send({type: 'start'})

    const canStart = can({type: "start"})

    return (
        <div>
            <NameSelector onSelect={joinGame}/>
            <ColorSelector onSelect={chooseColor} colors={colors} players={context.players}/>
            <p><button className="button" onClick={prevent(startGame)} disabled={!canStart}>Démarrer la partie</button></p>
        </div>
    )
}

export default LobbyScreen