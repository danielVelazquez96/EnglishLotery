import axios from 'axios';
import React from 'react';

const urlApi=`http://localhost:5000/getData`;

export default function AppApi() {

    // const [post, setPost] = React.useState(null);
    let data;
    React.useEffect(() => {
        axios.get(urlApi)
                // .then(response => setPost(response.data.total));
                .then(response => {
                  // console.log(response.data);
                  data=response.data;
                  console.log(data);
                })
                .catch(console.log);

    }, []);

    // if (!data) return null;

  return (
    <div>
      <h1>{data}</h1>

    </div>
  );
}
