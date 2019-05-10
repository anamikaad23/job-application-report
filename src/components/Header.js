import React, { PureComponent } from "react";
 
class Header extends PureComponent {
  render() {
    return (
      <thead>
        <tr>
          <th>Job</th>
          <th>Applicant Name</th>
          <th>Email Address</th>
          <th>Website</th>
          <th>Skills</th>
          <th>Cover Letter Paragraph</th>
        </tr>
      </thead>
    );
  }
}
 
export default Header;