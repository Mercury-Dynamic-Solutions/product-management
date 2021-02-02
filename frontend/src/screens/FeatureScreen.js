import React from 'react'
import {Col, Container, Row} from "react-bootstrap"

const FeatureScreen = () => {
    return (
        <Container>
            <Row>
                <Col>
                <i class="far fa-gem fa-3x mb-3 mt-3 text-primary" aria-hidden="true"></i>
                <h3 class="h4 mt-2 mb-3">Easy Management</h3>
                <p class="mt-4">
                    <a href="/login">Read More
                    <i class="fas fa-arrow-right ml-1"></i>
                    </a>
                </p>
                </Col>
                <Col>
                <i class="fab fa-connectdevelop fa-3x mb-3 mt-3 text-primary" aria-hidden="true"></i>
                <h3 class="h4 mt-2 mb-3">Data Visualisation</h3>
                <p class="mt-4">
                    <a href="/login">Read More
                    <i class="fas fa-arrow-right ml-1"></i>
                    </a>
                </p>
                </Col>
                <Col>
                <i class="fab fa-grav fa-3x mb-3 mt-3 text-primary" aria-hidden="true"></i>
                <h3 class="h4 mt-2 mb-3">Data Manipulation</h3>
                <p class="mt-4">
                    <a href="/login">Read More
                    <i class="fas fa-arrow-right ml-1"></i>
                    </a>
                </p>
                </Col>
            </Row>
            <Row>
                <Col>
                <i class="fab fa-grav fa-3x mb-3 mt-3 text-primary" aria-hidden="true"></i>
                <h3 class="h4 mt-2 mb-3">Web Scrapping</h3>
                <p class="mt-4">
                    <a href="/login">Read More
                    <i class="fas fa-arrow-right ml-1"></i>
                    </a>
                </p>
                </Col>
                <Col>
                <i class="far fa-gem fa-3x mb-3 mt-3 text-primary" aria-hidden="true"></i>
                <h3 class="h4 mt-2 mb-3">Automated Orders</h3>
                <p class="mt-4">
                    <a href="/login">Read More
                    <i class="fas fa-arrow-right ml-1"></i>
                    </a>
                </p>
                </Col>
                <Col>
                <i class="fab fa-connectdevelop fa-3x mb-3 mt-3 text-primary" aria-hidden="true"></i>
                <h3 class="h4 mt-2 mb-3">Stock Taking</h3>
                <p class="mt-4">
                    <a href="/login">Read More
                    <i class="fas fa-arrow-right ml-1"></i>
                    </a>
                </p>
                </Col>
            </Row>
        </Container>
    )
}

export default FeatureScreen
