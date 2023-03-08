import MyParagraph from "./MyParagraph"


const DemoOutput = props => {


    console.log("DemoOutput is RUNNING")
    return (
        <MyParagraph>{props.show ? "This Is New" : ""}</MyParagraph>
    )
}

export default DemoOutput