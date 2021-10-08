import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { RootState } from './redux';
import { getUser } from './redux/ducks/user'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  const user = useSelector((state: RootState) => state.user)
  return (
    <div className="App">
      Hello, {user.name}
    </div>
  );
}

export default App;
