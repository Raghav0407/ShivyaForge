import "../Style/GeneralStyling.css"
import Data from "../Data/Productshow.json"
import {useEffect, useState} from "react";

const ForgingParts = ({index = 2}) => {
    const [data, setData] = useState([])

    useEffect(() => {
        setData(Data.data[index]);
    }, []);

    return (
        <div className="container">
            <div className="h2 text-center p-5 bg-light">{data.Name}</div>
            <div className="row">
                <div className="col-12 text-center m-3">
                    <i className="bi bi-grid"></i>
                </div>
                <div className="col-12 d-flex justify-content-center m-3">
                    <div className="w-50 row text-center overflow-hidden position-relative image-container">
                        <img className="img-fluid hover-img col-12"
                             src={data.TopImage}
                             alt="Auto parts ball head"/>
                        <i className="bi bi-search search-icon col-12"></i>
                        <div className="custom-font-p bg-light text-muted col-12">{data.Products}</div>
                    </div>
                </div>
                <div className="col-12 m-1 mt-3">
                    <div className="h6">Products:</div>
                    <div className="d-flex justify-content-left">
                        <i className="bi bi-person-vcard text-muted"></i>
                        <p className="custom-font-p text-muted">{data.Products}</p>
                    </div>
                </div>
                <div className="col-12 m-1">
                    <div className="h6">Production Process:</div>
                    <div className="d-flex justify-content-left">
                        <i className="bi bi-wallet text-muted"></i>
                        <p className="custom-font-p text-muted">{data.Process}</p>
                    </div>
                </div>
                <div className="col-12 m-1 d-flex flex-row">
                    <div><i className="bi bi-facebook m-1"></i></div>
                    <div><i className="bi bi-google m-1"></i></div>
                    <div><i className="bi bi-pinterest m-1"></i></div>
                </div>
                <div className="col-12">
                    <div className="row">
                        <div className="col-6"><img className="img-fluid p-5" alt="parts" src={data.Image1} /></div>
                        <div className="col-6"><img className="img-fluid p-5" alt="parts" src={data.Image2}/></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgingParts;
