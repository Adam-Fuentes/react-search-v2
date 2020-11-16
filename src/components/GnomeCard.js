import React from 'react'

const GnomeCard = (props) =>{
    const {name, thumbnail, age, weight, height, hair_color, professions, friends} = props.height

    return (
        <div className="gnome-card-container">
            <div className="gnome-card">
                <h2>Name:</h2>
                <p>Age:</p>
                <p>weight</p>
                <p>height</p>
                <p>hair_color</p>
                <p>professions</p>
                <p>friends</p>
            </div>

        </div>
    )
}