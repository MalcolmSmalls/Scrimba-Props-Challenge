import React, { Component } from "react"

function Joke({setup, punchline}){
    return (
        <div>
            <p><strong>{setup}</strong></p>
            <p>{punchline}</p>
        </div>
    )

}

export default Joke