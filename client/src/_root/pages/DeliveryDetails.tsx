import LeftMenu from '@/components/shared/LeftMenu'
import DeliveryTableInside from '@/components/shared/DeliveryTableInside'
import DeliveryFormInside from '@/components/shared/DeliveryFormInside'
import { Button } from "@/components/ui/button"
import { useState } from 'react';
import SelectShipping from '@/components/modals/SelectShipping';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

const DeliveryDetails = () => {

  const [isDialogOpen, setDialogOpen] = useState(false);

  const toggleDialog = () => {
    setDialogOpen(!isDialogOpen);
  };

  return (
    <div className="flex">
      <LeftMenu />
      <div>
        <div className="container" style={{ marginBottom: 0 }}>
          <div className="header-container">
            <h2 className="h2-semibold">Delivery #12345</h2>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button className="grey-button" style={{ marginRight: "auto" }}>
              <img src="/assets/icons/arrow-left-solid.svg" alt="arrow" className="plus-icon" />
              See all Deliveries
            </Button>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Button className="purple-button" style={{ marginRight: "10px" }} onClick={toggleDialog}>
                <img src="/assets/icons/truck-fast-solid.svg" alt="arrow" className="plus-icon" />
                Shipping Label
              </Button>
              {isDialogOpen && <SelectShipping onClose={toggleDialog} />}
              <Button className="li-blue-button" style={{ marginRight: "10px" }}>
                <img src="/assets/icons/print-solid.svg" alt="arrow" className="button-icon" />
                Delivery Report
              </Button>
              <Button className="blue-button">
                <img src="/assets/icons/print-solid.svg" alt="arrow" className="button-icon" />
                BLIND Delivery Report
              </Button>
            </div>
          </div>
        </div>  
        <DeliveryFormInside />
        <DeliveryTableInside />
        <div className="container" style={{ marginBottom: 80 }}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button className="danger-button" style={{ marginRight: "10px" }}>
                    <img src="/assets/icons/ban-solid.svg" alt="arrow" className="button-icon" />
                    Cancel Delivery
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="custom-alert-dialog">
                    <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        <b>Canceling deliveries</b> cannot be undone. <br/><br/> This will permanently delete the delivery and the boxes and items it contains.
                    </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogCancel className="inverse-button">Cancel</AlertDialogCancel>
                    <AlertDialogAction className="search-button">Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
                </AlertDialog>

                <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button className="warning-button" style={{ marginRight: "10px" }}>
                    <img src="/assets/icons/trash-can-regular.svg" alt="arrow" className="button-icon" />
                    Delete Delivery
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="custom-alert-dialog">
                    <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        <b>Deleting boxes</b> cannot be undone. This will destroy the box. <br/>
                        The items in the box will return as packable items in the table.
                    </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogCancel className="inverse-button">Cancel</AlertDialogCancel>
                    <AlertDialogAction className="search-button">Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
                </AlertDialog>

                <Button className="complete-button" style={{ marginLeft: "auto" }}>
                <img src="/assets/icons/check-solid.svg" alt="arrow" className="button-icon" />
                Complete Delivery
                </Button>
                
            </div>
        </div>

      </div>
    </div>
  )
}

export default DeliveryDetails;