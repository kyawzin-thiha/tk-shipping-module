

const LeftMenu = () => {
  return (
    <nav className="leftsidebar">
        <div className="flex flex-col gap-11">
            <div className="flex gap-3 items-center">
                <img 
                    src="/assets/images/TKGraphics.png"
                    alt="logo"
                    width={163}
                    height={300}
                />
            </div>
            <div className="flex gap-3 items-center">
                <img 
                    src ={"/assets/images/profile-placeholder.svg"}
                    alt="profile"
                    className="h-10 w-10 rounded-full"
                />
                <div className="flex flex-col">
                    <p className="body-medium">
                        Snoopy Brown
                    </p>
                    <p className="small-regular text-gray-500">
                        @snoopdog
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <button className="menu-button flex items-center">
                  <img src="/assets/icons/note-sticky-regular.svg" alt="Items" className="h-5 w-5 mr-4 ml-2" />
                  <span className="align-middle">Items</span>
                </button>
                <button className="menu-button flex items-center">
                  <img src="/assets/icons/boxes-stacked-solid.svg" alt="Boxes" className="h-5 w-5 mr-4 ml-2" />
                  <span className="align-middle">Boxes</span>
                </button>
                <button className="menu-button flex items-center">
                  <img src="/assets/icons/truck-solid.svg" alt="Delivery" className="h-5 w-5 mr-4 ml-2" />
                  <span className="align-middle">Delivery</span>
                </button>
                <hr />
                <button className="menu-button flex items-center">
                  <img src="/assets/icons/folder-open-solid.svg" alt="Reports" className="h-5 w-5 mr-4 ml-2" />
                  <span className="align-middle">Reports</span>
                </button>
                <button className="menu-button flex items-center">
                  <img src="/assets/icons/magnifying-glass-solid.svg" alt="History" className="h-5 w-5 mr-4 ml-2" />
                  <span className="align-middle">History</span>
                </button>
                <hr/> <br />
                <button className="menu-button flex items-center">
                  <img src="/assets/icons/arrow-right-from-bracket-solid.svg" alt="Logout" className="h-5 w-5 mr-4 ml-2" />
                  <span className="align-middle">Logout</span>
                </button>
            </div>
          
        </div>
      
    </nav>
  )
}

export default LeftMenu
