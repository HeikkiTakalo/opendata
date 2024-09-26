import {useState} from "react";
import axios from "axios";



function App() {


  const [img, setImg] = useState(null);

  async function getData() {
    const response = await axios('https://yesno.wtf/api');
    const data = response.data;
    setImg(data.iamge);
  }

  return (
    <div>
      <button onClick={getData}>OK</button>
      <img src={img}/>
    </div>
  )
}



export default App
