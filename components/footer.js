import { Component } from "react";
import { Layout, Col, Card, Text, Row, Spacer } from "antd";
import styles from "../styles/Home.module.css";
import {
  InstagramOutlined,
  YoutubeOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

class Footer extends Component {
  render() {
    return (
      <div>
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
          <Col> Hi there</Col>
          <p
            style={{
              backgroundColor: "black",
              borderWidth: 0,
              flex: 2,
            }}
          />
          <Col> Hi there</Col>
          <p
            style={{
              backgroundColor: "black",
              borderWidth: 0,
              flex: 2,
            }}
          />
        </Row>

        <Layout.Footer className={styles.footer}>
          <Col>
            <a href="https://github.com/akaashkolluri/prospective-ai">
              Made with ❤️ in Houston, TX
            </a>
            <a href="https://github.com/akaashkolluri/prospective-ai">
              Prospective AI is fiscally sponsored by a 501(c)(3) so your
              donation is tax deductible.{" "}
            </a>
          </Col>
        </Layout.Footer>
      </div>
    );
  }
}
export default Footer;
