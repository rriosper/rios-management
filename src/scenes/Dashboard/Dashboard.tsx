import React from "react";
import { authService } from "../../services";

const Dashboard = () => {
  return (
    <div>
      <button type="button" onClick={() => authService.logout()}>
        Desconectar
      </button>
      Funciona
    </div>
  );
};

export default Dashboard;
