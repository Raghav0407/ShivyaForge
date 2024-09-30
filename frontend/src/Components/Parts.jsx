import parts from '../Data/PartsImage.json';
import "../Style/GeneralStyling.css"

const Parts = () => {
    return (
        <div className="container">
            <div className="h2 text-center mt-5 mb-3 text-decoration-underline text-secondary custom-font">
                --Parts--
            </div>
            <div className="parts_container p-6">
                <div className="row">
                    {parts.Parts.map((item) => (
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-3 image-zoom">
                            <img className="img-fluid img-block rounded-2 shadow" src={item.Url} alt="part-image"/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Parts;