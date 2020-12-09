import { useState } from "react";
import React from 'react';

import { NavbarComponent } from "./components/navbarComponent/NavbarComponent";
import { Container, Row } from "reactstrap";
import "./App.scss";
import { SidebarComponent } from "./components/sidebarComponent/SidebarComponent";
import { MainComponent } from "./components/mainComponent/MainComponent";
import { ICity } from "./models/ICity";

function App() {

  const [selectedCity, setSelectedCity] = useState<ICity>({} as ICity)
  console.log('selected city', selectedCity)

  return (
    <React.Fragment>
      <div className="App">
        <NavbarComponent />
      </div>
      <Container>
        <Row>
          <SidebarComponent selectedCityHandler={setSelectedCity} selectedCity={selectedCity} />
          <MainComponent selectedCity={selectedCity} />
        </Row>

      </Container>


    </React.Fragment>
  );
}

export default App;
