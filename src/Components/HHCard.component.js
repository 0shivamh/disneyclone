import inside from "../Assets/HHCard/inside.jpg"
import baby from "../Assets/HHCard/baby.jpg"
import bao from "../Assets/HHCard/bao.png"
import inc from "../Assets/HHCard/inc.jpg"

const HHCard=()=>{

    return(
        <>
        <div className="Hcard ">
            <p className="" >Recommended For You</p>
            <div className="row ">
                <div className="col-sm-3 col-6 m-auto">
                    <div className="card">
                    <div className="card-body h-card">
                        <img src={inside} className="card-img-top" alt="..."/>
                    </div>
                    </div>
                </div>
                <div className="col-sm-3 col-6 m-auto">
                <div className="card">
                    <div className="card-body h-card">
                        <img src={bao} className="card-img-top" alt="..."/>
                    </div>
                    </div>
                </div>
                <div className="col-sm-3 col-6 m-auto">
                <div className="card">
                    <div className="card-body h-card">
                        <img src={inc} className="card-img-top" alt="..."/>
                    </div>
                    </div>
                </div>
                <div className="col-sm-3 col-6 m-auto">
                <div className="card">
                    <div className="card-body h-card">
                        <img src={baby} className="card-img-top" alt="..."/>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}
export default HHCard;