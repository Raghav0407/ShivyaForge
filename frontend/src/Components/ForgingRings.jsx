import "../Style/GeneralStyling.css"
import img1 from '../Assets/img/ForgedRing1.jpg'
import img2 from '../Assets/img/ForgedRing2.jpg'
import img3 from '../Assets/img/ForgedRing3.jpg'
import img4 from '../Assets/img/ForgedRing4.jpg'

const ForgingRings = () => {

    return (
        <div className="container mt-4 mb-4">
            <div className='background-div-forgedRings mt-3'>
                <div className="h1 fw-bold text-light d-flex justify-content-center align-items-center h-100">Forged Rings</div>
            </div>

            <div>
                <div className='h6 text-muted text-center mt-3'>Various Types of <span className='fw-bold'>'Forged Rings'</span> as per <span className='fw-bold'>Customer Drawings</span> and <span className='fw-bold'>Specifications</span>.</div>
                <div className='h6 text-muted text-center mb-3'><span className='fw-bold'>Material Grades :</span> Stainless Steel, Carbon Steel, Alloy Steel and Other Metals</div>
            </div>

            <div className='row m-3'>
                <div className='col m-3'>
                    <ul>
                        <li className='m-2'>Forged Rolled Rings</li>
                        <li className='m-2'>Industrial Forged Rings</li>
                        <li className='m-2'>Auto Forged Rings</li>
                        <li className='m-2'>Seamless Forged Rings</li>
                    </ul>
                </div>
                <div className='col m-3'>
                    <ul>
                        <li className='m-2'>Rolled Bearing Rings</li>
                        <li className='m-2'>Seamless Bearing Rings</li>
                        <li className='m-2'>SS Bearing Rings</li>
                        <li className='m-2'>Bearing Races</li>
                    </ul>
                </div>
                <div className='col m-3'>
                    <ul>
                        <li className='m-2'>RX Ring Joint Gasket</li>
                        <li className='m-2'>DX Ring Joint Gasket</li>
                        <li className='m-2'>Ring Forged Components</li>
                        <li className='m-2'>SS Ring Joint Gaskets</li>
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

export default ForgingRings;
