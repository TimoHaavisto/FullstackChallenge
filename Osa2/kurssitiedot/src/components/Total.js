import React from 'react'

const Total = props => {  
    console.log("kukkuu")
    //const exMap = props.course.parts.map(part => part.exercises)    
    //const total = exMap.reduce(summarize)
    const total = 2222
    return (
        <div>            
            <p>Exercise total {total}</p>
        </div> 
    )
}

function summarize(total, num) {
    return total + num
}

export default Total