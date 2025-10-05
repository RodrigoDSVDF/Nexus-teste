// Dentro de src/components/Dashboard.jsx

import React from 'react';

function Dashboard() {
  return (
    <div className="dashboard-component">
      <iframe
        src="https://estudo009.streamlit.app/?embed=true"
        height="700"
        width="100%"
        style={{ border: 'none' }}
        title="Dashboard Financeiro Streamlit" // Boa prática para acessibilidade
      >
      </iframe>
    </div>
  );
}

export default Dashboard;
