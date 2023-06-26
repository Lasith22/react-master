import React, { useState, useEffect } from 'react';

const Search = () => {
  const Animals = ['pakaya', 'wputha', 'lariballo', 'cat', 'dog'];
  const [location, setLocation] = useState(' ');
  const [animal, setAnimal] = useState('');
  const [breed, setBreed] = useState('');
  const [pets, setPets] = useState('');

  const breeds = ['Poodle'];

  useEffect(() => {});
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          <input
            id="location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            placeholder="Location"
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            name=""
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed('');
            }}
          >
            <option />
            {Animals.map((animals) => (
              <option key={animals}>{animals}</option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select
            name=""
            id="breed"
            disabled={breeds.length === 0}
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>
        <button>submit</button>
        <button>submit</button>
        <button>submit</button>
      </form>
    </div>
  );
};

export default Search;
