import React, { Component } from "react"

function Joke({setup, punchline}){
    console.log({setup})
    if({setup} === ''){
        return (
            <div>
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