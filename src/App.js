import './App.css';
import { RecoilRoot } from 'recoil'
import { ListaTodo } from './components/todo-list'

function App() {
  return (
    <RecoilRoot>
      <ListaTodo/>
    </RecoilRoot>
  );
}

export default App;
