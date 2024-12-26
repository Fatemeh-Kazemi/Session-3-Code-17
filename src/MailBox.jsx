import { useState } from "react"

const MailBox = () =>{
    
    /*
    let [email, setEmail]= useState("kazemifk484@gmail.com")

    let change = () =>{
        setEmail("Sadeghi")
    }
        */

    let [count, setCount]= useState(0)
    let increase = () =>{
        setCount(++count)
    }

    return(
        <div>
            {/* {email} */}
            {/* <button onClick={change}>کلیک کن و مقدار و تغییر بده</button> */}
            {count}
            <button onClick={increase}> change number</button>
        </div>
    )
}

export default MailBox