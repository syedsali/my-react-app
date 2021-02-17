// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
// import "../Styles/Header.js"


const headerStyle={
    h1Style:{
        color:"lightBlue",
        backgroundColor: "black",
        fontSize:80,
        paddingTop:30,
        textAlign:"center",
        fontFamily:"new roman times",
        margin:0,
        height:200,

    },
    h2Style:{
        color:"red",
        backgroundColor:"gray",
        paddingTop:30,
        verticalAlign: "absolute",
    }

}



function header (){
        return(
            <div>

                <header className="header">
                    <h1 style= {headerStyle.h1Style} >Welcome to React</h1>
                    <h2 style= {headerStyle.h2Style}>Syed S. Ali </h2>
                </header>




            </div>
        )

}
export default header;