import Button from "react-bootstrap/Button"
import {useHistory} from "react-router-dom"
import "./UserMainNavBar.css"

export default function UserMainNavBar(){
    var history = useHistory()

    const AnimalsSubmit = (e) =>{
        history.push("/CustomerAnimalsPage");
        window.location.reload();
    }

    const MainSubmit = (e) =>{
        history.push("/UserMain")
        window.location.reload();
    }

    const LogoutSubmit = (e) =>{
        history.push("/Main")
        window.location.reload();
    }

    return(
        <div className="NavBar">
            <header>
                <div class = "btn-group">
                <Button className="Main Page" block size="lg" type="submit" onClick={MainSubmit}>
                    Home
                </Button>
                <Button className="Animals" block size="lg" type="submit" onClick={AnimalsSubmit}>
                    Animals
                </Button>
                <Button className="Logout" block size="lg" type="submit" onClick={LogoutSubmit}>
                    Logout 
                </Button>
                </div>
            </header>
        </div>
    )
}