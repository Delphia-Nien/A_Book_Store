import React from 'react';
import { Container, FormGroup, Card, CardColumns, CardImg, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../flux/actions/itemActions';
import { IItemReduxProps, IShowcase } from '../types/interfaces';

const Showcase = ({ isAuthenticated, addItem }: IShowcase) => {

    const shoot = (img, price) => {
        //event.preventDefault();
        //return false;

        const newItem = {
          img,
          price,
        };

        addItem(newItem);

      };

    return (
        <div>
            <div id="picture-book">
                <h1 style={{color:'#f44336',fontSize:'48px'}}><b>Picture Book</b></h1><hr />
            </div>
            <div>
                <CardColumns>
                    <Card style={{ width: '20rem', height:'20rem'}}>
                        <CardImg variant="top" src="https://www.mackids.com.tw/upload/product/AFPG4943-in0.jpg" />
                        <CardBody>
                            <tr>
                                <td style={{ width: '10rem'}}><CardTitle>ANIMALS</CardTitle><CardSubtitle>NT$76</CardSubtitle></td>
                                <td>{isAuthenticated ? (<Button color="dark" onClick={() => shoot("https://www.mackids.com.tw/upload/product/AFPG4943-in0.jpg","NT$76")}>
                                    <i className="material-icons md-24">shopping_cart</i>Buy now</Button>) : (null)}
                                </td>
                            </tr>
                        </CardBody>
                    </Card>

                    <Card style={{ width: '20rem', height:'20rem'}}>
                        <CardImg variant="top" src="https://www.mackids.com.tw/upload/product/AFMM1321-in0.jpg" />
                        <CardBody>
                            <tr>
                                <td style={{ width: '10rem'}}><CardTitle>Go Fishing</CardTitle><CardSubtitle>NT$101</CardSubtitle></td>
                                <td>{isAuthenticated ? (<Button color="dark" onClick={() => shoot("https://www.mackids.com.tw/upload/product/AFMM1321-in0.jpg","NT$101")}>
                                    <i className="material-icons md-24">shopping_cart</i>Buy now</Button>) : (null)}
                                </td>
                            </tr>                            
                        </CardBody>
                    </Card>

                    <Card style={{ width: '20rem', height:'20rem'}}>
                        <CardImg variant="top" src="https://www.mackids.com.tw/upload/product/AFSI5069-in0.jpg" />
                        <CardBody>
                            <tr>
                                <td style={{ width: '10rem'}}><CardTitle>My First Day</CardTitle><CardSubtitle>NT$80</CardSubtitle></td>
                                <td>{isAuthenticated ? (<Button color="dark" onClick={() => shoot("https://www.mackids.com.tw/upload/product/AFSI5069-in0.jpg","NT$80")}>
                                    <i className="material-icons md-24">shopping_cart</i>Buy now</Button>) : (null)}
                                </td>
                            </tr>                            
                        </CardBody>
                    </Card>
                </CardColumns>
            </div>
            <div id="fairy-tale">
                <h1 style={{color:'#f44336',fontSize:'48px'}}><b>Fairy Tale</b></h1><hr />
            </div>
            <div>
                <CardColumns>
                    <Card style={{ width: '20rem', height:'20rem'}}>
                        <CardImg variant="top" src="https://www.mackids.com.tw/upload/product/AFUB1469-in0.jpg" />
                        <CardBody>
                            <tr>
                                <td style={{ width: '100px'}}><CardTitle>Sleeping Beauty</CardTitle><CardSubtitle>NT$99</CardSubtitle></td>
                                <td>{isAuthenticated ? (<Button color="dark" onClick={() => shoot("https://www.mackids.com.tw/upload/product/AFUB1469-in0.jpg","NT$99")}>
                                    <i className="material-icons md-24">shopping_cart</i>Buy now</Button>) : (null)}
                                </td>
                            </tr>                            
                        </CardBody>
                    </Card>

                    <Card style={{ width: '20rem', height:'20rem'}}>
                        <CardImg variant="top" src="https://www.mackids.com.tw/upload/product/AFUB1463-in0.jpg" />
                        <CardBody>
                            <tr>
                                <td style={{ width: '100px'}}><CardTitle>Snow White</CardTitle><CardSubtitle>NT$75</CardSubtitle></td>
                                <td>{isAuthenticated ? (<Button color="dark" onClick={() => shoot("https://www.mackids.com.tw/upload/product/AFUB1463-in0.jpg","NT$75")}>
                                    <i className="material-icons md-24">shopping_cart</i>Buy now</Button>) : (null)}
                                </td>
                            </tr>                            
                        </CardBody>
                    </Card>

                    <Card style={{ width: '20rem', height:'20rem'}}>
                        <CardImg variant="top" src="https://www.mackids.com.tw/upload/product/AFEB0499-in0.jpg" />
                        <CardBody>
                            <tr>
                                <td style={{ width: '100px'}}><CardTitle>Cinderella</CardTitle><CardSubtitle>NT$100</CardSubtitle></td>
                                <td>{isAuthenticated ? (<Button color="dark" onClick={() => shoot("https://www.mackids.com.tw/upload/product/AFEB0499-in0.jpg","NT$100")}>
                                    <i className="material-icons md-24">shopping_cart</i>Buy now</Button>) : (null)}
                                </td>
                            </tr>                            
                        </CardBody>
                    </Card>
                </CardColumns>
            </div>
            <div id="play-book">
                <h1 style={{color:'#f44336',fontSize:'48px'}}><b>Play Book</b></h1><hr />
            </div>
            <div>
                <CardColumns>
                    <Card style={{ width: '20rem', height:'20rem'}}>
                        <CardImg variant="top" src="https://www.mackids.com.tw/upload/product/AFMM1002-in0.jpg" />
                        <CardBody>
                            <tr>
                                <td style={{ width: '10rem'}}><CardTitle>Animals</CardTitle><CardSubtitle>NT$85</CardSubtitle></td>
                                <td>{isAuthenticated ? (<Button color="dark" onClick={() => shoot("https://www.mackids.com.tw/upload/product/AFMM1002-in0.jpg","NT$85")}>
                                    <i className="material-icons md-24">shopping_cart</i>Buy now</Button>) : (null)}
                                </td>
                            </tr>                            
                        </CardBody>
                    </Card>
    
                    <Card style={{ width: '20rem', height:'20rem'}}>
                        <CardImg variant="top" src="https://www.mackids.com.tw/upload/product/AFSC5936-in0.jpg" />
                        <CardBody>
                            <tr>
                                <td style={{ width: '10rem'}}><CardTitle>AMAZING ANIMALS</CardTitle><CardSubtitle>NT$80</CardSubtitle></td>
                                <td>{isAuthenticated ? (<Button color="dark" onClick={() => shoot("https://www.mackids.com.tw/upload/product/AFSC5936-in0.jpg","NT$80")}>
                                    <i className="material-icons md-24">shopping_cart</i>Buy now</Button>) : (null)}
                                </td>
                            </tr>                            
                        </CardBody>
                    </Card>
        
                    <Card style={{ width: '20rem', height:'20rem'}}>
                        <CardImg variant="top" src="https://www.mackids.com.tw/upload/product/AFWK042-in0.jpg" />
                        <CardBody>
                            <tr>
                                <td style={{ width: '10rem'}}><CardTitle>10 Button Book</CardTitle><CardSubtitle>NT$102</CardSubtitle></td>
                                <td>{isAuthenticated ? (<Button color="dark" onClick={() => shoot("https://www.mackids.com.tw/upload/product/AFWK042-in0.jpg","NT$102")}>
                                    <i className="material-icons md-24">shopping_cart</i>Buy now</Button>) : (null)}
                                </td>
                            </tr>                            
                        </CardBody>
                    </Card>
                </CardColumns>
            </div>
            <div id="touch-book">
                <h1 style={{color:'#f44336',fontSize:'48px'}}><b>Touch Book</b></h1><hr />
            </div>
            <div>
                <CardColumns>
                    <Card style={{ width: '20rem', height:'20rem'}}>
                        <CardImg variant="top" src="https://www.mackids.com.tw/upload/product/AFDK269-in0.jpg" />
                        <CardBody>
                            <tr>
                                <td style={{ width: '10rem'}}><CardTitle>Animals</CardTitle><CardSubtitle>NT$285</CardSubtitle></td>
                                <td>{isAuthenticated ? (<Button color="dark" onClick={() => shoot("https://www.mackids.com.tw/upload/product/AFDK269-in0.jpg","NT$285")}>
                                    <i className="material-icons md-24">shopping_cart</i>Buy now</Button>) : (null)}
                                </td>
                            </tr>                            
                        </CardBody>
                    </Card>

                    <Card style={{ width: '20rem', height:'20rem'}}>
                        <CardImg variant="top" src="https://www.mackids.com.tw/upload/product/AFDK0545-in0.jpg" />
                        <CardBody>
                            <tr>
                                <td style={{ width: '10rem'}}><CardTitle>Puppies</CardTitle><CardSubtitle>NT$380</CardSubtitle></td>
                                <td>{isAuthenticated ? (<Button color="dark" onClick={() => shoot("https://www.mackids.com.tw/upload/product/AFDK0545-in0.jpg","NT$380")}>
                                    <i className="material-icons md-24">shopping_cart</i>Buy now</Button>) : (null)}
                                </td>
                            </tr>                            
                        </CardBody>
                    </Card>
 
                    <Card style={{ width: '20rem', height:'20rem'}}>
                        <CardImg variant="top" src="https://www.mackids.com.tw/upload/product/AFDK0432-in0.jpg" />
                        <CardBody>
                            <tr>
                                <td style={{ width: '10rem'}}><CardTitle>Happy Birthday!</CardTitle><CardSubtitle>NT$198</CardSubtitle></td>
                                <td>{isAuthenticated ? (<Button color="dark" onClick={() => shoot("https://www.mackids.com.tw/upload/product/AFDK0432-in0.jpg","NT$198")}>
                                    <i className="material-icons md-24">shopping_cart</i>Buy now</Button>) : (null)}
                                </td>
                            </tr>                            
                        </CardBody>
                    </Card>
                </CardColumns>
            </div>
            <div id="audio-book">
                <h1 style={{color:'#f44336',fontSize:'48px'}}><b>Audio Book</b></h1><hr />
            </div>
            <div>
                <CardColumns>
                    <Card style={{ width: '20rem', height:'20rem'}}>
                        <CardImg variant="top" src="https://www.mackids.com.tw/upload/product/AFWA1601-in0.jpg" />
                        <CardBody>
                            <tr>
                                <td style={{ width: '10rem'}}><CardTitle>Jingle Bells</CardTitle><CardSubtitle>NT$308</CardSubtitle></td>
                                <td>{isAuthenticated ? (<Button color="dark" onClick={() => shoot("https://www.mackids.com.tw/upload/product/AFWA1601-in0.jpg","NT$308")}>
                                    <i className="material-icons md-24">shopping_cart</i>Buy now</Button>) : (null)}
                                </td>
                            </tr>
                        </CardBody>
                    </Card>

                    <Card style={{ width: '20rem', height:'20rem'}}>
                        <CardImg variant="top" src="https://www.mackids.com.tw/upload/product/AFNC0109-in0.jpg" />
                        <CardBody>
                            <tr>
                                <td style={{ width: '10rem'}}><CardTitle>Listen to the Jungle</CardTitle><CardSubtitle>NT$543</CardSubtitle></td>
                                <td>{isAuthenticated ? (<Button color="dark" onClick={() => shoot("https://www.mackids.com.tw/upload/product/AFNC0109-in0.jpg","NT$543")}>
                                    <i className="material-icons md-24">shopping_cart</i>Buy now</Button>) : (null)}
                                </td>
                            </tr>                            
                        </CardBody>
                    </Card>
    
                    <Card style={{ width: '20rem', height:'20rem'}}>
                        <CardImg variant="top" src="https://www.mackids.com.tw/upload/product/AFBN0131-in0.jpg" />
                        <CardBody>
                            <tr>
                                <td style={{ width: '10rem'}}><CardTitle>IT'S MUSIC TIME</CardTitle><CardSubtitle>NT$200</CardSubtitle></td>
                                <td>{isAuthenticated ? (<Button color="dark" onClick={() => shoot("https://www.mackids.com.tw/upload/product/AFBN0131-in0.jpg","NT$200")}>
                                    <i className="material-icons md-24">shopping_cart</i>Buy now</Button>) : (null)}
                                </td>
                            </tr>                            
                        </CardBody>
                    </Card>
                </CardColumns>
            </div>
        </div>
      );
    };
    
    const mapStateToProps = (state: IItemReduxProps) => ({
      item: state.item,
      isAuthenticated: state.auth.isAuthenticated
    });
    
    export default connect(mapStateToProps, { addItem })(Showcase);
