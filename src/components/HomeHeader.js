import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBFormInline,
  MDBAnimation
} from "mdbreact";
import '../index.css'

function HomeHeader(props) {
    return (
      <div id="HomeHeader">
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <MDBCol md="12" className="text-center text-md-center mt-xl-5 mb-5">
                  <MDBAnimation type="fadeInLeft" delay=".3s">
                        <h1 class="display-3 mb-2">MATHEUS <a
                                class="font-weight-bold">SANADA</a></h1>
                        <h5 class="text-uppercase mb-3 mt-1 font-weight-bold">iOS developer</h5>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
}

export default HomeHeader;