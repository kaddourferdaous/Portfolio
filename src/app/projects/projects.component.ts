// projects.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  date: string;
  shortDesc: string;
  fullDesc: string;
  tech: string[];
  links: {
    github: string;
    website?: string;
  };
  color: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: "Training Process Digitalization",
      date: "July 2025",
      shortDesc: "Automation platform with 2FA and dynamic dashboard",
      fullDesc: "Complete training process digitalization platform featuring automated testing and evaluation systems. Includes a dynamic dashboard for monitoring progress and two-factor authentication (2FA) for enhanced security and user management.(use Matricule 42553 to login as a Trainee) ",
      tech: ["Angular", "MongoDB", "Flask"],
      links: {
        github: "https://github.com/kaddourferdaous/training-frontEnd",
        website:"https://training-yazaki.vercel.app/home"
      },
      color: "green"
    },
 
     {
      id: 2,
      title: "Legal File Management",
      date: "August 2024",
      shortDesc: "Document management with case tracking and export features",
      fullDesc: "Comprehensive legal file management application designed to automate tasks and provide intelligent case tracking. Features include a professional dashboard with detailed tables for monitoring legal affairs, data export capabilities for reporting, and document organization tools.",
      tech: ["Angular", "MySQL", "Laravel"],
      links: {
        github: "https://github.com/kaddourferdaous/law-files-with-angular",
        website:"https://law-files.vercel.app/dashboard"
      },
      color: "orange"
    },
    {
  id: 3,
  title: "Auto-Scoring System using Fine-Tuned BERT",
  date: "May 2025",
  shortDesc: "AI model for automatic answer scoring based on Yazaki training data.",
  fullDesc: "Developed an auto-scoring model by fine-tuning a multilingual BERT architecture to predict answer scores based on internal training question–answer datasets from Yazaki. The model analyzes semantic similarity and context relevance between candidate responses and reference answers, enabling automated and consistent evaluation of employee training performance.",
  tech: ["Scikit-learn", "PyTorch", "Hugging Face", "Transformers"],
  links: {
    github: "https://github.com/kaddourferdaous/auto-scoring-using-Bert",
 //   website: "https://example.com"
  },
  color: "purple"
},{
  id: 7,
  title: "Real-Time Telecom Churn Prediction System",
  date: "January 2025",
  shortDesc: "Big data pipeline for predicting customer churn using Spark and streaming analytics",
  fullDesc: "Developed a real-time churn prediction system for a telecom call service using Random Forest, Apache Spark, Kafka, and Cassandra. Processed customer data streams with features like account length, service calls, international plan, and call usage patterns to predict potential unsubscribers. Implemented real-time scoring with Spark Streaming, storing predictions in Cassandra for fast access and proactive retention actions. The solution enabled early detection of high-risk customers, improving customer retention while handling large-scale streaming data efficiently with distributed computing.",
  tech: ["Apache Spark", "Random Forest", "Kafka", "Cassandra", "PySpark", "Spark Streaming", "Python"],
  links: {
    github: "https://github.com/kaddourferdaous/real-time-churn-prediction-system"
  },
  color: "green"
},
    {
      id: 4,
      title: "MLOps - Malware Detection",
      date: "June 2024",
      shortDesc: "Signature-based and image-based malware analysis system",
      fullDesc: "Integration of MLOps with Signature-based and Image-based Malware Detection Systems. Signature-based detection identifies known malware characteristics through predefined code fragments and behavioral patterns. Image-based detection uses machine learning to analyze visual representations of malware binaries and identify complex patterns.",
      tech: ["OpenCV", "Flask", "Scikit-learn", "Python"],
      links: {
        github: "https://github.com"
      },
      color: "purple"
    },
    
   
    {
      id: 5,
      title: "Netflix Stock Prediction",
      date: "May 2024",
      shortDesc: "LSTM model for predicting stock prices using time series",
      fullDesc: "Development of a Long Short-Term Memory (LSTM) model to predict future Netflix stock prices from time series data. The project encompasses comprehensive data preparation including handling missing values, normalization, and temporal sequence creation, along with detailed visualization of results.",
      tech: ["Pandas", "NumPy", "Matplotlib", "LSTM", "Python"],
      links: {
        github: "https://github.com/kaddourferdaous/Netflix-Stock/blob/main/LSTM.ipynb"
      },
      color: "red"
    },
       {
      id: 1,
      title: "World Cup 2022",
      date: "December 2023",
      shortDesc: "Interactive website displaying results, statistics and standings in real time",
      fullDesc: "Creation of an interactive website on the 2022 World Cup, displaying results, statistics and standings in real time using HTML, CSS, and JavaScript.",
      tech: ["HTML", "CSS", "JavaScript"],
      links: {
        github: "https://github.com/kaddourferdaous/coupe-du-monde",
        website: "https://kaddourferdaous.github.io/coupe-du-monde/"
      },
      color: "blue"
    },
   

  ];

  getColorClasses(color: string): string {
    const colors: { [key: string]: string } = {
      blue: "card-blue",
      purple: "card-purple",
      green: "card-green",
      orange: "card-orange",
      red: "card-red"
    };
    return colors[color] || colors['blue'];
  }

  getTagColor(color: string): string {
    const colors: { [key: string]: string } = {
      blue: "tag-blue",
      purple: "tag-purple",
      green: "tag-green",
      orange: "tag-orange",
      red: "tag-red"
    };
    return colors[color] || colors['blue'];
  }
}