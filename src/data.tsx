import { Experience } from "./models/Experience";
import { Project } from "./models/Project";

//#region Import Image
import imgProject102 from './images/Project102_20170910_2017-10-04_23-02-48.png'
import imgProject104 from './images/Screenshot 2021-09-05 141111.png'
import imgTNICOOPMobile from './images/Screenshot_1615557737.png'
import imgTNICOOPCore from './images/Screenshot 2021-09-05 134053.png'
import imgProject428 from './images/Screenshot 2021-09-05 150054.png'
import imgBirdRogn from './images/Screenshot 2021-09-05 155335.png'
//#endregion

export const experiences: Experience[] = [
    new Experience({
        companyName: "Bangkok Payment Solutions Company Limited",
        position: "Developer (Internship)",
        detail: "Be part of a team to development web application called EWP, for allow users make request to install EDC easier and reduce human errors.",
        skills: ["C#", "LINQ", "SQL", "Entity Framework", "JavaScript"],
        startDate: new Date("2020-06-01"),
        endDate: new Date("2020-09-30"),
    }),    
    new Experience({
        companyName: "Bangkok Payment Solutions Company Limited",
        position: "Developer",
        detail: "Be part of a team to development software called CDA, for manage configulation of Bangkok Yellow Line.",
        skills: ["C#", "SQL", "Windows Service"],
        startDate: new Date("2021-05-21"),
        endDate: new Date("2022-05-13"),
    }),
    new Experience({
      companyName: "IT One",
      position: "Application Development Analyst",
      detail: "Be part of a team as a software developer to develop and deliver software products that meet business needs.",
      skills: ["C#", "LINQ", "SQL", ".NET Core"],
      startDate: new Date("2021-06-01"),
  }),
]



export const projects: Project[] = [
    new Project({
        name: "Stock management for T-shirt supplier system", 
        schoolYear: "1st Year",
        detail: "For understanding how to create basic Windows Form Application with C#",
        skills: ["C#", "Windows Form"],
        youtubeURL: "https://www.youtube.com/watch?v=Ga48E1LcbFY",
        imageURL: imgProject102,
     }),
    new Project({
        name: "TNI Hotel Booking System", 
        schoolYear: "1st Year",
        detail: "This project created by Java with GUI for understanding OOP Programming concept.",
        skills: ["Java"],
        githubURL: "https://github.com/LagSeeN/TNI-Hotel-booking-system",
        imageURL: imgProject104,
     }),
     new Project({
        name: "T-Shirt Stock Management System", 
        schoolYear: "3rd Year",
        detail: "Python with GUI Application Development (Individual Project) stored data with MongoDB (NoSQL)",
        skills: ["Python","Qt","MongoDB"],
        youtubeURL: "https://youtu.be/zofXibgdD5I",
        imageURL: imgProject428,
     }),
     new Project({
        name: "Bird Recognition Web Application", 
        schoolYear: "4th Years",
        detail: `Web application is will help users to classification type of bird by upload image, and waiting for result by trained model. (ML.NET)`,
        skills: ["C#",".NET", "ASP.NET", "ML.NET"],
        githubURL: "https://github.com/ONMITSU/TNI-BirdRecognition",
        imageURL: imgBirdRogn,
     }),
     new Project({
        name: "TNICOOP-Core", 
        schoolYear: "4th Years",
        detail: `This project is Back-End for supporting "TNICOOP-Moblie", bulid with ASP.NET Web API and Entity Framework`,
        skills: ["C#",".NET Core", "ASP.NET", "Entity Framework"],
        githubURL: "https://github.com/ONMITSU/TNICOOP-Core",
        imageURL: imgTNICOOPCore,
     }),
     new Project({
        name: "TNICOOP-Mobile", 
        schoolYear: "4th Years",
        detail: `After I and my team finished CO-OP, We found many problem during CO-OP process.
        For the example: document submit process, What company are student can apply for CO-OP or internship. 
        So, we hope this application will can help others.`,
        skills: ["React Native", "JavaScript"],
        githubURL: "https://github.com/LagSeeN/TNICOOP-Mobile",
        imageURL: imgTNICOOPMobile,
     }),
]