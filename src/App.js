import logo from './logo.svg';
import './App.css';
import history from "./history"
import {Route, BrowserRouter, Routes, Switch} from "react-router-dom"
import Landing from "./components/Landing"
import Register from './components/Register';
import Login from './components/Login';
import Entries from './components/Entries';
import OrgRegComplete from './components/OrgRegComplete';
import OrganizerHomepage from './components/OrganizerHomepage';
import DonorHomepage from './components/DonorHomepage';
import MakeDonation from './components/MakeDonation';
import RecipientChosen from './components/RecipientChosen';
import Register2 from './components/Register2';
import { useState, useEffect} from 'react';
import AddEntryPage from './components/AddEntryPage';
import Confirmation from './components/Confirmation';
import Login2 from './components/Login2';
 

function App() {
  const [entries, setEntries] = useState([
    // {
    //     id: 0,
    //     name: "Joon Young Park",
    //     age: 2,
    //     toy: "dildo",
    //     link:"/making-donation"
    //   },
    //   {
    //     id: 1,
    //     name: "Joon Young Fuck",
    //     age: 0,
    //     toy: "anal",
    //     link:"/"
    //   }
    ])

    useEffect(() => {
      const getEntries = async () => {
        const entriesFromServer =  await fetchEntries()
        setEntries(entriesFromServer)
      }
      getEntries()
    }, [])

    const fetchEntries = async () => {
      const res = await fetch('http://localhost:5000/entries')
      const data = await res.json()
      return data
    }

  
  return (
    <div className="App">
      <BrowserRouter history={history}>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/register" exact component={Register2} />
          <Route path="/login" exact component={Login2} />
          <Route path="/entries" exact component={Entries} />
          <Route path="/org-homepage" render={(props) => (<OrganizerHomepage entries={entries} setEntries={setEntries}/>)} /> 
          <Route path="/org-reg-complete" exact component={OrgRegComplete} />
          <Route path="/donor-homepage" exact component={DonorHomepage} />
          <Route path="/make-donation" render={(props) => (<MakeDonation entries={entries} setEntries={setEntries}/>)} />
          <Route path="/making-donation" exact component={RecipientChosen} />
          <Route path="/testing" exact component={Register2} />
          <Route path="/add-entry-page" exact component={AddEntryPage} />
          <Route path="/confirmation" exact component={Confirmation} />
          <Route path="/slatt" exact component={Login2} />
        </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
