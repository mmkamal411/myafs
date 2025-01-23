import React, { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const SearchBar = ({ onSearch, placeholder = 'Search...' }: SearchBarProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  const handleClear = () => {
    setSearchQuery('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleFocus = () => {
    setIsExpanded(true);
    setIsFocused(true);
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-3xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className={`relative transition-all duration-300 ease-out transform ${
          isExpanded ? 'scale-105' : 'scale-100'
        }`}
      >
        <div
          className={`relative flex items-center w-full bg-light-100 rounded-xl overflow-hidden transition-all duration-300 ${
            isFocused ? 'ring-2 ring-accent-500 shadow-lg' : 'hover:shadow-md'
          }`}
        >
          <button
            type="button"
            onClick={() => setIsExpanded(true)}
            className={`flex items-center justify-center min-w-[44px] h-11 transition-colors ${
              isExpanded ? 'text-light-400' : 'text-light-700 hover:text-accent-600'
            }`}
            aria-label={isExpanded ? 'Search' : 'Open search'}
            aria-expanded={isExpanded}
          >
            <Search className={`w-5 h-5 transition-transform duration-300 ${
              isFocused ? 'scale-110' : 'scale-100'
            }`} />
          </button>

          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={handleFocus}
            placeholder={placeholder}
            className={`w-full h-11 bg-transparent text-light-900 placeholder-light-500 focus:outline-none transition-all duration-300 ${
              isExpanded 
                ? 'pr-10 opacity-100 translate-x-0' 
                : 'w-0 px-0 opacity-0 -translate-x-4'
            }`}
            aria-label="Search input"
          />

          {searchQuery && (
            <button
              type="button"
              onClick={handleClear}
              className={`absolute right-2 p-2 text-light-400 hover:text-light-600 rounded-lg transition-all duration-300 ${
                searchQuery ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </form>

      {/* Search Results Dropdown */}
      {isExpanded && searchQuery && (
        <div 
          className={`absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-light-200 overflow-hidden transition-all duration-300 transform ${
            searchQuery ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <div className="p-2 text-sm text-light-500">
            Start typing to see search results...
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;