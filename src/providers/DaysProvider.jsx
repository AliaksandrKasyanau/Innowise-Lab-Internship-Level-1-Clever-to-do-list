import React, { createContext, useState } from 'react'
import { format } from 'date-fns'
export const TodosContext = createContext()
export const DaysContext = createContext()
const today = format(new Date(), 'dd MMMM yyyy')

const DaysProvider = (props) => {
  const [day, setDay] = useState(today)
  let [todo, setTodo] = useState(null)

  return (
    <DaysContext.Provider value={[day, setDay]}>
      <TodosContext.Provider value={[todo, setTodo]}>
        {props.children}
      </TodosContext.Provider>
    </DaysContext.Provider>
  )
}

export default DaysProvider
