export type Language = "en" | "fr" | "es";

export const translations = {
  en: {
    navbar: {
      home: "Home",
      blog: "Blog",
      theme: "Theme",
      downloadResume: "Resume",
    },
    hero: {
      greeting: "Hi, I'm",
      description:
        "Freelance for over 6 years, I primarily support startups and scale-ups in their ambition to successfully deliver innovative projects.",
    },
    kpis: {
      experience: "Years Experience",
      companies: "Companies & Clients",
      performance: "Performance Gains",
      languages: "Languages",
    },
    sections: {
      about: "About",
      work: "Work Experience",
      education: "Education",
      skills: "Skills",
      projects: "Projects",
      contact: "Get in Touch",
    },
    workSection: {
      present: "Present",
      context: "Context",
      keyResponsibilities: "Key Responsibilities",
      keyResults: "Key Results",
      stack: "Stack",
    },
    contactSection: {
      badge: "Get in Touch",
      title: "Want to collaborate?",
    },
    professionalInfo: {
      available: "Available",
      location: "Madrid, Spain",
      remoteLabel: "Remote",
      remote: "(monthly travel to France)",
      rate: "TJM: €500-650",
    },
    summary:
      "Data Scientist & Backend Engineer with 6 years of freelance experience specializing in Python, Data Engineering, Machine Learning, and backend architecture. Expert in designing scalable APIs, data pipelines, and cloud deployment (AWS). Passionate about performance optimization and building robust data-driven solutions. I've co-founded multiple startups and led technical teams, focusing on AI-powered products and data infrastructure at scale.",
    location: "Madrid, Spain",
    work: [
      {
        title: "Co-founder & CTO",
        start: "April 2025",
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
      },
      {
        title: "Founder & CTO",
        start: "September 2024",
        end: "March 2025",
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
      },
      {
        title: "CTO",
        start: "April 2024",
        end: "December 2024",
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
      },
      {
        title: "Data Scientist & Backend Engineer",
        start: "March 2024",
        end: "June 2024",
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
      },
      {
        title: "Team Leader | Data Science & Backend Python",
        start: "December 2022",
        end: "September 2024",
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
      },
      {
        title: "Data Scientist",
        start: "September 2018",
        end: "March 2020",
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
      },
    ],
    education: [
      {
        degree: "Engineering Degree - Computer Science",
      },
      {
        degree: "Master of Science - Computer Science",
      },
    ],
    projects: [
      {
        title: "HoptyCV",
        description:
          "SaaS platform for service companies to help them automatically generate skills portfolios via AI. Also serves as a CV database to find the best candidates for specific needs.",
      },
      {
        title: "Reevu",
        description:
          "CRM platform for YouTube creators with real-time comment analysis, sentiment analysis, and audience segmentation via NLP.",
      },
      {
        title: "Video Episode Detection System",
        description:
          "Automatic episode detection in compilation videos at large scale using custom embeddings and ChromaDB for similarity search.",
      },
    ],
  },
  fr: {
    navbar: {
      home: "Accueil",
      blog: "Blog",
      theme: "Thème",
      downloadResume: "CV",
    },
    hero: {
      greeting: "Salut, moi c'est",
      description:
        "Freelance depuis plus de 6 ans, j'accompagne principalement des startups et scale-ups dans leur volonté de mener à bien des projets innovants.",
    },
    kpis: {
      experience: "Années d'expérience",
      companies: "Clients accompagnés",
      performance: "NPS (Malt)",
      languages: "Langues",
    },
    sections: {
      about: "À propos",
      work: "Expérience Professionnelle",
      education: "Formation",
      skills: "Compétences",
      projects: "Projets",
      contact: "Me Contacter",
    },
    workSection: {
      present: "Aujourd'hui",
      context: "Contexte",
      keyResponsibilities: "Responsabilités Clés",
      keyResults: "Résultats Clés",
      stack: "Stack",
    },
    contactSection: {
      badge: "Contactez-moi",
      title: "Envie de collaborer ?",
    },
    professionalInfo: {
      available: "Disponible",
      location: "Madrid, Espagne",
      remoteLabel: "Télétravail",
      remote: "(déplacements mensuels en France)",
      rate: "TJM : 500-650€",
    },
    summary:
      "Data Scientist & Backend Engineer avec 6 ans d'expérience en freelance spécialisé en Python, Data Engineering, Machine Learning et architecture backend. Expert en conception d'APIs scalables, pipelines de données, et déploiement cloud (AWS). Passionné par l'optimisation de performances et la création de solutions data-driven robustes. J'ai co-fondé plusieurs startups et dirigé des équipes techniques, en me concentrant sur des produits alimentés par l'IA et l'infrastructure de données à grande échelle.",
    location: "Madrid, Espagne",
    work: [
      {
        title: "Co-fondateur & CTO",
        start: "Avril 2025",
        context:
          "Plateforme SaaS complète automatisant la génération de portfolios de compétences pour les chercheurs d'emploi via l'analyse de CV par IA",
        responsibilities: [
          "Architecture backend FastAPI avec agents IA pour parsing de CVs, extraction de compétences et scoring",
          "Construction d'un pipeline ETL robuste pour traitement et enrichissement de données profils à grande échelle",
          "Implémentation d'un système de templates dynamiques avec génération PDF et adaptation automatique aux offres d'emploi",
          "Intégration de LLMs (OpenAI, Perplexity) pour analyse sémantique et matching de compétences",
          "Mise en place de l'orchestration des tâches asynchrones pour traitement de CVs en batch",
        ],
        results: [
          "Automatisation de la génération de portfolios réduisant le travail manuel de 90%",
          "Traitement de 1000+ CVs par jour avec une haute précision",
          "Atteinte de 95% de précision d'extraction de compétences avec des prompts LLM personnalisés",
        ],
      },
      {
        title: "Fondateur & CTO",
        start: "Septembre 2024",
        end: "Mars 2025",
        context:
          "Plateforme CRM aidant les créateurs YouTube à comprendre leur audience grâce à l'analyse et aux insights alimentés par l'IA",
        responsibilities: [
          "Conception et développement de l'architecture backend pour plateforme d'analytics YouTube",
          "Construction d'un pipeline ETL pour ingestion temps-réel de données YouTube (commentaires, métriques) via API",
          "Développement de modèles ML pour analyse de sentiment et extraction d'insights des commentaires",
          "Optimisation de la base de données PostgreSQL pour requêtes rapides sur millions de commentaires",
          "Construction d'un pipeline de traitement NLP avec vectorisation et clustering pour segmentation d'audience",
          "Implémentation de webhooks et système de notifications pour alertes temps-réel",
        ],
        results: [
          "Analyse de 10M+ commentaires avec 92% de précision de sentiment",
          "Réduction de la latence API de 5s à 500ms grâce à l'optimisation",
          "Activation d'insights temps-réel pour 500+ chaînes YouTube",
        ],
      },
      {
        title: "CTO",
        start: "Avril 2024",
        end: "Décembre 2024",
        context:
          "Plateforme de recrutement exploitant l'IA pour matcher les candidats avec les opportunités d'emploi via l'analyse avancée de personas",
        responsibilities: [
          "Direction de la refonte complète de l'infrastructure backend et de l'architecture microservices",
          "Conception et implémentation d'une base de données de personas optimisée pour la recherche de candidats",
          "Construction d'un pipeline Airflow pour parsing automatique de CVs, extraction d'entités et scoring de compétences via LLM",
          "Déploiement d'infrastructure cloud avec Railway et AWS pour déploiement scalable et monitoring",
          "Direction des équipes Backend (2-3 personnes) et Data (2-3 personnes) avec guidance d'architecture et revue de code",
          "Contribution à la stratégie produit et définition de la roadmap technique",
        ],
        results: [
          "Réduction du temps de traitement CV de 30s à 2s (amélioration de 93%)",
          "Diminution de la latence API de 5s à 500ms (amélioration de 90%)",
          "Mise à l'échelle réussie du système pour gérer 10K+ CVs par jour",
        ],
      },
      {
        title: "Data Scientist & Backend Engineer",
        start: "Mars 2024",
        end: "Juin 2024",
        context:
          "Système alimenté par l'IA pour détecter et classifier automatiquement les épisodes dans des compilations vidéo à grande échelle",
        responsibilities: [
          "Construction d'un pipeline de traitement vidéo avec téléchargement, extraction de frames et encodage vectoriel",
          "Développement d'un algorithme d'embedding personnalisé pour reconnaissance de contenu visuel et détection d'épisodes",
          "Implémentation d'une infrastructure de stockage distribué avec AWS S3 et vectorstore ChromaDB",
          "Création d'un système de scoring intelligent pour classification et regroupement automatique d'épisodes",
          "Déploiement et orchestration du traitement sur AWS EC2 pour calcul distribué",
        ],
        results: [
          "Traitement de 50K+ vidéos avec 88% de précision de détection",
          "Réduction du temps de taggage manuel de 95%",
          "Atteinte d'un temps de traitement moyen de 2s par vidéo",
        ],
      },
      {
        title: "Team Leader | Data Science & Backend Python",
        start: "Décembre 2022",
        end: "Septembre 2024",
        context:
          "Plateforme d'orientation professionnelle utilisant des recommandations basées sur le ML pour aider les utilisateurs à découvrir des opportunités professionnelles",
        responsibilities: [
          "Management d'une équipe de 4 data scientists/engineers sur des projets backend Python et ML",
          "Développement d'une architecture microservices avec FastAPI et Django",
          "Création et maintenance d'une base de données graph (ArangoDB) pour compétences professionnelles et relations",
          "Conception d'APIs REST pour moteur de recommandation basé sur ML",
        ],
        results: [
          "Direction de la livraison de 3 versions majeures par l'équipe",
          "Amélioration de la précision des recommandations de 40%",
          "Mise à l'échelle du système pour supporter 100K+ utilisateurs actifs",
        ],
      },
      {
        title: "Data Scientist",
        start: "Septembre 2018",
        end: "Mars 2020",
        context:
          "Plateforme de réservation de voyages connectant les voyageurs avec des agents locaux pour des expériences de voyage personnalisées",
        responsibilities: [
          "Construction d'un outil de taggage automatique NLP pour données textuelles de projets de voyage",
          "Réalisation d'analyses ad-hoc pour les équipes vente, marketing, acquisition et produit",
          "Développement de POC sous Flask et plateforme de reporting interne",
          "Construction d'un modèle de scoring de sessions en ligne et de pricing utilisant data mining et machine learning",
          "Réalisation d'analyses de clustering pour clients et destinations, plus études de causalité",
          "Formation de l'équipe Data sur SQL, BigQuery et Python",
        ],
        results: [
          "Automatisation du taggage de 100K+ projets de voyage avec 85% de précision",
          "Amélioration du modèle de pricing conduisant à une augmentation de 12% du revenu",
          "Activation de décisions basées sur les données dans 4 départements",
        ],
      },
    ],
    education: [
      {
        degree: "Diplôme d'Ingénieur - Computer Science",
      },
      {
        degree: "Master of Science - Computer Science",
      },
    ],
    projects: [
      {
        title: "HoptyCV",
        description:
          "Plateforme SaaS à destination des sociétes de service, pour les aider à générer automatiquement des dossiers de compétences via IA. Sert également de CV-thèque pour trouver les meilleurs candidats pour des besoins spécifiques.",
      },
      {
        title: "Reevu",
        description:
          "Plateforme CRM pour créateurs YouTube avec analyse des commentaires en temps réel, analyse de sentiment et segmentation d'audience via NLP.",
      },
    ],
  },
  es: {
    navbar: {
      home: "Inicio",
      blog: "Blog",
      theme: "Tema",
      downloadResume: "CV",
    },
    hero: {
      greeting: "Hola, soy",
      description:
        "Freelance desde hace más de 6 años, apoyo principalmente a startups y scale-ups en su voluntad de llevar a cabo proyectos innovadores.",
    },
    kpis: {
      experience: "Años de Experiencia",
      companies: "Empresas y Clientes",
      performance: "Mejora de Rendimiento",
      languages: "Idiomas Hablados",
    },
    sections: {
      about: "Sobre mí",
      work: "Experiencia Profesional",
      education: "Formación",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
    },
    workSection: {
      present: "Actualidad",
      context: "Contexto",
      keyResponsibilities: "Responsabilidades Clave",
      keyResults: "Resultados Clave",
      stack: "Stack",
    },
    contactSection: {
      badge: "Contáctame",
      title: "¿Quieres colaborar?",
    },
    professionalInfo: {
      available: "Disponible",
      location: "Madrid, España",
      remoteLabel: "Remoto",
      remote: "(viajes mensuales a Francia)",
      rate: "TJM: €500-650",
    },
    summary:
      "Data Scientist & Backend Engineer con 6 años de experiencia freelance especializado en Python, Data Engineering, Machine Learning y arquitectura backend. Experto en diseñar APIs escalables, pipelines de datos y despliegue en cloud (AWS). Apasionado por la optimización de rendimiento y la creación de soluciones robustas basadas en datos. He cofundado varias startups y liderado equipos técnicos, enfocándome en productos impulsados por IA e infraestructura de datos a escala.",
    location: "Madrid, España",
    work: [
      {
        title: "Co-fundador & CTO",
        start: "Abril 2025",
        context:
          "Plataforma SaaS completa que automatiza la generación de portfolios de competencias para buscadores de empleo mediante análisis de CV con IA",
        responsibilities: [
          "Arquitectura de backend FastAPI con agentes IA para parsing de CVs, extracción de competencias y scoring",
          "Construcción de pipeline ETL robusto para procesamiento y enriquecimiento de datos de perfiles a gran escala",
          "Implementación de sistema de plantillas dinámicas con generación de PDF y adaptación automática a ofertas de empleo",
          "Integración de LLMs (OpenAI, Perplexity) para análisis semántico y matching de competencias",
          "Implementación de orquestación de tareas asíncronas para procesamiento de CVs en lote",
        ],
        results: [
          "Automatización de generación de portfolios reduciendo el trabajo manual en 90%",
          "Procesamiento de 1000+ CVs por día con alta precisión",
          "Logro de 95% de precisión en extracción de competencias usando prompts LLM personalizados",
        ],
      },
      {
        title: "Fundador & CTO",
        start: "Septiembre 2024",
        end: "Marzo 2025",
        context:
          "Plataforma CRM que ayuda a creadores de YouTube a entender su audiencia mediante análisis e insights impulsados por IA",
        responsibilities: [
          "Diseño y desarrollo de arquitectura backend para plataforma de analytics de YouTube",
          "Construcción de pipeline ETL para ingesta en tiempo real de datos de YouTube (comentarios, métricas) vía API",
          "Desarrollo de modelos ML para análisis de sentimiento y extracción de insights de comentarios",
          "Optimización de base de datos PostgreSQL para consultas rápidas sobre millones de comentarios",
          "Construcción de pipeline de procesamiento NLP con vectorización y clustering para segmentación de audiencia",
          "Implementación de webhooks y sistema de notificaciones para alertas en tiempo real",
        ],
        results: [
          "Análisis de 10M+ comentarios con 92% de precisión de sentimiento",
          "Reducción de latencia API de 5s a 500ms mediante optimización",
          "Habilitación de insights en tiempo real para 500+ canales de YouTube",
        ],
      },
      {
        title: "CTO",
        start: "Abril 2024",
        end: "Diciembre 2024",
        context:
          "Plataforma de reclutamiento que aprovecha la IA para emparejar candidatos con oportunidades laborales mediante análisis avanzado de personas",
        responsibilities: [
          "Liderazgo de renovación completa de infraestructura backend y arquitectura de microservicios",
          "Diseño e implementación de base de datos de personas optimizada para búsqueda de candidatos",
          "Construcción de pipeline Airflow para parsing automático de CVs, extracción de entidades y scoring de competencias vía LLM",
          "Despliegue de infraestructura cloud con Railway y AWS para despliegue escalable y monitorización",
          "Liderazgo de equipos Backend (2-3 personas) y Data (2-3 personas) con guía de arquitectura y revisión de código",
          "Contribución a estrategia de producto y definición de roadmap técnico",
        ],
        results: [
          "Reducción del tiempo de procesamiento de CV de 30s a 2s (mejora del 93%)",
          "Disminución de latencia API de 5s a 500ms (mejora del 90%)",
          "Escalado exitoso del sistema para manejar 10K+ CVs diarios",
        ],
      },
      {
        title: "Data Scientist & Backend Engineer",
        start: "Marzo 2024",
        end: "Junio 2024",
        context:
          "Sistema impulsado por IA para detectar y clasificar automáticamente episodios dentro de compilaciones de video a gran escala",
        responsibilities: [
          "Construcción de pipeline de procesamiento de video con descarga, extracción de frames y codificación vectorial",
          "Desarrollo de algoritmo de embedding personalizado para reconocimiento de contenido visual y detección de episodios",
          "Implementación de infraestructura de almacenamiento distribuido con AWS S3 y vectorstore ChromaDB",
          "Creación de sistema de scoring inteligente para clasificación y agrupación automática de episodios",
          "Despliegue y orquestación de procesamiento en AWS EC2 para computación distribuida",
        ],
        results: [
          "Procesamiento de 50K+ videos con 88% de precisión de detección",
          "Reducción del tiempo de etiquetado manual en 95%",
          "Logro de tiempo promedio de procesamiento de 2s por video",
        ],
      },
      {
        title: "Team Leader | Data Science & Backend Python",
        start: "Diciembre 2022",
        end: "Septiembre 2024",
        context:
          "Plataforma de orientación profesional que usa recomendaciones basadas en ML para ayudar a usuarios a descubrir oportunidades profesionales",
        responsibilities: [
          "Gestión de equipo de 4 data scientists/engineers en proyectos backend Python y ML",
          "Desarrollo de arquitectura de microservicios con FastAPI y Django",
          "Creación y mantenimiento de base de datos graph (ArangoDB) para competencias profesionales y relaciones",
          "Diseño de APIs REST para motor de recomendación basado en ML",
        ],
        results: [
          "Liderazgo de entrega de 3 lanzamientos principales del equipo",
          "Mejora de precisión de recomendaciones en 40%",
          "Escalado del sistema para soportar 100K+ usuarios activos",
        ],
      },
      {
        title: "Data Scientist",
        start: "Septiembre 2018",
        end: "Marzo 2020",
        context:
          "Plataforma de reserva de viajes que conecta viajeros con agentes locales para experiencias de viaje personalizadas",
        responsibilities: [
          "Construcción de herramienta de etiquetado automático NLP para datos textuales de proyectos de viaje",
          "Realización de análisis ad-hoc para equipos de ventas, marketing, adquisición y producto",
          "Desarrollo de POC con Flask y plataforma de reporting interna",
          "Construcción de modelo de scoring de sesiones online y pricing usando data mining y machine learning",
          "Realización de análisis de clustering para clientes y destinos, más estudios de causalidad",
          "Formación del equipo Data en SQL, BigQuery y Python",
        ],
        results: [
          "Automatización del etiquetado de 100K+ proyectos de viaje con 85% de precisión",
          "Mejora del modelo de pricing conduciendo a 12% de aumento en ingresos",
          "Habilitación de decisiones basadas en datos en 4 departamentos",
        ],
      },
    ],
    education: [
      {
        degree: "Título de Ingeniero - Computer Science",
      },
      {
        degree: "Master of Science - Computer Science",
      },
    ],
    projects: [
      {
        title: "HoptyCV",
        description:
          "Plataforma SaaS destinada a empresas de servicios, para ayudarlas a generar automáticamente portafolios de competencias vía IA. Sirve también como base de datos de CVs para encontrar los mejores candidatos para necesidades específicas.",
      },
      {
        title: "Reevu",
        description:
          "Plataforma CRM para creadores de YouTube con análisis de comentarios en tiempo real, análisis de sentimiento y segmentación de audiencia vía NLP.",
      },
    ],
  },
};
