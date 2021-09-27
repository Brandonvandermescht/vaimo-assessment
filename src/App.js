import './App.scss';
import NewNew from './Components/NewNew';

import ProdImage from './Components/ProdImage';

import ProdName from './Components/ProdName';
//Each import is categorized by component folder

//Badges --------------------------------------------------------
import ReadyToShip from './Components/Badges/ReadyToShip';
import RTSBackground from './Components/Badges/RTSBackground';

//InStock --------------------------------------------------------
import ISBackground from './Components/InStock/ISBackground';
import ISlbl from './Components/InStock/ISlbl';
import ISOKIcon from './Components/InStock/ISOKIcon';

//FastDispatch --------------------------------------------------------
import FDBackground from './Components/FastDispatch/FDBackground';
import FDlbl from './Components/FastDispatch/FDlbl';
import FDOKIcon from './Components/FastDispatch/FDOKIcon';

//HotSaleProducts --------------------------------------------------------
import HSPlbl from './Components/HotSaleProducts/HSPlbl';
import HSPBackground from './Components/HotSaleProducts/HSPBackground';

//RatingsBox --------------------------------------------------------
import Rating from './Components/RatingsBox/Rating';
import Reviews from './Components/RatingsBox/Reviews';
import Buyers from './Components/RatingsBox/Buyers';
import Star1Icon from './Components/RatingsBox/Star1Icon';
import Star2Icon from './Components/RatingsBox/Star2Icon';
import Star3Icon from './Components/RatingsBox/Star3Icon';
import Star4Icon from './Components/RatingsBox/Star4Icon';
import Star5Icon from './Components/RatingsBox/Star5Icon';

//PriceBox --------------------------------------------------------
import Price from './Components/PriceBox/Price';
import OldPrice from './Components/PriceBox/OldPrice';
import Option1 from './Components/PriceBox/Option1';
import OptionsNum from './Components/PriceBox/OptionsNum';
import MinOrder from './Components/PriceBox/MinOrder';
import Line1 from './Components/PriceBox/Line1';
import PBBackground from './Components/PriceBox/PBBackground';

//MarchExpo --------------------------------------------------------
import MELogo from './Components/MarchExpo/MELogo';
import FreeShipping from './Components/MarchExpo/FreeShipping';
import OnTimeDelivery from './Components/MarchExpo/OnTimeDelivery';
import ArrowIcon from './Components/MarchExpo/ArrowIcon';
import MEBackground from './Components/MarchExpo/MEBackground';

//DiscountTimer --------------------------------------------------------
import Discount from './Components/DiscountTimer/Discount';
import DiscountEnds from './Components/DiscountTimer/DiscountEnds';
import DiscountClock from './Components/DiscountTimer/DiscountClock';
import DiscountEndsTimer from './Components/DiscountTimer/DiscountEndsTimer';

//ProdOptions --------------------------------------------------------
import ProdOptionslbl from './Components/ProdOptions/ProdOptionslbl';
import ProdOptions1 from './Components/ProdOptions/ProdOptions1';
import ProdOptions1Price from './Components/ProdOptions/ProdOptions1Price';
import ProdOptions2 from './Components/ProdOptions/ProdOptions2';
import ProdOptions2Price from './Components/ProdOptions/ProdOptions2Price';
import ProdOptions3 from './Components/ProdOptions/ProdOptions3';
import ProdOptions3Price from './Components/ProdOptions/ProdOptions3Price';
import MinusOptions1 from './Components/ProdOptions/MinusOptions1';
import MinusOptions2 from './Components/ProdOptions/MinusOptions2';
import MinusOptions3 from './Components/ProdOptions/MinusOptions3';
import MinusOptions1Icon from './Components/ProdOptions/MinusOptions1Icon';
import MinusOptions2Icon from './Components/ProdOptions/MinusOptions2Icon';
import MinusOptions3Icon from './Components/ProdOptions/MinusOptions3Icon';
import ProdOptionsNum1 from './Components/ProdOptions/ProdOptionsNum1';
import ProdOptionsNum2 from './Components/ProdOptions/ProdOptionsNum2';
import ProdOptionsNum3 from './Components/ProdOptions/ProdOptionsNum3';
import PlusOptions1 from './Components/ProdOptions/PlusOptions1';
import PlusOptions2 from './Components/ProdOptions/PlusOptions2';
import PlusOptions3 from './Components/ProdOptions/PlusOptions3';
import PlusOptions1Icon from './Components/ProdOptions/PlusOptions1Icon';
import PlusOptions2Icon from './Components/ProdOptions/PlusOptions2Icon';
import PlusOptions3Icon from './Components/ProdOptions/PlusOptions3Icon';
import ProductNum1 from './Components/ProdOptions/ProductNum1';
import ProductNum2 from './Components/ProdOptions/ProductNum2';
import ProductNum3 from './Components/ProdOptions/ProductNum3';

