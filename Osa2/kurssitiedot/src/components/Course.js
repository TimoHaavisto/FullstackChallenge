import React from 'react'

//TH 11.7.2019

const Course = props => {
    
    function courseNames(obj, index) {  
        
        const total = obj.parts.reduce( (sum, part) => {
            return sum + part.exercises}, 0)

        return  <div key={"divKey" + index}>
                    <h2 key={index}>{obj.name}</h2>
                        <ul>
                            {obj.parts.map(courseParts)}
                        </ul>
                        <b>Total nbr of Exercises {total}</b>
                </div>

    }

    function courseParts(parts) {
        return <li key={parts.id}>{parts.name} {parts.exercises}</li>
    } 
    
    
    return (
        <div>
            { props.courses.map(courseNames) }
        </div>   
    )
}

export default Course
