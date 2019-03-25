import React, {useState} from 'react'

function Counter() {
  const [counter, setCounter] = useState(0)

  return <button onClick={() => setCounter(counter + 1)}>{counter}</button>
}

// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.

function Usage() {
  return <Counter />
}
Usage.title = 'Counter: useState'

export default Usage
