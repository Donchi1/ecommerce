import React from 'react'
import {Titletext} from "./StyledElements"



function Title({text}) {
    return (
        <div className="titleText" >
           <Titletext>{text}</Titletext>
        </div>
    )
}

export default Title
