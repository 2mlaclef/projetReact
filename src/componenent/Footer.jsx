// Footer.jsx
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./Footer.css";

// Import SVG icons
import instagramIcon from "../assets/instagram.svg";
import facebookIcon from "../assets/facebook.svg";
import telegramIcon from "../assets/telegram.svg";
import linkedinIcon from "../assets/linkedin.svg";

const socialLinks = [
  {
    name: "Instagram",
    icon: instagramIcon,
    url: "https://instagram.com",
    hoverColor: "#E1306C",
  },
  {
    name: "Facebook",
    icon: facebookIcon,
    url: "https://facebook.com",
    hoverColor: "#4267B2",
  },
  {
    name: "Telegram",
    icon: telegramIcon,
    url: "https://telegram.org",
    hoverColor: "#0088cc",
  },
  {
    name: "LinkedIn",
    icon: linkedinIcon,
    url: "https://linkedin.com",
    hoverColor: "#0077b5",
  },
];

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row className="gy-4">
          {/* Contact Section */}
          <Col md={6}>
            <h2 className="contact-title mb-4">Contactez-nous</h2>
            <div className="contact-info mb-4">
              <div className="d-flex align-items-center mb-3">
                <i className="fas fa-phone me-3"></i>
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="d-flex align-items-center mb-3">
                <i className="fas fa-map-marker-alt me-3"></i>
                <span>123 Rue de la Gastronomie, Paris</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="social-media">
              <h3 className="h5 mb-3">Suivez-nous</h3>
              <div className="d-flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ "--hover-color": social.hoverColor }}
                  >
                    <Image
                      src={social.icon}
                      alt={social.name}
                      width={24}
                      height={24}
                      className="social-icon"
                    />
                  </a>
                ))}
              </div>
            </div>
          </Col>

          {/* Opening Hours Section */}
          <Col md={6}>
            <h2 className="mb-4">Horaires d'ouverture</h2>
            <div className="opening-hours">
              <Row className="mb-2">
                <Col xs={7} sm={6}>
                  Mardi - Jeudi:
                </Col>
                <Col xs={5} sm={6}>
                  12h00 - 22h30
                </Col>
              </Row>
              <Row className="mb-2">
                <Col xs={7} sm={6}>
                  Vendredi - Samedi:
                </Col>
                <Col xs={5} sm={6}>
                  12h00 - 23h30
                </Col>
              </Row>
              <Row className="mb-2">
                <Col xs={7} sm={6}>
                  Dimanche:
                </Col>
                <Col xs={5} sm={6}>
                  12h00 - 22h00
                </Col>
              </Row>
              <Row className="mb-2">
                <Col xs={7} sm={6}>
                  Lundi:
                </Col>
                <Col xs={5} sm={6}>
                  Fermé
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        {/* Copyright Section */}
        <Row className="mt-5 pt-4 border-top border-secondary">
          <Col className="text-center">
            <small className="text-muted">
              &copy; {new Date().getFullYear()} Votre Restaurant. Tous droits
              réservés.
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
