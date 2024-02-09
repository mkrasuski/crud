import './site.css'
import styles from './App.module.css'
import Table from './Table'
import Details from './Details'

export default function Crud() {

  return (
    <div className={styles.Crud}>
      <Table />
      <Details />
    </div>
  )
}

