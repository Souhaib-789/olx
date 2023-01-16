import React from 'react';
import './PostAdd.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import logo from '../../assets/oppo.jfif'
import { useState } from 'react';
import NavigationBar from '../../navigation/Navbar';


const PostAdd = () => {

  const [name , setname ] = useState()
  console.log('--------', name);
  return (
    <>
    <NavigationBar />
<div style={{padding: '5%'}}>
    <h3 className="fw-normal mb-5" style={{ color: 'black' , fontWeight: 'bold', alignSelf: 'center' }}>Post an Ad</h3>

              <div style={{ 
               justifyContent: 'space-around' ,
                paddingTop: '5%', 
                paddingRight: '20%',
                paddingLeft: '20%',
                paddingBottom: '5%', 
                borderRadius: 10,
                boxShadow: '5px 10px #D3D3D3',
                 backgroundColor: '#ffff'}}>
               

                  <Form>
                    <div style={{display: 'flex'}}>
                    <Form.Group controlId="formFileSm" className="mb-3">
                            <Form.Label>Choose Image</Form.Label>
                            <input
            type="file"
            id='image'
            // accept='.png, .jpg, .jpeg'
            accept="image/*"
            onChange={e => setname(URL.createObjectURL(e.target.files[0]))}
          />
                      {/* <Form.Control type="file" accept="image/*" size="sm" onChange={e => setname(e.target.value)} /> */}
                    </Form.Group>
                    <img src={name ? name : logo}  className="adImage" alt='Loading image...'/>
                    </div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Title :</Form.Label>
                      <Form.Control type="text" placeholder="Enter title" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Price :</Form.Label>
                      <Form.Control type="text" placeholder="Enter price" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Description</Form.Label>
                      <Form.Control as="textarea" rows={3} placeholder='Enter description' />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                      Post Ad
                    </Button>
                  </Form>
        
           
              </div>
              </div>
       
              </>
     
  );
}

export default PostAdd;