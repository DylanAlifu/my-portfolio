import ExperienceItem from './ExperienceItem';

const ExperienceList = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      description: `Enhanced user engagement by optimizing training content
        management application performance. Managed Agile sprints to
        reduce feature delivery times and increase team
        productivity. Conducted code reviews, followed Git best
        practices, and wrote technical documentation for API
        integration and system upgrades. Improved UI with advanced
        React hooks, boosting responsiveness and accessibility for
        users with disabilities. Collaborated with UX designers and
        developers to maintain high graphical standards and ensure
        API compatibility, expanding the user base.`,
      date: "2023 - Present",
      company: "Boeing"
    },
    {
      title: "Software Development Engineer in Test",
      description: `Designed flexible test frameworks for frontend and backend,
        promoting testing coverage and decreasing execution time.
        Developed test plans for key projects, enhancing
        cross-functional collaboration to cut defect resolution time
        and shorten time-to-market. Conducted root cause analyses on
        major incidents annually, reducing defect recurrence and
        improving product reliability. Mentored junior QA engineers,
        boosting team productivity and promoting professional
        development.`,
      date: "2022 - 2023",
      company: "Boeing"
    },
    {
      title: "Test Automation Engineer",
      description: `Established and maintained a Java-Selenium-based Automation
        Framework, automating test scenarios across Web, REST API,
        and Mobile applications, significantly reducing manual
        testing efforts and improving test efficiency. Executed
        comprehensive database testing with SQL and JDBC, ensuring
        data integrity and functionality. Authored and disseminated
        best practices and standards across a team of automation
        engineers, ensuring consistency and boosting productivity.`,
      date: "2020 - 2022",
      company: "Mobile Integration Workgroup"
    },
    {
      title: "Test Automation Engineer",
      description: `Crafted a Behavior Driven Framework from scratch using JAVA
        and Cucumber, enabling structured and efficient
        scenario-based testing. Reported and documented software
        defects in Azure DevOps, playing a pivotal role in reducing
        bug resolution time through collaborative efforts with
        developers. Championed API testing execution, applying
        Postman and REST-Assured to conduct automated tests,
        enhancing RESTful service reliability.`,
      date: "2020 - 2020",
      company: "City of Seattle - IT Department"
    },
    {
      title: "Quality Assurance Engineer",
      description: `Played a crucial role in analyzing user stories,
        spearheading defect tracking, and harmonizing development
        with testing operations, leading to a significant decrease
        in production defects. Managed and maintained Automation
        Scripts in Selenium, leveraging Java and GIT for efficient
        resource coordination, ensuring script reliability and
        accessibility via GitHub.`,
      date: "2018 - 2020",
      company: "HealthSherpa"
    }
  ];

  return (
    <div>
      {experiences.map((experience, index) => (
        <ExperienceItem
          key={index}
          title={experience.title}
          description={experience.description}
          date={experience.date}
          company={experience.company}
          position={index % 2 === 0 ? 'left' : 'right'}
        />
      ))}
    </div>
  );
};

export default ExperienceList;
