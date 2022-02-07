import axios from 'axios';
import React from 'react';
import {Switch,Route,Link} from "react-router-dom";

const urlApi=`http://localhost:5000/getData`;

export default function AppApi() {

    const [post, setPost] = React.useState(null);
    
    React.useEffect(() => {
        axios.get(urlApi)
                // .then(response => setPost(response.data.total));
                .then(response => setPost(response.data.total))
                .catch(console.log);

    }, []);

    if (!post) return null;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
