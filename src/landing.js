import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import land1 from "../src/Assets/landing1.png"
import land2 from "../src/Assets/landing2.png"
const Landing=()=>{
    return(
        <>
        <div className="lpage">
            <div className="landing-page">
            <img src={land2} class="img-fluid" ></img>
            <Link to="/home" className="btn btn-primary get">Get All There</Link>
            <small>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription</small>
            <img src={land1} class="img-fluid" ></img>
            </div>
        </div>
        </>
    )
}
export default Landing;