import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NawBar/NavBar";
import Profile from "./components/Profile/Profile";
import {Route, BrowserRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {


    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <NavBar/>
                <div className={"app-wrapper-content"}>
                    <Route render={() => <Profile

                        />}
                           path='/profile'/>
                    <Route component={() => <DialogsContainer />}
                           path='/dialogs'/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
