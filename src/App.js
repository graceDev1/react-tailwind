import React, {useState, useEffect} from 'react';
import ImageCard from './components/imageCard';
import ImageSearch from './components/imageSearch';


function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=${process.
    env.REACT_APP_PIXABAY_API_KEY}&q=${term}+flowers&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits);
      setIsLoading(false);
    })
    .catch(err => console.log(err));
    
  },[term]);
  return (
    <div className="container mx-auto">
      <ImageSearch searchText={(text) => setTerm(text)}/>

      {!isLoading && images.length === 0 && <h1 className="text-6xl text-center mxa-auto mt-32">No Images Found...</h1>}
      
      {isLoading ? <h1 className="text-6xl text-center mxa-auto mt-32">Loading....
      </h1> :<div className="grid grid-cols-3 gap-4">
        {images.map(images=> (
          <ImageCard key={images.id} images={images}/>
        ))}
        
      </div>}
    </div>
  );
}

export default App;
