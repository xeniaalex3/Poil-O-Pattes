import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from 'src/components/Header';
import Menu from '../Menu';
import LoginForm from '../LoginForm';
import Profile from '../Profile';
import AddAnimal from '../RegisterForm/AddAnimal';
import Content from '../Content';
import Presentation from '../Presentation';
import Appointement from '../Appointement';
import Services from '../Services';
import Grooming from '../Services/Grooming';
import Spa from '../Services/Spa';
import Catalog from '../Catalog';
import Accessories from '../Catalog/Accessories';
import Baskets from '../Catalog/Accessories/Baskets';
import Clothes from '../Catalog/Accessories/Clothes';
import Others from '../Catalog/Accessories/Others';
import Toys from '../Catalog/Accessories/Toys';
import BeautyProduct from '../Catalog/BeautyProduct';
import EarsAndEyes from '../Catalog/BeautyProduct/EarsAndEyes';
import PadsAndTruffle from '../Catalog/BeautyProduct/PadsAndTruffle';
import Shampoo from '../Catalog/BeautyProduct/Shampoo';
import Delicacies from '../Catalog/Delicacies';
import Bones from '../Catalog/Delicacies/Bones';
import ChewSticks from '../Catalog/Delicacies/ChewSticks';
import Treats from '../Catalog/Delicacies/Treats';
import Gallery from '../Gallery';
import Review from '../Review';
import RegisterForm from '../RegisterForm';
import LegalNotices from '../LegalNotices';
import Footer from '../Footer';
import Error404 from '../Error/Error404';
import Error403 from '../Error/Error403';

import './styles.scss';

import { setUser } from '../../actions/user';
import { fetchCatalog } from '../../actions/catalogMedia';
import { fetchAccessories } from '../../actions/accessories';
import { fetchBeautyProducts } from '../../actions/beautyProducts';
import { fetchDelicacies } from '../../actions/delicacies';
import { fetchProducts } from '../../actions/products';
import { fetchServicesMedia } from '../../actions/servicesMedia';
import { fetchServices } from '../../actions/services';
import { fetchGallery } from '../../actions/galleryMedia';

// == Composant
function App() {
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.user.logged);


  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem('user'));
    if (loggedUser) {
      dispatch(setUser(loggedUser.token));
    }
    dispatch(fetchCatalog());
    dispatch(fetchAccessories());
    dispatch(fetchBeautyProducts());
    dispatch(fetchDelicacies());
    dispatch(fetchProducts());
    dispatch(fetchServicesMedia());
    dispatch(fetchServices());
    dispatch(fetchGallery());
  }, []);
  
  return (
    <div className="app">
      <Header />
      <Menu />
      <Routes>
        <Route path="/se-connecter" element={<LoginForm />} />
        {logged && <Route path="/profil" element={<Profile />} />}
        {!logged && <Route path="/profil" element={<Error403 />} />}
        <Route path="/" element={<Content />} />
        <Route path="/salon" element={<Presentation />} />
        {logged && <Route path="/prendre-rendez-vous" element={<Appointement />} />}
        {!logged && <Route path="/prendre-rendez-vous" element={<Error403 />} />}
        <Route path="/services" element={<Services />} />
        <Route path="/services/toilettage" element={<Grooming />} />
        <Route path="/services/Spa" element={<Spa />} />
        <Route path="/catalogue" element={<Catalog />} />
        <Route path="/catalogue/accessoires" element={<Accessories />} />
        <Route path="/catalogue/accessoires/paniers" element={<Baskets />} />
        <Route path="/catalogue/accessoires/vetements" element={<Clothes />} />
        <Route path="/catalogue/accessoires/jouets" element={<Toys />} />
        <Route path="/catalogue/accessoires/autres" element={<Others />} />
        <Route path="/catalogue/produits-de-beaute" element={<BeautyProduct />} />
        <Route path="/catalogue/produits-de-beaute/shampoings" element={<Shampoo />} />
        <Route path="/catalogue/produits-de-beaute/soins-oreilles-yeux" element={<EarsAndEyes />} />
        <Route path="/catalogue/produits-de-beaute/soins-coussinets-truffes" element={<PadsAndTruffle />} />
        <Route path="/catalogue/gourmandises" element={<Delicacies />} />
        <Route path="/catalogue/gourmandises/os" element={<Bones />} />
        <Route path="/catalogue/gourmandises/friandises" element={<Treats />} />
        <Route path="/catalogue/gourmandises/batons-a-macher" element={<ChewSticks />} />
        <Route path="/galerie" element={<Gallery />} />
        <Route path="/avis" element={<Review />} />
        <Route path="/s-enregistrer" element={<RegisterForm />} />
        {logged && <Route path="/ajouter-un-animal" element={<AddAnimal />} />}
        {!logged && <Route path="/ajouter-un-animal" element={<Error403 />} />}
        <Route path="/mentions-legales" element={<LegalNotices />} />

        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

// == Export
export default App;
