import React from 'react';
// import "../Styles/Navbar.css"

const navbarStyling={
    contentStyle:{
        backgroundColor:"lightBlue",
        color: "white",
        fontSize: "1.3rem",
        textDecoration: "none",
        marginTop: -8,
        lineHeight: 1,
        paddingTop:"auto",
        height:60,
        fontFamily:"Mono",
        paddingLeft:30,
    },
    contactme:{
        marginLeft:1150, 
        

    },
    About:{
        marginLeft: 900,
        
        
    }
    
}



function navbar() {
    return (
        <div>
            <nav className="navbar" style={navbarStyling.contentStyle}>
                <a href="/" style={navbarStyling.About}>About</a>
                <a href="/" style={navbarStyling.contactme}>Contact Me</a>
                <a href="/">Details</a>
            </nav>

        </div>
    )
}

export default navbar;

// import React from 'react';
// import logo from './log.svg'
// import "../Header/style.css";

// const Apple = ()=> <div>Hello there </div>

// function App(params) {

//     return (
//         <div>
//                 <Apple />
//             </div >
//         );

// }

// export default Header;