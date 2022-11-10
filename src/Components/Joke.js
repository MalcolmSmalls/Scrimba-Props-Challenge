import React, { Component } from "react"

function Joke({setup, punchline}){
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
                <p>{punchline}</p>
            </div>
        )
    }
}

export default Joke