import LeftMenu from '@/components/shared/LeftMenu'
import ItemsTable from '@/components/shared/ItemsTable'


const ItemsHome = () => {
  return (
    <div className="flex">
      <LeftMenu />
      <div>
        <div className="h2-semibold" style={{ marginLeft: '40px', marginTop: '50px' }}>Items to Package
        <ItemsTable />
        </div>
        
      </div>
    </div>
  )
}

export default ItemsHome
