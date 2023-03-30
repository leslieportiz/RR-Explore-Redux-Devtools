import React, { Fragment, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, removeOne, clearTodos } from './features/todoSlice'

function Todo() {
    const items = useSelector(state => state.todo.items)
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    const renderItems = items.map((item, index) => <li key={index} onClick={() => dispatch(removeOne(index))}>{item}</li>)

    // const submitForm = (e) => {
    //     e.preventDefault()
    //     dispatch(addTodo(input))
    // }
    function handleSubmit(e) {
        e.preventDefault()
        dispatch(addTodo(input))
    }

    return (
        // <div>
        //     <form onSubmit={(e) => submitForm(e)}>
        //         <input type="text" onChange={(e) => setInput(e.target.value)} />
        //         <button type="submit">Submit</button>
        //     </form>
        //     <ul>
        //         {renderItems}
        //     </ul>
        //     <button onClick={() => dispatch(clearTodo())}>Clear</button>
        // </div>
        <div>
        <form onSubmit={handleSubmit}>
            <input value={input} onChange={e => setInput(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>
        <ul>
            {
                items.map((item, i) => {
                    return <Fragment key={i}>
                        <li>{item}</li>
                        <button onClick={() => dispatch(removeOne(i))}>Delete</button>
                    </Fragment>
                })
            }
        </ul>
        <button onClick={() => dispatch(clearTodos())}>Clear Todos</button>
    </div>
    )
}

export default Todo
