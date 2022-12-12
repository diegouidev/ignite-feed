import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from '../Avatar'
import styles from './Comment.module.css'

export function Comment({ name }) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src='https://github.com/diegouidev.png' />
    
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Coelho</strong>
              <time title='11 de maio às 08h:13' dateTime='2022-07-12 10:20:00'>Cerca de 1h atrás</time>
            </div>
            <button title='Deletar comentários'>
              <Trash size={20} />
            </button>
          </header>
          <p>{name}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}