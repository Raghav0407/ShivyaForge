import "../Style/GeneralStyling.css"
import Data from "../Data/Forged.json"
import {useEffect, useState} from "react";
import forgedcomp from '../Assets/img/assets/ForgedComponents/ForgedComponent.jpg'
import img1 from '../Assets/img/assets/ForgedComponents/Img1.jpg';
import img2 from '../Assets/img/assets/ForgedComponents/Img2.jpg';
import img3 from '../Assets/img/assets/ForgedComponents/Img3.jpg';
import img4 from '../Assets/img/assets/ForgedComponents/Img4.jpg';
import img5 from '../Assets/img/assets/ForgedComponents/Img5.jpg';
import img6 from '../Assets/img/assets/ForgedComponents/Img6.jpg';
import img7 from '../Assets/img/assets/ForgedComponents/Img7.jpg';
import img8 from '../Assets/img/assets/ForgedComponents/Img8.jpg';
import img9 from '../Assets/img/assets/ForgedComponents/Img9.jpg';
import img10 from '../Assets/img/assets/ForgedComponents/Img10.jpg';
import img11 from '../Assets/img/assets/ForgedComponents/Img11.jpg';
import img12 from '../Assets/img/assets/ForgedComponents/Img12.jpg';
import img13 from '../Assets/img/assets/ForgedComponents/Img1.jpg';
import img14 from '../Assets/img/assets/ForgedComponents/Img2.jpg';
import img15 from '../Assets/img/assets/ForgedComponents/Img3.jpg';
import img16 from '../Assets/img/assets/ForgedComponents/Img4.jpg';
import img17 from '../Assets/img/assets/ForgedComponents/Img5.jpg';
import img18 from '../Assets/img/assets/ForgedComponents/Img6.jpg';
import img19 from '../Assets/img/assets/ForgedComponents/Img7.jpg';
import img20 from '../Assets/img/assets/ForgedComponents/Img8.jpg';
import img21 from '../Assets/img/assets/ForgedComponents/Img9.jpg';
import img22 from '../Assets/img/assets/ForgedComponents/Img10.jpg';
import img23 from '../Assets/img/assets/ForgedComponents/Img11.jpg';
import img24 from '../Assets/img/assets/ForgedComponents/Img12.jpg';
import img25 from '../Assets/img/assets/ForgedComponents/Img12.jpg';
const ForgedComponents = () => {
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
        "Img13.jpg": img13,
        "Img14.jpg": img14,
        "Img15.jpg": img15,
        "Img16.jpg": img16,
        "Img17.jpg": img17,
        "Img18.jpg": img18,
        "Img19.jpg": img19,
        "Img20.jpg": img20,
        "Img21.jpg": img21,
        "Img22.jpg": img22,
        "Img23.jpg": img23,
        "Img24.jpg": img24,
        "Img25.jpg": img25,

    };
    useEffect(() => {
        setData(Data.ForgedComponents);
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
                             src={forgedcomp}
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

export default ForgedComponents;
