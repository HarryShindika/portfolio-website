import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              Feel free to contact me for any work or suggestions below
            </p>
          </div>
        </div>
        <div style={{
          alignContent: "center",
          alignItems: "center",
        }}> 
          <form
            method="post"
            action="https://formsubmit.co/harryshindika@gmail.com"
          >
            <div>
              <div>
                <label for="name">Name</label>
                <input type="text" name="name" id="name" required />
              </div>
              <div>
                <label for="email">Email</label>
                <input type="text" name="email" id="email" required />
              </div>
              <div>
                <label for="message">Message</label>
                <textarea name="message" id="message" rows="4" />
              </div>
            </div>
            
              <ul> 
                <li>
                  <input
                    type="hidden"
                    value="https://harryshindika.com/pages\thankyou.html"
                  />
                </li>
                <li>
                  <input type="submit" value="Send Message" />
                </li>
                <li>
                  <input type="reset" value="Reset" />
                </li>
              </ul>

          </form>
          <div />
        </div>
      </section>
    );
  }
}
