import "../Style/GeneralStyling.css"
import img1 from '../Assets/img/30.jpg'
import img2 from '../Assets/img/31.png'
import img3 from '../Assets/img/32.jpg'
import img4 from '../Assets/img/33.jpg'


const ForgedComponents = () => {

    return (
        <div className='container mt-4 mb-4'>
            <div className='background-div-forgedComponent mt-3'>
                <div className="h1 fw-bold text-light d-flex justify-content-center align-items-center h-100">Forged
                    Rings and Machined Forged Parts
                </div>
            </div>

            <div>
                <div className='h6 text-muted text-center mt-3'>Various Types of <span className='fw-bold'>Automotive Components, Agricultural Machinery Components</span> as
                    per <span className='fw-bold'>Customer Drawings</span> and <span
                        className='fw-bold'>Specifications</span>.
                </div>
                <div className='h6 text-muted text-center mb-3'><span
                    className='fw-bold'>Material Grades :</span> Stainless Steel, Carbon Steel, Alloy Steel and Other
                    Metals
                </div>
            </div>

            <div className='row m-3'>
                <div className='col m-3'>
                    <ul>
                        <li className='m-2'>Steering Yokes</li>
                        <li className='m-2'>Joints</li>
                        <li className='m-2'>Shaft Housing</li>
                        <li className='m-2'>Collector Ring</li>
                        <li className='m-2'>Crankshaft</li>
                    </ul>
                </div>
                <div className='col m-3'>
                    <ul>
                        <li className='m-2'>Oval Flange</li>
                        <li className='m-2'>Rocker Arm</li>
                        <li className='m-2'>Clevis</li>
                        <li className='m-2'>Castor Plat</li>
                        <li className='m-2'>Axle Rod</li>
                    </ul>
                </div>
                <div className='col m-3'>
                    <ul>
                        <li className='m-2'>Axle Hub</li>
                        <li className='m-2'>Track Arm</li>
                        <li className='m-2'>U.J. Cross</li>
                        <li className='m-2'>Hydraulic Nut</li>
                        <li className='m-2'>Idler Drop Arm</li>
                    </ul>
                </div>
                <div className='col m-3'>
                    <ul>
                        <li className='m-2'>Connecting Rod</li>
                        <li className='m-2'>Engine Camshaft</li>
                        <li className='m-2'>Gear Shifter Fork</li>
                        <li className='m-2'>Flange Yoke</li>
                        <li className='m-2'>pacer</li>
                    </ul>
                </div>
                <div className='col m-3'>
                    <ul>
                        <li className='m-2'>Clutch Hub</li>
                        <li className='m-2'>Trunion</li>
                        <li className='m-2'>Gear Blanks</li>
                        <li className='m-2'>Cross Lever</li>
                        <li className='m-2'>Jack Nut</li>
                    </ul>
                </div>
            </div>

            <div className='row m-3'>
                <div className='image-container p-0'><img className='col' src={img1} alt='img1'/></div>
                <div className='image-container'><img className='col' src={img2} alt='img2'/></div>
                <div className='image-container'><img className='col' src={img3} alt='img3'/></div>
                <div className='image-container'><img className='col' src={img4} alt='img4'/></div>
            </div>
        </div>
    );
}

export default ForgedComponents;
