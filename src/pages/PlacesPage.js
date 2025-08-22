import React, { useState, useMemo } from 'react';
import { Search, Filter, Grid, List } from 'lucide-react';
import { touristPlaces, categories, provinces } from '../data/touristPlaces';
import PlaceCard from '../components/PlaceCard';
import './PlacesPage.css';

const PlacesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProvince, setSelectedProvince] = useState('All Provinces');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);

  const filteredPlaces = useMemo(() => {
    return touristPlaces.filter((place) => {
      const matchesSearch = place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           place.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           place.location.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || place.category === selectedCategory;
      
      const matchesProvince = selectedProvince === 'All Provinces' || place.location === selectedProvince;
      
      return matchesSearch && matchesCategory && matchesProvince;
    });
  }, [searchTerm, selectedCategory, selectedProvince]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleProvinceChange = (e) => {
    setSelectedProvince(e.target.value);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="places-page">
      <div className="places-header">
        <div className="container">
          <h1 className="page-title">Explore Sri Lankan Destinations</h1>
          <p className="page-description">
            Discover {touristPlaces.length} amazing places across the beautiful island of Sri Lanka
          </p>
        </div>
      </div>

      <div className="container">
        {/* Search and Filter Controls */}
        <div className="controls">
          <div className="search-bar">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Search places, locations, or descriptions..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
            />
          </div>
          
          <div className="filter-controls">
            <button 
              className="filter-toggle"
              onClick={toggleFilters}
            >
              <Filter className="filter-icon" />
              Filters
            </button>
            
            <div className="view-controls">
              <button
                className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
              >
                <Grid className="view-icon" />
              </button>
              <button
                className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
              >
                <List className="view-icon" />
              </button>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className={`filters ${showFilters ? 'filters-open' : ''}`}>
          <div className="filter-group">
            <label htmlFor="category-filter">Category:</label>
            <div className="category-buttons">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="filter-group">
            <label htmlFor="province-filter">Province:</label>
            <select
              id="province-filter"
              value={selectedProvince}
              onChange={handleProvinceChange}
              className="province-select"
            >
              {provinces.map((province) => (
                <option key={province} value={province}>
                  {province}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results */}
        <div className="results-info">
          <p>Showing {filteredPlaces.length} of {touristPlaces.length} places</p>
        </div>

        {/* Places Grid/List */}
        <div className={`places-container ${viewMode}`}>
          {filteredPlaces.length > 0 ? (
            filteredPlaces.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))
          ) : (
            <div className="no-results">
              <h3>No places found</h3>
              <p>Try adjusting your search terms or filters to find more places.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlacesPage;
