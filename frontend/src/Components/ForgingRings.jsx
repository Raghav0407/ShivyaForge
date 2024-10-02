import "../Style/GeneralStyling.css"
import Data from "../Data/Forged.json"
import {useEffect, useState} from "react";

const ForgingRings = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        setData(Data.ForgedRings);
        console.log(data);
    }, []);

    if (!data) return <div>Loading...</div>;

    return (
        <div className="container">
            <div className="h2 text-center p-5 bg-light">{data.Name}</div>
            <div className="row p-3">
                <div className="col-12 text-center m-3">
                    <i className="bi bi-grid"></i>
                </div>
                <div className="col-12 d-flex justify-content-center m-3">
                    <div className="w-50 row text-center overflow-hidden position-relative image-container">
                        <img className="img-fluid hover-img col-12"
                             src={`assets/ForgedRings/ForgedRings.jpg`}
                             alt="Auto parts ball head"/>
                        <i className="bi bi-search search-icon col-12"></i>
                        <div className="custom-font-p bg-light text-muted col-12">{data.Name}</div>
                    </div>
                </div>
                <div className="col-12 m-1 mt-3">
                    <div className="h6">Material Grade:</div>
                    <div className="d-flex justify-content-left">
                        <i className="bi bi-person-vcard text-muted"></i>
                        <p className="custom-font-p text-muted">{data.MaterialGrade}</p>
                    </div>
                </div>
                <div className="col-12 m-1">
                    <div className="h6">Production Process:</div>
                    <div className="d-flex justify-content-left">
                        <i className="bi bi-wallet text-muted"></i>
                        <p className="custom-font-p text-muted">"Hot Forging Processing</p>
                    </div>
                </div>
                <div className="col-12 m-1 d-flex flex-row">
                    <div><i className="bi bi-facebook m-1"></i></div>
                    <div><i className="bi bi-google m-1"></i></div>
                    <div><i className="bi bi-pinterest m-1"></i></div>
                </div>
                <div className="col-12">
                    <div className="row">
                        {data?.Parts?.map((p) => (
                            <div className="col-lg-3 col-md-4 col-sm-6 mb-3 image-zoom">
                                <img className="img-fluid img-block rounded-2 shadow"
                                     src={`assets/ForgedRings/${p.img}`} alt="part-image"/>
                                <div className="custom-font-p bg-light text-center text-muted">{p.Name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgingRings;
