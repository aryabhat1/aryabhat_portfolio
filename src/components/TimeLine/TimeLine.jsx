import Timeline from "@mui/lab/Timeline"
import TimelineItem from "@mui/lab/TimelineItem"
import TimelineSeparator from "@mui/lab/TimelineSeparator"
import TimelineConnector from "@mui/lab/TimelineConnector"
import TimelineContent from "@mui/lab/TimelineContent"
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent"
import TimelineDot from "@mui/lab/TimelineDot"
// import { Event } from "@mui/icons-material"
// import Typography from "@mui/material/Typography"

const TimeLine = () => {
    return (
        <Timeline position="">
            <TimelineItem>
                <TimelineOppositeContent>Aug 2020</TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="secondary" variant="outlined"></TimelineDot>
                    <TimelineConnector></TimelineConnector>
                </TimelineSeparator>
                <TimelineContent>Joined Aryabhat Online as Principal Consultant</TimelineContent>
                {/* <TimelineContent>Principal Developer</TimelineContent> */}
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>May 2016</TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="secondary" variant="outlined"></TimelineDot>
                    <TimelineConnector></TimelineConnector>
                </TimelineSeparator>
                <TimelineContent>Joined Atos Syntel as Consultant</TimelineContent>
                {/* <TimelineContent>Principal Developer</TimelineContent> */}
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>April 2014</TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="secondary" variant="outlined"></TimelineDot>
                    <TimelineConnector></TimelineConnector>
                </TimelineSeparator>
                <TimelineContent>Joined Delhivery as Lead Developer</TimelineContent>
                {/* <TimelineContent>Principal Developer</TimelineContent> */}
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent>June 2012</TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="secondary" variant="outlined"></TimelineDot>
                    <TimelineConnector></TimelineConnector>
                </TimelineSeparator>
                <TimelineContent>Joined RateGain as Lead Developer</TimelineContent>
                {/* <TimelineContent>Principal Developer</TimelineContent> */}
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent>April 2005</TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="secondary" variant="outlined"></TimelineDot>
                    {/* <TimelineConnector></TimelineConnector> */}
                </TimelineSeparator>
                <TimelineContent>
                    Joined Calimere Research, UK as Associate Developer
                </TimelineContent>
                {/* <TimelineContent>Principal Developer</TimelineContent> */}
            </TimelineItem>
        </Timeline>
    )
}

export default TimeLine

// from 46.40-5.29 HR of video

// import React from "react"
// import Timeline from "@mui/lab/Timeline"
// import TimelineItem from "@mui/lab/TimelineItem"
// import TimelineSeparator from "@mui/lab/TimelineSeparator"
// import TimelineConnector from "@mui/lab/TimelineConnector"
// import TimelineContent from "@mui/lab/TimelineContent"
// import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent"
// import TimelineDot from "@mui/lab/TimelineDot"
// import { Event } from "@mui/icons-material"
// import Typography from "@mui/material/Typography"

// const TimeLine = ({ timelines = [] }) => {
//     return (
//         <div>
//             <Timeline position="alternate">
//                 {/* {timelines.map((item, index) => ( */}
//                     {/* <TimelineItem key={index}> */}
//                         <TimelineOppositeContent>July 22, 2022</TimelineOppositeContent>

//                         <TimelineSeparator>
//                             <TimelineConnector />
//                             {/* <TimelineDot> */}
//                                 {/* <Event /> */}
//                                 {/* Atos Syntel */}
//                             {/* </TimelineDot> */}
//                             <TimelineConnector />
//                         </TimelineSeparator>

//                         <TimelineContent sx={{ py: "12px", px: 2 }}>
//                             <Typography variant="h6">Team Lead - Developement</Typography>
//                             <Typography variant="h6">Consultant</Typography>
//                             <Typography>
//                                 Joined Atos Syntel Private as a Consultant-Developer

