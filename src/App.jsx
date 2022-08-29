import React, {useRef} from 'react';
function App() {


  const dataRef = useRef('')
  const dataArray = []

  window.addEventListener('keydown',function (){
    if (event.which === 13 && dataRef.current.value.length >= 1){
      dataArray.push(
          {
            id:dataArray.length,
            title:dataRef.current.value
          }
      )
      console.log(dataArray)
      dataRef.current.value = ""
    }
  })
  return (
      <input type="text" className={'form-text'} ref={dataRef}/>
  );
}

export default App;