require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const { Eureka } = require("eureka-js-client");

const eurekaClient = new Eureka({
    instance: {
        app: "email-service",
        hostName: "localhost",
        ipAddr: "127.0.0.1",
        port: {
            $: 8086,
            "@enabled": "true",
        },
        vipAddress: "email-service",
        dataCenterInfo: {
            "@class": "com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo",
            name: "MyOwn",
        },
    },
    eureka: {
        host: "localhost",
        port: 8761,
        servicePath: "/eureka/apps/",
    },
});

eurekaClient.start(error => {
    if (error) {
        console.error("Eureka registration failed:", error);
    } else {
        console.log("Email Service registered with Eureka.");
    }
});

process.on("SIGINT", async () => {
    console.log("Shutting down Email Service...");

    eurekaClient.stop(error => {
        if (error) {
            console.error("Error during Eureka deregistration:", error);
        } else {
            console.log("Email Service deregistered from Eureka.");
        }
        process.exit(0);
    });
});

const app = express();
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

app.post("/send-email", async (req, res) => {
    const { to, subject, text } = req.body;
    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to,
            subject,
            text,
        });
        res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error sending email", error });
    }
});

app.get("/health", (req, res) => {
    res.status(200).json({ status: "UP" });
});

app.listen(8086, () => console.log("Email Service running on port 8086"));
