import { Typography } from "@mui/material"
import React from "react"
import "./AboutStyle.css"
import avatar from "../../images/my_image/boy.png"

const About = ({ about }) => {
    return (
        <div className="about">
            <div className="aboutContainer">
                {/* <Typography>{about.quote}</Typography> */}
                <Typography>"The best way to predict the future is to invent it."</Typography>
            </div>
            <div className="aboutContainer2">
                <div>
                    {/* <img src={about.avatar.url} alt="My Avatar" className="aboutAvatar" /> */}
                    <img src={avatar} alt="My Avatar" className="aboutAvatar" />

                    <Typography variant="h4" style={{ margin: "1vmax 0", color: "black" }}>
                        {/* {about.name} */}
                        Sushant Prusty
                    </Typography>

                    {/* <Typography>{about.title}</Typography> */}
                    <Typography>Full Stack Web3 Developer</Typography>

                    <Typography style={{ margin: "1vmax 0", textAlign: "center" }}>
                        {/* {about.subtitle} */}A Convergent Thinker
                    </Typography>
                </div>

                <div>
                    <Typography
                        style={{
                            wordSpacing: "5px",
                            lineHeight: "50px",
                            letterSpacing: "5px",
                            textAlign: "right",
                        }}
                    >
                        {/* {about.description} */}Full Stack Web3 Developer with 16+ years of
                        experience in designing, developing and deploying a range of
                        technologies and programming languages. On a mission to learn new
                        technologies and provide better service.
                    </Typography>
                </div>
            </div>
        </div>
    )
}

export default About

// ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
// import { Typography } from "@mui/material"
// import React from "react"
// import "./AboutStyle.css"
// import myphoto from "../../images/my_image/boy.svg"

// const About = ({ about }) => {
//     return (
//         <div className="about">
//             <div className="aboutContainer">
//                 {/* <Typography>This is a sample quote</Typography> */}
//                 <Typography>{about.quote}</Typography>
//             </div>
//             <div className="aboutContainer2">
//                 {/* <Typography></Typography> */}

//                 <div>
//                     {/* <img className="aboutAvatar" src={myphoto} alt="No image" srcSet="" /> */}
//                     <img className="aboutAvatar" src={about.avatar.url} alt="No image" srcSet="" />

//                     <Typography variant="h4" style={{ margin: "1vmax 0", color: "black" }}>
//                         Sushant
//                     </Typography>
//                     <Typography>Full Stack Web3 Developer</Typography>
//                     <Typography style={{ margin: "1vmax 0" }}>
//                         A Convergent Thinker who enjoys Long Driving
//                     </Typography>
//                 </div>
//                 <div>
//                     <Typography
//                         style={{
//                             wordSpacing: "5px",
//                             lineHeight: "50px",
//                             letterSpacing: "5px",
//                             testAlign: "right",
//                         }}
//                     >
//                         {about.description}
//                     </Typography>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default About
