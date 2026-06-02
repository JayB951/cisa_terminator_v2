import "./App.css";

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>CISA TERMINATOR</h1>
      </header>

      <nav className="topbar">
        <button>Tanulás</button>
        <button>Tesztelés</button>
        <button>Statisztika</button>

        <div className="spacer" />

        <button>MENTÉS</button>
      </nav>

      <main className="layout">
        <aside className="left-panel">
          <h2>Források</h2>

          <ul>
            <li>Review</li>
            <li>QBank</li>
            <li>Progress</li>
          </ul>
        </aside>

        <section className="center-panel">
          <h2>PDF Viewer</h2>
        </section>

        <aside className="right-panel">
          <h2>Tanulási eszközök</h2>

          <ul>
            <li>Summary</li>
            <li>Definitions</li>
            <li>Cheat Sheet</li>
            <li>Mind Map</li>
            <li>Flash Cards</li>
          </ul>
        </aside>
      </main>

      <footer className="statusbar">
        Aktív forrás / Domain / Oldal
      </footer>
    </div>
  );
}