//TradeAssurance --------------------------------------------------------
import TALogo from './Components/TradeAssurance/TALogo';
import TAlbl from './Components/TradeAssurance/TAlbl';
import TAInfo from './Components/TradeAssurance/TAInfo';

//Payments --------------------------------------------------------
import Paymentslbl from './Components/Payments/Paymentslbl';
import Visa from './Components/Payments/Visa';
import Mastercard from './Components/Payments/Mastercard';
import ApplePay from './Components/Payments/ApplePay';

//Links --------------------------------------------------------
import AlibabaLogistics from './Components/Links/AlibabaLogistics';
import InspectionSolutions from './Components/Links/InspectionSolutions';

//AddToBox --------------------------------------------------------
import ATBForeground from './Components/AddToBox/ATBForeground';
import ATBBackground from './Components/AddToBox/ATBBackground';
import ShipTo from './Components/AddToBox/ShipTo';
import ATBPrice from './Components/AddToBox/ATBPrice';
import LeadTime from './Components/AddToBox/LeadTime';
import LeadTimeInfo from './Components/AddToBox/LeadTimeInfo';
import ShippingTime from './Components/AddToBox/ShippingTime';
import ShippingTimeInfo from './Components/AddToBox/ShippingTimeInfo';
import LoginToPurchase from './Components/AddToBox/LoginToPurchase';
import LTPBackground from './Components/AddToBox/LTPBackground';
import ContactTheSupplier from './Components/AddToBox/ContactTheSupplier';
import CTSIcon from './Components/AddToBox/CTSIcon';
import CTSForeground from './Components/AddToBox/CTSForeground';


function App() {
  return (
    <div> 
      <ProdImage />

      <ProdName />
     
      <RTSBackground />
      <ReadyToShip />

      <ISBackground />
      <ISlbl />
      <ISOKIcon />

      <FDBackground />
      <FDlbl />
      <FDOKIcon />

      <HSPBackground />
      <HSPlbl />
      
      <Rating />
      <Reviews />
      <Buyers />
      <Star1Icon />
      <Star2Icon />
      <Star3Icon />
      <Star4Icon />
      <Star5Icon />

      <Price />
      <OldPrice />
      <Option1 />
      <OptionsNum />
      <MinOrder />
      <Line1 />
      <PBBackground />

      <MEBackground />
      <MELogo />
      <FreeShipping />
      <OnTimeDelivery />
      <ArrowIcon />
      
      <Discount />
      <DiscountEnds />
      <DiscountClock />
      <DiscountEndsTimer />

      <ProdOptionslbl />
      <ProdOptions1 />
      <ProdOptions1Price />
      <ProdOptions2 />
      <ProdOptions2Price />
      <ProdOptions3 />
      <ProdOptions3Price />
      <MinusOptions1 />
      <MinusOptions2 />
      <MinusOptions3 />
      <MinusOptions1Icon />
      <MinusOptions2Icon />
      <MinusOptions3Icon />
      <ProdOptionsNum1 />
      <ProdOptionsNum2 />
      <ProdOptionsNum3 />
      <PlusOptions1 />
      <PlusOptions2 />
      <PlusOptions3 />
      <PlusOptions1Icon />
      <PlusOptions2Icon />
      <PlusOptions3Icon />
      <ProductNum1 />
      <ProductNum2 />
      <ProductNum3 />

      <TALogo />
      <TAlbl />
      <TAInfo />

      <Paymentslbl />
      <Visa />
      <Mastercard />
      <ApplePay />

      <AlibabaLogistics />
      <InspectionSolutions />

      <ATBForeground />
      <ATBBackground />
      <ShipTo />
      <ATBPrice />
      <LeadTime />
      <LeadTimeInfo />
      <ShippingTime />
      <ShippingTimeInfo />
      <LTPBackground />
      <LoginToPurchase />
      <ContactTheSupplier />
      <CTSIcon />
      <CTSForeground />

      <NewNew />
    </div>
  );
}

export default App;
