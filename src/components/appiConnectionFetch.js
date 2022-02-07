
  

const AppApiFetch=async()=>{
  const urlCRUD=`http://localhost:5000/getData`;
  fetch(urlCRUD).then(res=>console.log(res));
  // Obtener la informacion json
  const {data}= await resp.json();

    console.log(data);
  // return data;

  
}

AppApiFetch();

export default AppApiFetch