import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation(){
    return(

   
 
  <div className="button-group">
    <h2>Explore Our Burger Club</h2>
<div>
    <Link to="/" className="button1">Home</Link>
    <Link to="/about" className="button2">About</Link>
    <Link to="/menu" className="button3">Menu</Link>
    <Link to="/Contact " className="button4">Contact </Link>
</div>
</div>
    );
}
export default Navigation;