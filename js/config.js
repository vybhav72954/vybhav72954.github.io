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
    
    // Skills
    skills: {
        "Languages": ["Python", "R", "SQL"],
        "Mathematics & Statistics": [
            "Probability Theory", "Hypothesis Testing", "Time Series Analysis",
            "Multivariate Analysis", "Optimization", "Bootstrap Inference", "Bayesian Methods"
        ],
        "ML & Deep Learning": [
            "Model Evaluation", "Feature Engineering", "RAG Pipelines",
            "Anomaly Detection", "LSTMs", "Ensemble Methods", "Uncertainty Quantification"
        ],
        "Computational Biology": [
            "Differential Expression (limma, DESeq2)", "Cell-Type Deconvolution",
            "Consensus Clustering", "Pathway Enrichment", "Batch Effect Correction"
        ],
        "Research Methods": [
            "Experimental Design", "Statistical Validation", 
            "Cross-Dataset Validation", "Diagnostics"
        ]
    }
};
