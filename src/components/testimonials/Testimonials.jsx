import "./TestimonialsStyle.css"

export default function Testimonials() {
    const data = [
        {
            id: 1,
            name: "Tom Durden",
            title: "Senior Developer",
            img: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/twitter.png",
            desc: "If you have the opportunity to work with Sushant, Sushant is skilled at what Web Application Development and we look forward to working with him again for our next project!",
            featured:true,
        },
        {
            id: 2,
            name: "Alex Kalinski",
            title: "Co-Founder of DELKA",
            img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/youtube.png",
            desc: "Sushant has a strong understanding of current development best practices. He is particularly skilled with NodeJS and ReactJS and has been a valuable contributor to our team! I would gladly recommend him for all development projects!",
            featured: true,
        },
        {
            id: 3,
            name: "Martin Harold",
            title: "CEO of ALBI",
            img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/linkedin.png",
            desc: "After presenting our company and the direction we wanted to take, I told Sushant to think outside the box and be creative. He delivered incredible good designs that exceeded all our expectations. He would be a great asset to any company!",
        },
    ]
    return (
        <div className="testimonials" id="testimonials">
            {/* <h1>Testimonials</h1> */}
            <div className="container">
                {data.map((d) => (
                    <div className={d.featured ? "card featured" : "card"}>
                        <div className="top">
                            <img src="assets/right-arrow1.svg" className="left" alt="" />
                            <img className="user" src={d.img} alt="" />
                            <img className="right" src={d.icon} alt="" />
                        </div>
                        <div className="center">{d.desc}</div>
                        <div className="bottom">
                            <h3>{d.name}</h3>
                            <h4>{d.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
