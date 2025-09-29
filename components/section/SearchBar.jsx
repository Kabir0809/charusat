// components/SearchBar.jsx
import React, { useRef, useEffect } from 'react';

const SearchBar = ({
  searchQuery,
  setSearchQuery,
  searchResults,
  showSearchResults,
  setShowSearchResults,
  handleSearch,
  clearSearch,
  inputRef,
  searchRef
}) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [searchRef, setShowSearchResults]);

  return (
    <div className="relative z-50" ref={searchRef}>
      {/* Search Toggle Button */}
      <button
        onClick={() => setShowSearchResults(!showSearchResults)}
        className="fixed-search-btn"
        aria-label="Search CHARUSAT"
      >
        <i className="icofont-search-1"></i>
      </button>

      {/* Search Dropdown */}
      <div className={`search-dropdown ${showSearchResults ? 'show' : ''}`}>
        <form onSubmit={handleSearch} className="p-3">
          <div className="search-input-wrapper">
            <i className="icofont-search-1 search-icon"></i>
            <input
              ref={inputRef}
              type="text"
              placeholder="Search courses, facilities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
              autoFocus
            />
            {searchQuery && (
              <button
                type="button"
                onClick={clearSearch}
                className="clear-button"
                aria-label="Clear search"
              >
                <i className="icofont-close-line"></i>
              </button>
            )}
          </div>
        </form>

        {/* Search Results */}
        {searchResults.length > 0 ? (
          <div className="results-container">
            <div className="results-count">
              Found {searchResults.length} results
            </div>
            <ul className="results-list">
              {searchResults.map((result) => (
                <li key={result.key} className="result-item">
                  <button
                    onClick={() => {
                      handleSearch(null, result.path, result.id);
                      setShowSearchResults(false);
                    }}
                    className="result-button"
                  >
                    <i className="icofont-arrow-right result-arrow"></i>
                    <span className="result-label">{result.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : searchQuery ? (
          <div className="no-results">
            <i className="icofont-search-1 no-results-icon"></i>
            <p className="no-results-text">No results found for "{searchQuery}"</p>
          </div>
        ) : null}
      </div>

      <style jsx>{`
        /* Search Button */
        .fixed-search-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem;
          border-radius: 9999px;
          color: #1a56db;
          background: white;
          transition: all 0.2s;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .fixed-search-btn:hover {
          background: #EBF5FF;
          color: #1E429F;
        }

        .fixed-search-btn i {
          font-size: 1.25rem;
        }

        /* Search Dropdown */
        .search-dropdown {
          position: absolute;
          right: 0;
          margin-top: 0.75rem;
          width: min(32rem, calc(100vw - 2rem));
          background: white;
          border-radius: 0.75rem;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          border: 1px solid #e5e7eb;
          overflow: hidden;
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px);
          transition: all 0.2s;
          z-index: 50;
        }

        .search-dropdown.show {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        /* Search Input */
        .search-input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          transition: all 0.2s;
        }

        .search-input-wrapper:focus-within {
          background: white;
          border-color: #93c5fd;
          box-shadow: 0 0 0 3px rgba(147, 197, 253, 0.25);
        }

        .search-icon {
          position: absolute;
          left: 0.875rem;
          color: #1a56db;
          font-size: 1rem;
        }

        .search-input {
          width: 100%;
          padding: 0.75rem 2.5rem;
          font-size: 0.875rem;
          background: transparent;
          border: none;
          outline: none;
        }

        .clear-button {
          position: absolute;
          right: 0.5rem;
          padding: 0.375rem;
          color: #64748b;
          border-radius: 9999px;
          transition: all 0.2s;
        }

        .clear-button:hover {
          background: #f1f5f9;
          color: #475569;
        }

        /* Results */
        .results-container {
          padding: 0.5rem 0;
        }

        .results-count {
          padding: 0.5rem 1rem;
          font-size: 0.75rem;
          color: #64748b;
          font-weight: 500;
        }

        .results-list {
          max-height: 400px;
          overflow-y: auto;
        }

        .result-item {
          border-bottom: 1px solid #f1f5f9;
        }

        .result-button {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          text-align: left;
          transition: all 0.2s;
        }

        .result-button:hover {
          background: #EBF5FF;
        }

        .result-arrow {
          font-size: 0.75rem;
          color: #1a56db;
          opacity: 0;
          transition: opacity 0.2s;
        }

        .result-button:hover .result-arrow {
          opacity: 1;
        }

        .result-label {
          font-size: 0.875rem;
          color: #1f2937;
        }

        /* No Results */
        .no-results {
          padding: 2rem;
          text-align: center;
        }

        .no-results-icon {
          font-size: 2rem;
          color: #94a3b8;
          margin-bottom: 0.5rem;
        }

        .no-results-text {
          font-size: 0.875rem;
          color: #64748b;
        }

        /* Mobile Responsiveness */
        @media (max-width: 640px) {
          .search-dropdown {
            position: fixed;
            top: 1rem;
            left: 1rem;
            right: 1rem;
            margin: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default SearchBar;
