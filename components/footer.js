import { Component } from "react";
import { Layout, Col, Card, Text, Row, Spacer, Anchor, Link } from "antd";
import styles from "../styles/Home.module.css";
import {
  InstagramOutlined,
  YoutubeOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

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
              <a>
                <InstagramOutlined style={{ fontSize: 36 }} />
              </a>
              <p style={{ flex: 1 }} />
              <a>
                <YoutubeOutlined style={{ fontSize: 36 }} />
              </a>
              <p style={{ flex: 1 }} />
              <a>
                <TwitterOutlined style={{ fontSize: 36 }} />
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
            <a href="" style={{ fontSize: 18 }}>
              Events
            </a>
            <p />
            <a href="" style={{ fontSize: 18 }}>
              Classes
            </a>
            <p />
            <a href="" style={{ fontSize: 18 }}>
              Contests
            </a>
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
              href="mailto:contact@prospectiveai.org ?subject=Sponorship"
              style={{ fontSize: 18 }}
            >
              Sponsor
            </a>
            <p />
            <a href="" style={{ fontSize: 18 }}>
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
