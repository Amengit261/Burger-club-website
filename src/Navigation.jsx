import { Link } from 'react-router-dom';
function Navigation(){
    return(

   
 
  <div className="button-group">
    <h2>Explore Our Burger Club</h2>
<div>
    <Link to="/" className="button1">Home</Link>
    <Link to="/about" className="button2">About</Link>
    <Link to="/menu" className="button3">Menu</Link>
    <Link to="/shop" className="button4">Shop</Link>
</div>
</div>
    );
}
export default Navigation;