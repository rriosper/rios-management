import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter as Router } from "@ionic/react-router";
import React, { Suspense } from "react";

import Scenes from "../scenes";
import Theme from "../theme";
import Store from "../store";

import useInit from "./useInit";

const App: React.FC = () => {
  useInit();
  return (
    <IonApp>
      <Suspense fallback={null}>
        <Store>
          <Theme>
            <Router>
              <IonRouterOutlet>
                <Scenes />
              </IonRouterOutlet>
            </Router>
          </Theme>
        </Store>
      </Suspense>
    </IonApp>
  );
};

export default App;
