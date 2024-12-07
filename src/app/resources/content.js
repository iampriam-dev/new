import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: "Priam",
    lastName: "Mishra",
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: "Design Engineer",
    avatar: "/images/avatar.jpg",
    location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: (
        <>
            I occasionally write about design, technology, and share thoughts on
            the intersection of creativity and engineering.
        </>
    ),
};

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: "GitHub",
        icon: "github",
        link: "https://github.com/",
    },
    {
        name: "LinkedIn",
        icon: "linkedin",
        link: "https://www.linkedin.com/",
    },
    {
        name: "X",
        icon: "x",
        link: "",
    },
    {
        name: "Email",
        icon: "email",
        link: "mailto:official@iampriyam.me",
    },
];

const home = {
    label: "Home",
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Design engineer and builder</>,
    subline: (
        <>
            I'm Priam, a design engineer at <InlineCode>FLY</InlineCode>, where
            I craft intuitive
            <br /> user experiences. After hours, I build my own projects.
        </>
    ),
};

const about = {
    label: "About",
    title: "About me",
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true,
    },
    avatar: {
        display: true,
    },
    calendar: {
        display: true,
        link: "https://cal.com",
    },
    intro: {
        display: true,
        title: "Introduction",
        description: (
            <>
                IAMPRIAM is developer with a passion for transforming complex
                challenges into simple, elegant design solutions. Her work spans
                digital interfaces, interactive experiences, and the convergence
                of design and technology.
            </>
        ),
    },
    work: {
        display: true, // set to false to hide this section
        title: "Work Experience",
        experiences: [
            {
                company: "Owner of TuffCloud",
                timeframe: "2022 - Present",
                role: "Senior Design Engineer",
                achievements: [
                    <>
                        Redesigned the UI/UX for the TuffCloud platform,
                        resulting in a 20% increase in user engagement and 30%
                        faster load times.
                    </>,
                    <>
                        Spearheaded the integration on panel and improved there
                        performance.
                    </>,
                ],
                images: [
                    // optional: leave the array empty if you don't want to display images
                    {
                        src: "/images/projects/project-01/cover-04.jpg",
                        alt: "Tuff.INC Project",
                        width: 16,
                        height: 9,
                    },
                ],
            },
            {
                company: "Owner of TuffMC",
                timeframe: "Comming soon..",
                role: "Lead Designer",
                achievements: [
                    <>
                        IT is a minecraft server which is still
                        underdevelopement but it comming with all custom plugin
                        coded in clean java and optimized fork of paper and
                        velocity for best latency and performance for players.
                    </>,
                ],
                images: [],
            },
        ],
    },
    studies: {
        display: true, // set to false to hide this section
        title: "Studies",
        institutions: [
            {
                name: "ENDING 12TH",
                description: <>Ending 12TH IN MONTHS.</>,
            },
            {
                name: "Build the Future",
                description: (
                    <>
                        Studied online marketing and developing high experince
                        in ubuntu and conical's and HTML TO WHMCS THEME MIGRATOR
                        expert in python and web developement learning UI/UX.
                    </>
                ),
            },
        ],
    },
    technical: {
        display: true, // set to false to hide this section
        title: "Technical skills",
        skills: [
            {
                title: "WHMCS, Wordpress & PHP",
                description: (
                    <>
                        Able to make whmcs themes, migrate theme of html to
                        whmcs, able to make Pterodactyl themes & php website,
                        high skilled in python and MC server developing.
                    </>
                ),
                images: [
                    {
                        src: "/images/projects/project-01/cover-02.jpg",
                        alt: "Project image",
                        width: 16,
                        height: 9,
                    },
                    {
                        src: "/images/projects/project-01/cover-03.jpg",
                        alt: "Project image",
                        width: 16,
                        height: 9,
                    },
                ],
            },
            {
                title: "Next.js",
                description: (
                    <>
                        Building next gen apps with Next.js + Once UI +
                        Supabase.
                    </>
                ),
                images: [
                    {
                        src: "/images/projects/project-01/cover-04.jpg",
                        alt: "Project image",
                        width: 16,
                        height: 9,
                    },
                ],
            },
        ],
    },
};

const blog = {
    label: "Blog",
    title: "Writing about design and tech...",
    description: `Read what ${person.name} has been up to recently`,
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
};

const work = {
    label: "Work",
    title: "My projects",
    description: `Design and dev projects by ${person.name}`,
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
};

const gallery = {
    label: "Gallery",
    title: "My photo gallery",
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        {
            src: "/images/gallery/img-01.jpg",
            alt: "image",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/img-02.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/img-03.jpg",
            alt: "image",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/img-04.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/img-05.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/img-06.jpg",
            alt: "image",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/img-07.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/img-08.jpg",
            alt: "image",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/img-09.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/img-10.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/img-11.jpg",
            alt: "image",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/img-12.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/img-13.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/img-14.jpg",
            alt: "image",
            orientation: "horizontal",
        },
    ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
