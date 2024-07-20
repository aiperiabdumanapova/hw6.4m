import "./form.css";
import { useState } from "react";

const TodoForm = ({ data, setData, status, setStatus }) => {
    const [text, setText] = useState('');

    const addTodo = () => {
        if (text.trim() === '') return; 

        setData([
            {
                completed: false,
                important: false,
                deleted: false,
                correct: false,
                id: data.length > 0 ? data[0].id + 1 : 1,
                text,
            },
            ...data.map(item => ({
                ...item,
                correct: false,
            })),
        ]);
        setText('');
        setStatus('all');
    };

    return (
        <div className="todo-form">
            <input
                type="text"
                placeholder="Enter todo"
                value={text}
                onChange={e => setText(e.target.value)}
                disabled={status === 'trash'}
                autoFocus={true}
                onKeyDown={e => {
                    if (e.keyCode === 13) {
                        addTodo();
                    }
                }}
            />
            {status !== 'trash' && (
                <button onClick={addTodo}>add</button>
            )}
        </div>
    );
};

export default TodoForm;
