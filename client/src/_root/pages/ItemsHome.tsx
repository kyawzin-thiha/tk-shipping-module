import LeftMenu from '@/components/shared/LeftMenu'
import ItemsTable from '@/components/shared/ItemsTable'
import { Input } from "@/components/ui/input";

const ItemsHome = () => {
  return (
    <div className="flex">
      <LeftMenu />
      <div>
        <div className="container">
              <div className="header-form-container">
                  <h2 className="h2-semibold">Items to Package</h2>
                  <p className="text-gray-500 mt-2">
                    Import items from ShopVox by entering the Sale Order #: 
                  </p>
              </div>
              <div className="form-container">
                <div className="form-input-row">
                    <div className="flex items-center">
                        <label htmlFor="item-name" className="block text-sm font-medium text-gray-700 mb-4 mr-3">SO #:</label>
                        <div className="col-span-1 input-style-modal">
                            <Input id="item-name" type="text"/>
                        </div>
                    </div>
                </div>
            </div>

        </div>    
        <ItemsTable />
      </div>
    </div>
  )
}

export default ItemsHome
