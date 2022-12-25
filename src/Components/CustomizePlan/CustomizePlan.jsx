import React, { useState } from 'react'
import './CustomizePlan.css'
import ResultImage from '../../Assets/ResultImage.svg'
import InputRange from './InputRange'
import DropDown from './DropDown'
import CheckBox from './CheckBox'

const CustomizePlan = () => {
    const [value, setValue] = useState(2000)
    const [active, setActive] = useState(true)

    return (
        <div className='customizeSection'>
            <div className="calculator">
                <h1>Customize <span className='redColor'>Your</span> Plan</h1>
                <div className="sliderSelect">
                    <div className="sliderInput">
                        <label htmlFor="numberOfEmail" >Number of email required</label>
                        <input type="text" id="numberOfEmail" value={value} name="fname" />
                    </div>
                    <div className="sliderInput">
                        <label htmlFor="numberOfEmail">Total monthly</label>
                        <input type="text" id="totalPrice" value={'$ 22'}name="fname" />
                    </div>
                </div>
                {/* input range start*/}
                <InputRange value={value} setValue={setValue}/>
                {/* input range over */}
                <div className="exportCheckBoxes">
                    <p>Export options available</p>
                    <ul className="exportChecks">
                        <li className='checkBox' ><CheckBox active={active} setActive={setActive} value={"None (direct through envoie)"}/></li>
                        <li className='checkBox' ><CheckBox value={"Omniengage"}/></li>
                        <li className='checkBox' ><CheckBox value={"Gmail, Outlook, PDF or Image"}/></li>
                        <li className='checkBox' ><CheckBox value={"HTML, Zapier"}/></li>
                        <li className='checkBox' ><CheckBox value={"Webhook/Your own ESP Mailchimp, Constant contact etc"}/></li>
                </ul>
            </div>

            {/* dropDown section */}
            <div className="dropDownContainer">


                {/* custom Dropdown */}
                <div className="dropdown">
                    <div className="leftDropdown">
                        <p className='dropDownHeading'>Team members <span className='redColor'>*</span></p>
                        <DropDown option1={'1 member'} option2={'2 member'} option3={'3 members'} option4={'4 members'} />
                    </div>
                    <div className="rightDropdown">
                        <p className='dropDownHeading'>Daily Test emails <span className='redColor'>*</span></p>
                        <DropDown option1={100} option2={200} option3={300} option4={400} />
                    </div>
                </div>
                <div className="dropdown">
                    <div className="leftDropdown">
                        <p className='dropDownHeading'>Number of export a month <span className='redColor'>*</span></p>
                        <p className='requiredField'>Only relevant if you are sending email through <br />another tool i.e exporting content from envoiex</p>
                        <DropDown option1={'1 member'} option2={'2 member'} option3={'3 members'} option4={'4 members'} />
                    </div>
                    <div className="rightDropdown">
                        <p className='dropDownHeading'>Number of SMTPs /clients <span className='redColor'>*</span></p>
                        <p className='requiredField'>(For Agency or Large Enterprise)</p>
                        <DropDown option1={100} option2={200} option3={300} option4={400} />
                    </div>
                </div>
            </div>
        </div>

            {/* results container */ }

    <div className="results">
        <div className="resultImage">
            <img src={ResultImage} alt="" />
        </div>
        <h1>Here are your results</h1>
        <div className="resultDetail">
            <div className="tax">
                <p>Tax</p>
                <p>$100</p>
            </div>
            <div className="total">
                <p>Total</p>
                <p>$222</p>
            </div>
        </div>
        <div className="grandTotal">
            <h2>Grand total</h2>
            <div className="GrandTotalPrice"><span className='planPrice'>$22 /</span>Month</div>
        </div>
        <button className='btn-contactUS'>Contact us</button>
    </div>
        </div >
    )
}

export default CustomizePlan