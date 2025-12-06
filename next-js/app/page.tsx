import Image from 'next/image'
import TodoList from './components/todo-list'

export default function Home() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <TodoList />
    </div>
  )
}
