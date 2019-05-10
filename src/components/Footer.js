import React, { PureComponent } from "react";
 
class Header extends PureComponent {
  render() {
	const {applicantsCount, uniqueSkillsCount} = this.props;
    return (
		<tfoot>
			<tr>
				<td colSpan='6'>
					{applicantsCount} Applicants, {uniqueSkillsCount} Unique Skills
				</td>
			</tr>
		</tfoot>
    );
  }
}
 
export default Header;