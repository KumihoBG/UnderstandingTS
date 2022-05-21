import { useState } from 'react';
import List from './components/List/List';
import AddToList from './components/AddToList/AddToList';
import './App.css';

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: 'John',
      age: 30,
      url: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880',
      note: "I will be coming at 8 o'clock"
    }
  ]);

  return (
    <div className="App">
      <h1>People invited to my Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
