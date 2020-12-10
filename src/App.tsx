import { useEffect, useState } from "react";
import React from 'react';

import { NavbarComponent } from "./components/navbarComponent/NavbarComponent";
import { Container, Row, Spinner } from "reactstrap";
import "./App.scss";
import { SidebarComponent } from "./components/sidebarComponent/SidebarComponent";
import { MainComponent } from "./components/mainComponent/MainComponent";
import { ICity } from "./models/ICity";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AddBootcampComponent } from "./components/addBootcampComponent/AddBootcampComponent";
import { useDispatch, useSelector } from "react-redux";
import { IReduxApplicationStore } from "./models/IReduxApplicationStore";
import { fetchCities } from "./store/cities/actions";

function App() {
  const dispatch = useDispatch()
  const citiesSlice = useSelector((state: IReduxApplicationStore) => state.citiesSlice);

  useEffect(() => {
    dispatch(fetchCities())
  }, [])

  console.log("cities", citiesSlice)


  const [selectedCity, setSelectedCity] = useState<ICity>({} as ICity)

  let content = <Spinner />
  if (!citiesSlice.isFetching){
    content = (
      <Switch>

        <Route path="/" exact>
          <SidebarComponent selectedCityHandler={setSelectedCity} selectedCity={selectedCity} allCities={citiesSlice.cities}/>
          <MainComponent selectedCity={selectedCity} />
        </Route>

        <Route path="/add-bootcamp" exact>
          <div className="col-12 bootcamp-container">
            <AddBootcampComponent/>
          </div>
        </Route>

        <Route path="/">
          <p>404 not found!</p>
        </Route>

      </Switch>
    )
  }
  
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarComponent />
      </div>

      <Container>
        <Row>
          {content}
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
