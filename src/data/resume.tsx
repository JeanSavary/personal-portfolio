import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";

export const DATA = {
  name: "Jean Savary",
  initials: "JS",
  url: "https://placeholder-url.com", // TODO: Add your personal website URL
  location: "Madrid, Spain",
  locationLink: "https://www.google.com/maps/place/madrid",
  description:
    "Senior Data Scientist & Backend Engineer Python. I specialize in building scalable APIs, data pipelines, and ML-driven solutions.",
  summary:
    "Data Scientist & Backend Engineer with [6 years of freelance experience](#/summary) specializing in [Python, Data Engineering, Machine Learning](#), and backend architecture. [Expert in designing scalable APIs, data pipelines, and cloud deployment (AWS)](#). Passionate about performance optimization and building robust data-driven solutions. I've [co-founded multiple startups](#) and [led technical teams](#), focusing on [AI-powered products](#) and [data infrastructure at scale](#).",
  avatarUrl: "/me.png",
  skills: [
    { name: "Python", icon: Python },
    { name: "FastAPI", icon: Python },
    { name: "Django", icon: Python },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "AWS", icon: Python }, // TODO: Add AWS icon if available
    { name: "Machine Learning", icon: Python },
    { name: "Redis", icon: Python }, // TODO: Add Redis icon if available
    { name: "Airflow", icon: Python }, // TODO: Add Airflow icon if available
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "jeansvy@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/JeanSavary", // TODO: Add
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/jean-savary-806681131",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:jeansvy@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "HoptyCV",
      href: "https://hoptycv.com",
      badges: [],
      location: "Remote",
      title: "Co-founder & CTO",
      logoUrl: "/hoptycv.png",
      start: "April 2025",
      end: "Present",
      description:
        "Building a complete SaaS solution for automatic generation of skills portfolios via AI. Developed FastAPI backend with AI agents for CV parsing, skills extraction, and scoring. Built robust ETL pipeline for large-scale profile data processing and enrichment. Implemented dynamic template system with PDF generation and automatic job offer adaptation. Integrated LLMs (OpenAI, Perplexity) for semantic analysis and skills matching. Stack: Python, FastAPI, PostgreSQL, Redis, Celery, Airflow, AWS (S3, Lambda, EC2), Docker, LLM APIs, Supabase.",
      context:
        "Complete SaaS platform automating skills portfolio generation for job seekers using AI-powered CV analysis",
      responsibilities: [
        "Architected FastAPI backend with AI agents for CV parsing, skills extraction, and scoring",
        "Built robust ETL pipeline for large-scale profile data processing and enrichment",
        "Implemented dynamic template system with PDF generation and automatic job offer adaptation",
        "Integrated LLMs (OpenAI, Perplexity) for semantic analysis and skills matching",
        "Implemented orchestration of asynchronous tasks for batch CV processing",
      ],
      results: [
        "Automated portfolio generation reducing manual work by 90%",
        "Processing 1000+ CVs per day with high accuracy",
        "Achieved 95% skills extraction accuracy using custom LLM prompts",
      ],
      stack:
        "Python, FastAPI, PostgreSQL, Redis, Celery, Airflow, AWS (S3, Lambda, EC2), Docker, LLM APIs, Supabase",
    },
    {
      company: "Reevu",
      href: "https://reevu.com",
      badges: [],
      location: "Remote",
      title: "Founder & CTO",
      logoUrl: "/reevu.png",
      start: "September 2024",
      end: "March 2025",
      description:
        "Designed and developed backend for YouTube analytics platform. Built ETL architecture for real-time YouTube data ingestion (comments, metrics) via API. Developed ML models for sentiment analysis and insights extraction from comments. Optimized PostgreSQL database for fast queries on millions of comments. Built NLP processing pipeline with vectorization and clustering for audience segmentation. Stack: Python, FastAPI, PostgreSQL, Redis, OpenAI API, Embeddings, NLP (NLTK, spaCy), AWS (EC2, RDS, S3), Docker, Celery.",
      context:
        "CRM platform helping YouTube creators understand their audience through AI-powered analytics and insights",
      responsibilities: [
        "Designed and developed backend architecture for YouTube analytics platform",
        "Built ETL pipeline for real-time YouTube data ingestion (comments, metrics) via API",
        "Developed ML models for sentiment analysis and insights extraction from comments",
        "Optimized PostgreSQL database for fast queries on millions of comments",
        "Built NLP processing pipeline with vectorization and clustering for audience segmentation",
        "Implemented webhooks and notification system for real-time alerts",
      ],
      results: [
        "Analyzed 10M+ comments with 92% sentiment accuracy",
        "Reduced API latency from 5s to 500ms through optimization",
        "Enabled real-time insights for 500+ YouTube channels",
      ],
      stack:
        "Python, FastAPI, PostgreSQL, Redis, OpenAI API, Embeddings, NLP (NLTK, spaCy), AWS (EC2, RDS, S3), Docker, Celery",
    },
    {
      company: "Seeqle",
      href: "https://seeqle.com",
      badges: [],
      location: "Paris (Remote)",
      title: "CTO",
      logoUrl: "/seeqle.png",
      start: "April 2024",
      end: "December 2024",
      description:
        "Complete overhaul of backend infrastructure and microservices architecture. Designed and implemented optimized persona database for candidate search. Built Airflow pipeline for automatic CV parsing, entity extraction, and skills scoring via LLM. Deployed cloud infrastructure with Railway and AWS for scalable deployment and monitoring. Led Backend (2-3 people) and Data (2-3 people) teams - architecture and code review. Optimized performance: reduced CV processing time from 30s to 2s, API latency from 5s to 500ms. Stack: Python, FastAPI, PostgreSQL, Redis, Airflow, LLM APIs (OpenAI), Railway, AWS (EC2, RDS, S3), Docker, Kubernetes.",
      context:
        "Recruitment platform leveraging AI to match candidates with job opportunities through advanced persona analysis",
      responsibilities: [
        "Led complete overhaul of backend infrastructure and microservices architecture",
        "Designed and implemented optimized persona database for candidate search",
        "Built Airflow pipeline for automatic CV parsing, entity extraction, and skills scoring via LLM",
        "Deployed cloud infrastructure with Railway and AWS for scalable deployment and monitoring",
        "Led Backend (2-3 people) and Data (2-3 people) teams with architecture guidance and code review",
        "Contributed to product strategy and defined technical roadmap",
      ],
      results: [
        "Reduced CV processing time from 30s to 2s (93% improvement)",
        "Decreased API latency from 5s to 500ms (90% improvement)",
        "Successfully scaled system to handle 10K+ CVs daily",
      ],
      stack:
        "Python, FastAPI, PostgreSQL, Redis, Airflow, LLM APIs (OpenAI), Railway, AWS (EC2, RDS, S3), Docker, Kubernetes",
    },
    {
      company: "Animaj",
      href: "https://animaj.com",
      badges: ["Freelance"],
      location: "Paris",
      title: "Data Scientist & Backend Engineer",
      logoUrl: "/animaj.png",
      start: "March 2024",
      end: "June 2024",
      description:
        "Automatic episode detection in compilation videos at large scale (~50K videos). Built video processing pipeline: download with Pytube, frame extraction, vector encoding. Developed custom embedding algorithm for visual content recognition and episode detection. Built distributed storage infrastructure with AWS S3 and ChromaDB vectorstore for fast similarity search. Implemented intelligent scoring system for automatic episode classification and grouping. Stack: Python, OpenCV, Embeddings, ChromaDB, AWS (S3, EC2), Pytube, NumPy, Pandas, Scikit-learn.",
      context:
        "AI-powered system for automatically detecting and classifying episodes within large-scale video compilations",
      responsibilities: [
        "Built video processing pipeline with download, frame extraction, and vector encoding",
        "Developed custom embedding algorithm for visual content recognition and episode detection",
        "Implemented distributed storage infrastructure with AWS S3 and ChromaDB vectorstore",
        "Created intelligent scoring system for automatic episode classification and grouping",
        "Deployed and orchestrated processing on AWS EC2 for distributed computing",
      ],
      results: [
        "Processed 50K+ videos with 88% detection accuracy",
        "Reduced manual tagging time by 95%",
        "Achieved 2s average processing time per video",
      ],
      stack:
        "Python, OpenCV, Embeddings, ChromaDB, AWS (S3, EC2), Pytube, NumPy, Pandas, Scikit-learn",
    },
    {
      company: "Diagoriente",
      href: "https://diagoriente.fr",
      badges: [],
      location: "Paris",
      title: "Team Leader | Data Science & Backend Python",
      logoUrl: "/diagoriente.png",
      start: "December 2022",
      end: "September 2024",
      description:
        "Managed a team of 4 data scientists/engineers on Python backend and ML projects. Developed microservices architecture with FastAPI and Django. Created and maintained a graph database (ArangoDB) for professional skills. Designed REST APIs for ML-based recommendation engine.",
      context:
        "Career guidance platform using ML-based recommendations to help users discover professional opportunities",
      responsibilities: [
        "Managed a team of 4 data scientists/engineers on Python backend and ML projects",
        "Developed microservices architecture with FastAPI and Django",
        "Created and maintained a graph database (ArangoDB) for professional skills and relationships",
        "Designed REST APIs for ML-based recommendation engine",
      ],
      results: [
        "Led team delivery of 3 major feature releases",
        "Improved recommendation accuracy by 40%",
        "Scaled system to support 100K+ active users",
      ],
      stack: "Python, FastAPI, Django, ArangoDB, PostgreSQL, ML, REST APIs",
    },
    {
      company: "Evaneos",
      href: "https://evaneos.com",
      badges: [],
      location: "Paris Region",
      title: "Data Scientist",
      logoUrl: "/evaneos.png",
      start: "September 2018",
      end: "March 2020",
      description:
        "Built automatic NLP tagging tool for travel project text data. Performed ad-hoc analyses for sales, marketing, acquisition, and product teams. POC under Flask and developed internal reporting platform. Built online session scoring and pricing model (data mining, machine learning). Performed clustering analyses (clients, destinations) and causality studies. Trained the Data team on SQL, BigQuery, and Python. Stack: Python, Flask, BigQuery, Jupyter, Scikit-learn, NLP (TF-IDF, word2vec), Dask, Google Analytics.",
      context:
        "Travel booking platform connecting travelers with local agents for custom trip experiences",
      responsibilities: [
        "Built automatic NLP tagging tool for travel project text data",
        "Performed ad-hoc analyses for sales, marketing, acquisition, and product teams",
        "Developed POC under Flask and internal reporting platform",
        "Built online session scoring and pricing model using data mining and machine learning",
        "Performed clustering analyses for clients and destinations, plus causality studies",
        "Trained the Data team on SQL, BigQuery, and Python",
      ],
      results: [
        "Automated tagging of 100K+ travel projects with 85% accuracy",
        "Improved pricing model leading to 12% revenue increase",
        "Enabled data-driven decisions across 4 departments",
      ],
      stack:
        "Python, Flask, BigQuery, Jupyter, Scikit-learn, NLP (TF-IDF, word2vec), Dask, Google Analytics",
    },
  ],
  otherWork: [
    {
      company: "MARBL",
      title: "Backend Engineer Python",
      start: "July 2021",
      end: "October 2022",
    },
    {
      company: "Le Wagon",
      title: "Lead Teacher Data Science",
      start: "June 2021",
      end: "December 2021",
    },
    {
      company: "Stealth",
      title: "Data Engineer",
      start: "January 2021",
      end: "March 2022",
    },
    {
      company: "Innov-Training",
      title: "Data Scientist & Backend Engineer",
      start: "July 2020",
      end: "December 2020",
    },
    {
      company: "Bouge",
      title: "CTO",
      start: "June 2020",
      end: "March 2021",
    },
    {
      company: "MoovOne",
      title: "Data Analyst Operations",
      start: "September 2021",
      end: "November 2021",
    },
  ],
  education: [
    {
      school: "IMT Atlantique",
      href: "https://www.imt-atlantique.fr",
      degree: "Engineering Degree - Computer Science",
      logoUrl: "/imt-logo.png", // TODO: Add school logo
      start: "2017",
      end: "2020",
    },
    {
      school: "École Polytechnique de Montréal",
      href: "https://www.polymtl.ca",
      degree: "Master of Science - Computer Science",
      logoUrl: "/poly-logo.png", // TODO: Add school logo
      start: "2018",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "HoptyCV",
      href: "https://hoptycv.com", // TODO: Add project URL
      dates: "April 2025 - Present",
      active: true,
      description:
        "SaaS platform for automatic generation of skills portfolios via AI. Built with FastAPI backend, AI agents for CV parsing, and LLM integration for semantic analysis.",
      technologies: [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Redis",
        "Celery",
        "Airflow",
        "AWS",
        "Docker",
        "OpenAI",
        "Supabase",
      ],
      links: [
        {
          type: "SaaS",
          href: "https://hoptycv.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/hoptycv-lp.png",
      video: "",
    },
    {
      title: "Reevu",
      href: "https://myreevu.com", // TODO: Add project URL
      dates: "September 2024 - March 2025",
      active: false,
      description:
        "CRM platform for YouTube creators with real-time analytics, sentiment analysis, and audience segmentation using NLP.",
      technologies: [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Redis",
        "OpenAI API",
        "NLP",
        "NLTK",
        "spaCy",
        "AWS",
        "Docker",
        "Celery",
      ],
      links: [
        {
          type: "SaaS",
          href: "https://myreevu.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/reevu-lp.png",
      video: "",
    },
  ],
  hackathons: [],
} as const;
