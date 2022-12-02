import React from 'react';

function NavigationButton(props) {
    const {isLost, isCreate} = props;
    // const boldText = isCreate ? "Create" : isLost ? "Lost" : "Found"
    const text = () => {
        switch (isLost) {
            case true: return isCreate ? "\"Create new Lost Post!\"" : "\"I Lost my own Item...\"";
            case false: return isCreate ? "\"Create new Found Post!\"" : "\"I Found someone's Item...\"";
            default:
        }
    }

    const buttonStyle = {
        // backgroundColor: "rgb(90,207,201)",
        backgroundColor: "blue",
        height: "40%",
        width: "40%",
    };
    
    return (
        <div style={buttonStyle}>
            <p>{text()}</p>
        </div>
    )
}

function HomePage(props) {
    return (
        <div>
            <NavigationButton isLost={false} isCreate={false} />
            <NavigationButton isLost={true} isCreate={true} />
            <NavigationButton isLost={true} isCreate={false} />
            <NavigationButton isLost={false} isCreate={true} />
        </div>
        
    )
}

export default HomePage;