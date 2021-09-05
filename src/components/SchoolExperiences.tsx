import { Badge, Button, Card, Container, ListGroup, ListGroupItem, Modal, Image } from 'react-bootstrap';
import {projects} from '../data'
import { IoLogoGithub, IoLogoYoutube } from "react-icons/io5";
import React from 'react';

function ImageModal(props:any) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <p>
            <Image style={{width: "100%"}} src={props.imageurl} />
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default function SchoolExperiences()
{
    const [modalShow, setModalShow] = React.useState(false);
    const [imageURL, setImageURL] = React.useState("");

    return (
        <section id="schoolExperiences" style={{marginTop: 20}}>
            <h2>School Projects</h2>
            <div className="container-fluid">
                <div className="row flex-row flex-nowrap overflow-auto">
                <>
                {
                    projects.map((experience, index) =>
                    (
                        <Card key={index} style={{ width: '18rem', margin: 20}}>
                            {
                                experience.imageURL !== "" ?
                                    <Card.Img variant="top" src={experience.imageURL} style={{objectFit:"cover", height: 150}}
                                    onClick={() => {
                                        setImageURL(experience.imageURL)
                                        setModalShow(true)
                                    }}
                                    />
                                : null
                            }
                            <Card.Body> 
                                <Card.Title>{experience.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{experience.schoolYear}</Card.Subtitle>
                                <Card.Text>{experience.detail + "\n"}</Card.Text>
                            </Card.Body>
                            
                            <ListGroup className="list-group-flush">
                                {experience.githubURL !== "" || experience.youtubeURL !== "" ? 
                                    <ListGroupItem style={{textAlign: "center"}}>
                                    {
                                        experience.githubURL !== "" ? 
                                        <>
                                            <Button href={experience.githubURL} target="_blank" variant="outline-dark" style={{marginRight: 5}} ><IoLogoGithub/> Github</Button>
                                        </>:null
                                    }
                                    {
                                        experience.youtubeURL !== "" ? 
                                        <>
                                            <Button href={experience.youtubeURL} target="_blank" variant="outline-danger" ><IoLogoYoutube/> Youtube</Button>
                                        </>:null
                                    }
                                    </ListGroupItem>
                                : null}
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

            <ImageModal
                show={modalShow}
                imageurl = {imageURL}
                onHide={() => setModalShow(false)}
            />

        </section>
    );
}