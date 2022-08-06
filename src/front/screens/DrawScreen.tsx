import {useGame} from "../hooks/useGame";
import {currentPlayer} from "../../func/game";
import Victory from "../component/Victory";
import Draw from "../component/Draw";

type DrawScreenProps = {

}

function DrawScreen({}: DrawScreenProps) {
    const {context, send} = useGame()
    const player = currentPlayer(context)
    const restart = () => send({type: 'restart'})

    return (
        <div>
            <Draw onRestart={restart}/>
        </div>
    )
}

export default DrawScreen