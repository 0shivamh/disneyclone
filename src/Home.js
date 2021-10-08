import HCard from './Components/HCard.component';
import Header from './Components/Header.component';
import HHCard from './Components/HHCard.component';
import Middle from './Components/Middle.component';
import Originals from './Components/Originals.component';
import Trending from './Components/Trending.component';
const Home = ()=>{
    return(
        <>
    <Header/>
      <HCard/>
      <HHCard/>
      <Middle/>
      <Originals/>
      <Trending/>
        </>
    )
}
export default Home;