import Image from 'next/image'
import TodoList from './components/todo-list'
import Data from './components/fetch-api'

export default function Home() {
  return (
    <div className='w-full'>
      {/* <TodoList /> */}
      <Data />
    </div>
  )
}
