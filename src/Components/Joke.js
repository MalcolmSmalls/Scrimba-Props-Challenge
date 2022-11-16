import React, { Component } from "react"

function Joke({setup, punchline}){
    const [isShownState, setIsShownState] = React.useState(false)

    function toggle(){
      setIsShownState(prevIsShownState => prevIsShownState === false? true : false)
      
    }

        return (
            <div>
                { setup && <p><strong>{setup}</strong></p> }
                <button onClick={toggle}>Show Punchline</button>
                { isShownState && <p>{punchline}</p>}
            </div>
        )
    
}


export default Joke