import { experiences } from '../data'
import { Card, Badge, ListGroup, ListGroupItem } from 'react-bootstrap';

export default function WorkExperiences() {

    function getDate(date: Date): string
    {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }

    function isToday(date: Date): boolean
    {
        let today: Date = new Date()
        return date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear();
    }

    return(
        <section id="workExperiences" style={{marginTop: 20}}>
            <h2>Work Experiences</h2>
            <div className="container-fluid">
                <div className="row flex-row flex-nowrap overflow-auto">
                <>
                {
                    experiences.map((experience, index) =>
                    (
                        <Card key={index} style={{ width: '18rem', margin: 20}}>
                            <Card.Body> 
                                <Card.Title>{experience.companyName}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{experience.position}</Card.Subtitle>
                                <Card.Text>{experience.detail + "\n"}</Card.Text>
                                {/* <Card.Text>{"Worked for : " +experience.totalWorkedMonth() + " Months"}</Card.Text> */}
                                {/* <Card.Text>
                                    {"Period: " + getDate(experience.startDate)+ " - "}
                                    {isToday(experience.endDate) ? "Current" : getDate(experience.endDate)}</Card.Text>                       */}
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>
                                {"Worked for : " +experience.totalWorkedMonth() + " Months"}
                                </ListGroupItem>
                                <ListGroupItem>
                                {"Period: " + getDate(experience.startDate)+ " - "}
                                    {isToday(experience.endDate) ? "Present" : getDate(experience.endDate)}
                                </ListGroupItem>
                                <ListGroupItem>
                                    {experience.skills.map((skill, index) =>(
                                        <>
                                            <Badge key={index} bg="secondary">{skill}</Badge>   {' '}
                                        </>
                                    ))}  
                                </ListGroupItem>
                            </ListGroup> 
                        </Card>
                    ))
                }
                </>
                </div>
            </div>

        </section>
    );
}