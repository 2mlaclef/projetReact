import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaInstagram,
  FaFacebook,
  FaTelegram,
  FaLinkedin,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Footer.css";

const socialLinks = [
  {
    name: "Instagram",
    icon: <FaInstagram />,
    url: "https://instagram.com",
    color: "#E1306C",
  },
  {
    name: "Facebook",
    icon: <FaFacebook />,
    url: "https://facebook.com",
    color: "#4267B2",
  },
  {
    name: "Telegram",
    icon: <FaTelegram />,
    url: "https://telegram.org",
    color: "#0088cc",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://linkedin.com",
    color: "#0077b5",
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
                <FaPhone className="me-3" size={20} />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="d-flex align-items-center mb-3">
                <FaMapMarkerAlt className="me-3" size={20} />
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
                    style={{
                      color: "white",
                      fontSize: "24px",
                      transition: "0.3s",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = social.color)}
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                  >
                    {social.icon}
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
