import { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import './main.css';
import { Container } from "react-bootstrap";
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [num, setMobile] = useState("");

  const handleSubmit = (e) => {
    
    e.preventDefault();
    //
    

    emailjs.sendForm('service_q7fewy9', 'template_pq1j1mg', e.target, 'SOvVsVbIlb8Lu7Nei')
    .then((result) => {
        window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
    }, (error) => {
        console.log(error.text);
    });
  }

  return (
    <Box
      className='contact'
    >
     <Container>
     <Box className="form" sx={{ maxWidth: 400, mx: "auto", p: 2 }}>
        <Typography variant="h4" align="center" mb={2}>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="from_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            name="from_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
            type="email"
          />
           <TextField
            fullWidth
            label="Mobile No."
            name="mobile"
            value={num}
            margin="normal"
            onChange={(e) => setMobile(e.target.value)}
            required
        
          />
          <TextField
            fullWidth
            label="Message"
            name="html_message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            margin="normal"
            required
            multiline
            rows={4}
          />
          <Button variant="contained" type="submit" sx={{ mt: 2 }}>
            Submit
          </Button>
        </form>
      </Box>
     </Container>
    </Box>
  );
}