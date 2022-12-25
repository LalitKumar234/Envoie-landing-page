import React from 'react'
import './Pricing.css'
import { AiOutlineCheck } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';
import  girlImage  from '../../Assets/girlImage.svg'

const Pricing = () => {
    return (
        <div className='pricingContainer'>
            <h1>Choose <span className='redColor'>Your</span> Plan</h1>
            <div className="switch-btn">
                <button className='btn-primary'>MONTHLY</button>
                <button className='btn-secondary'>YEARLY</button>
            </div>
            <div className="priceplans">
                <div className="plan">
                    <div className="planHeader">
                        <h1>Free</h1>
                        <div className="billTag"><p>Billed Monthly</p></div>
                    </div>
                    <div className="featureSection">
                        <ul className="features">
                            <li><AiOutlineCheck style={{ color: "#5ACE31", fontSize: "1.2rem", marginRight: "0.4rem" }} /><strong>10,000</strong> emails /month</li>
                            <li><AiOutlineCheck style={{ color: "#5ACE31", fontSize: "1.2rem", marginRight: "0.4rem" }} /><strong>50</strong> Test emails /day </li>
                            <li><AiOutlineCheck style={{ color: "#5ACE31", fontSize: "1.2rem", marginRight: "0.4rem" }} /><strong>3 Team</strong> member </li>
                        </ul>
                        <ul className="features">
                            <li><AiOutlineCheck style={{ color: "#5ACE31", fontSize: "1.2rem", marginRight: "0.4rem" }} /><strong>Advance</strong> Templates</li>
                            <li><AiOutlineCheck style={{ color: "#5ACE31", fontSize: "1.2rem", marginRight: "0.4rem" }} /><strong>Unlimited</strong> Templates  </li>
                            <li><RxCross2 style={{ color: "#FB5F66", fontSize: "1.2rem", marginRight: "0.4rem" }} /><strong>30</strong> Exports </li>
                        </ul>
                    </div>
                    <div className="addOns">
                        <h3>Add-ons</h3>
                        <ul className="addonFeatures">
                            <li><RxCross2 style={{ color: "#FB5F66", fontSize: "1.2rem", marginRight: "0.4rem" }} /><strong>Not Available</strong></li>
                        </ul>
                    </div>
                    <h3 className='exportHeading'>Export Options Available</h3>
                    <div className="featureSection">
                        <ul className="features">
                            <li><AiOutlineCheck style={{ color: "#5ACE31", fontSize: "1.2rem", marginRight: "0.4rem" }} />Gmail</li>
                            <li><AiOutlineCheck style={{ color: "#5ACE31", fontSize: "1.2rem", marginRight: "0.4rem" }} />Mail Chimp</li>
                            <li><AiOutlineCheck style={{ color: "#5ACE31", fontSize: "1.2rem", marginRight: "0.4rem" }} />HTML</li>
                        </ul>
                        <ul className="features">
                            <li><AiOutlineCheck style={{ color: "#5ACE31", fontSize: "1.2rem", marginRight: "0.4rem" }} />Webhook</li>
                            <li><AiOutlineCheck style={{ color: "#5ACE31", fontSize: "1.2rem", marginRight: "0.4rem" }} />Zapier</li>
                            <li><RxCross2 style={{ color: "#FB5F66", fontSize: "1.2rem", marginRight: "0.4rem" }} />Wide range of ESPs</li>
                        </ul>
                    </div>
                    <div className="planFooter">
                        <button className='btn-primary-long'>Contact us</button>
                    </div>
                </div>
                {/* second plan */}
                
                <div className="plan">
                    <img src={girlImage} className="girlImage"alt="" />
                    <div className="plusPlanHeader">
                        <div className="planLeft">
                            <h1>Plus Plan</h1>
                            <div className="billTag"><p>Billed Monthly</p></div>
                        </div>
                        <div className="planRight"><span className='planPrice'>$22 /</span>Month</div>

                    </div>
                    <div className="featureSection">
                        <ul className="features">
                            <li><AiOutlineCheck style={{ color: "#5ACE31", fontSize: "1.2rem", marginRight: "0.4rem" }} /><strong>10,000</strong> emails /month</li>
                            <li><AiOutlineCheck style={{ color: "#5ACE31", fontSize: "1.2rem", marginRight: "0.4rem" }} /><strong>50</strong> Test emails /day </li>
                            <li><AiOutlineCheck style={{ color: "#5ACE31", fontSize: "1.2rem", marginRight: "0.4rem" }} /><strong>3 Team</strong> member </li>
                        </ul>
                        <ul className="features">
                            <li><AiOutlineCheck style={{ color: "#5ACE31", fontSize: "1.2rem", marginRight: "0.4rem" }} /><strong>Advance</strong> Templates</li>
                            <li><AiOutlineCheck style={{ color: "#5ACE31", fontSize: "1.2rem", marginRight: "0.4rem" }} /><strong>Unlimited</strong> Templates  </li>
                            <li><RxCross2 style={{ color: "#FB5F66", fontSize: "1.2rem", marginRight: "0.4rem" }} /><strong>30</strong> Exports </li>
                        </ul>
                    </div>
                    <div className="addOns">
                        <h3>Add-ons</h3>
                        <ul className="addonFeatures">
                            <li><AiOutlineCheck style={{ color: "#5ACE31", fontSize: "1.2rem", marginRight: "0.4rem" }} /><strong>$25/month</strong> add on for extra 25K emails</li>
                            <li><AiOutlineCheck style={{ color: "#5ACE31", fontSize: "1.2rem", marginRight: "0.4rem" }} /><strong>$40/month</strong> add on for 1 additional team member</li>
                            <li><AiOutlineCheck style={{ color: "#5ACE31", fontSize: "1.2rem", marginRight: "0.4rem" }} /><strong>$3/month</strong> add on for 1 extra export</li>
                        </ul>
                    </div>
                    <h3 className='exportHeading'>Export Options Available</h3>
                    <div className="featureSection">
                        <ul className="features">
                            <li><AiOutlineCheck style={{ color: "#5ACE31", fontSize: "1.2rem", marginRight: "0.4rem" }} />Gmail</li>
                            <li><AiOutlineCheck style={{ color: "#5ACE31", fontSize: "1.2rem", marginRight: "0.4rem" }} />Mail Chimp</li>
                            <li><AiOutlineCheck style={{ color: "#5ACE31", fontSize: "1.2rem", marginRight: "0.4rem" }} />HTML</li>
                        </ul>
                        <ul className="features">
                            <li><AiOutlineCheck style={{ color: "#5ACE31", fontSize: "1.2rem", marginRight: "0.4rem" }} />Webhook</li>
                            <li><AiOutlineCheck style={{ color: "#5ACE31", fontSize: "1.2rem", marginRight: "0.4rem" }} />Zapier</li>
                            <li><RxCross2 style={{ color: "#FB5F66", fontSize: "1.2rem", marginRight: "0.4rem" }} />Wide range of ESPs</li>
                        </ul>
                    </div>
                    <div className="planFooter">
                        <button className='btn-primary-long'>Contact us</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing