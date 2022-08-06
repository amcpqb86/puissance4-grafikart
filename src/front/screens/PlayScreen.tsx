import {useGame} from "../hooks/useGame";
import GameInfo from "../component/GameInfo";
import {currentPlayer} from "../../func/game";

type PlayScreenProps = {

}

function PlayScreen({}: PlayScreenProps) {
    const {context} = useGame()
    const player = currentPlayer(context)
    return (
        <div>
            <GameInfo color={player.color!} name={player.name}/>
        </div>
    )
}

export default PlayScreen