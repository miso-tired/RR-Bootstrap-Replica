import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

function Image () {
    return (
        <Card style={{ width: "100%", backgroundColor: "lightgreen" }}>
            <Card.Title>InstaCart</Card.Title>
        <div >
            <img style={{ height: "350px", width: "400px", position: "absolute", backgroundSize: "contain", margin: "30px", backgroundRepeat: "no-repeat" }} src="https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg" alt="Card image" />
        </div>
        </Card>
    )
}

export default Image