import React, { useState,useEffect } from 'react'
import '../App.css';
import { Row,Col,Card,Button} from 'react-bootstrap'
const Addtocart = () => {

const [users,setUsers]=useState([])
const[body,setBody]=useState('');
const[title,setTitle]=useState('');
const[userId,setUserId]=useState(null)
useEffect(()=>{
    getuserdisplay()
},[])
function getuserdisplay(){
fetch('https://jsonplaceholder.typicode.com/posts').then((result)=>result.json()).then((resp)=>{
    console.log(resp);
    setUsers(resp);
setBody(resp[0].body);
setTitle(resp[0].title);
setUserId(resp[0].userId);
})
}
  return (
    <div>
      <h1> redux with add to cart</h1> 

<div className='cardreader'>
      <div>
      <Row >
<Col>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" className='Imag-1' />
      <Card.Body>
        <Card.Title>view Toggle</Card.Title>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  className='Imag2'  />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card style={{ width: '18rem' }}>
      <Card.Img  className='Imag3' variant="top" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
      </Card.Body>
    </Card>
</Col>
</Row>
      </div>
<div >
<Row className='card-add'>

<Col>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" className='Imag' />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text className='cardtext'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  className='Imag'  />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text className='cardtext'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card style={{ width: '18rem' }}>
      <Card.Img  className='Imag' variant="top" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text className='cardtext' >
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
</Col>

</Row>
<Row className='card-add'>

<Col>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" className='Imag'/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text className='cardtext'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
</Col>
<Col>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" className='Imag' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text className='cardtext'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
</Col>
<Col>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" className='Imag' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text className='cardtext'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
</Col>

</Row>

</div>

</div>
    </div>
  )
}

export default Addtocart
