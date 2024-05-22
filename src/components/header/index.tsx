import Link from "next/link"
import styles from '@/components/header/header.module.css'

export default function Header(){
    return(
        <div className={styles.header}>
            <h1>Componente Header do site!</h1>
            <Link href= '/'>HOME</Link><br />
            <Link href= '/contatos'>Contatos</Link><br />
            <Link href= 'repositorio'>Repositorio</Link><br />
            <br />
            <hr />

        </div>
    )
}