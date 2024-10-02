import "../Style/GeneralStyling.css"
import Data from "../Data/Forged.json"
import {useEffect, useState} from "react";
import forgedimg from '../Assets/img/assets/ForgedRings/ForgedRings.jpg'
import img1 from '../Assets/img/assets/ForgedRings/Img1.jpg';
import img2 from '../Assets/img/assets/ForgedRings/Img2.jpg';
import img3 from '../Assets/img/assets/ForgedRings/Img3.jpg';
import img4 from '../Assets/img/assets/ForgedRings/Img4.jpg';
import img5 from '../Assets/img/assets/ForgedRings/Img5.jpg';
import img6 from '../Assets/img/assets/ForgedRings/Img6.jpg';
import img7 from '../Assets/img/assets/ForgedRings/Img7.jpg';
import img8 from '../Assets/img/assets/ForgedRings/Img8.jpg';
import img9 from '../Assets/img/assets/ForgedRings/Img9.jpg';
import img10 from '../Assets/img/assets/ForgedRings/Img10.jpg';
import img11 from '../Assets/img/assets/ForgedRings/Img11.jpg';
import img12 from '../Assets/img/assets/ForgedRings/Img12.jpg';

const ForgingRings = () => {
    const [data, setData] = useState([])
    const imageMap = {
        "Img1.jpg": img1,
        "Img2.jpg": img2,
        "Img3.jpg": img3,
        "Img4.jpg": img4,
        "Img5.jpg": img5,
        "Img6.jpg": img6,
        "Img7.jpg": img7,
        "Img8.jpg": img8,
        "Img9.jpg": img9,
        "Img10.jpg": img10,
        "Img11.jpg": img11,
        "Img12.jpg": img12,
    };
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
                             src={forgedimg}
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
                                     src={imageMap[p.img]} alt="part-image"/>
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
