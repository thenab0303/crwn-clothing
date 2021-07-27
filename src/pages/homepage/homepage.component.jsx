
import { Link } from 'react-router-dom'
import Directory from '../../Components/directory/directory.components'
import './homepage.styles.scss'

export const HomePage = () => (
    <div className='homepage'>
        <Link to='/shop'>Shop Page</Link>
        <Directory/>
    </div>
)