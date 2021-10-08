import marvel from "../Assets/Hcard/marvel.jpg"
import national from "../Assets/Hcard/national.jpg"
import pixar from "../Assets/Hcard/pixar.jpg"
import star from "../Assets/Hcard/start.jpg"
import disney from "../Assets/Hcard/disney.png"

const HCard=()=>{
    
    return(
        <>
        <div className="Hcard ">
            <div className="row ">
                <div className="col-sm">
                    <div className="card">
                    <div className="card-body h-card">
                        <img src={disney} className="card-img-top" alt="..."/>
                    </div>
                    </div>
                </div>
                <div className="col-sm">
                <div className="card">
                    <div className="card-body h-card">
                        <img src={pixar} className="card-img-top" alt="..."/>
                    </div>
                    </div>
                </div>
                <div className="col-sm">
                <div className="card">
                    <div className="card-body h-card">
                        <img src={marvel} className="card-img-top" alt="..."/>
                    </div>
                    </div>
                </div>
                <div className="col-sm">
                <div className="card">
                    <div className="card-body h-card">
                        <img src={star} className="card-img-top" alt="..."/>
                    </div>
                    </div>
                </div>
                <div className="col-sm">
                <div className="card">
                    <div className="card-body h-card">
                        <img src={national} className="card-img-top" alt="..."/>
                    </div>
                    </div>
                    </div>
            </div>
        </div>




        </>
    )
}
export default HCard;