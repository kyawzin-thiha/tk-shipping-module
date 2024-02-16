import LeftMenu from '@/components/shared/LeftMenu'
import BoxesFormInside from '@/components/shared/BoxesFormInside'
import BoxesTableInside from '@/components/shared/BoxesTableInside'
import { Button } from "@/components/ui/button"
import arrowLeftSolid from "../../../public/assets/icons/arrow-left-solid.svg";
import printer from "../../../public/assets/icons/print-solid.svg";
import trashCan from "../../../public/assets/icons/trash-can-regular.svg";

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
        <div className="container">
          <div style={{ display: "flex", alignItems: "center" }}>
          <Button className="warning-button" style={{ marginRight: "auto" }}>
            <img src={trashCan} alt="arrow" className="button-icon" />
            Delete Box
          </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoxDetails