import MyParagraph from "./MyParagraph"
import React from "react"


const DemoOutput = props => {


    console.log("DemoOutput is RUNNING")
    return (
        <MyParagraph>{props.show ? "This Is New" : ""}</MyParagraph>
    )
}

export default React.memo(DemoOutput)