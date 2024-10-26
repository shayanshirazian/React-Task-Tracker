import React, {useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';


const App = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctors Appoinment',
            day: 'Feb 5th at 2:30pm',
            reminder: true
        },
        {
            id: 2,
            text: 'Meeting at School',
            day: 'Feb 6th at 1:30pm',
            reminder: true
        },
        {
            id: 3,
            text: 'Food Shopping',
            day: 'Feb 7th at 2:30pm',
            reminder: false
        }
    ]);

    //Delete Task
    const deleteTask = (id: number) => {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    return (
        <div className="container">

            <Header/>
            {tasks.length > 0 ?
                < Tasks tasks={tasks}
                        onDelete={deleteTask}/>
                :
                'No tasks found.'}
        </div>
    );
}

export default App;
