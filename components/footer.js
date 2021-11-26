import { Component } from "react";
import { Layout, Col, Card, Text, Row, Spacer, Anchor } from "antd";
import Link from "next/link";
import styles from "../styles/Footer.module.css";
import { InstagramOutlined, YoutubeOutlined } from "@ant-design/icons";
import { FaDiscord } from "react-icons/fa";

class Footer extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "black" }}>
        <Row className={styles.footertop}>
          <p
            style={{
              backgroundColor: "black",
              borderWidth: 0,
              flex: 1,
            }}
          />
          <Col>
            <h1> Prospective AI </h1>
            <a href="mailto:contact@prospectiveai.org">
              contact@prospectiveai.org
            </a>
            <p />
            <Row>
              <a href="https://www.instagram.com/prospective.ai/">
                <InstagramOutlined style={{ fontSize: 36 }} />
              </a>
              <p style={{ flex: 1 }} />
              <a href="https://www.youtube.com/channel/UC54doSlQAcrdEa2_w8EIQwg">
                <YoutubeOutlined style={{ fontSize: 36 }} />
              </a>
              <p style={{ flex: 1 }} />
              <a href="https://discord.gg/vYSCGAsm3c">
                <FaDiscord style={{ fontSize: 36 }} />
              </a>
            </Row>
          </Col>

          <p
            style={{
              backgroundColor: "black",
              borderWidth: 0,
              flex: 12,
            }}
          />
          <Col>
            <Link href="/events">
              <a style={{ fontSize: 18 }}>Events</a>
            </Link>
            <p />
            <Link href="/classes">
              <a style={{ fontSize: 18 }}>Classes</a>
            </Link>
            <p />
            <Link href="/contests">
              <a style={{ fontSize: 18 }}>Contests</a>
            </Link>
          </Col>
          <p
            style={{
              backgroundColor: "black",
              borderWidth: 0,
              flex: 2,
            }}
          />
          <Col>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSchez52ZvV2P9w7gu86bebJyNbQmxvQqhDSHAB58z4EYgGFBg/viewform?usp=sf_link"
              style={{ fontSize: 18 }}
            >
              Join
            </a>
            <p />
            <a
              href="mailto:contact@prospectiveai.org ?subject=Sponsorship"
              style={{ fontSize: 18 }}
            >
              Sponsor
            </a>
            <p />
            <a
              href="https://secure.givelively.org/donate/hackplus/prospective-ai"
              style={{ fontSize: 18 }}
            >
              Donate
            </a>
          </Col>
          <p
            style={{
              backgroundColor: "black",
              borderWidth: 0,
              flex: 2,
            }}
          />
        </Row>
        <Card
          style={{
            color: "white",
            flex: 1,
            height: 1,
            marginRight: 30,
            marginLeft: 30,
          }}
        />
        <Layout.Footer className={styles.footer}>
          <Col>
            <a href="https://github.com/akaashkolluri/prospective-ai">
              Made with ❤️ in Houston, TX
            </a>
            <p>Prospective AI is fiscally sponsored by a 501(c)(3) </p>
          </Col>
        </Layout.Footer>
      </div>
    );
  }
}
export default Footer;
