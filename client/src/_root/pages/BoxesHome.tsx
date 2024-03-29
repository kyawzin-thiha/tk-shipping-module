import LeftMenu from '@/components/shared/LeftMenu'
import BoxesTable from '@/components/shared/BoxesTable'


const BoxesHome = () => {
  return (
    <div className="flex">
      <LeftMenu />
      <div>
        <BoxesTable />
      </div>
    </div>
  )
}

export default BoxesHome
