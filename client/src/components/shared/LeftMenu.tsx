import { Link } from 'react-router-dom';

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
                    <div
                        className="h-10 w-10 rounded-full"
                        style={{ backgroundColor: '#C4E0F9' }}
                    ></div>
                    <div className="flex flex-col">
                        <p className="body-medium">Snoopy Brown</p>
                        <p className="small-regular text-gray-500">@snoopdog</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <Link to="/items" className="menu-button">
                        <img src="/assets/icons/note-sticky-regular.svg" alt="Items" className="menu-button-icon" />
                        <span className="align-middle">Items</span>
                    </Link>
                    <Link to="/boxes" className="menu-button">
                        <img src="/assets/icons/boxes-stacked-solid.svg" alt="Boxes" className="menu-button-icon" />
                        <span className="align-middle">Boxes</span>
                    </Link>
                    <Link to="/delivery" className="menu-button">
                        <img src="/assets/icons/truck-solid.svg" alt="Delivery" className="menu-button-icon" />
                        <span className="align-middle">Delivery</span>
                    </Link>
                    <hr />
                    <Link to="/shipping-report" className="menu-button">
                        <img src="/assets/icons/folder-open-solid.svg" alt="Reports" className="menu-button-icon" />
                        <span className="align-middle">Reports</span>
                    </Link>
                    <Link to="/search-history" className="menu-button">
                        <img src="/assets/icons/magnifying-glass-solid.svg" alt="History" className="menu-button-icon" />
                        <span className="align-middle">History</span>
                    </Link>
                    <hr/> <br />
                    <button className="menu-button">
                        <img src="/assets/icons/arrow-right-from-bracket-solid.svg" alt="Logout" className="menu-button-icon" />
                        <span className="align-middle">Logout</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default LeftMenu;
