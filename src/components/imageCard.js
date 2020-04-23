import React from 'react';

export default function ImageCard({ images }){
    const tags = images.tags.split(',');
    return(
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={images.webformatURL} alt="" className="w-full"/>
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 mb-2">
          Photo by {images.user}
        </div>
        <ul>
    <li>Views: {images.views}</li>
        </ul>
        <ul>
    <li>Download: {images.downloads}</li>
        </ul>
        <ul>
          <li>Likes: {images.likes}</li>
        </ul>
      </div>
      <div className="px-6 py-4">
      
      {tags.map((tag, index)=> (
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #{tag}
        </span>
      ))}
      </div>
     
    </div>
    );
}