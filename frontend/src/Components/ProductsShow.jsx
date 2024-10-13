import "../Style/GeneralStyling.css"
import img from '../Assets/img/30.jpg' 
import img2 from '../Assets/img/ForgedRing4.jpg'
const ProductsShow = () => {
    return (
        <div className="container">
            <div className="products-container p-5" >
                <div className="row g-4">
                    <div className="col-md-12 shadow p-3">
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <div className="h4 mt-3 mb-3 custom-font-Subheading">
                                    Forged Rings
                                </div>
                                <div className="text-muted custom-font-p" style={{ fontSize: "12px" }}>
                                    Various Types of ‘Forged Rings’ as per Customer Drawings and Specifications.
                                    Material Grades : Stainless Steel, Carbon Steel, Alloy Steel and Other Metals
                                    • Forged Rolled Rings
                                    • Industrial Forged Rings
                                    • Auto Forged Rings
                                    • Seamless Forged Rings
                                    • Rolled Bearing Rings
                                    • Seamless Bearing Rings
                                    • SS Bearing Rings
                                    • Bearing Races
                                    • RX Ring Joint Gasket
                                    • DX Ring Joint Gasket
                                    • Ring Forged Components
                                    • SS Ring Joint Gasket
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 d-flex justify-content-center align-items-center">
                                <img className="img-fluid" alt="Ring forging"
                                    src={img}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 shadow p-3">
                        <div className="row">
                            <div className="col-6 d-flex justify-content-center align-items-center">
                                <img className="img-fluid" alt="Ring forging"
                                    src={img2} />
                            </div>
                            <div className="col-6">
                                <div className="h4 mt-3 mb-3 custom-font-Subheading">
                                    Machine Forged Components and Parts
                                </div>
                                <div className="text-muted custom-font-p" style={{ fontSize: "12px" }}>
                                    Various Types of Automotive Components, Agricultural Machinery Components as per Customer Drawings and Specifications.
                                    Material Grades : Stainless Steel, Carbon Steel, Alloy Steel and Other Metals
                                    • Steering Yokes
                                    • Joints
                                    • Shaft Housing
                                    • Collector Ring
                                    • Crankshaft
                                    • Oval Flange
                                    • Rocker Arm
                                    • Clevis
                                    • Castor Plat
                                    • Axle Rod
                                    • Axle Hub
                                    • Track Arm
                                    • U.J. Cross
                                    • Hydraulic Nut
                                    • Idler Drop Arm
                                    • Connecting Rod
                                    • Engine Camshaft
                                    • Gear Shifter Fork
                                    • Flange Yoke
                                    • Spacer
                                    • Clutch Hub
                                    • Trunion
                                    • Gear Blank
                                    • Cross Lever
                                    • Jack Nut
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsShow;