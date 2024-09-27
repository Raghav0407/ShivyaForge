import "../Style/GeneralStyling.css"

const ProductsShow = () => {
    return (
        <div className="container">
            <div className="products-container p-5" >
                <div className="row g-4">
                    <div className="col-md-12 shadow p-3">
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <div className="h4 mt-3 mb-3 custom-font-Subheading">
                                    Ring Forging
                                </div>
                                <div className="text-muted custom-font-p" style={{fontSize: "12px"}}>
                                    Ring rolling is a hot forming process that produces seamless rings varying in size.
                                    It begins with a hollow circular preform that has been upset and pierced. The
                                    preform is placed over the idler or mandrel roll, which is forced toward the drive
                                    roll. The drive roll rotates continuously, reducing the wall thickness, imparting
                                    the desired shape to the cross section, and increasing the diameter.Rolling is
                                    continuous forming of metal between a set of rotating rolls whose shape or height is
                                    incrementally reduced to produce desired section through imposing high pressures for
                                    plastic deformation. It is the process of reducing thickness, increasing length
                                    without increasing the width markedly. The ring rolling process can be performed
                                    with the material at high temperature. Ring rolling is an advanced technique to
                                    manufacture seamless rings with flexible cross-sectional shape, improved grain
                                    structure, and minimal scrap.
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 d-flex justify-content-center align-items-center">
                                <img className="img-fluid" alt="Ring forging"
                                     src="https://image.made-in-china.com/202f0j00hMmaBRtCYKuQ/Ring-Forging-Products-Hot-Rolling-Rings-Seamless-Rolled-Ring.webp"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 shadow p-3">
                        <div className="row">
                            <div className="col-6 d-flex justify-content-center align-items-center">
                                <img className="img-fluid" alt="Ring forging"
                                     src="https://www.pradeepmetals.com/wp-content/uploads/2019/09/closed-die-forging.jpg"/>
                            </div>
                            <div className="col-6">
                                <div className="h4 mt-3 mb-3 custom-font-Subheading">
                                    Open Forging
                                </div>
                                <div className="text-muted custom-font-p" style={{fontSize: "12px"}}>
                                    Open-die forging is also known smith forging. In open-die forging, a hammer strikes
                                    and deforms the workpiece, which is placed on a stationary anvil. Open-die forging
                                    gets its name from the fact that the dies (the surfaces that are in contact with the
                                    workpiece) do not enclose the workpiece, allowing it to flow except where contacted
                                    by the dies. Therefore, the operator needs to orient and position the workpiece to
                                    get the desired shape. The dies are usually flat in shape, but some have a specially
                                    shaped surface for specialized operations. It is different from closed die forging
                                    in that the workpiece is not enclosed by the dies and the dies themselves are more
                                    like tools with simple shapes and profiles rather than resembling enclosed molds.
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