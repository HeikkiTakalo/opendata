function App() {

  async function getData() {
    const response = await fetch('https://yesno.wtf/api');
    const jsonBody = await response.json()
    console.log(jsonBody.answer);
  }

  function getData2() {
    fetch('https://yesno.wtf/api')
      .then(resp => resp.json()
        .then(json => console.log(json.answer))
      )
  }

  return (
    <div>
      <button onClick={getData}>OK</button>
    </div>
  )
}



export default App
