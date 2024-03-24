import React from 'react';
import {Routes,Route} from 'react-router-dom';
import HomePage from './Home';
// import AboutPage from './About';
import NavigationBar from './NavBar';
import OrderSummary from './Summary';
import NoRoute from './NoRoute';
import ProductsPage from './Products';
import { Featuredproducts } from './FeaturedProducts';
import { NewProducts } from './NewProducts';
import { UsersList } from './Users';
import { UserDetails } from './UserDetails';

const LazyAbout= React.lazy(()=>import('./About'));

export default function Routing(){
    return(
        <>
            <NavigationBar/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='about' element={<React.Suspense fallback='Loading...'>
                    <LazyAbout/>
                </React.Suspense>}/>
                <Route path='order-summary' element={<OrderSummary/>}/>
                <Route path='*' element={<NoRoute/>}/>
                <Route path='products' element={<ProductsPage/>}>
                    <Route index element={<Featuredproducts/>}/>
                    <Route path='featured' element={<Featuredproducts/>}/>
                    <Route path='new' element={<NewProducts/>}/>
                </Route>
                <Route path='users' element={<UsersList/>}>
                    <Route path=':userId' element={<UserDetails/>}/>
                </Route>              
                

            </Routes>
        </>
    );
}