/**
 * Portfolio Configuration
 * Single source of truth for all content
 */

const CONFIG = {
    name: "Vybhav Chaturvedi",
    title: "Machine Learning Engineer || Data Scientist",
    subtitle: "Applied Research & Decision Systems",

    credentials: [
        "Data Science @ ISI Kolkata · IIT Kharagpur · IIM Calcutta",
        "Ex–ZS Associates",
            "Computer Science Engineer @ Thapar University"
    ],

    tagline: "Working at the intersection of statistical rigor, real-world data complexity, and production-aware ML systems.",

    headshots: [
        "img/img1.jpg",
        "img/img2.jpg",
        "img/img3.jpg",
        "img/img4.jpg"
    ],
    resume: "assets/Vybhav Chaturvedi_CV.pdf",
    social: {
        email: "vybhavchaturvedi@gmail.com",
        github: "https://github.com/vybhav72954",
        linkedin: "https://www.linkedin.com/in/vybhav-chaturvedi-0ba82614a/",
        instagram: "https://instagram.com/vybhav72954",
        scholar: "https://scholar.google.com/citations?user=_jvxtqQAAAAJ&hl=en&authuser=5",
        devto: "https://dev.to/vybhav",
        medium: "https://medium.com/@vybhav"
    },

    about: {
        intro: [
            "I build machine learning systems that work in production — not just in notebooks.",
            "My work spans computational biology (focus on psychiatry), time series forecasting, and anomaly detection, always grounded in statistical rigor and interpretability."
        ],
        philosophy: [
            "Accuracy over speed",
            "Interpretability over accuracy",
            "Validation over blind deployment",
            "End-to-end systems over isolated models",
            "Uncertainty quantification is not optional",
            "Insights over numbers"
        ],
        snapshot: {
            achievement: "150+ Citations across Publications || Mentor - GirlScript Summer of Code'2021 || Winner - National Semester Long Project (SLoP) - DA-IICT || Runner up - Script Winter of Code",
            experience: "3.5+ years Applied Analytics / ML",
            interests: "Healthcare · Computational Psychiatry · Human Computer Interfacing"
        }
    },

    // Projects
    projects: [
        {
            id: "mdd-biomarkers",
            category: "Healthcare",
            title: "MDD (Depression) Biomarker Discovery",
            subtitle: "Blood Transcriptomic Validation Study",
            description: "Identifying blood-based biomarkers for Major Depressive Disorder using cell-type deconvolution and consensus clustering across multiple GEO datasets.",
            skills: ["Python", "WGCNA", "Multivariate Regression", "Consensus Clustering"],
            results: "247 DEGs identified, 3 molecular subtypes, 18% endothelial signature change",
            github: "https://github.com/vybhav72954/Depression-Gene-Expression",
            featured: true
        },
        {
            id: "wages-analysis",
            category: "Time Series",
            title: "US Real Wages Analysis",
            subtitle: "Inflation-Adjusted Forecasting",
            description: "Comprehensive time series analysis with SARIMA, LSTM, and ensemble methods featuring bootstrap confidence intervals.",
            skills: ["Python", "statsmodels", "SARIMA", "Bootstrap", "Time Series"],
            results: "2.3% MAPE, 15% improvement over baseline, 94% CI coverage",
            github: "https://github.com/CWTYGs/US-Wages-Time-Series",
            featured: false
        },
        {
            id: "agentic-ai",
            category: "Applied AI",
            title: "Cuckoo.ai",
            subtitle: "Agentic RAG System for Pharma Reports",
            description: "RAG-powered agentic system for automated analysis of clinical and pharmaceutical documentation at scale.",
            skills: ["Python", "LangChain", "RAG", "Vector DBs"],
            results: "85% reduction in manual review time",
            github: "https://github.com/CWTYGs/cuckoo.ai/tree/master    ",
            featured: true
        },
        /*
        {
            id: "air-quality",
            category: "Environmental Analytics",
            title: "Air Quality Intelligence",
            subtitle: "Jagriti Challenge",
            description: "5-phase analytical pipeline studying pollution patterns across Indian cities using CPCB monitoring data.",
            skills: ["Python", "pandas", "Spatial Analysis", "Visualization"],
            results: "Comprehensive pollution pattern analysis across 50+ cities",
            github: "https://github.com/yourusername/air-quality",
            featured: false
        },
        */
        {
            id: "rag-ai",
            category: "Healthcare",
            title: "Javelin.ai",
            subtitle: "End to End Data Quality Pipeline",
            description: "Statistical methods for identifying data quality issues and protocol deviations in clinical trial datasets.",
            skills: ["Python", "Statistical Testing", "Anomaly Detection"],
            results: "Automated detection, identified 387 sites (48 critical sites), AI-generated recommendations",
            github: "https://github.com/vybhav72954/Javelin.ai",
            featured: true
        },
        /*
        {
            id: "ipl-auction",
            category: "Sports Analytics",
            title: "IPL Auction Analysis",
            subtitle: "Rajasthan Royals",
            description: "Player valuation and auction strategy optimization using historical performance data and market dynamics.",
            skills: ["Python", "ML", "Optimization", "Sports Analytics"],
            results: "Data-driven auction recommendations",
            github: "https://github.com/yourusername/ipl-auction",
            featured: false
        }
        */
        {
            id: "healthcare-ml",
            category: "Emotion Detection",
            title: "Multi-modal Bio-Signal Classification",
            subtitle: "Emotion Detection using Machine Learning",
            description: "Architected 3-phase affective computing pipeline correlating & dynamically map emotions to song mood using signal.",
            skills: ["Python", "Regression", "Random Forest", "Ensemble"],
            results: " Engineered 6k+ audio features, achieving 81.4% accuracy in 37 classes",
            github: "https://github.com/vybhav72954/Music-Mood-Analysis",
            featured: true
        },
        {
            id: "dev",
            category: "Full-Stack Dev",
            title: "Project-PG",
            subtitle: "Friends2Health Homoeopathy Clinic Website",
            description: "Created an end-to-end website for a clinic built on GO and Svelte",
            skills: ["GO", "Svelte", "JavaScript", "APIs"],
            results: "Integrated Gmail, Razorpay, Google Calendar and created an Admin Dashboard for appointment management",
            github: "https://friends2health.onrender.com/",
            featured: true
        },
        {
            id: "nlp",
            category: "NLP",
            title: "Image Caption Generator",
            subtitle: "Automatic Image Captioning - Flickr-8k Dataset.",
            description: "Using CNN models (Xception Model and Inception), created a pipeline for Image Captioning",
            skills: ["Deep Learning", "CNNs", "NLP", "LSTM", "Python"],
            results: "Created merge-architecture model using LSTM to map 2048-dim image features to 34-len text sequences achieving BLEU-1 score of 0.528",
            github: "https://github.com/vybhav72954/Automated_Image_Captioning",
            featured: false
        },
    ],

    // Publications & Patent
    publications: [
        {
            type: "paper",
            title: "Machine Learning Model for Mapping of Music Mood and Human Emotion Based on Physiological Signals",
            journal: "Multimedia Tools and Applications, Springer",
            year: "2021",
            status: "published",
            doi: "https://doi.org/10.1007/s11042-021-11650-0",
            abstract: "Study correlating human emotions and music mood using physiological signals. 35 music moods mapped to 8 emotions using bio-signals with 81.4% accuracy."
        },
        {
            type: "paper",
            title: "A Detailed Review of Music Mood and Human Emotion Recognition based on Biosignals",
            journal: "Multimedia Systems, Springer",
            year: "2021",
            status: "published",
            doi: "https://doi.org/10.1007/s00530-021-00786-6",
            abstract: "Comprehensive review of emotion detection systems, music mood analysis, and physiological feature extraction methods."
        },
        {
            type: "patent",
            title: "A System And Method For Automatic Playlist Generation By Analysing Human Emotions Through Physiological Signals",
            id: "Australian Patent 2021101097",
            year: "2021",
            status: "granted",
            expiry: "March 2029",
            abstract: "Innovative approach for emotion-driven playlist generation using brain waves, cardiac potential, and muscle signals."
        }
    ],

    // Blog Posts
    blogPosts: [
        {
            title: "Beginner's Guide to Auto-Formatting",
            platform: "DEV.to",
            url: "https://dev.to/vybhav/beginners-guide-to-auto-formatting-1hpp",
            thumbnail: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F3kbz6e104auz9ighefkt.jpg",
            date: "2021"
        },
        {
            title: "First Steps in GirlScript Summer of Code '21",
            platform: "DEV.to",
            url: "https://dev.to/vybhav/first-steps-in-girlscript-summer-of-code-21-2353",
            thumbnail: "https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fr1v7iyspirmb0493p05p.png",
            date: "2021"
        },
        {
            title: "Let's Talk About Sys",
            platform: "DEV.to",
            url: "https://dev.to/vybhav/let-s-talk-about-sys-25mf",
            thumbnail: "https://codebl0g.wordpress.com/wp-content/uploads/2019/07/python-software-logo-2.jpg",
            date: "2021"
        },
        {
            title: "Welcome to my First Blog",
            platform: "TDS",
            url: "https://medium.com/@vybhav/welcome-to-my-first-blog-208a97eac694",
            thumbnail: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*eHkB9Uv8XNrcalGyEHE_wA.jpeg",
            date: "2021"
        }
    ],

    // Experience Timeline (for the timeline section)
    experience: [
        {
            side: "left",
            title: "Graduate Student — PGDBA",
            org: "ISI Kolkata · IIT Kharagpur · IIM Calcutta",
            period: "2024 — Present",
            points: [
                "Computational biology research on MDD biomarker discovery",
                "Advanced coursework in statistical learning and optimization"
            ]
        },
        {
            side: "right",
            title: "Associate -> Associate Consultant",
            org: "ZS Associates",
            period: "Jan 2022 — Aug 2024",
            points: [
                "Led team of 4 associates for Go-to-Market & Product Management",
                "Built 'Case Study Finder' using Python & AWS (EC2, ElasticSearch, S3)",
                "Developed Python ETL pipelines boosting efficiency by 8-20%"
            ]
        },
        {
            side: "left",
            title: "ML Fellow",
            org: "Fellowship.ai - Launchpad",
            period: "Apr 2022 — Jun 2022",
            points: [
                "Music moderation ML system for piano performance analysis",
                "Achieved 94% accuracy for beat detection"
            ]
        },
        {
            side: "right",
            title: "B.E. & MBA",
            org: "Thapar Institute of Engineering and Technology",
            period: "Apr 2017 — Jul 2022",
            points: [
                "Computer Engineering & Business Administration",
                "Focus: Computer Networks, ML, Business Development"
            ]
        }
    ],

    skills: {
        "Languages": ["Python", "Go", "SQL", "HTML/CSS", "C++", "XML/YAML"],
        "ML & Deep Learning": [
            "TensorFlow", "Keras", "Sklearn", "Spark", "Hadoop",
            "Ensemble Methods", "LSTMs", "Model Evaluation", "Feature Engineering"
        ],
        "Frameworks & Tools": [
            "Flask", "FastAPI", "Docker", "Git",
            "MySQL", "MongoDB", "SQLite", "Selenium", "Streamlit"
        ],
        "Analytics & BI": [
            "PowerBI", "Advanced Excel (VBA, Macros)",
            "Pandas", "Matplotlib", "Seaborn", "Plotly"
        ],
        "Computational Biology": [
            "Differential Expression (limma, DESeq2)", "Cell-Type Deconvolution",
            "Consensus Clustering", "Pathway Enrichment", "Batch Effect Correction"
        ],
        "Other": [
            "Documentation", "Agile", "GitHub Actions", "AWS (EC2, S3, ElasticSearch)"
        ]
    }
};
