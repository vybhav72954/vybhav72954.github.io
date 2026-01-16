/**
 * Portfolio Configuration
 * Single source of truth for all content
 */

const CONFIG = {
    // Personal Info
    name: "Vybhav Chaturvedi",
    title: "Machine Learning Engineer & Data Scientist",
    subtitle: "Applied Research & Decision Systems",
    
    credentials: [
        "PGDBA (ISI Kolkata · IIT Kharagpur · IIM Calcutta)",
        "Ex–ZS Associates"
    ],
    
    tagline: "Working at the intersection of statistical rigor, real-world data complexity, and production-aware ML systems.",
    
    // Headshot images for carousel
    headshots: [
        "img/headshot-1.jpg",
        "img/headshot-2.jpg",
        "img/headshot-3.jpg"
    ],
    
    // Social Links
    social: {
        email: "your.email@example.com",
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/yourusername",
        instagram: "https://instagram.com/yourusername",
        scholar: "https://scholar.google.com/citations?user=yourid",
        devto: "https://dev.to/yourusername",
        medium: "https://medium.com/@yourusername"  // TDS articles
    },
    
    // About Section
    about: {
        intro: [
            "I build machine learning systems that work in production — not just in notebooks.",
            "My work spans computational biology, time series forecasting, and anomaly detection, always grounded in statistical rigor and interpretability."
        ],
        philosophy: [
            "Accuracy over speed",
            "Interpretability over opacity", 
            "Validation over blind deployment",
            "Systems over isolated models",
            "Uncertainty quantification is not optional"
        ],
        snapshot: {
            education: "PGDBA (Joint ISI–IIT–IIM)",
            experience: "3.5+ years Analytics / ML",
            domains: "Healthcare · Enterprise · Research"
        }
    },
    
    // Projects - Simple cards
    projects: [
        {
            id: "mdd-biomarkers",
            category: "Computational Biology",
            title: "MDD Biomarker Discovery",
            subtitle: "Blood Transcriptomic Analysis",
            description: "Identifying blood-based biomarkers for Major Depressive Disorder using cell-type deconvolution and consensus clustering across multiple GEO datasets.",
            skills: ["R", "limma", "CIBERSORTx", "Consensus Clustering"],
            results: "247 DEGs identified, 3 molecular subtypes, 18% endothelial signature change",
            github: "https://github.com/yourusername/mdd-biomarkers",
            featured: true
        },
        {
            id: "wages-analysis",
            category: "Time Series",
            title: "US Real Wages Analysis",
            subtitle: "Inflation-Adjusted Forecasting",
            description: "Comprehensive time series analysis with SARIMA, LSTM, and ensemble methods featuring bootstrap confidence intervals.",
            skills: ["Python", "statsmodels", "TensorFlow", "Bootstrap"],
            results: "2.3% MAPE, 15% improvement over baseline, 94% CI coverage",
            github: "https://github.com/yourusername/us-wages-analysis",
            featured: true
        },
        {
            id: "pharma-ai",
            category: "Applied AI",
            title: "Pharmaceutical Report Analysis",
            subtitle: "Agentic RAG System",
            description: "RAG-powered agentic system for automated analysis of clinical and pharmaceutical documentation at scale.",
            skills: ["Python", "LangChain", "RAG", "Vector DBs"],
            results: "85% reduction in manual review time",
            github: "https://github.com/yourusername/pharma-ai",
            featured: true
        },
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
        {
            id: "anomaly-detection",
            category: "Healthcare ML",
            title: "Clinical Trial Anomaly Detection",
            subtitle: "Data Quality Pipeline",
            description: "Statistical methods for identifying data quality issues and protocol deviations in clinical trial datasets.",
            skills: ["Python", "Statistical Testing", "Anomaly Detection"],
            results: "Automated detection of 12 anomaly types",
            github: "https://github.com/yourusername/clinical-anomaly",
            featured: false
        },
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
    ],
    
    // Research & Publications
    research: {
        publications: [
            {
                title: "Endothelial Cell Signatures in Major Depressive Disorder: A Blood Transcriptomic Analysis",
                status: "working", // working, submitted, published
                target: "Brain, Behavior, and Immunity",
                abstract: "Computational analysis of blood transcriptomic data reveals endothelial cell dysfunction as a potential biomarker for MDD.",
                link: null
            }
        ],
        blogs: {
            devto: "https://dev.to/yourusername",
            medium: "https://medium.com/@yourusername"
        }
    },
    
    // Experience Timeline
    experience: [
        {
            title: "Graduate Student — PGDBA",
            org: "ISI Kolkata · IIT Kharagpur · IIM Calcutta",
            period: "2024 — Present",
            points: [
                "Computational biology research on MDD biomarker discovery",
                "Advanced coursework in statistical learning and optimization",
                "Cross-institutional collaboration across statistics, engineering, and business"
            ]
        },
        {
            title: "Analytics Engineer",
            org: "ZS Associates",
            period: "2021 — 2024",
            points: [
                "Built agentic AI systems for pharmaceutical report analysis",
                "Developed anomaly detection pipelines for clinical trial data",
                "Led statistical modeling initiatives for client decision support"
            ]
        }
    ],
    
    // Skills (from Resume)
    skills: {
        "Languages": ["Python", "R", "SQL", "HTML/CSS", "C++", "XML/YAML"],
        "ML & Deep Learning": [
            "TensorFlow", "Keras", "Sklearn", "Spark", "Hadoop",
            "Ensemble Methods", "LSTMs", "Model Evaluation", "Feature Engineering"
        ],
        "Frameworks & Tools": [
            "Django", "Flask", "FastAPI", "Docker", "Git",
            "MySQL", "MongoDB", "SQLite", "Selenium"
        ],
        "Analytics & BI": [
            "PowerBI", "SPSS", "Advanced Excel (VBA, Macros)",
            "Pandas", "Matplotlib", "ETL Pipelines"
        ],
        "Computational Biology": [
            "Differential Expression (limma, DESeq2)", "Cell-Type Deconvolution",
            "Consensus Clustering", "Pathway Enrichment", "Batch Effect Correction"
        ],
        "Other": [
            "API Documentation", "Agile", "CI/CD", "GitHub Actions", "AWS (EC2, S3, ElasticSearch)"
        ]
    },

    // Experience (from Resume - proper timeline)
    experienceTimeline: [
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
            title: "Associate Consultant",
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
            title: "Project Development Intern",
            org: "BookThatStudio - Comet Spaces",
            period: "Jun 2021 — Aug 2021",
            points: [
                "Designed website from scratch using ReactJS, NodeJS",
                "Integrated payment gateway and social media logins"
            ]
        },
        {
            side: "left",
            title: "B.E. + MBA (Integrated)",
            org: "Thapar Institute of Engineering and Technology",
            period: "Apr 2017 — Jul 2022",
            points: [
                "Computer Engineering & Business Administration",
                "Focus: Computer Networks, ML, Business Development"
            ]
        }
    ],

    // Research Publications & Patent
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

    // Blog Posts (add new posts here)
    blogPosts: [
        {
            title: "Beginner's Guide to Auto Formatting",
            platform: "DEV.to",
            url: "https://dev.to/vybhav/beginners-guide-to-auto-formatting-1hpp",
            description: "Setting up automatic code formatting for cleaner, consistent code."
        },
        {
            title: "First Steps in GirlScript Summer of Code '21",
            platform: "DEV.to",
            url: "https://dev.to/vybhav/first-steps-in-girlscript-summer-of-code-21-2353",
            description: "My journey getting started with open source contributions."
        },
        {
            title: "Let's Talk About sys",
            platform: "DEV.to",
            url: "https://dev.to/vybhav/let-s-talk-about-sys-25mf",
            description: "Deep dive into Python's sys module and its practical uses."
        }
        // Add more posts here as you publish them
        // {
        //     title: "Your TDS Article Title",
        //     platform: "Towards Data Science",
        //     url: "https://medium.com/...",
        //     description: "Brief description"
        // }
    ],

    // Profile Links
    profiles: {
        devto: "https://dev.to/vybhav",
        medium: "https://medium.com/@yourusername"  // Update when you publish on TDS
    },

    // Blog Posts
    blogPosts: [
        {
            title: "Beginner's Guide to Auto-Formatting",
            platform: "DEV.to",
            url: "https://dev.to/vybhav/beginners-guide-to-auto-formatting-1hpp",
            thumbnail: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8epumer909hqgvb5lxnj.png",
            date: "2021"
        },
        {
            title: "First Steps in GirlScript Summer of Code '21",
            platform: "DEV.to",
            url: "https://dev.to/vybhav/first-steps-in-girlscript-summer-of-code-21-2353",
            thumbnail: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xran5sbyfrfrxvudpvlg.png",
            date: "2021"
        },
        {
            title: "Let's Talk About Sys",
            platform: "DEV.to",
            url: "https://dev.to/vybhav/let-s-talk-about-sys-25mf",
            thumbnail: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vvlp6a8lcl5l5ybq0tap.png",
            date: "2021"
        }
    ],

    // Blog Profiles (for links at bottom)
    blogProfiles: {
        devto: "https://dev.to/vybhav",
        medium: "https://medium.com/@yourusername"  // Update when you publish
    },

    // Blog platforms
    blogs: {
        devto: {
            name: "DEV.to",
            url: "https://dev.to/yourusername",
            description: "Technical tutorials and ML insights"
        },
        medium: {
            name: "Towards Data Science",
            url: "https://medium.com/@yourusername",
            description: "Data science articles and research"
        }
    }
};
