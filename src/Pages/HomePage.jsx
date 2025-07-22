
import Banner from '../Comp/Banner'
import Browse from '../Comp/Browse' ;
import Student from '../Comp/Student' ;
import Kids from '../Comp/kids';
import Testimonials from '../Comp/Testimonials';


function HomePage(){
    return(
    <>
    
    <Banner/>
      <Browse/>
      <Student/>
      <Kids/>
      <Testimonials/>
    </>
    );
}

export default HomePage