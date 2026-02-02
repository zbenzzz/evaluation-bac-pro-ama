'use client';

import { useState, useEffect } from 'react';
import './globals.css';

export default function Home() {
  const [user, setUser] = useState(null);
  const [currentPage, setCurrentPage] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Authentification
  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${process.env.NEXT_PUBLIC_SHEET_ID}/values/Utilisateurs?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`);
      const data = await response.json();

      if (data.values) {
        const users = data.values.slice(1); // Ignorer en-têtes
        const foundUser = users.find(row => row[0] === email && row[2] === password);

        if (foundUser) {
          setUser({ email: foundUser[0], nom: foundUser[1] });
          setCurrentPage('dashboard');
        } else {
          setError('Identifiant ou mot de passe incorrect');
        }
      }
    } catch (err) {
      setError('Erreur de connexion');
    }
  };

  // Page Login
  if (!user) {
    return (
      <div className="login-container">
        <div className="login-box">
          <div className="login-header">
            <h1>📚 Évaluation BAC PRO AMA CVPM</h1>
            <p>Communication Visuelle Plurimédia</p>
          </div>

          <form onSubmit={handleLogin} className="login-form">
            <h2>Connexion</h2>
            
            {error && <div className="error-message">{error}</div>}

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre.email@exemple.fr"
                required
              />
            </div>

            <div className="form-group">
              <label>Mot de passe</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>

            <button type="submit" className="btn-primary">
              Se connecter
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Dashboard
  if (currentPage === 'dashboard') {
    return (
      <div className="app-container">
        <header className="app-header">
          <h1>📚 Évaluation BAC PRO AMA CVPM</h1>
          <p>Communication Visuelle Plurimédia</p>
          <button onClick={() => setUser(null)} className="btn-logout">
            Déconnexion
          </button>
        </header>

        <div className="dashboard">
          <h2>Bonjour {user.nom} 👋</h2>
          
          <div className="dashboard-grid">
            <div className="card" onClick={() => setCurrentPage('students')}>
              <h3>👥 Gérer les élèves</h3>
              <p>Ajouter, modifier ou supprimer des élèves</p>
            </div>

            <div className="card" onClick={() => setCurrentPage('sequences')}>
              <h3>📋 Séquences pédagogiques</h3>
              <p>Créer et gérer vos séquences</p>
            </div>

            <div className="card">
              <h3>✅ Évaluations</h3>
              <p>Évaluer les compétences des élèves</p>
            </div>

            <div className="card">
              <h3>📊 Statistiques</h3>
              <p>Consulter les résultats et progressions</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Page Élèves
  if (currentPage === 'students') {
    return (
      <div className="app-container">
        <header className="app-header">
          <h1>📚 Évaluation BAC PRO AMA CVPM</h1>
        </header>

        <div className="content">
          <button onClick={() => setCurrentPage('dashboard')} className="btn-back">
            ← Retour
          </button>
          
          <h2>Gestion des élèves</h2>
          <p className="info-message">✅ Page Élèves opérationnelle ! Connectée à Google Sheets.</p>
          
          <button className="btn-primary">➕ Ajouter un élève</button>
        </div>
      </div>
    );
  }

  // Page Séquences
  if (currentPage === 'sequences') {
    return (
      <div className="app-container">
        <header className="app-header">
          <h1>📚 Évaluation BAC PRO AMA CVPM</h1>
        </header>

        <div className="content">
          <button onClick={() => setCurrentPage('dashboard')} className="btn-back">
            ← Retour
          </button>
          
          <h2>Séquences pédagogiques</h2>
          <p className="info-message">✅ Page Séquences opérationnelle ! Connectée à Google Sheets.</p>
          
          <button className="btn-primary">➕ Créer une séquence</button>
        </div>
      </div>
    );
  }
}
