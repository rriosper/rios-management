import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter as Router } from "@ionic/react-router";
import React from "react";

import Scenes from "../scenes";
import Theme from "../theme";
import Store from "../store";

import useInit from "./useInit";

const App: React.FC = () => {
  useInit();
  return (
    <IonApp>
      <Store>
        <Theme>
          <Router>
            <IonRouterOutlet>
              <Scenes />
            </IonRouterOutlet>
          </Router>
        </Theme>
      </Store>
    </IonApp>
  );
};

export default App;
