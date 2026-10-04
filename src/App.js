import './App.css';

function App() {
  return (
    <div className="portfolio-container">
      {/* Top Navigation */}
      <nav className="navbar">
        <div className="nav-icons">
          <span>▣</span> <span>✕</span> <span>◎</span>
        </div>
        <button className="contact-btn">Contact</button>
      </nav>

      {/* Hero Section matching the reference */}
      <section className="hero">
        {/* Giant background text. You can change "DAN" to your preference */}
        <h1 className="hero-text">DAN</h1>
        
        {/* Slanted orange ticker tape */}
        <div className="ticker-tape">
          <div className="ticker-text">
            <span>CSIT340 Portfolio • Web Application Development • Dashboard Interface • CSIT340 Portfolio • Web Application Development • Dashboard Interface • </span>
            <span>CSIT340 Portfolio • Web Application Development • Dashboard Interface • CSIT340 Portfolio • Web Application Development • Dashboard Interface • </span>
          </div>
        </div>

        {/* Circular Profile Picture Placeholder */}
        <div className="profile-pic-container">
           <div className="profile-pic-placeholder">
              {/* This SVG creates a simple profile icon silhouette */}
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="50" fill="#333"/> {/* Dark circle background */}
                <circle cx="50" cy="40" r="18" fill="#aaa"/> {/* Head shape */}
                <path d="M50 63.5C28.5 63.5 16.5 76 16.5 76V82C16.5 82 23.5 87 50 87C76.5 87 83.5 82 83.5 82V76C83.5 76 71.5 63.5 50 63.5Z" fill="#aaa"/> {/* Shoulders */}
              </svg>
           </div>
        </div>
      </section>
      
      {/* Original Portfolio Content */}
      <main className="content-section">
        <header className="content-header">
          <h2>Dan Erik Fernandez Dalapo</h2>
          <h3>CSIT340 Portfolio</h3>
        </header>
        
        <section>
          <h3>About Me</h3>
          <p>
            Welcome to my portfolio! I am a student developer currently exploring 
            web application development and modern tech solutions.
          </p>
        </section>
        
        <section>
          <h3>Recent Projects</h3>
          <ul>
            <li><strong>Dashboard Interface:</strong> Updated UI components including settings and logout functionality.</li>
            <li><strong>Urban Pods:</strong> Developed a business model and pitch presentation for a vertical hydroponics farming product.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;