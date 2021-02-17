import React, {useState} from 'react';
import './App.css';
import data from './data';
import List from './components/List';


function App() {
  const [student, setStudent] = useState(data);
  return (
    <main>
      <section className="container App-header">
        <h2>Attendance List for {student.length} student</h2>
        <div className="content">
        <List student={student}/>
        </div>
       
        <button onClick = {() => setStudent([])}>Clear list</button>
      </section>
    </main>
  );
}

export default App;
