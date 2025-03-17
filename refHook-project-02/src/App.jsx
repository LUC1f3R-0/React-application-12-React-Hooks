import React, { useEffect, useState } from 'react'

const App = () => {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  function insertTime(e) {
    setTime(e.target.value)
  }

  useEffect(() => {
    if (!isRunning) return
    const time = setInterval(() => {
      setTime(prev => prev - 1)
    }, 1000)
    return (() => clearInterval(time))
  })

  function start() {
    setIsRunning(true)
  }

  function pause() {
    setIsRunning(false)
  }

  function reset() {
    setTime(0)
  }

  return (
    <div>
      <div>
        <label>
          set the time:
        </label>
        <input type='number' onChange={insertTime} />
      </div>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
      <div>{time}</div>
    </div>
  )
}

export default App
