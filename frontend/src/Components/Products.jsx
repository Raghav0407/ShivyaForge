import {useEffect, useState} from "react";
import Data from "../Data/Productshow.json"
import "../Style/GeneralStyling.css"

const Products = () => {
    const [data, setData] = useState({});

    useEffect(() => {
       
            setData(Data.data);
            console.log(data);
      
    },[]);

    return (
        <div className="container">
                <div className="row g-4">
                    {/* {data?.map((item,index) => (
                        <div className="col-lg-3 col-md-4 col-sm-6 m-3 row text-center overflow-hidden position-relative image-container">
                            <img className="img-fluid hover-img col-12 img-fixed"
                                 src={item?.TopImage}
                                 alt="Auto parts ball head"/>
                            <i className="bi bi-search search-icon col-12"></i>
                            <div className="custom-font-p bg-light text-muted col-12">{item?.Name}</div>
                        </div>
                    ))} */}
                </div>
        </div>
    )
}

export default Products;