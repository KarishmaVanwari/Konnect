import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Masonry from 'react-masonry-css'
const axios=require('axios')

const Feed = ()=>{
  const [feed,setFeed]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:5000/feed")
           .then((response) => setFeed(response.data))
  },[])



    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
      };
      
      // Convert array to JSX items
      let items = feed.map(function(item) {
        return <div key={item.id}>Name:{item.name} Article:{item.article}</div>
      });

      return(
        <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {items}
        
      </Masonry>
      );
      
      
}


export default Feed;