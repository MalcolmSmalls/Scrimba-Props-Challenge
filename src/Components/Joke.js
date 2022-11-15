import React, { Component } from "react"

function Joke({setup, punchline, toggle, show}){
    const styles = {
        display: { show } ? 'block' : 'hidden' 
    }

    if(setup === ''){
        return (
            <div>
                <p>I got no setup</p>
                <p>{punchline}</p>
            </div>
        )
    }else {
        return (
            <div>
                <p><strong>{setup}</strong></p>
                <button onClick={toggle}>Show Punchline</button>
                <p style={styles}>{punchline}</p>
            </div>
        )
    }
}

export default Joke