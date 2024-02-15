import LeftMenu from '@/components/shared/LeftMenu'
import ShippingReportForm from '@/components/shared/ShippingReportForm'



const ShippingReport = () => {
  return (
    <div className="flex">
      <LeftMenu />
      <div>
        <ShippingReportForm />
      </div>
    </div>
  )
}

export default ShippingReport
