import React, { useState } from 'react'
import checkBox from '../../Assets/checkBox.svg'
import checkTick from '../../Assets/check.svg'

const CheckBox = ({ active, setActive, value }) => {
    const [check, setCheck] = useState(false);

    const styles = {
        color: !check && !active ? "#808080" :"#222222"
    }

    const handleCheck = () => {

        if (!check) {
            setCheck(true)
            setActive(true)
        }
        else {
            setCheck(false)
            setActive(false)
        }

    }
    return (
        <div className='checkBox'>
            <div
                onClick={() => handleCheck()} >
                <img src={!check && !active ? checkBox : checkTick}
                    alt="" className='checkBox' />
            </div>
            <p style={styles}>{value}</p>
        </div>

    )
}

export default CheckBox