//                             </Typography>
//                         <TimelineOppositeContent>July 22, 2017</TimelineOppositeContent>
//                         <TimelineSeparator>
//                             <TimelineConnector />
//                             {/* <TimelineDot> */}
//                                 {/* <Event /> */}
//                                 {/* Atos Syntel */}
//                             {/* </TimelineDot> */}
//                             <TimelineConnector />
//                         </TimelineSeparator>

//                         <TimelineContent sx={{ py: "12px", px: 2 }}>
//                             <Typography variant="h6">Team Lead - Developement</Typography>
//                             <Typography variant="h6">Consultant</Typography>
//                             <Typography>
//                                 Joined Atos Syntel Private as a Consultant-Developer

//                             </Typography>

// </TimelineContent>

//                             {/* Joined Delhivery a
//                             Ecommerce Platform */}
//                         </TimelineContent>

//                     {/* </TimelineItem> */}
//                 {/* ))} */}
//             </Timeline>
//         </div>
//     )
// }

// export default TimeLine

// import React from "react"
// import Timeline from "@mui/lab/Timeline"
// import TimelineItem from "@mui/lab/TimelineItem"
// import TimelineSeparator from "@mui/lab/TimelineSeparator"
// import TimelineConnector from "@mui/lab/TimelineConnector"
// import TimelineContent from "@mui/lab/TimelineContent"
// import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent"
// import TimelineDot from "@mui/lab/TimelineDot"
// import { Event } from "@mui/icons-material"
// import Typography from "@mui/material/Typography"

// const TimeLine = ({ timelines = [] }) => {
//     return (
//         <div>
//             <Timeline position="alternate">
//                 {timelines.map((item, index) => (
//                     <TimelineItem key={index}>
//                         <TimelineOppositeContent
//                             sx={{ m: "auto 0" }}
//                             align="right"
//                             variant="body2"
//                             color="text.secondary"
//                         >
//                             {item.date.toString().split("T")[0]}
//                         </TimelineOppositeContent>

//                         <TimelineSeparator>
//                             <TimelineConnector />
//                             <TimelineDot>
//                                 <Event />
//                             </TimelineDot>
//                             <TimelineConnector />
//                         </TimelineSeparator>
//                         <TimelineContent sx={{ py: "12px", px: 2 }}>
//                             <Typography variant="h6">{item.title}</Typography>
//                             <Typography>{item.description}</Typography>
//                         </TimelineContent>
//                     </TimelineItem>
//                 ))}
//             </Timeline>
//         </div>
//     )
// }

// export default TimeLine

// import React from "react"
// import Timeline from "@mui/lab/Timeline"
// import TimelineItem from "@mui/lab/TimelineItem"
// import TimelineSeparator from "@mui/lab/TimelineSeparator"
// import TimelineConnector from "@mui/lab/TimelineConnector"
// import TimelineContent from "@mui/lab/TimelineContent"
// import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent"
// import TimelineDot from "@mui/lab/TimelineDot"
// import { Event } from "@mui/icons-material"
// import Typography from "@mui/material/Typography"

// const TimeLine = ({ timelines = [] }) => {
//     return (
//         <div>
//             <Timeline position="alternate">
//                 {timelines.map((item, index) => (
//                     <TimelineItem key={index}>
//                         <TimelineOppositeContent
//                             sx={{ m: "auto 0" }}
//                             align="right"
//                             variant="body2"
//                             color="text.secondary"
//                         >
//                             {item.date.toString().split("T")[0]} */}
//                         </TimelineOppositeContent>

//                         <TimelineSeparator>
//                             <TimelineConnector />
//                             <TimelineDot>
//                                 <Event />
//                             </TimelineDot>
//                             <TimelineConnector />
//                         </TimelineSeparator>
//                         <TimelineContent sx={{ py: "12px", px: 2 }}>
//                             <Typography variant="h6">{item.title}</Typography>
//                             <Typography>{item.description}</Typography>
//                         </TimelineContent>
//                     </TimelineItem>
//                 ))}
//             </Timeline>
//         </div>
//     )
// }

// export default TimeLine
