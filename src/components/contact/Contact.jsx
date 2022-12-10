import { Button, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import "./ContactStyle.css"
import { useAlert } from "react-alert"
import { contactUs } from "../../actions/user"

const Contact = () => {
    const name = ""
    const email = ""
    const message = ""

    // const [name, setName] = useState("")
    // const [email, setEmail] = useState("")
    // const [message, setMessage] = useState("")
    // const dispatch = useDispatch()
    // const alert = useAlert()

    // const { loading, message: alertMessage, error } = useSelector((state) => state.update)

    // const contactFormHandler = (e) => {
    //     e.preventDefault()
    //     dispatch(contactUs(name, email, message))
    // }

    // useEffect(() => {
    //     if (error) {
    //         alert.error(error)
    //         dispatch({ type: "CLEAR_ERRORS" })
    //     }
    //     if (alertMessage) {
    //         alert.success(alertMessage)
    //         dispatch({ type: "CLEAR_MESSAGE" })
    //     }
    // }, [alert, error, alertMessage, dispatch])

    return (
        <div className="contact">
            <div className="contactRightBar"></div>

            <div className="contactContainer">
                {/* <form className="contactContainerForm" onSubmit={contactFormHandler}> */}
                <form className="contactContainerForm" onSubmit={""}>

                    <Typography variant="h4">Contact Us</Typography>

                    <input
                        type="text"
                        placeholder="Name"
                        required
                        value={name}
                        // onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        value={email}
                        // value= email
                        // onChange={(e) => setEmail(e.target.value)}
                    />

                    <textarea
                        placeholder="Message"
                        required
                        cols="30"
                        rows="10"
                        value={message}
                        // onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    {/* <Button variant="contained" type="submit" disabled={loading}> */}
                    <Button variant="contained" type="submit">

                        Send
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default Contact

// import React from "react"
// import { useState } from "react"
// import "./ContactStyle.css"
// import { Typography, Button } from "@mui/material"

// const Contact = () => {
//     const [name, setName] = useState("")
//     const [email, setEmail] = useState("")
//     const [message, setMessage] = useState("")

//     const contactFormHandler = (e) => {
//         e.preventDefault()
//     }

//     return (
//         <div className="contact">
//             <div className="contactRightBar"></div>
//             <div className="contactContainer">
//                 <form action="" className="contactContainerForm" onSubmit={contactFormHandler}>
//                     <Typography variant="h4">Contact Us</Typography>

//                     <input
//                         type="text"
//                         required
//                         placeholder="Name"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         id=""
//                     />
//                     <input
//                         type="email"
//                         required
//                         placeholder="Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         id=""
//                     />

//                     <textarea
//                         placeholder="Message"
//                         required
//                         value={message}
//                         onChange={(e) => setMessage(e.target.value)}
//                         id=""
//                         cols="30"
//                         rows="10"
//                     ></textarea>
//                     <Button variant="contained" type="submit">
//                         Send Message
//                     </Button>
//                 </form>
//             </div>
//             <div className="contactLeftBar"></div>
//         </div>
//     )
// }

// export default Contact
