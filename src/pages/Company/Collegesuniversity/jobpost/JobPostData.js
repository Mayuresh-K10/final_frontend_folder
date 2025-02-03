const JobPostData = [
  {
    id: 1,
    "title": "Senior Software Engineer",
    "name": "InnovateTech Solutions",
    "description": "Lead the development of cutting-edge software applications, collaborate with cross-functional teams, and drive innovation.",
    "responsibilities": [
      "Design, develop, and maintain high-performance software applications.",
      "Collaborate with product managers, designers, and other engineers.",
      "Write clean, maintainable, and efficient code.",
      "Perform code reviews and mentor junior engineers.",
      "Troubleshoot and debug complex issues."
    ],
    "qualifications": [
      "Bachelor’s degree in Computer Science or related field.",
      "5+ years of experience in software engineering.",
      "Proficiency in Java, Python, or C++.",
      "Experience with cloud platforms (AWS, Azure, GCP).",
      "Strong understanding of Agile methodologies."
    ],
    "skills": [
      "Java",
      "Python",
      "C++",
      "Cloud platforms (AWS, Azure, GCP)",
      "Agile methodologies"
    ],
    "number_of_applicants": 150,
    "screening_questions": [
      "Describe a challenging software project you worked on and how you overcame the challenges.",
      "How do you stay current with the latest developments in software engineering?",
      "Provide an example of how you have mentored or guided junior engineers."
    ],
    "status": "active",
    "type": "onsite",
    "location": "San Francisco, CA",
    "applicants": [
      {
        id: 1,
        name: "John Doe",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/johndoe",
        bio: "Full-stack developer with a passion for building scalable software solutions. Expertise in Java and Python, with over 6 years of experience in cloud computing.",
        education: "Bachelor’s in Computer Science, Stanford University",
        previousExperience: [
          { company: "TechCorp", role: "Software Engineer", duration: "2017-2020" },
          { company: "DevSolutions", role: "Senior Software Engineer", duration: "2020-2023" },
        ],
        status:'Pending'
      },
      {
        id: 2,
        name: "Jane Smith",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/janesmith",
        bio: "Software Engineer with experience in backend systems and cloud architecture. Skilled in Python, JavaScript, and GCP.",
        education: "Master’s in Computer Science, MIT",
        previousExperience: [
          { company: "Innovative Solutions", role: "Backend Developer", duration: "2016-2019" },
          { company: "CloudNet", role: "Senior Backend Engineer", duration: "2019-2023" },
        ],
        status:'Pending'
      },
      {
        id: 3,
        name: "Alex Johnson",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/alexjohnson",
        bio: "DevOps Engineer with a focus on building robust CI/CD pipelines and cloud-native infrastructure. Proficient in AWS and Azure.",
        education: "Bachelor’s in Information Systems, UC Berkeley",
        previousExperience: [
          { company: "CloudBridge", role: "DevOps Engineer", duration: "2018-2021" },
          { company: "TechFlow", role: "Senior DevOps Engineer", duration: "2021-2023" },
        ],
        status:'Pending'
      },
      {
        id: 4,
        name: "Michael Lee",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/michaellee",
        bio: "Senior Software Engineer specializing in microservices architecture and distributed systems. Strong background in Java and AWS.",
        education: "Bachelor’s in Computer Science, Carnegie Mellon University",
        previousExperience: [
          { company: "DataStream", role: "Software Engineer", duration: "2015-2018" },
          { company: "NextGen Software", role: "Senior Software Engineer", duration: "2018-2023" },
        ],
        status:'Interview Schedule'
      },
      {
        id: 5,
        name: "Emily Carter",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/emilycarter",
        bio: "Experienced software engineer with a focus on AI/ML applications. Proficient in Python, TensorFlow, and cloud-based AI platforms.",
        education: "Master’s in Artificial Intelligence, UC San Diego",
        previousExperience: [
          { company: "AIWorks", role: "Machine Learning Engineer", duration: "2017-2020" },
          { company: "DeepTech Solutions", role: "Senior AI Engineer", duration: "2020-2023" },
        ],
        status:'Pending'
      },
      {
        id: 6,
        name: "David Kim",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/davidkim",
        bio: "Software engineer with a passion for blockchain technology and decentralized applications. Skilled in Python, Solidity, and cloud computing.",
        education: "Bachelor’s in Computer Science, Princeton University",
        previousExperience: [
          { company: "Blockchain Labs", role: "Software Engineer", duration: "2018-2020" },
          { company: "CryptoTech", role: "Senior Blockchain Engineer", duration: "2020-2023" },
        ],
        status:'Reject'
      },
      {
        id: 7,
        name: "Sophia Martinez",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/sophiamartinez",
        bio: "Full-stack engineer with expertise in web applications and microservices. Experienced with JavaScript, Python, and cloud-based environments.",
        education: "Master’s in Software Engineering, Georgia Tech",
        previousExperience: [
          { company: "WebTech Solutions", role: "Frontend Developer", duration: "2016-2019" },
          { company: "NextWeb", role: "Senior Full-Stack Developer", duration: "2019-2023" },
        ],
        status:'Reject'
      },
      {
        id: 8,
        name: "Liam Garcia",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/liamgarcia",
        bio: "Cloud engineer with experience in managing scalable infrastructure on AWS and Azure. Skilled in Python, Docker, and Kubernetes.",
        education: "Bachelor’s in Information Technology, University of Texas",
        previousExperience: [
          { company: "CloudOps", role: "Cloud Engineer", duration: "2017-2020" },
          { company: "ScaleX", role: "Senior Cloud Engineer", duration: "2020-2023" },
        ],
        status:'Interview Schedule'
      },
      {
        id: 9,
        name: "Isabella Brown",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/isabellabrown",
        bio: "Senior engineer with expertise in AI/ML systems and big data analytics. Experienced in Python, TensorFlow, and distributed computing.",
        education: "Master’s in Computer Science, University of Illinois",
        previousExperience: [
          { company: "DataMind", role: "AI Engineer", duration: "2017-2020" },
          { company: "BigData Solutions", role: "Senior Data Scientist", duration: "2020-2023" },
        ],
        status:'Interview Schedule'
      },
      {
        id: 10,
        name: "Oliver White",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/oliverwhite",
        bio: "Software engineer with a strong focus on cloud-native applications and DevOps practices. Proficient in Java, Python, and GCP.",
        education: "Bachelor’s in Computer Engineering, University of Michigan",
        previousExperience: [
          { company: "TechSphere", role: "Software Engineer", duration: "2016-2019" },
          { company: "CloudWorks", role: "Senior Software Engineer", duration: "2019-2023" },
        ],
        status:'Pending'
      },
    ]
  },
  {
    id: 2,
    "title": "Product Manager",
    "name": "InnovateTech Solutions",
    "description": "Oversee product development from concept to launch, coordinate with stakeholders, and drive product strategy.",
    "responsibilities": [
      "Develop product roadmaps and define product features.",
      "Work with engineering and design teams to build and refine products.",
      "Analyze market trends and customer needs to guide product strategy.",
      "Manage product lifecycle and prioritize features."
    ],
    "qualifications": [
      "Bachelor’s degree in Business, Marketing, or related field.",
      "5+ years of experience in product management.",
      "Experience with agile development and product lifecycle management.",
      "Strong analytical and project management skills."
    ],
    "skills": [
      "Product roadmapping",
      "Agile development",
      "Market analysis",
      "Project management"
    ],
    "number_of_applicants": 80,
    "screening_questions": [
      "Describe a time when you had to pivot your product strategy. What was the outcome?",
      "How do you prioritize features in a product roadmap?",
      "How do you handle conflicts between stakeholders and product requirements?"
    ],
    "status": "close",
    "type": "onsite",
    "location": "India",
    "applicants": [
      {
        id: 1,
        name: "Ethan Cooper",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/ethancooper",
        bio: "Product Manager with 3 years of experience in leading cross-functional teams to deliver innovative software solutions. Skilled in Agile methodologies, market research, and product lifecycle management.",
        education: "MBA, Harvard Business School",
        previousExperience: [
          { company: "TechStart", role: "Associate Product Manager", duration: "2018-2020" },
          { company: "InnoSoft", role: "Product Manager", duration: "2020-2023" },
        ],
        status:'Pending'
      },
      {
        id: 2,
        name: "Grace Evans",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/graceevans",
        bio: "Experienced Product Manager with a passion for customer-centric product design. Strong background in product strategy, market analysis, and stakeholder management.",
        education: "Bachelor’s in Business Administration, Stanford University",
        previousExperience: [
          { company: "TechHub", role: "Product Manager", duration: "2017-2020" },
          { company: "InnovateX", role: "Senior Product Manager", duration: "2020-2023" },
        ],
        status:'Pending'
      },
      {
        id: 3,
        name: "William Taylor",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/williamtaylor",
        bio: "Product Manager with a technical background in software engineering and expertise in delivering SaaS products. Adept at bridging the gap between technical and business teams.",
        education: "Bachelor’s in Computer Science, University of California, Berkeley",
        previousExperience: [
          { company: "CloudWare", role: "Technical Product Manager", duration: "2018-2021" },
          { company: "NextGen Solutions", role: "Product Manager", duration: "2021-2023" },
        ],
        status:'Interview Schedule'
      },
      {
        id: 4,
        name: "Sophia Reed",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/sophiareed",
        bio: "Results-driven Product Manager with 5 years of experience in launching successful digital products. Skilled in market research, user experience design, and Agile frameworks.",
        education: "Master’s in Product Management, MIT",
        previousExperience: [
          { company: "AppDev Solutions", role: "Product Manager", duration: "2018-2021" },
          { company: "TechCraft", role: "Senior Product Manager", duration: "2021-2023" },
        ],
        status:'Reject'
      },
      {
        id: 5,
        name: "Noah Foster",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/noahfoster",
        bio: "Product Manager with a background in data analytics and experience in leading product development for mobile applications. Strong problem-solving and decision-making skills.",
        education: "Bachelor’s in Data Science, University of Washington",
        previousExperience: [
          { company: "AppMetrics", role: "Product Manager", duration: "2019-2022" },
          { company: "DataPulse", role: "Senior Product Manager", duration: "2022-2023" },
        ],
        status:'Reject'
      },
      {
        id: 6,
        name: "Amelia Clark",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/ameliaclar",
        bio: "Product Manager with experience in building B2B software products. Expert in Agile methodologies and working closely with engineering teams to deliver high-quality solutions.",
        education: "MBA, Kellogg School of Management",
        previousExperience: [
          { company: "ProTech", role: "Product Manager", duration: "2019-2021" },
          { company: "B2BSoft", role: "Senior Product Manager", duration: "2021-2023" },
        ],
        status:'Pending'
      },
      {
        id: 7,
        name: "Lucas Johnson",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/lucasjohnson",
        bio: "Skilled Product Manager with expertise in data-driven decision making and customer insights. Proven ability to deliver products that exceed market expectations.",
        education: "Master’s in Business Analytics, NYU Stern",
        previousExperience: [
          { company: "NextCloud", role: "Product Manager", duration: "2018-2021" },
          { company: "TechWave", role: "Senior Product Manager", duration: "2021-2023" },
        ],
        status:'Pending'
      },
      {
        id: 8,
        name: "Emma Davis",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/emmadavis",
        bio: "Product Manager with a background in UX design and user research. Strong focus on building user-centered products that solve real customer problems.",
        education: "Bachelor’s in Human-Computer Interaction, Carnegie Mellon University",
        previousExperience: [
          { company: "WebApps Co.", role: "Associate Product Manager", duration: "2020-2022" },
          { company: "Innovative Web", role: "Product Manager", duration: "2022-2023" },
        ],
        status:'Interview Schedule'
      },
      {
        id: 9,
        name: "Henry Wright",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/henrywright",
        bio: "Product Manager with 4 years of experience in launching eCommerce platforms. Skilled in digital marketing, customer research, and cross-functional collaboration.",
        education: "Bachelor’s in Marketing, University of Pennsylvania",
        previousExperience: [
          { company: "ShopEase", role: "Product Manager", duration: "2018-2021" },
          { company: "eCommercePro", role: "Senior Product Manager", duration: "2021-2023" },
        ],
        status:'Pending'
      },
      {
        id: 10,
        name: "Mia Martinez",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/miamartinez",
        bio: "Product Manager with experience in SaaS products and cloud-based solutions. Passionate about creating products that solve complex business challenges.",
        education: "Bachelor’s in Business Information Systems, University of Texas",
        previousExperience: [
          { company: "Cloud Solutions", role: "Product Manager", duration: "2019-2021" },
          { company: "SaaSPro", role: "Senior Product Manager", duration: "2021-2023" },
        ],
        status:'Pending'
      },
    ]
  },
  {
    id: 3,
    "title": "UX/UI Designer",
    "name": "InnovateTech Solutions",
    "description": "Design user-centric interfaces and experiences for web and mobile applications, and collaborate with development teams.",
    "responsibilities": [
      "Create wireframes, prototypes, and visual designs for applications.",
      "Conduct user research and usability testing.",
      "Collaborate with developers to ensure design feasibility.",
      "Maintain design consistency across platforms."
    ],
    "qualifications": [
      "Bachelor’s degree in Design, Human-Computer Interaction, or related field.",
      "3+ years of experience in UX/UI design.",
      "Proficiency in design tools such as Sketch, Figma, or Adobe Creative Suite.",
      "Strong portfolio showcasing design work and problem-solving skills."
    ],
    "skills": [
      "Wireframing",
      "Prototyping",
      "User research",
      "Design tools (Sketch, Figma, Adobe Creative Suite)"
    ],
    "number_of_applicants": 100,
    "screening_questions": [
      "Show us a project from your portfolio that you are particularly proud of and explain why.",
      "How do you approach user research and usability testing?",
      "Describe a challenge you faced while working on a design project and how you addressed it."
    ],
    "status": "close",
    "type": "onsite",
    "location": "Mumbai ,India",
    "applicants": [
      {
        id: 1,
        name: "John Doe",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/johndoe",
        bio: "Full-stack developer with a passion for building scalable software solutions. Expertise in Java and Python, with over 6 years of experience in cloud computing.",
        education: "Bachelor’s in Computer Science, Stanford University",
        previousExperience: [
          { company: "TechCorp", role: "Software Engineer", duration: "2017-2020" },
          { company: "DevSolutions", role: "Senior Software Engineer", duration: "2020-2023" },
        ],
        status:'Pending'
      },
      {
        id: 2,
        name: "Jane Smith",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/janesmith",
        bio: "Software Engineer with experience in backend systems and cloud architecture. Skilled in Python, JavaScript, and GCP.",
        education: "Master’s in Computer Science, MIT",
        previousExperience: [
          { company: "Innovative Solutions", role: "Backend Developer", duration: "2016-2019" },
          { company: "CloudNet", role: "Senior Backend Engineer", duration: "2019-2023" },
        ],
        status:'Pending'
      },
      {
        id: 3,
        name: "Alex Johnson",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/alexjohnson",
        bio: "DevOps Engineer with a focus on building robust CI/CD pipelines and cloud-native infrastructure. Proficient in AWS and Azure.",
        education: "Bachelor’s in Information Systems, UC Berkeley",
        previousExperience: [
          { company: "CloudBridge", role: "DevOps Engineer", duration: "2018-2021" },
          { company: "TechFlow", role: "Senior DevOps Engineer", duration: "2021-2023" },
        ],
        status:'Pending'
      },
      {
        id: 4,
        name: "Michael Lee",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/michaellee",
        bio: "Senior Software Engineer specializing in microservices architecture and distributed systems. Strong background in Java and AWS.",
        education: "Bachelor’s in Computer Science, Carnegie Mellon University",
        previousExperience: [
          { company: "DataStream", role: "Software Engineer", duration: "2015-2018" },
          { company: "NextGen Software", role: "Senior Software Engineer", duration: "2018-2023" },
        ],
        status:'Pending'
      },
      {
        id: 5,
        name: "Emily Carter",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/emilycarter",
        bio: "Experienced software engineer with a focus on AI/ML applications. Proficient in Python, TensorFlow, and cloud-based AI platforms.",
        education: "Master’s in Artificial Intelligence, UC San Diego",
        previousExperience: [
          { company: "AIWorks", role: "Machine Learning Engineer", duration: "2017-2020" },
          { company: "DeepTech Solutions", role: "Senior AI Engineer", duration: "2020-2023" },
        ],
        status:'Interview Schedule'
      },
      {
        id: 6,
        name: "David Kim",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/davidkim",
        bio: "Software engineer with a passion for blockchain technology and decentralized applications. Skilled in Python, Solidity, and cloud computing.",
        education: "Bachelor’s in Computer Science, Princeton University",
        previousExperience: [
          { company: "Blockchain Labs", role: "Software Engineer", duration: "2018-2020" },
          { company: "CryptoTech", role: "Senior Blockchain Engineer", duration: "2020-2023" },
        ],
        status:'Reject'
      },
      {
        id: 7,
        name: "Sophia Martinez",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/sophiamartinez",
        bio: "Full-stack engineer with expertise in web applications and microservices. Experienced with JavaScript, Python, and cloud-based environments.",
        education: "Master’s in Software Engineering, Georgia Tech",
        previousExperience: [
          { company: "WebTech Solutions", role: "Frontend Developer", duration: "2016-2019" },
          { company: "NextWeb", role: "Senior Full-Stack Developer", duration: "2019-2023" },
        ],
        status:'Reject'
      },
      {
        id: 8,
        name: "Liam Garcia",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/liamgarcia",
        bio: "Cloud engineer with experience in managing scalable infrastructure on AWS and Azure. Skilled in Python, Docker, and Kubernetes.",
        education: "Bachelor’s in Information Technology, University of Texas",
        previousExperience: [
          { company: "CloudOps", role: "Cloud Engineer", duration: "2017-2020" },
          { company: "ScaleX", role: "Senior Cloud Engineer", duration: "2020-2023" },
        ],
        status:'Interview Schedule'
      },
      {
        id: 9,
        name: "Isabella Brown",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/isabellabrown",
        bio: "Senior engineer with expertise in AI/ML systems and big data analytics. Experienced in Python, TensorFlow, and distributed computing.",
        education: "Master’s in Computer Science, University of Illinois",
        previousExperience: [
          { company: "DataMind", role: "AI Engineer", duration: "2017-2020" },
          { company: "BigData Solutions", role: "Senior Data Scientist", duration: "2020-2023" },
        ],
        status:'Pending'
      },
      {
        id: 10,
        name: "Oliver White",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/oliverwhite",
        bio: "Software engineer with a strong focus on cloud-native applications and DevOps practices. Proficient in Java, Python, and GCP.",
        education: "Bachelor’s in Computer Engineering, University of Michigan",
        previousExperience: [
          { company: "TechSphere", role: "Software Engineer", duration: "2016-2019" },
          { company: "CloudWorks", role: "Senior Software Engineer", duration: "2019-2023" },
        ],
        status:'Reject'
      },
    ]
  },
  {
    id: 4,
    "title": "Marketing Specialist",
    "name": "InnovateTech Solutions",
    "description": "Develop and execute marketing strategies to drive brand awareness and growth, and analyze marketing campaign performance.",
    "responsibilities": [
      "Create and manage marketing campaigns across various channels.",
      "Analyze campaign performance and provide insights for improvement.",
      "Coordinate with design and content teams to produce marketing materials.",
      "Manage social media accounts and digital advertising efforts."
    ],
    "qualifications": [
      "Bachelor’s degree in Marketing, Communications, or related field.",
      "3+ years of experience in marketing.",
      "Experience with digital marketing tools and analytics.",
      "Strong communication and organizational skills."
    ],
    "skills": [
      "Digital marketing",
      "Campaign management",
      "Analytics",
      "Social media"
    ],
    "number_of_applicants": 90,
    "screening_questions": [
      "Describe a successful marketing campaign you managed. What made it successful?",
      "How do you use data to inform your marketing strategies?",
      "What strategies do you use to stay current with marketing trends?"
    ],
    "status": "active",
    "type": "hybrid",
    "location": "Noida,India",
    "applicants": [
      {
        id: 1,
        name: "John Doe",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/johndoe",
        bio: "Full-stack developer with a passion for building scalable software solutions. Expertise in Java and Python, with over 6 years of experience in cloud computing.",
        education: "Bachelor’s in Computer Science, Stanford University",
        previousExperience: [
          { company: "TechCorp", role: "Software Engineer", duration: "2017-2020" },
          { company: "DevSolutions", role: "Senior Software Engineer", duration: "2020-2023" },
        ],
      },
      {
        id: 2,
        name: "Jane Smith",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/janesmith",
        bio: "Software Engineer with experience in backend systems and cloud architecture. Skilled in Python, JavaScript, and GCP.",
        education: "Master’s in Computer Science, MIT",
        previousExperience: [
          { company: "Innovative Solutions", role: "Backend Developer", duration: "2016-2019" },
          { company: "CloudNet", role: "Senior Backend Engineer", duration: "2019-2023" },
        ],
      },
      {
        id: 3,
        name: "Alex Johnson",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/alexjohnson",
        bio: "DevOps Engineer with a focus on building robust CI/CD pipelines and cloud-native infrastructure. Proficient in AWS and Azure.",
        education: "Bachelor’s in Information Systems, UC Berkeley",
        previousExperience: [
          { company: "CloudBridge", role: "DevOps Engineer", duration: "2018-2021" },
          { company: "TechFlow", role: "Senior DevOps Engineer", duration: "2021-2023" },
        ],
      },
      {
        id: 4,
        name: "Michael Lee",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/michaellee",
        bio: "Senior Software Engineer specializing in microservices architecture and distributed systems. Strong background in Java and AWS.",
        education: "Bachelor’s in Computer Science, Carnegie Mellon University",
        previousExperience: [
          { company: "DataStream", role: "Software Engineer", duration: "2015-2018" },
          { company: "NextGen Software", role: "Senior Software Engineer", duration: "2018-2023" },
        ],
      },
      {
        id: 5,
        name: "Emily Carter",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/emilycarter",
        bio: "Experienced software engineer with a focus on AI/ML applications. Proficient in Python, TensorFlow, and cloud-based AI platforms.",
        education: "Master’s in Artificial Intelligence, UC San Diego",
        previousExperience: [
          { company: "AIWorks", role: "Machine Learning Engineer", duration: "2017-2020" },
          { company: "DeepTech Solutions", role: "Senior AI Engineer", duration: "2020-2023" },
        ],
      },
      {
        id: 6,
        name: "David Kim",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/davidkim",
        bio: "Software engineer with a passion for blockchain technology and decentralized applications. Skilled in Python, Solidity, and cloud computing.",
        education: "Bachelor’s in Computer Science, Princeton University",
        previousExperience: [
          { company: "Blockchain Labs", role: "Software Engineer", duration: "2018-2020" },
          { company: "CryptoTech", role: "Senior Blockchain Engineer", duration: "2020-2023" },
        ],
      },
      {
        id: 7,
        name: "Sophia Martinez",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/sophiamartinez",
        bio: "Full-stack engineer with expertise in web applications and microservices. Experienced with JavaScript, Python, and cloud-based environments.",
        education: "Master’s in Software Engineering, Georgia Tech",
        previousExperience: [
          { company: "WebTech Solutions", role: "Frontend Developer", duration: "2016-2019" },
          { company: "NextWeb", role: "Senior Full-Stack Developer", duration: "2019-2023" },
        ],
      },
      {
        id: 8,
        name: "Liam Garcia",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/liamgarcia",
        bio: "Cloud engineer with experience in managing scalable infrastructure on AWS and Azure. Skilled in Python, Docker, and Kubernetes.",
        education: "Bachelor’s in Information Technology, University of Texas",
        previousExperience: [
          { company: "CloudOps", role: "Cloud Engineer", duration: "2017-2020" },
          { company: "ScaleX", role: "Senior Cloud Engineer", duration: "2020-2023" },
        ],
      },
      {
        id: 9,
        name: "Isabella Brown",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/isabellabrown",
        bio: "Senior engineer with expertise in AI/ML systems and big data analytics. Experienced in Python, TensorFlow, and distributed computing.",
        education: "Master’s in Computer Science, University of Illinois",
        previousExperience: [
          { company: "DataMind", role: "AI Engineer", duration: "2017-2020" },
          { company: "BigData Solutions", role: "Senior Data Scientist", duration: "2020-2023" },
        ],
      },
      {
        id: 10,
        name: "Oliver White",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/oliverwhite",
        bio: "Software engineer with a strong focus on cloud-native applications and DevOps practices. Proficient in Java, Python, and GCP.",
        education: "Bachelor’s in Computer Engineering, University of Michigan",
        previousExperience: [
          { company: "TechSphere", role: "Software Engineer", duration: "2016-2019" },
          { company: "CloudWorks", role: "Senior Software Engineer", duration: "2019-2023" },
        ],
      },
    ]
  },
  {
    id: 5,
    "title": "Frontend Developer Intern",
    "name": "InnovateTech Solutions",
    "description": "Collaborate with the development team to design and implement responsive web interfaces. Gain experience in front-end technologies while contributing to real projects.",
    "responsibilities": [
      "Assist in the development of web applications using HTML, CSS, and JavaScript.",
      "Collaborate with designers and backend developers to create user-friendly interfaces.",
      "Test and debug front-end code across multiple browsers.",
      "Stay updated with the latest web development trends and practices."
    ],
    "qualifications": [
      "Currently pursuing a degree in Computer Science, Web Development, or a related field.",
      "Basic knowledge of HTML, CSS, and JavaScript.",
      "Familiarity with modern front-end frameworks (e.g., React, Vue.js) is a plus.",
      "Strong attention to detail and problem-solving skills."
    ],
    "skills": [
      "HTML/CSS",
      "JavaScript",
      "Responsive design",
      "Debugging"
    ],
    "number_of_applicants": 45,
    "screening_questions": [
      "What front-end projects have you worked on, and what technologies did you use?",
      "How would you approach debugging a cross-browser issue?",
      "Describe a time when you had to learn a new technology or tool quickly."
    ],
    "status": "active",
    "type": "hybrid",
    "location": "Bengalore,India",
    "applicants": [
      {
        id: 1,
        name: "John Doe",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/johndoe",
        bio: "Full-stack developer with a passion for building scalable software solutions. Expertise in Java and Python, with over 6 years of experience in cloud computing.",
        education: "Bachelor’s in Computer Science, Stanford University",
        previousExperience: [
          { company: "TechCorp", role: "Software Engineer", duration: "2017-2020" },
          { company: "DevSolutions", role: "Senior Software Engineer", duration: "2020-2023" },
        ],
      },
      {
        id: 2,
        name: "Jane Smith",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/janesmith",
        bio: "Software Engineer with experience in backend systems and cloud architecture. Skilled in Python, JavaScript, and GCP.",
        education: "Master’s in Computer Science, MIT",
        previousExperience: [
          { company: "Innovative Solutions", role: "Backend Developer", duration: "2016-2019" },
          { company: "CloudNet", role: "Senior Backend Engineer", duration: "2019-2023" },
        ],
      },
      {
        id: 3,
        name: "Alex Johnson",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/alexjohnson",
        bio: "DevOps Engineer with a focus on building robust CI/CD pipelines and cloud-native infrastructure. Proficient in AWS and Azure.",
        education: "Bachelor’s in Information Systems, UC Berkeley",
        previousExperience: [
          { company: "CloudBridge", role: "DevOps Engineer", duration: "2018-2021" },
          { company: "TechFlow", role: "Senior DevOps Engineer", duration: "2021-2023" },
        ],
      },
      {
        id: 4,
        name: "Michael Lee",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/michaellee",
        bio: "Senior Software Engineer specializing in microservices architecture and distributed systems. Strong background in Java and AWS.",
        education: "Bachelor’s in Computer Science, Carnegie Mellon University",
        previousExperience: [
          { company: "DataStream", role: "Software Engineer", duration: "2015-2018" },
          { company: "NextGen Software", role: "Senior Software Engineer", duration: "2018-2023" },
        ],
      },
      {
        id: 5,
        name: "Emily Carter",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/emilycarter",
        bio: "Experienced software engineer with a focus on AI/ML applications. Proficient in Python, TensorFlow, and cloud-based AI platforms.",
        education: "Master’s in Artificial Intelligence, UC San Diego",
        previousExperience: [
          { company: "AIWorks", role: "Machine Learning Engineer", duration: "2017-2020" },
          { company: "DeepTech Solutions", role: "Senior AI Engineer", duration: "2020-2023" },
        ],
      },
      {
        id: 6,
        name: "David Kim",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/davidkim",
        bio: "Software engineer with a passion for blockchain technology and decentralized applications. Skilled in Python, Solidity, and cloud computing.",
        education: "Bachelor’s in Computer Science, Princeton University",
        previousExperience: [
          { company: "Blockchain Labs", role: "Software Engineer", duration: "2018-2020" },
          { company: "CryptoTech", role: "Senior Blockchain Engineer", duration: "2020-2023" },
        ],
      },
      {
        id: 7,
        name: "Sophia Martinez",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/sophiamartinez",
        bio: "Full-stack engineer with expertise in web applications and microservices. Experienced with JavaScript, Python, and cloud-based environments.",
        education: "Master’s in Software Engineering, Georgia Tech",
        previousExperience: [
          { company: "WebTech Solutions", role: "Frontend Developer", duration: "2016-2019" },
          { company: "NextWeb", role: "Senior Full-Stack Developer", duration: "2019-2023" },
        ],
      },
      {
        id: 8,
        name: "Liam Garcia",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/liamgarcia",
        bio: "Cloud engineer with experience in managing scalable infrastructure on AWS and Azure. Skilled in Python, Docker, and Kubernetes.",
        education: "Bachelor’s in Information Technology, University of Texas",
        previousExperience: [
          { company: "CloudOps", role: "Cloud Engineer", duration: "2017-2020" },
          { company: "ScaleX", role: "Senior Cloud Engineer", duration: "2020-2023" },
        ],
      },
      {
        id: 9,
        name: "Isabella Brown",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/isabellabrown",
        bio: "Senior engineer with expertise in AI/ML systems and big data analytics. Experienced in Python, TensorFlow, and distributed computing.",
        education: "Master’s in Computer Science, University of Illinois",
        previousExperience: [
          { company: "DataMind", role: "AI Engineer", duration: "2017-2020" },
          { company: "BigData Solutions", role: "Senior Data Scientist", duration: "2020-2023" },
        ],
      },
      {
        id: 10,
        name: "Oliver White",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/oliverwhite",
        bio: "Software engineer with a strong focus on cloud-native applications and DevOps practices. Proficient in Java, Python, and GCP.",
        education: "Bachelor’s in Computer Engineering, University of Michigan",
        previousExperience: [
          { company: "TechSphere", role: "Software Engineer", duration: "2016-2019" },
          { company: "CloudWorks", role: "Senior Software Engineer", duration: "2019-2023" },
        ],
      },
    ],
  },
  {
    id: 6,
    "title": "SDE 1 Backend",
    "name": "InnovateTech Solutions",
    "description": "Develop scalable backend systems and APIs to support front-end applications. Collaborate with cross-functional teams to deliver robust and efficient software solutions.",
    "responsibilities": [
      "Design and implement backend services and APIs.",
      "Ensure the performance, scalability, and security of backend systems.",
      "Collaborate with front-end developers and other team members to integrate user-facing elements.",
      "Write clean, maintainable, and testable code."
    ],
    "qualifications": [
      "Bachelor’s degree in Computer Science or related field.",
      "1+ year of experience in backend development.",
      "Proficiency in server-side languages (e.g., Python, Java, Node.js).",
      "Experience with database management (SQL/NoSQL)."
    ],
    "skills": [
      "Backend development",
      "API design",
      "Database management",
      "Problem-solving"
    ],
    "number_of_applicants": 60,
    "screening_questions": [
      "Describe a backend system you worked on. What challenges did you face, and how did you solve them?",
      "How do you ensure the scalability and security of your backend systems?",
      "What database technologies have you used, and why?"
    ],
    "status": "active",
    "type": "onsite",
    "location": "Gurgoan,India",
    "applicants": [
      {
        id: 1,
        name: "Ava Scott",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/avascott",
        bio: "Entry-level backend developer skilled in Python and Node.js. Passionate about building scalable web applications.",
        education: "Bachelor’s in Computer Science, University of California, Berkeley",
        previousExperience: [
          { company: "StartUpX", role: "Backend Developer Intern", duration: "2022" }
        ],
      },
      {
        id: 2,
        name: "Ben Williams",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/benwilliams",
        bio: "Backend developer specializing in microservices architecture with experience in Java and SQL databases.",
        education: "Bachelor’s in Software Engineering, University of Texas",
        previousExperience: [
          { company: "MicroTech", role: "Junior Backend Developer", duration: "2021-2022" }
        ],
      },
      {
        id: 3,
        name: "Chloe Davis",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/chloedavis",
        bio: "Backend engineer proficient in Ruby on Rails and PostgreSQL. Focused on building API services.",
        education: "Bachelor’s in Information Technology, University of Toronto",
        previousExperience: [
          { company: "TechySoft", role: "Backend Developer Intern", duration: "2021-2022" }
        ],
      },
      {
        id: 4,
        name: "Daniel Harris",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/danielharris",
        bio: "Backend developer with hands-on experience in Java, Spring Boot, and MySQL. Strong in API development and database management.",
        education: "Bachelor’s in Computer Science, University of Washington",
        previousExperience: [
          { company: "CloudGen", role: "Backend Developer Intern", duration: "2021-2022" }
        ],
      },
      {
        id: 5,
        name: "Eleanor Green",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/eleanorgreen",
        bio: "Junior backend developer focused on building reliable RESTful APIs using Python and Flask.",
        education: "Bachelor’s in Computer Engineering, University of Florida",
        previousExperience: [
          { company: "DataWave", role: "Backend Developer", duration: "2021-2023" }
        ],
      },
      {
        id: 6,
        name: "James Reed",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/jamesreed",
        bio: "Backend software engineer with knowledge in Node.js, Express.js, and MongoDB. Enthusiastic about cloud-based backend systems.",
        education: "Bachelor’s in Software Engineering, University of Michigan",
        previousExperience: [
          { company: "CodeBase", role: "Backend Engineer", duration: "2020-2022" }
        ],
      },
      {
        id: 7,
        name: "Lucas Miller",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/lucasmiller",
        bio: "Backend developer with expertise in Go, Redis, and Docker. Passionate about improving server performance.",
        education: "Bachelor’s in Computer Science, University of Wisconsin",
        previousExperience: [
          { company: "DevOpsHub", role: "Backend Engineer", duration: "2021-2023" }
        ],
      },
      {
        id: 8,
        name: "Mia Walker",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/miawalker",
        bio: "Backend engineer with experience in Node.js, Express, and working with NoSQL databases such as MongoDB.",
        education: "Bachelor’s in Information Technology, New York University",
        previousExperience: [
          { company: "AppCloud", role: "Backend Developer", duration: "2021-2023" }
        ],
      },
      {
        id: 9,
        name: "Noah Wilson",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/noahwilson",
        bio: "Backend software engineer with strong proficiency in Python, Django, and PostgreSQL. Enjoys working with APIs and databases.",
        education: "Bachelor’s in Software Engineering, UCLA",
        previousExperience: [
          { company: "WebSolutions", role: "Backend Engineer", duration: "2020-2023" }
        ],
      },
      {
        id: 10,
        name: "Olivia Brown",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/oliviabrown",
        bio: "Junior backend developer focused on building scalable backend solutions using Java, Spring, and MySQL.",
        education: "Bachelor’s in Computer Science, University of Southern California",
        previousExperience: [
          { company: "TechNest", role: "Backend Developer Intern", duration: "2021-2022" }
        ],
      },
    ]

  },
  {
    id: 7,
    "title": "Senior Software Developer",
    "name": "InnovateTech Solutions",
    "description": "Lead the development of high-quality software solutions, mentor junior developers, and drive technical decision-making for complex projects.",
    "responsibilities": [
      "Architect and develop software applications.",
      "Mentor and guide junior developers.",
      "Collaborate with cross-functional teams to design scalable solutions.",
      "Ensure best practices in code quality, testing, and deployment."
    ],
    "qualifications": [
      "Bachelor’s degree in Computer Science or related field.",
      "5+ years of experience in software development.",
      "Strong knowledge of software architecture and design patterns.",
      "Experience with cloud services and DevOps practices."
    ],
    "skills": [
      "Software architecture",
      "Cloud computing",
      "Code optimization",
      "Team leadership"
    ],
    "number_of_applicants": 35,
    "screening_questions": [
      "Describe a large-scale software project you led. What were the biggest challenges and how did you address them?",
      "How do you approach mentoring junior developers?",
      "What tools or practices do you use to ensure code quality and scalability?"
    ],
    "status": "active",
    "type": "Remote",
    "location": "UK",
    "applicants": [
      {
        id: 1,
        name: "Ava Scott",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/avascott",
        bio: "Entry-level backend developer skilled in Python and Node.js. Passionate about building scalable web applications.",
        education: "Bachelor’s in Computer Science, University of California, Berkeley",
        previousExperience: [
          { company: "StartUpX", role: "Backend Developer Intern", duration: "2022" }
        ],
      },
      {
        id: 2,
        name: "Ben Williams",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/benwilliams",
        bio: "Backend developer specializing in microservices architecture with experience in Java and SQL databases.",
        education: "Bachelor’s in Software Engineering, University of Texas",
        previousExperience: [
          { company: "MicroTech", role: "Junior Backend Developer", duration: "2021-2022" }
        ],
      },
      {
        id: 3,
        name: "Chloe Davis",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/chloedavis",
        bio: "Backend engineer proficient in Ruby on Rails and PostgreSQL. Focused on building API services.",
        education: "Bachelor’s in Information Technology, University of Toronto",
        previousExperience: [
          { company: "TechySoft", role: "Backend Developer Intern", duration: "2021-2022" }
        ],
      },
      {
        id: 4,
        name: "Daniel Harris",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/danielharris",
        bio: "Backend developer with hands-on experience in Java, Spring Boot, and MySQL. Strong in API development and database management.",
        education: "Bachelor’s in Computer Science, University of Washington",
        previousExperience: [
          { company: "CloudGen", role: "Backend Developer Intern", duration: "2021-2022" }
        ],
      },
      {
        id: 5,
        name: "Eleanor Green",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/eleanorgreen",
        bio: "Junior backend developer focused on building reliable RESTful APIs using Python and Flask.",
        education: "Bachelor’s in Computer Engineering, University of Florida",
        previousExperience: [
          { company: "DataWave", role: "Backend Developer", duration: "2021-2023" }
        ],
      },
      {
        id: 6,
        name: "James Reed",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/jamesreed",
        bio: "Backend software engineer with knowledge in Node.js, Express.js, and MongoDB. Enthusiastic about cloud-based backend systems.",
        education: "Bachelor’s in Software Engineering, University of Michigan",
        previousExperience: [
          { company: "CodeBase", role: "Backend Engineer", duration: "2020-2022" }
        ],
      },
      {
        id: 7,
        name: "Lucas Miller",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/lucasmiller",
        bio: "Backend developer with expertise in Go, Redis, and Docker. Passionate about improving server performance.",
        education: "Bachelor’s in Computer Science, University of Wisconsin",
        previousExperience: [
          { company: "DevOpsHub", role: "Backend Engineer", duration: "2021-2023" }
        ],
      },
      {
        id: 8,
        name: "Mia Walker",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/miawalker",
        bio: "Backend engineer with experience in Node.js, Express, and working with NoSQL databases such as MongoDB.",
        education: "Bachelor’s in Information Technology, New York University",
        previousExperience: [
          { company: "AppCloud", role: "Backend Developer", duration: "2021-2023" }
        ],
      },
      {
        id: 9,
        name: "Noah Wilson",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/noahwilson",
        bio: "Backend software engineer with strong proficiency in Python, Django, and PostgreSQL. Enjoys working with APIs and databases.",
        education: "Bachelor’s in Software Engineering, UCLA",
        previousExperience: [
          { company: "WebSolutions", role: "Backend Engineer", duration: "2020-2023" }
        ],
      },
      {
        id: 10,
        name: "Olivia Brown",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/oliviabrown",
        bio: "Junior backend developer focused on building scalable backend solutions using Java, Spring, and MySQL.",
        education: "Bachelor’s in Computer Science, University of Southern California",
        previousExperience: [
          { company: "TechNest", role: "Backend Developer Intern", duration: "2021-2022" }
        ],
      },
    ]
  },
  {
    id: 8,
    "title": "Technical Lead",
    "name": "InnovateTech Solutions",
    "description": "Oversee technical teams and guide the development of software projects. Ensure that engineering best practices are followed and provide leadership for complex technical challenges.",
    "responsibilities": [
      "Lead a team of engineers in the development of software solutions.",
      "Set technical direction and ensure project delivery timelines.",
      "Provide technical mentorship and guidance to team members.",
      "Collaborate with stakeholders to align technical solutions with business goals."
    ],
    "qualifications": [
      "Bachelor’s degree in Computer Science or related field.",
      "7+ years of experience in software development, including team leadership.",
      "Strong understanding of system architecture and design.",
      "Proven experience with cloud platforms, DevOps, and scalable systems."
    ],
    "skills": [
      "Team leadership",
      "System architecture",
      "Cloud platforms",
      "Project management"
    ],
    "number_of_applicants": 20,
    "screening_questions": [
      "How do you manage and motivate a team of engineers on a complex project?",
      "Describe a time when you had to make a critical technical decision. How did you approach it?",
      "What strategies do you use to balance technical excellence and project deadlines?"
    ],
    "status": "close",
    "type": "remote",
    "location": "canada",
    "applicants": [
      {
        id: 1,
        name: "John Doe",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/johndoe",
        bio: "Full-stack developer with a passion for building scalable software solutions. Expertise in Java and Python, with over 6 years of experience in cloud computing. Proven leadership in managing software teams.",
        education: "Bachelor’s in Computer Science, Stanford University",
        previousExperience: [
          { company: "TechCorp", role: "Software Engineer", duration: "2017-2020" },
          { company: "DevSolutions", role: "Senior Software Engineer", duration: "2020-2023" },
        ],
      },
      {
        id: 2,
        name: "Michael Lee",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/michaellee",
        bio: "Senior Software Engineer specializing in microservices architecture and distributed systems. Strong background in Java and AWS, with 5+ years of technical leadership experience.",
        education: "Bachelor’s in Computer Science, Carnegie Mellon University",
        previousExperience: [
          { company: "DataStream", role: "Software Engineer", duration: "2015-2018" },
          { company: "NextGen Software", role: "Senior Software Engineer", duration: "2018-2023" },
        ],
      },
      {
        id: 3,
        name: "Alex Johnson",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/alexjohnson",
        bio: "DevOps Engineer with extensive experience in building CI/CD pipelines and managing cloud-native infrastructure. Strong leadership in DevOps practices and team management.",
        education: "Bachelor’s in Information Systems, UC Berkeley",
        previousExperience: [
          { company: "CloudBridge", role: "DevOps Engineer", duration: "2018-2021" },
          { company: "TechFlow", role: "Senior DevOps Engineer", duration: "2021-2023" },
        ],
      },
      {
        id: 4,
        name: "Jane Smith",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/janesmith",
        bio: "Software Engineer with backend expertise in cloud architecture. Led teams to deliver large-scale backend services using Python and GCP.",
        education: "Master’s in Computer Science, MIT",
        previousExperience: [
          { company: "Innovative Solutions", role: "Backend Developer", duration: "2016-2019" },
          { company: "CloudNet", role: "Senior Backend Engineer", duration: "2019-2023" },
        ],
      },
      {
        id: 5,
        name: "Sophia Martinez",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/sophiamartinez",
        bio: "Full-stack engineer with expertise in microservices and team leadership. Strong background in web applications and cloud-based environments.",
        education: "Master’s in Software Engineering, Georgia Tech",
        previousExperience: [
          { company: "WebTech Solutions", role: "Frontend Developer", duration: "2016-2019" },
          { company: "NextWeb", role: "Senior Full-Stack Developer", duration: "2019-2023" },
        ],
      },
      {
        id: 6,
        name: "David Kim",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/davidkim",
        bio: "Software engineer with expertise in blockchain technology and decentralized systems. Strong technical leadership in blockchain engineering teams.",
        education: "Bachelor’s in Computer Science, Princeton University",
        previousExperience: [
          { company: "Blockchain Labs", role: "Software Engineer", duration: "2018-2020" },
          { company: "CryptoTech", role: "Senior Blockchain Engineer", duration: "2020-2023" },
        ],
      },
      {
        id: 7,
        name: "Isabella Brown",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/isabellabrown",
        bio: "Senior engineer with expertise in AI/ML systems and big data analytics. Led teams in AI-driven projects, with a strong focus on cloud computing and distributed systems.",
        education: "Master’s in Computer Science, University of Illinois",
        previousExperience: [
          { company: "DataMind", role: "AI Engineer", duration: "2017-2020" },
          { company: "BigData Solutions", role: "Senior Data Scientist", duration: "2020-2023" },
        ],
      },
      {
        id: 8,
        name: "Oliver White",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/oliverwhite",
        bio: "Software engineer with a strong focus on cloud-native applications and DevOps practices. Led teams to build scalable, cloud-based solutions in GCP environments.",
        education: "Bachelor’s in Computer Engineering, University of Michigan",
        previousExperience: [
          { company: "TechSphere", role: "Software Engineer", duration: "2016-2019" },
          { company: "CloudWorks", role: "Senior Software Engineer", duration: "2019-2023" },
        ],
      },
      {
        id: 9,
        name: "Emily Carter",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/emilycarter",
        bio: "Experienced software engineer focused on AI/ML applications. Strong leadership in managing machine learning teams and delivering innovative AI solutions.",
        education: "Master’s in Artificial Intelligence, UC San Diego",
        previousExperience: [
          { company: "AIWorks", role: "Machine Learning Engineer", duration: "2017-2020" },
          { company: "DeepTech Solutions", role: "Senior AI Engineer", duration: "2020-2023" },
        ],
      },
      {
        id: 10,
        name: "Liam Garcia",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/liamgarcia",
        bio: "Cloud engineer with experience in managing scalable cloud infrastructure. Led cloud engineering teams to deliver robust solutions on AWS and Azure.",
        education: "Bachelor’s in Information Technology, University of Texas",
        previousExperience: [
          { company: "CloudOps", role: "Cloud Engineer", duration: "2017-2020" },
          { company: "ScaleX", role: "Senior Cloud Engineer", duration: "2020-2023" },
        ],
      }
    ]
  },
  {
    id: 9,
    "title": "HR Specialist",
    "name": "InnovateTech Solutions",
    "description": "Manage various human resources functions including recruitment, employee relations, and performance management. Ensure that HR policies align with organizational goals.",
    "responsibilities": [
      "Manage recruitment and hiring processes.",
      "Facilitate employee onboarding and training.",
      "Oversee employee performance reviews and feedback sessions.",
      "Ensure compliance with HR policies and regulations."
    ],
    "qualifications": [
      "Bachelor’s degree in Human Resources, Business Administration, or related field.",
      "3+ years of experience in human resources.",
      "Knowledge of HR best practices and labor laws.",
      "Strong communication and conflict resolution skills."
    ],
    "skills": [
      "Recruitment",
      "Employee relations",
      "Performance management",
      "Compliance"
    ],
    "number_of_applicants": 50,
    "screening_questions": [
      "Describe your experience managing the recruitment process. How do you ensure a good fit between candidate and company?",
      "How do you handle conflicts in the workplace?",
      "What strategies do you use to improve employee engagement and retention?"
    ],
    "status": "close",
    "type": "onsite",
    "location": "Noida,India",
    "applicants": [
      {
        id: 1,
        name: "Olivia Johnson",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/oliviajohnson",
        bio: "HR Specialist with over 5 years of experience in recruitment, employee relations, and talent management. Strong background in employee engagement and performance management.",
        education: "Bachelor’s in Human Resource Management, University of California, Los Angeles",
        previousExperience: [
          { company: "TalentPros", role: "HR Coordinator", duration: "2016-2019" },
          { company: "PeopleFirst", role: "HR Specialist", duration: "2019-2023" },
        ],
      },
      {
        id: 2,
        name: "Ethan Brown",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/ethanbrown",
        bio: "HR professional specializing in talent acquisition and employee onboarding. Experience working with tech startups to scale their teams effectively.",
        education: "Master’s in Human Resource Management, New York University",
        previousExperience: [
          { company: "StartUpHR", role: "Recruitment Specialist", duration: "2017-2020" },
          { company: "TalentEdge", role: "HR Specialist", duration: "2020-2023" },
        ],
      },
      {
        id: 3,
        name: "Emma Davis",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/emmadavis",
        bio: "Experienced HR Specialist with a focus on diversity and inclusion, employee training, and compliance. Skilled in developing HR policies and fostering a positive work culture.",
        education: "Bachelor’s in Business Administration, University of Southern California",
        previousExperience: [
          { company: "InclusiveCorp", role: "HR Assistant", duration: "2015-2018" },
          { company: "DiversityTech", role: "HR Specialist", duration: "2018-2023" },
        ],
      },
      {
        id: 4,
        name: "Sophia Lee",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/sophialee",
        bio: "HR Specialist with a strong background in performance management and employee engagement. Experienced in implementing HR software solutions and improving organizational effectiveness.",
        education: "Bachelor’s in Human Resources, Michigan State University",
        previousExperience: [
          { company: "HR Innovations", role: "HR Analyst", duration: "2016-2019" },
          { company: "TeamGrowth", role: "HR Specialist", duration: "2019-2023" },
        ],
      },
      {
        id: 5,
        name: "Liam Martinez",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/liammartinez",
        bio: "HR professional with expertise in compensation and benefits administration, employee wellness programs, and organizational development.",
        education: "Master’s in Human Resource Management, Columbia University",
        previousExperience: [
          { company: "BenefitPlus", role: "HR Coordinator", duration: "2017-2020" },
          { company: "HealthCorp", role: "HR Specialist", duration: "2020-2023" },
        ],
      },
      {
        id: 6,
        name: "Isabella Taylor",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/isabellataylor",
        bio: "HR Specialist with a focus on employee relations, conflict resolution, and talent retention. Strong experience in managing HR operations for large corporations.",
        education: "Bachelor’s in Human Resource Management, University of Texas at Austin",
        previousExperience: [
          { company: "CorpHR", role: "HR Associate", duration: "2016-2019" },
          { company: "GlobalEnterprises", role: "HR Specialist", duration: "2019-2023" },
        ],
      },
      {
        id: 7,
        name: "James Wilson",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/jameswilson",
        bio: "HR professional with extensive experience in recruitment, workforce planning, and employee development. Passionate about building a supportive and efficient HR environment.",
        education: "Bachelor’s in Business Administration, University of North Carolina",
        previousExperience: [
          { company: "TechHire", role: "HR Coordinator", duration: "2015-2018" },
          { company: "PeopleMatter", role: "HR Specialist", duration: "2018-2023" },
        ],
      },
      {
        id: 8,
        name: "Mia Robinson",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/miarobinson",
        bio: "HR Specialist with a background in talent acquisition, employee onboarding, and HR analytics. Experienced in managing recruitment strategies and improving hiring processes.",
        education: "Master’s in Organizational Psychology, University of California, Berkeley",
        previousExperience: [
          { company: "RecruitTech", role: "Talent Acquisition Coordinator", duration: "2017-2020" },
          { company: "BrightFutures", role: "HR Specialist", duration: "2020-2023" },
        ],
      },
      {
        id: 9,
        name: "Benjamin White",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/benjaminwhite",
        bio: "Experienced HR professional with expertise in employee development, leadership coaching, and organizational behavior. Strong background in HR strategy for tech companies.",
        education: "Master’s in Human Resource Development, University of Illinois",
        previousExperience: [
          { company: "Leadership Solutions", role: "HR Coordinator", duration: "2016-2019" },
          { company: "TechLeaders", role: "HR Specialist", duration: "2019-2023" },
        ],
      },
      {
        id: 10,
        name: "Ella Harris",
        profilePicture: "https://dummyimage.com/64x64/000/fff",
        linkedIn: "https://www.linkedin.com/in/ellaharris",
        bio: "HR Specialist with a focus on employee engagement, retention strategies, and HR operations. Experienced in managing cross-functional teams and streamlining HR processes.",
        education: "Bachelor’s in Human Resources, Indiana University",
        previousExperience: [
          { company: "EngageCorp", role: "HR Assistant", duration: "2016-2018" },
          { company: "HR Boost", role: "HR Specialist", duration: "2018-2023" },
        ],
      }
    ]
  }
]

export default JobPostData;