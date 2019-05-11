import React, { Component } from 'react';
 
class Body extends Component {
  render() {
	const {jobs, candidates} = this.props;
    return (
		<tbody>
        {
            jobs.map(job => {
                const _candidates = candidates.filter(applicant => applicant.job_id === job.id);
                return (
                    _candidates.map((candidate, index) => {
                        return(
                            <tr key={`job${job.id}-candidate${candidate.id}-${candidate.skill}`}>
                                {(index === 0) &&
                                    <td className='job-name' rowSpan={_candidates.length}>
                                        {job.name}
                                    </td>
                                }
                                {(candidate.isNew) &&
                                    <td className='applicant-name' rowSpan={candidate.skillCount}>
                                        {candidate.name}
                                    </td>
                                }
                                {(candidate.isNew) &&
                                    <td rowSpan={candidate.skillCount}>
                                        {
                                            candidate.email.length 
                                            ? 
                                                <a href={`mailto:${candidate.email}`}>{candidate.email}</a> 
                                            : 
                                                '---'
                                        }
                                    </td>
                                }
                                {(candidate.isNew) &&
                                    <td rowSpan={candidate.skillCount}>
                                        {
                                            candidate.website.length 
                                            ? 
                                                <a href={`http://${candidate.website}`}>{candidate.website}</a> 
                                            : 
                                                '---'
                                        }
                                    </td>
                                }
                                <td>
                                    {candidate.skill}
                                </td>
                                {(candidate.isNew) &&
                                    <td rowSpan={candidate.skillCount}>
                                        {candidate.cover_letter}
                                    </td>
                                }
                            </tr>
                        );
                    })
                );
            })
        }
        </tbody>
    );
  }
}
 
export default Body;