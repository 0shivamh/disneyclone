import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import one from "../Assets/slider/h1.jpg"
import two from "../Assets/slider/h2.jpg"
import three from "../Assets/slider/h3.jpg"
import four from "../Assets/slider/h4.jpg"
const Header=()=>{
    

    return(
        <>
        <Carousel centerSlidePercentage={80} useKeyboardArrows="false" showThumbs={false} showStatus={false} >
                <div className="sliderb">
                    <img src={one} />
                </div>
                <div className="sliderb">
                    <img src={two} />
                </div>
                <div className="sliderb">
                    <img src={three} />
                </div>
                <div className="sliderb">
                    <img src={four} />
                </div>
            </Carousel>
        </>
    )

}
export default Header;