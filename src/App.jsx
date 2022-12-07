import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Post } from './Post'

import styles from './App.module.css'
import './global.css'

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author='Diego Coelho'
            content='lorem ipsum'
          />
        </main>
      </div>
    </>
  )
}
