import React from 'react' ;
import '../../App.css' ;
import Herosection from '../Herosection';
import Cards from '../Cards';
import Footer from '../Footer';

function Home(){
    return(
        <div>
            <Herosection />
            <Cards />
            <Footer />
        </div>
    )
}

export default Home ;