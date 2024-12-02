
// JavaScript to create butterfly cursor and follow mouse

// Create a div element for the butterfly cursor
const butterflyCursor = document.createElement('div');
butterflyCursor.classList.add('butterfly-cursor');
document.body.appendChild(butterflyCursor);

// Listen to mouse movements
document.addEventListener('mousemove', (e) => {
    const x = e.clientX; // X position of the mouse
    const y = e.clientY; // Y position of the mouse
    
    // Set the position of the butterfly cursor
    butterflyCursor.style.left = `${x}px`;
    butterflyCursor.style.top = `${y}px`;
});
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/send", (req, res) => {
    const { name, email, message } = req.body;

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "your-email@gmail.com",
            pass: "your-email-password", // Use App Password if 2FA is enabled
        },
    });

    const mailOptions = {
        from: email,
        to: "roujasumaiya947@gmail.com",
        subject: `New Contact Form Submission from ${name}`,
        text: message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send("Error sending email");
        } else {
            console.log("Email sent: " + info.response);
            res.send("Email sent successfully!");
        }
    });
});

app.listen(3000, () => console.log("Server running on port 3000"));



