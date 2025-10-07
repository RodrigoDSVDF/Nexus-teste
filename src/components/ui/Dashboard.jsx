// Dentro de src/components/Dashboard.jsx

import React from 'react';

function Dashboard() {
  return (
    <div className="dashboard-component">
      <iframe
        src="https://app-dash-pj41.onrender.com/?embed=true"
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
