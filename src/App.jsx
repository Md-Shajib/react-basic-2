
import './App.css'
import './css/button.css';
import Counter from './components/Counter';
import Users from './components/Users';
import Friends from './components/Friends';

function App() {

  function handleClick(){
    alert('Clicked Me');
  }

  const handleClick2 = () => {
    alert('Clicked me 2');
  }

  function handleClick4(num) {
    alert(num + 5);
  }

  return (
    <>
      <h3>Vite + React</h3>
      <Friends></Friends>
      <Counter></Counter>
      <button onClick={handleClick} className='button'>Click Me</button>
      <button onClick={handleClick2} className='button'>Click Me 2</button>
      <button onClick={() => alert('Clicked Me 3')} className='button'>Click Me 3</button>

      <button onClick={()=>handleClick4(10)} className='button'>Click Me 4</button>

      <Users></Users>
    </> 
  )
}

export default App
