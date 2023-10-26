import Image from 'next/image'
import styles from './page.module.css'
import Rest from './Rest'
import Text from './data/Text'
import Card from './data/Card'
import Text2 from './data/Text2'
import Card2 from './data/Card2'

export default function Home() {
  
  return (
    <main className={styles.main}>
   <Rest/>
   <Text/>
   <Card/>
   <Text2/>
   <Card2/>
    </main>
  )
}
