import React, { Component } from 'react';
import data from '../mockdata/data';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

class Report extends Component {
    
    constructor() {
        super();
        this.state = {
            jobs: [],
            candidates: [],
            applicantsCount: 0,
            uniqueSkillsCount: 0
        };
    }

    componentDidMount() {

        const { jobs, skills, applicants } = data;

        // Applicants Count
        const applicantsCount = applicants.length;

        // Unique Skills Count
        const uniqueSkillsCount = [...new Set(skills.map(skill => skill.name))].length;
        
        const candidates = [];

        // candidates = mapped applicants and skills       
        applicants.forEach(applicant => {
           const applicantSkills = skills.filter(skill => skill.applicant_id === applicant.id).map(skill => skill.name);
           const skillCount = applicantSkills.length;
           applicantSkills.forEach((skill, index) => {
                // isNew: checks if the applicant is New 
                const isNew = (index === 0);
                candidates.push({...applicant, skill, skillCount, isNew});
           });
        });
        
        this.setState({ jobs, candidates, applicantsCount,  uniqueSkillsCount});
    }

    render() {
        const { jobs, candidates, applicantsCount, uniqueSkillsCount } = this.state;
        return (
            <React.Fragment>
                <table className='job-applicants'>
                    <Header />
                    
                    <Body 
                        jobs = {jobs}
                        candidates = {candidates}
                    />
                    <Footer 
                        applicantsCount = {applicantsCount} 
                        uniqueSkillsCount = {uniqueSkillsCount} 
                    />
                </table>
            </React.Fragment>
        );
    }
}

export default Report;