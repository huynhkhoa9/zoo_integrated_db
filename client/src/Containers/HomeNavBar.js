import Button from "react-bootstrap/Button"
import {useHistory} from "react-router-dom"
import "./HomeNavBar.css"

export default function HomeNavBar(){
    var history = useHistory()

    const MainSubmit = (e) =>{
        history.push("/Main");
        window.location.reload();
    }
    return( 
        <div className="NavBar">
            <header>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"></link>

            <div class = "btn-group">
                <Button className="Main Page" block size="lg" type="submit" onClick={MainSubmit}>
                    Home
                </Button>
           
            </div>

            </header>
        </div>
    )
}