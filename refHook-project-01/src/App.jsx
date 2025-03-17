import { useState, useRef, useEffect } from 'react';

const App = () => {

  const [controlValue, setControlValue] = useState('')
  const unControlValue = useRef('')

  function control(e) {
    setControlValue(e.target.value)
  }

  function button() {
    console.log(unControlValue.current.value)
  }

  useEffect(() => {
    unControlValue.current.focus()
  }, [])

  return (
    <>
      <button onClick={button}>Click</button>
      <form>
        <div>
          <div>
          </div>
          <div>
            <label>
              controlled Input:
              <input onChange={control} type='text' />
            </label>
          </div>
          <div>
            <label>
              uncontrolled Input:
              <input ref={unControlValue} type='text' />
            </label>
          </div>
        </div>
        <div>
          <label>
            <p>controlled outPut: {controlValue}</p>
          </label>
        </div>
      </form>
    </>
  );
};

export default App;
