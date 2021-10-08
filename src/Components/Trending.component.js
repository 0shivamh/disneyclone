import mick from "../Assets/Trend/mick.jpg"
import moana from "../Assets/Trend/moana.jpeg"
import tang from "../Assets/Trend/tang.jpg"
import the from "../Assets/Trend/the.jpeg"

const Trending=()=>{
    return(
<div className="Middle">
        <div className="Middlecard">
            <p className="" >Trending</p>
            <div className="row ">
                <div className="col-sm-3 col-6 m-auto">
                    <div className="card">
                    <div className="card-body h-card">
                        <img src={tang} className="card-img-top" alt="..."/>
                    </div>
                    </div>
                </div>
                <div className="col-sm-3 col-6 m-auto">
                <div className="card">
                    <div className="card-body h-card">
                        <img src={moana} className="card-img-top" alt="..."/>
                    </div>
                    </div>
                </div>
                <div className="col-sm-3 col-6 m-auto">
                <div className="card">
                    <div className="card-body h-card">
                        <img src={the} className="card-img-top" alt="..."/>
                    </div>
                    </div>
                </div>
                <div className="col-sm-3 col-6 m-auto">
                <div className="card">
                    <div className="card-body h-card">
                        <img src={mick} className="card-img-top" alt="..."/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        )
}
export default Trending;