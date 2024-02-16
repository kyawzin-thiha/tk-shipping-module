import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemsHome from './_root/pages/ItemsHome';
import BoxesHome from './_root/pages/BoxesHome';
import DeliveryHome from './_root/pages/DeliveryHome';
import SearchHistory from './_root/pages/SearchHistory';
import ShippingReport from './_root/pages/ShippingReport';
import BoxDetails from './_root/pages/BoxDetails';

function App() {
  return (
    <Router>
        <div className="content">
          <Routes>
            <Route path="/items" element={<ItemsHome />} />
            <Route path="/boxes" element={<BoxesHome />} />
            <Route path="/delivery" element={<DeliveryHome />} />
            <Route path="/search-history" element={<SearchHistory />} />
            <Route path="/shipping-report" element={<ShippingReport />} />

            <Route path="/box-details" element={<BoxDetails />} />
          </Routes>
        </div>
      
    </Router>

  );
}

export default App;
