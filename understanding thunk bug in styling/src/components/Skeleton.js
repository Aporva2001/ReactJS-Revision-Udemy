import classNames from "classnames";

import React from 'react'

const Skeleton = ({times,className}) => {
    const outerClassNames= classNames(
        'relative',
        'overflow-hidden',
        'bg-gray-200',
        'rounded',
        'mb-2.5',
        className // This prop allows us to set the height and width of the boxes.
    );
    const innerClassNames= classNames(
        'animate-shimmer',
        'absolute',
        'inset-0',
        '-translate-x-full',
        'bg-gradient-to-r',
        'from-gray-200',
        'via-white',
        'to-gray-200'
    );

    // const boxes=[];

    // for(let i=0;i< times; i++){
    //     boxes.push(<div key={i} />)
    // }

    //ALITER

    const boxes= Array(times).fill(0).map((_,i)=>{ // _ is used when we dont care about the function.
        return <div key={i} className={outerClassNames}>
            <div className={innerClassNames}/>
            </div>

    })
    return boxes;
}

export default Skeleton