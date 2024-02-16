import LeftMenu from '@/components/shared/LeftMenu'
import BoxesFormInside from '@/components/shared/BoxesFormInside'
import BoxesTableInside from '@/components/shared/BoxesTableInside'
import { Button } from "@/components/ui/button"
import arrowLeftSolid from "../../../public/assets/icons/arrow-left-solid.svg";
import printer from "../../../public/assets/icons/print-solid.svg";
import trashCan from "../../../public/assets/icons/trash-can-regular.svg";
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

const BoxDetails = () => {
  return (
    <div className="flex">
      <LeftMenu />
      <div>
        <div className="container" style={{ marginBottom: 0 }}>
          <div className="header-container">
            <h2 className="h2-semibold">Box #12345</h2>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button className="grey-button" style={{ marginRight: "auto" }}>
              <img src={arrowLeftSolid} alt="arrow" className="plus-icon" />
              Go Back
            </Button>
            <div>
              <Button className="li-blue-button" style={{ marginRight: "10px" }}>
                <img src={printer} alt="arrow" className="button-icon" />
                Box Slip
              </Button>
              <Button className="blue-button">
                <img src={printer} alt="arrow" className="button-icon" />
                BLIND Box Slip
              </Button>
            </div>
          </div>
        </div>  
        <BoxesFormInside />
        <BoxesTableInside />
        <div className="container" style={{ marginBottom: 80 }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="warning-button" style={{ marginRight: "auto" }}>
                  <img src={trashCan} alt="arrow" className="button-icon" />
                  Delete Box
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoxDetails
