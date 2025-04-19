import React, { useState } from 'react';
// import './Navigation.css'; // Make sure this CSS file includes the styles we discussed

const Navigation = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = (event) => {
    if (event.key === 'Enter' && searchTerm.trim() !== '') {
      highlightAndScroll(searchTerm);
      setSearchTerm('');
      setMenuOpen(false); // close nav after search
    } else if (event.key === 'Escape') {
      removeHighlights();
      setSearchTerm('');
    }
  };

  const highlightAndScroll = (word) => {
    removeHighlights();
    const regex = new RegExp(`(${word})`, 'gi');
    let firstMatch = null;

    function wrapTextNodes(node) {
      if (node.nodeType === 3) {
        const match = node.nodeValue.match(regex);
        if (match) {
          const span = document.createElement('span');
          span.innerHTML = node.nodeValue.replace(
            regex,
            `<mark class="highlight temp-highlight">$1</mark>`
          );
          node.replaceWith(span);

          if (!firstMatch) {
            firstMatch = span.querySelector('.highlight');
          }
        }
      } else {
        node.childNodes.forEach(wrapTextNodes);
      }
    }

    document.body.childNodes.forEach(wrapTextNodes);

    if (firstMatch) {
      firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    setTimeout(() => {
      document.querySelectorAll('.temp-highlight').forEach((el) => {
        el.classList.remove('temp-highlight');
      });
    }, 1000);
  };

  const removeHighlights = () => {
    document.querySelectorAll('.highlight').forEach((el) => {
      el.replaceWith(...el.childNodes);
    });
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav id="nav">
      {/* <div className="branding-mobile"> */}
        <span id='branding-mobile-header'>iprakhar25</span>
        {/* <span id='branding-mobile-subheader'>software developer</span> */}
      {/* </div> */}
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
        ☰
      </button>
      <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        <li><a href="#aboutme" onClick={closeMenu} aria-label="About me">about me</a></li>
        <li><a href="#work" onClick={closeMenu} aria-label="Projects">projects</a></li>
        <li><a href="#contact" onClick={closeMenu} aria-label="Contact">contact</a></li>
        <li>
          <input
            type="text"
            id="searchBar"
            placeholder="search here.."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearch}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
