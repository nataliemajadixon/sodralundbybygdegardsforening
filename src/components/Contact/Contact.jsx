import React from "react";
import './Contact.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Contact = () => {
    return(
<>
<div>
    <div> Kontakt/ Hitta till oss</div>
</div>

<div><Container>
      <Row>
        <Col className="maptext">
        <div className="mapheader">ADRESS</div>
        <div className="mappara">
        Södra Lundby 4, 534 61 Vedum
        </div>
        </Col>
        <Col xs={6}>
<div>
<iframe className="imap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8411.273112996822!2d13.021546438454555!3d58.19391032514321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465ac55fa5a98fd5%3A0xe61b66aa7801d630!2sS%C3%B6dra%20Lundby%20Bygdeg%C3%A5rd!5e0!3m2!1sen!2sse!4v1688470863089!5m2!1sen!2sse"  title='location' width="800" height="550" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
</Col>
      </Row>
      </Container></div>
</>

    )
}
export default Contact;