import LeftMenu from '@/components/shared/LeftMenu'
import ItemsTable from '@/components/shared/ItemsTable'


const ItemsHome = () => {
  return (
    <div className="flex">
      <LeftMenu />
      <div>
        <ItemsTable />
      </div>
    </div>
  )
}

export default ItemsHome
