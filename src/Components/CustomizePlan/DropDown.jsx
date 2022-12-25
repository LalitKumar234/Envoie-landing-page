import React, { useState } from 'react'
import './DropDown.css'
import { MdKeyboardArrowUp } from 'react-icons/md';
import { MdKeyboardArrowDown } from 'react-icons/md';

const DropDown = ({option1, option2, option3, option4}) => {
    const [show, setShow] = useState(false)
    const [select, setSelect] = useState('')

    const handleShow = () => {
        if (!show) {
            setShow(true)
        }
        else setShow(false)
    }

    const handleSelect = (str) =>{
        setSelect(str)
    }
    return (
        <div className="input" onClick={handleShow}>
            <div className="inputField">
                <div className="value">
                    <p>{select==='' ? option1 : select}</p>
                </div>
                <div className="icon">
                    {
                        !show ? <MdKeyboardArrowUp size={30} /> : <MdKeyboardArrowDown size={30} />
                    }

                </div>
            </div>
            {
                show ? <ul className="options">
                    <li onClick={() => handleSelect(option1)}>{option1}</li>
                    <li onClick={() => handleSelect(option2)}>{option2}</li>
                    <li onClick={() => handleSelect(option3)}>{option3}</li>
                    <li onClick={() => handleSelect(option4)}>{option4}</li>
                </ul> : null
            }



        </div>
    )
}

export default DropDown