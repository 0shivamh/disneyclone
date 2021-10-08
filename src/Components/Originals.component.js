import asse from "../Assets/Originals/asse.jpg"
import burry from "../Assets/Originals/burry.jpg"
import leg from "../Assets/Originals/legend.jpg"
import soul from "../Assets/Originals/soul.jpg"

const Originals = () =>{
    return(
        <div className="Middle">
        <div className="Middlecard">
            <p className="" >Originals</p>
            <div className="row ">
                <div className="col-sm-3 col-6 m-auto">
                    <div className="card">
                    <div className="card-body h-card">
                        <img src={soul} className="card-img-top" alt="..."/>
                    </div>
                    </div>
                </div>
                <div className="col-sm-3 col-6 m-auto">
                <div className="card">
                    <div className="card-body h-card">
                        <img src={asse} className="card-img-top" alt="..."/>
                    </div>
                    </div>
                </div>
                <div className="col-sm-3 col-6 m-auto">
                <div className="card">
                    <div className="card-body h-card">
                        <img src={burry} className="card-img-top" alt="..."/>
                    </div>
                    </div>
                </div>
                <div className="col-sm-3 col-6 m-auto">
                <div className="card">
                    <div className="card-body h-card">
                        <img src={leg} className="card-img-top" alt="..."/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Originals;