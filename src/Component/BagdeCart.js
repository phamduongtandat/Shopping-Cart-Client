import React from 'react'

function BagdeCart({ amount }) {
    return (
        <div className='text-center rounded-circle text-light w-50 h-70 position-absolute bg-danger'
            style={{ top: '-10px', left: '45px', fontSize: '20px', lineHeight: '30px', }} >

            {amount}

        </div>
    )
}

export default BagdeCart
