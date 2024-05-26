import { list } from 'postcss';
import NewTask from './NewTask';
import { useLayoutEffect } from 'react';

export default function Tasks({onAddTask, onDeleteTask, tasks}) {
    console.log(tasks)
    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <NewTask onAddTask={onAddTask}/>
{/* --------------------------------------------------------------------------------------------------------- */}
            {tasks.length === 0 && (
            <p className="text-stone-800 my-4">This project does not have any tasks yet</p>
            )}
{/* ------------------------------------------------------------------------------------------------ */}
            
            {tasks.length > 0 && <ul className="p-4 mt-8 rounded-md bg-stone-100">
                {tasks.map((task) => <li key={task.id} className="flex justify-between my-4">
                    <span>
                        {task.text}
                    </span>
                    <button onClick={() => onDeleteTask(task.id)} className="text-stone-700 hover:text-red-500">CLEAR TASK</button>
                </li>)}
            </ul>}

            




{/* ------------------------------------------------------------------------------------------------ */}
        </section>
    )
}