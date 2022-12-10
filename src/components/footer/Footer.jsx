import { Typography } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"
import "./FooterStyle.css"
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs"

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <Typography variant="h5">About Me</Typography>
                <Typography>
                    Hey, I am Sushant Prusty. A Full Stack Web3 Application Developer with interest
                    in Metaverse. 
                </Typography>
                <br/>
                <Typography>
                    Office Address:
                    7, Peterbrook Rise,
                    Shirley,
                    Solihull, B90 1JH, Birmingham, West Midlands, England, United Kingdom
                </Typography>
                <br/>
                <Typography>WAGMI!</Typography>
                <Link to="/contact" className="footerContactBtn">
                    <Typography>Contact</Typography>
                </Link>
            </div>
            <div>
                <Typography variant="h6">Social Media</Typography>
                <a href="http://github.com/aryabhat1/" target="black">
                    <BsGithub />
                </a>
                <a href="http://linkedin.com/in/sushant-prusty/" target="black">
                    <BsLinkedin></BsLinkedin>
                </a>
                <a href="http://twitter.com/sushant_prusty/" target="black">
                    <BsTwitter></BsTwitter>
                </a>
            </div>
        </div>
    )
}

export default Footer
