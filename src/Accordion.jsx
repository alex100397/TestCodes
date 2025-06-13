import React, { useState } from 'react';
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import './Accordion.css';
function Accordion({ items }) {
    // console.log(items)
    const [open, setOpen] = useState(null)
    console.log(open)
    return (
        <div className='accordion'>
            {items?.length === 0 ? <p>No items available</p> :
                items?.map((data, index) =>
                    <>
                        <div className='accordion-item' key={data} onClick={() => setOpen((prev) => prev === index ? null : index)}>
                            <h1 className='accordion-title'>{data?.title}
                            </h1>
                            {open === index ? '-' : '+'}
                        </div>
                        {
                            open === index ? <p className='accordion-content'>
                                {data?.content}
                            </p> : ''
                        }</>
                )
            }

        </div >
    );
}

export default Accordion;