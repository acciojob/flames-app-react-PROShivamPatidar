import React, { Component, useState } from "react";

const Relation =()=>{
        const [firstName, setFirstName] = useState('');
        const [secondName, setSecondName] = useState('');
        const [relationshipStatus, setRelationshipStatus] = useState('');

        const calculateRelationship = () => {
            if (firstName === '' || secondName === '') {
                setRelationshipStatus('Please Enter valid input');
                return;
            }

            const commonLetters = new Set([...firstName].filter(char => secondName.includes(char)));

            const remainingFirstName = [...firstName].filter(char => !commonLetters.has(char)).join('');
            const remainingSecondName = [...secondName].filter(char => !commonLetters.has(char)).join('');

            const sumOfLengths = (remainingFirstName.length + remainingSecondName.length) % 6;

            switch (sumOfLengths) {
                case 1:
                    setRelationshipStatus('Friends');
                    break;
                case 2:
                    setRelationshipStatus('Love');
                    break;
                case 3:
                    setRelationshipStatus('Affection');
                    break;
                case 4:
                    setRelationshipStatus('Marriage');
                    break;
                case 5:
                    setRelationshipStatus('Enemy');
                    break;
                case 0:
                    setRelationshipStatus('Siblings');
                    break;
                default:
                    setRelationshipStatus('');
            }
        };

        const clearInputs = () => {
            setFirstName('');
            setSecondName('');
            setRelationshipStatus('');
        };


        return (
            <div id="main">
                {/* Do not remove the main div */}
                <input type="text" name="name1" placeholder="Enter first name" value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    data-testid="input1" />
                <input type="text"name="name2" placeholder="Enter second name" value={secondName}
                    onChange={(e) => setSecondName(e.target.value)}
                    data-testid="input2" />
                <button onClick={calculateRelationship} data-testid="calculate_relationship">Calculate Relationship Future</button>
                <button onClick={clearInputs} data-testid="clear">Clear</button>
                <h3 data-testid="answer">{relationshipStatus}</h3>
                <hr/>
            </div>
        )
    }


export default Relation;
