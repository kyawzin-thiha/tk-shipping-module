import LeftMenu from '@/components/shared/LeftMenu'
import DeliveryTable from '@/components/shared/DeliveryTable'


const DeliveryHome = () => {
  return (
    <div className="flex">
      <LeftMenu />
      <div>
        <DeliveryTable />
      </div>
    </div>
  )
}

export default DeliveryHome
