import { Outlet } from 'react-router-dom'
import DrawerMenu from '../../components/DrawerMenu'

const MainLayout = () => {
  return (
    <div>
      <DrawerMenu />
      <main className='p-4'>
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout
