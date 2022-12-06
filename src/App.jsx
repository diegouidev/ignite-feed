import { Header } from './components/Header'
import { Post } from './Post'

export function App() {
  return (
    <>
      <h1>Hello world</h1>
      <Post
        author="Diego Colelho"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos et esse est corrupti quaerat quas labore voluptas laudantium iste nam ipsum delectus enim quisquam impedit explicabo, ullam quod eos quasi."
      />
     <Post
        author="Rene Coutinho"
        content="Lorem ipsum dolor sit."
      />
      <Header />
    </>
  )
}
