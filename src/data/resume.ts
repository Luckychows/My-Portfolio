import {
  Award,
  BadgeCheck,
  BrainCircuit,
  CloudCog,
  Code2,
  DatabaseZap,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Radar,
  ShieldCheck,
  Terminal,
  Wifi,
} from "lucide-react";

export const resume = {
  name: "Luckychowdary Uppalapati",
  headline: "Cybersecurity Student | SOC Operations | Cloud Security Automation",
  location: "India",
  email: "luckychowdaryuppalapati@gmail.com",
  phone: "+91 9110585022",
  resumeFile: "/resume/Luckychowdary_Resume_Restructured.docx",
  socials: [
    { label: "GitHub", href: "https://github.com/Luckychows", icon: Github },
    { label: "LinkedIn", href: "https://www.linkedin.com/search/results/all/?keywords=Luckychowdary%20Uppalapati", icon: Linkedin },
    { label: "Email", href: "mailto:luckychowdaryuppalapati@gmail.com", icon: Mail },
  ],
  summary:
    "Cybersecurity student with hands-on experience in SOC operations, SIEM monitoring, AWS security automation, and detection engineering. Skilled in Python, Bash, cloud monitoring, and security tooling with practical experience building cloud security monitoring and incident analysis platforms.",
  targets: [
    "Cybersecurity internships",
    "Cloud infrastructure roles",
    "SOC operations",
    "System engineering",
  ],
  education: {
    school: "Bennett University",
    degree: "B.Tech in Computer Science Engineering (Cyber Security)",
    period: "Aug 2023 - Apr 2027 (Expected)",
    coursework: [
      "Linux & Shell Scripting",
      "System & Network Security",
      "Ethical Hacking",
      "Penetration Testing",
      "Digital Forensics",
    ],
  },
  skills: [
    {
      category: "Security Testing",
      icon: ShieldCheck,
      level: 88,
      items: ["Nessus", "Nikto", "Wireshark", "Burp Suite", "Microsoft Defender"],
    },
    {
      category: "Cloud & DevOps",
      icon: CloudCog,
      level: 86,
      items: ["AWS Lambda", "CloudTrail", "IAM", "EventBridge", "CloudWatch", "DynamoDB", "API Gateway", "CloudFormation", "AWS Config", "Docker"],
    },
    {
      category: "SIEM & SOC",
      icon: Radar,
      level: 90,
      items: ["Splunk", "Microsoft Sentinel", "ELK Stack", "Event Viewer", "SOC Monitoring", "Threat Detection", "Log Analysis"],
    },
    {
      category: "Programming",
      icon: Code2,
      level: 82,
      items: ["Python", "Bash", "PowerShell", "SQL"],
    },
    {
      category: "Networking & Systems",
      icon: Wifi,
      level: 80,
      items: ["TCP/IP", "DNS", "VLAN", "VPN", "IPSec", "TLS/SSL", "SPF", "DKIM", "DMARC", "AD/LDAP", "Linux Administration"],
    },
    {
      category: "Detection Engineering",
      icon: BrainCircuit,
      level: 84,
      items: ["Snort", "Suricata", "TheHive", "MISP", "EDR", "Cloud Misconfiguration Detection", "Security Monitoring"],
    },
    {
      category: "IAM",
      icon: BadgeCheck,
      level: 78,
      items: ["OAuth", "SAML", "JWT", "MFA", "Zero Trust", "Kerberos", "Microsoft Azure Active Directory"],
    },
    {
      category: "Observability & Forensics",
      icon: DatabaseZap,
      level: 76,
      items: ["Prometheus", "Grafana", "AWS CloudWatch", "Azure Monitor", "NIST", "MITRE ATT&CK", "Cyber Kill Chain", "FTK Imager", "Autopsy", "Volatility"],
    },
  ],
  certifications: [
    {
      name: "Certified Ethical Hacker (EC-Council)",
      href: "https://aspen.eccouncil.org/VerifyBadge?type=certification&a=0hVZUuIoRjPRIsAy8K5dlbSyhmQ9ebWARmrXmcdHZ2Q%3D",
    },
    {
      name: "Security Operations & Administration - ISC2",
      href: "https://coursera.org/share/dc7315750c8cb198165e7b5b918062ab",
    },
    {
      name: "Network Security - ISC2",
      href: "https://coursera.org/share/fbd22f07dced0154748a4a3765648561",
    },
  ],
  majorProjects: [
    {
      name: "SOC-ASTRA",
      period: "Aug 2025 - Nov 2025",
      stack: ["RAG", "LangChain", "Milvus", "Docker", "Flask", "SQLite"],
      github: "https://github.com/Luckychows?tab=repositories",
      accent: "cyan",
      summary:
        "AI-powered SOC incident triage platform for real-time threat analysis, contextual security intelligence, and analyst-ready remediation guidance.",
      bullets: [
        "Built an AI-powered SOC incident triage platform using OpenAI GPT-4, LangChain, and Milvus.",
        "Engineered RAG workflows to correlate live security events with historical incidents and IP behavioural profiles.",
        "Developed severity classification, MITRE ATT&CK mapping, IOC extraction, confidence scoring, and remediation recommendations.",
        "Designed asynchronous log processing with multithreaded workers, REST API ingestion, queue-based event handling, and live dashboards.",
        "Implemented synthetic attack simulation for brute force, credential dumping, lateral movement, malware execution, port scanning, and data exfiltration.",
      ],
    },
    {
      name: "AWS DefenderX",
      period: "Jan 2026 - May 2026",
      stack: ["AWS", "FastAPI", "DynamoDB", "Elastic", "Kibana", "OpenAI API"],
      github: "https://github.com/Luckychows?tab=repositories",
      accent: "violet",
      summary:
        "Cloud security monitoring and SOC automation platform for detecting AWS misconfigurations and suspicious activities in real time.",
      bullets: [
        "Implemented automated detection pipelines using CloudTrail, EventBridge, Lambda, DynamoDB, and FastAPI.",
        "Built detections for public S3 exposure, unrestricted security groups, disabled MFA, root usage, unencrypted EBS, and permissive IAM.",
        "Integrated OpenAI with AWS Secrets Manager to generate risk summaries, attack explanations, remediation guidance, and incident insights.",
        "Engineered event-driven workflows for automated monitoring, incident correlation, and cloud threat visibility.",
        "Added integrations with Splunk, Elasticsearch/OpenSearch, Wazuh, Suricata, and Falco.",
      ],
    },
  ],
  minorProjects: [
    {
      name: "Steganography Tool",
      stack: ["Python", "Image Processing", "Security Utility"],
      github: "https://github.com/Luckychows/Stegnography_tool",
      icon: Terminal,
      summary:
        "A security utility for hiding and extracting messages from image files, useful for learning data concealment, defensive awareness, and digital forensics concepts.",
    },
    {
      name: "Wi-Fi Deauthentication Tool",
      stack: ["Wireless Security", "Python", "802.11 Testing"],
      github: "https://github.com/Luckychows",
      icon: Wifi,
      summary:
        "A controlled lab tool for understanding deauthentication behaviour, wireless attack surfaces, and defensive monitoring techniques in authorized environments.",
    },
    {
      name: "Automated Vulnerability Scanner",
      stack: ["Python", "Automation", "Reconnaissance"],
      github: "https://github.com/Luckychows",
      icon: Radar,
      summary:
        "A Python-based scanner concept for automating basic service checks, vulnerability discovery workflows, and repeatable security testing tasks.",
    },
  ],
  achievements: [
    {
      title: "3rd Place, Bennett Project Expo '25",
      detail: "Recognized for SOC-ASTRA, an AI-powered SOC incident triage and threat analysis platform.",
      icon: Award,
    },
    {
      title: "TryHackMe SOC and Cloud Security Labs",
      detail: "Active hands-on learner across SOC operations, penetration testing, and cloud security labs.",
      icon: Terminal,
    },
    {
      title: "Personal Cybersecurity Lab Environments",
      detail: "Built lab environments for detection engineering and cloud security practice.",
      icon: ShieldCheck,
    },
    {
      title: "Security Tooling",
      detail: "Developed a steganography utility, Python-based vulnerability scanner, and Wi-Fi de-authentication testing tool.",
      icon: Code2,
    },
    {
      title: "Cybersecurity Education",
      detail: "B.Tech Cyber Security track at Bennett University with coursework in forensics, network security, ethical hacking, and penetration testing.",
      icon: GraduationCap,
    },
  ],
  terminalLines: [
    "ingest cloudtrail --source aws --mode realtime",
    "correlate --rules mitre.attack --context historical-incidents",
    "triage incident AWS-DEF-042 --confidence high",
    "recommend remediation --analyst-ready",
  ],
};

export type ResumeData = typeof resume;
