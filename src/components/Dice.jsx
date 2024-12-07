import { useState } from 'react'
import dice3 from '../assets/images/dice3.png'
import diceEmpty from '../assets/images/dice-empty.png'

function Dice () {
const [diceValue, setDiceValue] = useState(dice3)
function handleDiceValue () {
    
    setDiceValue(diceEmpty)


}

    return (
        <div>
            <img src={diceValue} onClick={handleDiceValue}/>
        </div>
    )
}
export default Dice