// ============================================================
// PROJECTS DATA — edit descriptions, tags and links here
// ============================================================

export type ProjectCategory =
  | 'AI/ML'
  | 'NLP'
  | 'Full Stack'
  | 'Python'
  | 'Speech'
  | 'Data Analytics'
  | 'Java'
  | 'Workshop';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: ProjectCategory;
  github: string;
  demo?: string; // only if a real deployed demo exists
  featured: boolean;
  flagship?: boolean;
  metrics?: string[];
  tech: string[];
}

export const projects: Project[] = [
  {
    id: 'startup-analyser',
    title: 'Startup Analyser',
    description:
      'An AI-powered startup analysis platform built with React, TypeScript, Vite and Google GenAI — delivering intelligent insights on startup viability and market positioning.',
    longDescription:
      'Startup Analyser is a modern web application that leverages Google GenAI to evaluate startups across multiple dimensions. Users can input startup details and receive structured AI-generated analysis covering market opportunity, competition, technology stack, and growth potential. The frontend is built with React and TypeScript using Vite for fast development iteration.',
    tags: ['React', 'TypeScript', 'Vite', 'Google GenAI', 'AI'],
    category: 'Full Stack',
    github: 'https://github.com/sunidhier/Startup_Analyser',
    featured: true,
    flagship: true,
    tech: ['React', 'TypeScript', 'Vite', 'Google GenAI', 'CSS'],
  },
  {
    id: 'customer-feedback-analytics',
    title: 'Customer Feedback Analytics Platform',
    description:
      'NLP and sentiment analysis on 568K+ Amazon Fine Food Reviews using TF-IDF, machine-learning classifiers and an interactive Streamlit dashboard.',
    longDescription:
      'A comprehensive NLP pipeline that processes over 568,000 Amazon Fine Food Reviews to extract sentiment signals and classify customer feedback. The platform implements TF-IDF vectorization and compares multiple ML classifiers. Logistic Regression achieved 86.62% test accuracy (as reported on my resume); Random Forest achieved 89.01% (as reported in the project README). An interactive Streamlit dashboard visualises sentiment trends, score distributions and model comparisons.',
    tags: ['NLP', 'Sentiment Analysis', 'Scikit-learn', 'Streamlit', 'Python'],
    category: 'NLP',
    github: 'https://github.com/sunidhier/customer-feedback-analytics-platform',
    featured: true,
    flagship: true,
    metrics: [
      'Logistic Regression: 86.62% test accuracy (resume)',
      'Random Forest: 89.01% (README)',
      '568K+ reviews processed',
    ],
    tech: ['Python', 'Scikit-learn', 'TF-IDF', 'Pandas', 'Streamlit', 'NLTK'],
  },
  {
    id: 'speech-classification',
    title: 'Speech Classification & Stutter Correction',
    description:
      'AI-based speech processing system using MFCC features, a Deep Neural Network, speech-to-text, rule-based disfluency correction and text-to-speech synthesis.',
    longDescription:
      'This research project addresses automated recognition and correction of stuttered speech. The pipeline extracts MFCC (Mel-frequency Cepstral Coefficients) features from audio samples, feeds them into a Deep Neural Network classifier to identify speech disfluencies, then applies rule-based processing to the transcribed text before synthesising clean output via text-to-speech. This work underpins a broader hybrid model research project described in the Research section.',
    tags: ['DNN', 'MFCC', 'Speech', 'TTS', 'Python', 'AI'],
    category: 'Speech',
    github: 'https://github.com/sunidhier/Speech-classification-and-stutter-correction',
    featured: true,
    flagship: true,
    tech: ['Python', 'TensorFlow/Keras', 'librosa', 'MFCC', 'SpeechRecognition', 'pyttsx3'],
  },
  {
    id: 'careerpilot',
    title: 'CareerPilot',
    description:
      'Python CLI tool for resume/JD analysis, skill-fit scoring, mock interviews, AI-powered preparation roadmaps and SQLite-based session history.',
    longDescription:
      'CareerPilot is a command-line career preparation assistant that compares resumes against job descriptions to produce skill-fit scores and gap analyses. Features include mock interview Q&A, personalised preparation roadmaps, and persistent session history stored in SQLite. Optional LLM integration enhances roadmap generation and feedback quality.',
    tags: ['Python', 'CLI', 'SQLite', 'LLM', 'NLP'],
    category: 'Python',
    github: 'https://github.com/sunidhier/careerpilot',
    featured: true,
    tech: ['Python', 'SQLite', 'argparse', 'LLM API (optional)'],
  },
  {
    id: 'fraud-detection',
    title: 'Fraud Detection with Logistic Regression',
    description:
      'Machine-learning fraud detection pipeline using logistic regression with class-imbalance handling and an interactive Streamlit dashboard.',
    longDescription:
      'A supervised machine-learning project that trains a logistic regression classifier on imbalanced financial transaction data. Implements techniques such as SMOTE or class-weight adjustments to address class imbalance. An interactive Streamlit dashboard allows users to explore model performance metrics, confusion matrices and ROC curves.',
    tags: ['ML', 'Scikit-learn', 'Streamlit', 'Python', 'Finance'],
    category: 'AI/ML',
    github: 'https://github.com/sunidhier/fraud-detection-logistic-regression-streamlit',
    featured: false,
    tech: ['Python', 'Scikit-learn', 'Streamlit', 'Pandas', 'imbalanced-learn'],
  },
  {
    id: 'weather-analyzer',
    title: 'Weather Analyzer',
    description:
      'Python and NumPy-based climate data analysis tool that processes CSV weather datasets to surface trends and statistical insights.',
    longDescription:
      'A Python data-analysis project that ingests CSV-format climate datasets and applies NumPy operations to compute statistics, identify trends and visualise temperature, precipitation and other meteorological variables over time.',
    tags: ['Python', 'NumPy', 'Data Analysis', 'CSV'],
    category: 'Data Analytics',
    github: 'https://github.com/sunidhier/weather-analyzer',
    featured: false,
    tech: ['Python', 'NumPy', 'Matplotlib', 'CSV'],
  },
  {
    id: 'health-transition-simulator',
    title: 'HealthTransitionSimulator',
    description:
      'Java GUI simulation using probability transition matrices to model health state changes — an educational simulation tool, not a medical diagnostic tool.',
    longDescription:
      'An educational Java application with a graphical user interface that simulates health state transitions using probability matrices (inspired by Markov chain models). Users can configure transition probabilities and observe simulated health state progressions over time. Designed as a learning tool for probability and simulation concepts.',
    tags: ['Java', 'GUI', 'Simulation', 'Probability'],
    category: 'Java',
    github: 'https://github.com/sunidhier/HealthTransitionSimulator',
    featured: false,
    tech: ['Java', 'Swing/AWT', 'Probability Matrices'],
  },
  {
    id: 'ml-projects',
    title: 'ML Projects Collection',
    description:
      'A collection of machine-learning experiments and practice projects covering classification, regression and exploratory data analysis.',
    longDescription:
      'A repository of machine-learning projects exploring various algorithms and datasets. Includes implementations of supervised and unsupervised learning techniques with Scikit-learn, data preprocessing pipelines, EDA notebooks and model evaluation workflows.',
    tags: ['Python', 'Scikit-learn', 'ML', 'EDA'],
    category: 'AI/ML',
    github: 'https://github.com/sunidhier/ml-projects',
    featured: false,
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Jupyter'],
  },
  {
    id: 'spring-mongo',
    title: 'Spring Boot + MongoDB',
    description:
      'Workshop project demonstrating a full-stack application using Bootstrap for the frontend, Spring Boot for the backend, and MongoDB as the database.',
    longDescription:
      'A hands-on workshop project connecting a Bootstrap-styled frontend to a Spring Boot REST API backed by MongoDB. Covers CRUD operations, RESTful endpoint design and basic front-to-back data flow.',
    tags: ['Java', 'Spring Boot', 'MongoDB', 'Bootstrap'],
    category: 'Workshop',
    github: 'https://github.com/sunidhier/spring_mongo',
    featured: false,
    tech: ['Java', 'Spring Boot', 'MongoDB', 'Bootstrap', 'REST API'],
  },
];

// Categories for filter UI
export const projectCategories: ProjectCategory[] = [
  'AI/ML',
  'NLP',
  'Full Stack',
  'Python',
  'Speech',
  'Data Analytics',
  'Java',
  'Workshop',
];
