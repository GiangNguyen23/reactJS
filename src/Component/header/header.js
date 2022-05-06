import React, { Component } from 'react';
//import header from './Component/header/header.js';
class Header extends Component {
    render() {
        return (
            <div className="container">
            <div className="header" id="home">	
            <div className="header-para">
                <p>The quick brown <span>fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog.</span></p>	
            </div>	
            <ul className="header-in">
                <li><a href="account.html">MY ACCOUNT</a> </li>
                <li><a href="wishlist.html">  WISHLIST</a></li>
                <li><a href="contact.html"> CONTACT US</a></li>
            </ul>
            <div className="clearfix"> </div>
        </div>
        {/**/}
        <div className="header-top">
          <div className="logo">
            <a href="index.html"><img src="images/logo.png" alt="" /></a>
          </div>
          <div className="header-top-on">
            <ul className="social-in">
              <li><a href="#"><i> </i></a></li>						
              <li><a href="#"><i className="ic"> </i></a></li>
              <li><a href="#"><i className="ic1"> </i></a></li>
              <li><a href="#"><i className="ic2"> </i></a></li>
              <li><a href="#"><i className="ic3"> </i></a></li>
            </ul>
          </div>
          <div className="clearfix"> </div>
        </div>
        <div className="header-bottom">
          <div className="top-nav">
            <ul className="megamenu skyblue">
              <li className="active grid"><a href="index.html">Products</a>
                <div className="megapanel">
                  <div className="row">
                    <div className="col1">
                      <div className="h_nav">
                        <ul>
                          <li><a href="store.html">Accessories</a></li>
                          <li><a href="store.html">Bags</a></li>
                          <li><a href="store.html">Caps &amp; Hats</a></li>
                          <li><a href="store.html">Hoodies &amp; Sweatshirts</a></li>
                          <li><a href="store.html">Jackets &amp; Coats</a></li>
                          <li><a href="store.html">Jeans</a></li>
                          <li><a href="store.html">Jewellery</a></li>
                          <li><a href="store.html">Jumpers &amp; Cardigans</a></li>
                          <li><a href="store.html">Leather Jackets</a></li>
                          <li><a href="store.html">Long Sleeve T-Shirts</a></li>
                          <li><a href="store.html">Loungewear</a></li>
                        </ul>	
                      </div>							
                    </div>
                    <div className="col1">
                      <div className="h_nav">
                        <ul>
                          <li><a href="store.html">Shirts</a></li>
                          <li><a href="store.html">Shoes, Boots &amp; Trainers</a></li>
                          <li><a href="store.html">Shorts</a></li>
                          <li><a href="store.html">Suits &amp; Blazers</a></li>
                          <li><a href="store.html">Sunglasses</a></li>
                          <li><a href="store.html">Sweatpants</a></li>
                          <li><a href="store.html">Swimwear</a></li>
                          <li><a href="store.html">Trousers &amp; Chinos</a></li>
                          <li><a href="store.html">T-Shirts</a></li>
                          <li><a href="store.html">Underwear &amp; Socks</a></li>
                          <li><a href="store.html">Vests</a></li>
                        </ul>	
                      </div>							
                    </div>
                    <div className="col1">
                      <div className="h_nav">
                        <h4>Popular Brands</h4>
                        <ul>
                          <li><a href="store.html">Levis</a></li>
                          <li><a href="store.html">Persol</a></li>
                          <li><a href="store.html">Nike</a></li>
                          <li><a href="store.html">Edwin</a></li>
                          <li><a href="store.html">New Balance</a></li>
                          <li><a href="store.html">Jack &amp; Jones</a></li>
                          <li><a href="store.html">Paul Smith</a></li>
                          <li><a href="store.html">Ray-Ban</a></li>
                          <li><a href="store.html">Wood Wood</a></li>
                        </ul>	
                      </div>												
                    </div>
                  </div>
                </div>
              </li>
              <li><a className="pink" href="404.html">ideas</a></li>
              <li className="grid"><a href="#">Brands</a>
                <div className="megapanel">
                  <div className="row">
                    <div className="col1">
                      <div className="h_nav">
                        <ul>
                          <li><a href="store.html">Accessories</a></li>
                          <li><a href="store.html">Bags</a></li>
                          <li><a href="store.html">Caps &amp; Hats</a></li>
                          <li><a href="store.html">Hoodies &amp; Sweatshirts</a></li>
                          <li><a href="store.html">Jackets &amp; Coats</a></li>
                          <li><a href="store.html">Jeans</a></li>
                          <li><a href="store.html">Jewellery</a></li>
                          <li><a href="store.html">Jumpers &amp; Cardigans</a></li>
                          <li><a href="store.html">Leather Jackets</a></li>
                          <li><a href="store.html">Long Sleeve T-Shirts</a></li>
                          <li><a href="store.html">Loungewear</a></li>
                        </ul>	
                      </div>							
                    </div>
                    <div className="col1">
                      <div className="h_nav">
                        <ul>
                          <li><a href="store.html">Shirts</a></li>
                          <li><a href="store.html">Shoes, Boots &amp; Trainers</a></li>
                          <li><a href="store.html">Shorts</a></li>
                          <li><a href="store.html">Suits &amp; Blazers</a></li>
                          <li><a href="store.html">Sunglasses</a></li>
                          <li><a href="store.html">Sweatpants</a></li>
                          <li><a href="store.html">Swimwear</a></li>
                          <li><a href="store.html">Trousers &amp; Chinos</a></li>
                          <li><a href="store.html">T-Shirts</a></li>
                          <li><a href="store.html">Underwear &amp; Socks</a></li>
                          <li><a href="store.html">Vests</a></li>
                        </ul>	
                      </div>							
                    </div>
                    <div className="col1">
                      <div className="h_nav">
                        <h4>Popular Brands</h4>
                        <ul>
                          <li><a href="store.html">Levis</a></li>
                          <li><a href="store.html">Persol</a></li>
                          <li><a href="store.html">Nike</a></li>
                          <li><a href="store.html">Edwin</a></li>
                          <li><a href="store.html">New Balance</a></li>
                          <li><a href="store.html">Jack &amp; Jones</a></li>
                          <li><a href="store.html">Paul Smith</a></li>
                          <li><a href="store.html">Ray-Ban</a></li>
                          <li><a href="store.html">Wood Wood</a></li>
                        </ul>	
                      </div>												
                    </div>
                  </div>
                </div>
              </li>
              <li><a className="pink" href="gifts.html">gifts</a></li>
              <li className="grid"><a href="#">stores</a>
                <div className="megapanel">
                  <div className="row">
                    <div className="col1">
                      <div className="h_nav">
                        <ul>
                          <li><a href="store.html">Accessories</a></li>
                          <li><a href="store.html">Bags</a></li>
                          <li><a href="store.html">Caps &amp; Hats</a></li>
                          <li><a href="store.html">Hoodies &amp; Sweatshirts</a></li>
                          <li><a href="store.html">Jackets &amp; Coats</a></li>
                          <li><a href="store.html">Jeans</a></li>
                          <li><a href="store.html">Jewellery</a></li>
                          <li><a href="store.html">Jumpers &amp; Cardigans</a></li>
                          <li><a href="store.html">Leather Jackets</a></li>
                          <li><a href="store.html">Long Sleeve T-Shirts</a></li>
                          <li><a href="store.html">Loungewear</a></li>
                        </ul>	
                      </div>							
                    </div>
                    <div className="col1">
                      <div className="h_nav">
                        <ul>
                          <li><a href="store.html">Shirts</a></li>
                          <li><a href="store.html">Shoes, Boots &amp; Trainers</a></li>
                          <li><a href="store.html">Shorts</a></li>
                          <li><a href="store.html">Suits &amp; Blazers</a></li>
                          <li><a href="store.html">Sunglasses</a></li>
                          <li><a href="store.html">Sweatpants</a></li>
                          <li><a href="store.html">Swimwear</a></li>
                          <li><a href="store.html">Trousers &amp; Chinos</a></li>
                          <li><a href="store.html">T-Shirts</a></li>
                          <li><a href="store.html">Underwear &amp; Socks</a></li>
                          <li><a href="store.html">Vests</a></li>
                        </ul>	
                      </div>							
                    </div>
                    <div className="col1">
                      <div className="h_nav">
                        <h4>Popular Brands</h4>
                        <ul>
                          <li><a href="store.html">Levis</a></li>
                          <li><a href="store.html">Persol</a></li>
                          <li><a href="store.html">Nike</a></li>
                          <li><a href="store.html">Edwin</a></li>
                          <li><a href="store.html">New Balance</a></li>
                          <li><a href="store.html">Jack &amp; Jones</a></li>
                          <li><a href="store.html">Paul Smith</a></li>
                          <li><a href="store.html">Ray-Ban</a></li>
                          <li><a href="store.html">Wood Wood</a></li>
                        </ul>	
                      </div>												
                    </div>
                  </div>
                </div>
              </li>
            </ul> 
          </div>
          <div className="cart icon1 sub-icon1">
            <h6>Shopping Cart:
              <span className="item">3 items</span>
              <span className="rate">70$</span>
              <li><a href="#" className="round"> </a>
                <ul className="sub-icon1 list">
                  <h3>Recently added items(3)</h3>
                  <div className="shopping_cart">
                    <div className="cart_box">
                      <div className="message">
                        <div className="alert-close"> </div> 
                        <div className="list_img"><img src="images/si.jpg" className="img-responsive" alt="" /></div>
                        <div className="list_desc"><h4><a href="#">velit esse molestie</a></h4>
                          <a href="#" className="offer">1 offer applied</a>
                        </div>
                        <div className="clearfix" />
                      </div>
                    </div>
                    <div className="cart_box">
                      <div className="message1">
                        <div className="alert-close1"> </div> 
                        <div className="list_img"><img src="images/si1.jpg" className="img-responsive" alt="" /></div>
                        <div className="list_desc"><h4><a href="#">velit esse molestie</a></h4>
                          <a href="#" className="offer">1 offer applied</a>
                        </div>
                        <div className="clearfix" />
                      </div>
                    </div>
                    <div className="cart_box">
                      <div className="message2">
                        <div className="alert-close2"> </div> 
                        <div className="list_img"><img src="images/si.jpg" className="img-responsive" alt="" /></div>
                        <div className="list_desc"><h4><a href="#">velit esse molestie</a></h4>
                          <a href="#" className="offer">1 offer applied</a>
                        </div>
                        <div className="clearfix" />
                      </div>
                    </div>
                  </div>
                  <div className="check_button"><a href="cart.html">View Cart</a></div>
                  <div className="clearfix" />
                </ul>
              </li>
            </h6>
          </div>
          <div className="clearfix"> </div>
        </div>
        <div className="page">
          <h6><a href="#">Page Title</a><b>|</b>Page description The quick, brown <span className="for">fox jumps over a lazy dog. DJs flock by when TV ax quiz prog.</span></h6>
        </div>
       </div>
        );
    }
}
export default Header;