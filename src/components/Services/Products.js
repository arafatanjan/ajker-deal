import React, { useState, useEffect } from 'react';
import './Products.css';
import Skeleton from "react-loading-skeleton";
// import Link from '../../../public/services.json';
import aru from './../../images/hot-deal-logo.gif'

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch('services.json');
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    }
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.type === cat);
    setFilter(updatedList);
  };
  const ShowProducts = () => {
    return (
      <>
        {/* <a href="https://ajkerdeal.com/flash/allflashdeals.aspx" style={{ height: 25, width: 75, marginTop: -3.5 }}  >k
          <span>
            <img style={{ height: 5, width: 5, marginTop: '-3.5%' }} src="https://static.ajkerdeal.com/images/desktop-home/arrowforall.svg" alt="" />
          </span>
        </a> */}
        {/* <div class="container">
          <div>
            <a href="https://ajkerdeal.com/flash/allflashdeals.aspx" style={{ height: 25, width: 75, marginTop: -3.5 }}  >j</a>
          </div>
          <div class="image">
            <img style={{ height: 25, width: 25, marginTop: '-3.5%' }} src="https://static.ajkerdeal.com/images/desktop-home/arrowforall.svg" alt="" />
          </div>

        </div> */}
        {/* <br />
        <br /> */}
        <div className='container'>
          <div className="buttons d-flex justify-content-center pt-3">
            <button
              className="tile_div  px-1 py-0"
              // onClick={() => setFilter(data)}
              onClick={() => filterProduct("BCS")}
            >
              BCS
            </button>
            <button
              className="tile_div btn btn-outline-dark me-2"
              onClick={() => filterProduct("Admission")}
            >
              Admission
            </button>
            <button
              className="tile_div btn btn-outline-dark me-2"
              onClick={() => filterProduct("GRE")}
            >
              GRE
            </button>
            <button
              className="tile_div btn  me-2"
              onClick={() => filterProduct("IELTS")}
            >
              IELTS
            </button>
            {/* <button
              className="tile_div btn  me-2"
              onClick={() => filterProduct("Kurti")}
            > */}
              {/* Kurti
            </button>
            <button
              className="tile_div btn  me-2"
              onClick={() => filterProduct("Watches")}
            >
              Watches
            </button>
            <button
              className="tile_div btn  me-2"
              onClick={() => filterProduct("Polo")}
            >
              Polo Shirts
            </button>
            <button
              className="tile_div btn  me-2"
              onClick={() => filterProduct("Sharee")}
            >
              Sharee
            </button>
            <button
              className="tile_div btn  me-2"
              onClick={() => filterProduct("Panjabi")}
            >
              Panjabi
            </button>
            <button
              className="tile_div btn  me-2"
              onClick={() => filterProduct("Shoes")}
            >
              Shoes
            </button> */}
          </div>
          {/* <div className="float:left;color:#fff;font-size:14px;text-align: center;overflow: auto hidden;width: 100%;display: flex;flex-direction: row;justify-content: center;margin-bottom: 10px">
            <button className='btn btn-warning d-block gap-2 col-4 mx-auto'>t-shirt</button>
            <button type="button" className="btn btn-warning">Warning</button>
          </div>
          <div className=" btn btn-warning">
            <a href="#">Button one</a>
            <a href="#">Button two</a>
            <a href="#" class="last">Button three</a>
            <div class="clear"></div>
          </div> */}
          <br />
          <br />
          <div className='row'>
            <div className="col-md-6 ">
              <div className="row">
                {filter.slice(0, 2).map((product) => {
                  return (
                    <>
                      {/* <div className='container'> */}
                      {/* <div > */}

                      <div className='col-md-6 px-1' >
                        <div class="card h-100 text-center" key={product._id}>
                          <img
                            src={product.filename}
                            className="card-img-top"
                            alt={product.title}
                            // height="124px"
                          />
                          <div className="card-body">
                            {/* <h4 className="card-title mb-0">
                              {" "}
                              {product.title.substring(0, 8)}{" "}
                            </h4> */}
                            <p className="discounted-price">
                              {/* <span>{product.discountedprice}</span> */}
                              <button>Add</button>
                            </p>
                            {/* <p className="regular-price">
                              <span>{product.price}</span>
                            </p> */}
                          </div>
                        </div>
                      </div>
                    </>
                  )
                })}
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="row">
                {filter.slice(4, 6).map((product) => {
                  return (
                    <>
                      {/* <div className='container'> */}
                      {/* <div > */}

                      <div className='col-md-6'>
                      <div class="card h-100 text-center" key={product._id}>
                          <img
                            src={product.filename}
                            className="card-img-top"
                            alt={product.title}
                            // height="124px"
                          />
                          <div className="card-body">
                            {/* <h4 className="card-title mb-0">
                              {" "}
                              {product.title.substring(0, 8)}{" "}
                            </h4> */}
                            <p className="discounted-price">
                              {/* <span>{product.discountedprice}</span> */}
                              <button>Add</button>
                            </p>
                            {/* <p className="regular-price">
                              <span>{product.price}</span>
                            </p> */}
                          </div>
                        </div>

                      </div>
                    </>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
       
        <div className="col-12 mb-5">
            <h6 className="fw-bolder text-left">Video List</h6>
            <h1 className="display-6 fw-bolder text-left">Popular Videos</h1>
            <hr />
          </div>
        <div id="liveShoppingVideoForAjkerDeal" >
          <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12' style={{ width: '105%' }}>
              <div className="row">
                <div id="livenew" className="col-lg-2 col-md-2 col-sm-2 col-xs-2" style={{ marginBottom: 30, overflow: 'hidden', position: 'relative' }}>
                  <div className='label label_live'>
                    <img src="https://static.ajkerdeal.com/images/new2021/reply.svg" alt='' style={{ width: 120, height: 26 }} />
                  </div>
                  <span className='span-Live-Shoppng'>
                    <img src="https://static.ajkerdeal.com/images/new2021/eyel.svg" style={{ width: 25, marginRight: 5, marginLeft: 5 }} alt=''></img>
                    <p style={{ color: 'white', marginLeft: -3 }}>333</p>
                  </span>
                  <a href="https://www.youtube.com/watch?v=T27SWSr829E" style={{ height: '13rem' }}>
                    <span className='playn'>
                      <img src='https://static.ajkerdeal.com/images/videoshopping/play/blackplay.png' alt='' style={{ width: '42%', border: 'none' }}></img>
                    </span>
                    <img src="https://i.ibb.co/PxND6CV/image-9.jpg" alt='' style={{ border: 2, border: 'solid', border: '#000000', height: '18rem', width: '-webkit-fill-available' }}></img>
                    <p style={{ background: 'rgb(3 4 4)', opacity: 0.6, position: 'absolute', textAlign: 'center', fontWeight: 900, color: 'white', fontSize: 11, marginTop: -34, width: '10.8rem', height: 24 }}>  Bangla</p>
                  </a>
                </div>
                <div id="livenew" className="col-lg-2 col-md-2 col-sm-2 col-xs-2" style={{ marginBottom: 30, overflow: 'hidden', position: 'relative' }}>
                  <div className='label label_live'>
                    <img src="https://static.ajkerdeal.com/images/new2021/reply.svg" alt='' style={{ width: 120, height: 26 }} />
                  </div>
                  <span className='span-Live-Shoppng'>
                    <img src="https://static.ajkerdeal.com/images/new2021/eyel.svg" style={{ width: 25, marginRight: 5, marginLeft: 5 }} alt=''></img>
                    <p style={{ color: 'white', marginLeft: -3 }}>333</p>
                  </span>
                  <a href="https://www.youtube.com/watch?v=T27SWSr829E" style={{ height: '13rem' }}>
                    <span className='playn'>
                      <img src='https://static.ajkerdeal.com/images/videoshopping/play/blackplay.png' alt='' style={{ width: '42%', border: 'none' }}></img>
                    </span>
                    <img src="https://i.ibb.co/Kmq3XNV/image-6.jpg" alt='' style={{ border: 2, border: 'solid', border: '#000000', height: '18rem', width: '-webkit-fill-available' }}></img>
                    <p style={{ background: 'rgb(3 4 4)', opacity: 0.6, position: 'absolute', textAlign: 'center', fontWeight: 900, color: 'white', fontSize: 11, marginTop: -34, width: '10.8rem', height: 24 }}>   English</p>
                  </a>
                </div>
                <div id="livenew" className="col-lg-2 col-md-2 col-sm-2 col-xs-2" style={{ marginBottom: 30, overflow: 'hidden', position: 'relative' }}>
                  <div className='label label_live'>
                    <img src="https://static.ajkerdeal.com/images/new2021/reply.svg" alt='' style={{ width: 120, height: 26 }} />
                  </div>
                  <span className='span-Live-Shoppng'>
                    <img src="https://static.ajkerdeal.com/images/new2021/eyel.svg" style={{ width: 25, marginRight: 5, marginLeft: 5 }} alt=''></img>
                    <p style={{ color: 'white', marginLeft: -3 }}>333</p>
                  </span>
                  <a href="https://www.youtube.com/watch?v=T27SWSr829E" style={{ height: '13rem' }}>
                    <span className='playn'>
                      <img src='https://static.ajkerdeal.com/images/videoshopping/play/blackplay.png' alt='' style={{ width: '42%', border: 'none' }}></img>
                    </span>
                    <img src="https://i.ibb.co/59n59tg/image-7.jpg" alt='' style={{ border: 2, border: 'solid', border: '#000000', height: '18rem', width: '-webkit-fill-available' }}></img>
                    <p style={{ background: 'rgb(3 4 4)', opacity: 0.6, position: 'absolute', textAlign: 'center', fontWeight: 900, color: 'white', fontSize: 11, marginTop: -34, width: '10.8rem', height: 24 }}>   Social Science</p>
                  </a>
                </div>
                <div id="livenew" className="col-lg-2 col-md-2 col-sm-2 col-xs-2" style={{ marginBottom: 30, overflow: 'hidden', position: 'relative' }}>
                  <div className='label label_live'>
                    <img src="https://static.ajkerdeal.com/images/new2021/reply.svg" alt='' style={{ width: 120, height: 26 }} />
                  </div>
                  <span className='span-Live-Shoppng'>
                    <img src="https://static.ajkerdeal.com/images/new2021/eyel.svg" style={{ width: 25, marginRight: 5, marginLeft: 5 }} alt=''></img>
                    <p style={{ color: 'white', marginLeft: -3 }}>333</p>
                  </span>
                  <a href="https://www.youtube.com/watch?v=T27SWSr829E" style={{ height: '13rem' }}>
                    <span className='playn'>
                      <img src='https://static.ajkerdeal.com/images/videoshopping/play/blackplay.png' alt='' style={{ width: '42%', border: 'none' }}></img>
                    </span>
                    <img src="https://i.ibb.co/BNBRB0S/image-8.jpg" alt='' style={{ border: 2, border: 'solid', border: '#000000', height: '18rem', width: '-webkit-fill-available' }}></img>
                    <p style={{ background: 'rgb(3 4 4)', opacity: 0.6, position: 'absolute', textAlign: 'center', fontWeight: 900, color: 'white', fontSize: 11, marginTop: -34, width: '10.8rem', height: 24 }}>    Math</p>
                  </a>
                </div>
                <div id="livenew" className="col-lg-2 col-md-2 col-sm-2 col-xs-2" style={{ marginBottom: 30, overflow: 'hidden', position: 'relative' }}>
                  <div className='label label_live'>
                    <img src="https://static.ajkerdeal.com/images/new2021/reply.svg" alt='' style={{ width: 120, height: 26 }} />
                  </div>
                  <span className='span-Live-Shoppng'>
                    <img src="https://static.ajkerdeal.com/images/new2021/eyel.svg" style={{ width: 25, marginRight: 5, marginLeft: 5 }} alt=''></img>
                    <p style={{ color: 'white', marginLeft: -3 }}>333</p>
                  </span>
                  <a href="https://www.youtube.com/watch?v=T27SWSr829E" style={{ height: '13rem' }}>
                    <span className='playn'>
                      <img src='https://static.ajkerdeal.com/images/videoshopping/play/blackplay.png' alt='' style={{ width: '42%', border: 'none' }}></img>
                    </span>
                    <img src="https://i.ibb.co/PxND6CV/image-9.jpg" alt='' style={{ border: 2, border: 'solid', border: '#000000', height: '18rem', width: '-webkit-fill-available' }}></img>
                    <p style={{ background: 'rgb(3 4 4)', opacity: 0.6, position: 'absolute', textAlign: 'center', fontWeight: 900, color: 'white', fontSize: 11, marginTop: -34, width: '10.8rem', height: 24 }}>    Science</p>
                  </a>
                </div>
                <div id="livenew" className="col-lg-2 col-md-2 col-sm-2 col-xs-2" style={{ marginBottom: 30, overflow: 'hidden', position: 'relative' }}>
                  <div className='label label_live'>
                    <img src="https://static.ajkerdeal.com/images/new2021/reply.svg" alt='' style={{ width: 120, height: 26 }} />
                  </div>
                  <span className='span-Live-Shoppng'>
                    <img src="https://static.ajkerdeal.com/images/new2021/eyel.svg" style={{ width: 25, marginRight: 5, marginLeft: 5 }} alt=''></img>
                    <p style={{ color: 'white', marginLeft: -3 }}>333</p>
                  </span>
                  <a href="https://www.youtube.com/watch?v=T27SWSr829E" style={{ height: '13rem' }}>
                    <span className='playn'>
                      <img src='https://static.ajkerdeal.com/images/videoshopping/play/blackplay.png' alt='' style={{ width: '42%', border: 'none' }}></img>
                    </span>
                    <img src="https://i.ibb.co/Kmq3XNV/image-6.jpg" alt='' style={{ border: 2, border: 'solid', border: '#000000', height: '18rem', width: '-webkit-fill-available' }}></img>
                    <p style={{ background: 'rgb(3 4 4)', opacity: 0.6, position: 'absolute', textAlign: 'center', fontWeight: 900, color: 'white', fontSize: 11, marginTop: -34, width: '10.8rem', height: 24 }}>    Religion</p>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="col-12 mb-5">
            <h6 className="fw-bolder text-left">Our FAQ</h6>
            <h1 className="display-6 fw-bolder text-left">Frequently asked questions</h1>
            <hr />
          </div>
        <div>
        <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Question #1
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Question #2
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Question #3
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
        </div>
        {/* <div id="block" style={{}}>
          <div id="HomeProductBlock2" className="col-lg-12 col-md-12 col-sm-12 col-xs-12" >
            <div className="topnav"></div>
          </div>
        </div> */}
      </>
    );

  }
  return (
    <>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h6 className="fw-bolder text-left">Course List</h6>
            <h1 className="display-6 fw-bolder text-left">Our Popular Courses</h1>
            <hr />
          </div>
          <div>
            <div className="deals-title">
              {/* <span className="hot-deal-logo style={{ height: 50px }}" >
                <img className='img' src={aru} alt="" />
              </span> */}
              {/* style={{ height: 65px }} */}
            </div>
            <div style={{ float: 'right', marginTop: 20, fontSize: 16, textAlign: 'right', marginRight: -7, borderBottom: 'darkorange', }} className="d-flex justify-content-end">

              <a href="https://www.youtube.com/watch?v=T27SWSr829E" style={{ height: 25, width: 75, marginTop: -3.5 }}  >All
                <span style={{ height: 20, width: 15, display: 'inline-block', overflow: 'hidden' }} className="all-arrow">
                  <img style={{ height: 15, width: '100%', marginTop: '-3.5%', display: 'inline-block' }} src="https://static.ajkerdeal.com/images/desktop-home/arrowforall.svg" alt="" />
                </span>
              </a>
            </div>
          </div>

        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

//style="margin-top: 50px;float:left;"
{/* <p className="card-text lead">
                              ${product.description.substring(0, 40)}
                            </p> */}

{/* <button
                              className="btn btn-outline-dark px-4 py-2"
                            // onClick={() => addProduct(product)}
                            >
                              Add to Cart
                            </button> */}
{/* <NavLink
                      to="/cart"
                      className="btn btn-dark ms-2 px-3 py-2 my-4"
                    >
                      Go to Cart
                    </NavLink> */}

export default Products;

