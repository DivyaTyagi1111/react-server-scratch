import Search from './components/Search/Search';
import Banner from './components/Banner/Banner.client';
import CreativeCard from './components/CreativeCard/CreativeCard';
import Omu from './components/Omu/Omu';
import Pmu from './components/Pmu/Pmu';
import Recent from './components/Recent/Recent';
import Multimedia from './components/multimedia/Multimedia.client';
import ProductPageSummary from './components/product_page_summary/ProductPageSummary.server';
import ProductDetails from './components/product_details/ProductDetails';
import Rating from './components/rating/Rating';
let Components = {}

Components['SEARCH'] = Search
Components['BANNER'] = Banner
Components['CREATIVE_CARD'] = CreativeCard 
Components['OMU'] = Omu
Components['PMU_V3'] = Pmu
Components['RECENTLY_VIEWED_V2'] = Recent
Components['MULTIMEDIA'] = Multimedia
Components['PRODUCT_PAGE_SUMMARY'] = ProductPageSummary
Components['PRODUCT_DETAILS'] = ProductDetails
Components['RATING'] = Rating

export default Components;