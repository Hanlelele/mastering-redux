import { useState } from "react";
import Joke from "./Joke";
import Stories from "./Stories";
import Tasks from "./Tasks";
import Gallery from "./Gallery";
import Matrix from "./Matrix";

function App() {
  const [userQuery, setUserQuery] = useState('');
  const [showGallery, setShowGallery] = useState(true);

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, '_blank');
  }

  const handleKeyPress = event => {
    if(event.key === 'Enter') {
      searchQuery();
    }
  }

  const updateUserQuery = (event) => {

    setUserQuery(event.target.value);
    console.log('userQuery', userQuery);
    console.log('userQuery1', event.target.value);
    
  }
  
  const toggleShowGallery = () => {
    setShowGallery(!showGallery);
  }

  return (
    <div className="App">
      <h1>Hello Hanle</h1>
      <div className="form">
        <input 
          value={userQuery} 
          onChange={updateUserQuery}
          onKeyDown={handleKeyPress}
        />
        <button onClick={searchQuery}>Search</button>
      </div>
      <hr />
      <Joke />
      <hr />
      <Tasks />
      <hr />
      <div>
        {
          showGallery ?  <Gallery /> : null
        }
        <button onClick={toggleShowGallery}>
          {showGallery ? 'Hide' : 'Show'} Gallery
        </button>
      </div>
      <hr />
      <Stories />
      <hr />
      <Matrix />
    </div>
  );
}

export default App;
