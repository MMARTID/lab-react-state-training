import React  from "react"
import  {useState} from "react"



function LikeButton() {

const [like, setLikeCounter] = useState(0)
const [like2, setLikeCounter2] = useState(0)
function handleClick () {
    setLikeCounter(like + 1)
}
function handleClick2 () {
    setLikeCounter2(like2 + 1)
}


return ( 

    
    <div>
        <button onClick={handleClick}>{like} Likes</button>
        <button onClick={handleClick2}>{like2} Likes</button>
       
    </div>
)
}

export default LikeButton