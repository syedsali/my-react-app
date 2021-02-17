import React, {Component} from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import "../Styles/Home.css"

// whenever you code a page, you always need a render before the retun 
// retun our page content on the dom
class Home extends Component {
    render() {
        return(
            <div>
                <Header />
                <Navbar />
                <h1>This is my home Page</h1>
            </div>
        )
    }
}
export default Home;