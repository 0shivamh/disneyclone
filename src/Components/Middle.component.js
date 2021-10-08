import cat from "../Assets/Middle/cat.jpeg"
import falcon from "../Assets/Middle/falcon.jpg"
import music from "../Assets/Middle/music.jpg"
import raya from "../Assets/Middle/raya.jpg"

const Middle=()=>{

    return(
        <div className="Middle">
        <div className="Middlecard">
            <p className="" >New to Disney+</p>
            <div className="row ">
                <div className="col-sm-3 col-6 m-auto">
                    <div className="card">
                    <div className="card-body h-card">
                        <img src={cat} className="card-img-top" alt="..."/>
                    </div>
                    </div>
                </div>
                <div className="col-sm-3 col-6 m-auto">
                <div className="card">
                    <div className="card-body h-card">
                        <img src={raya} className="card-img-top" alt="..."/>
                    </div>
                    </div>
                </div>
                <div className="col-sm-3 col-6 m-auto">
                <div className="card">
                    <div className="card-body h-card">
                        <img src={falcon} className="card-img-top" alt="..."/>
                    </div>
                    </div>
                </div>
                <div className="col-sm-3 col-6 m-auto">
                <div className="card">
                    <div className="card-body h-card">
                        <img src={music} className="card-img-top" alt="..."/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )

}
export default Middle;