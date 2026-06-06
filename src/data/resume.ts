import {
  Award,
  BrainCircuit,
  CloudCog,
  Code2,
  DatabaseZap,
  Github,
  GraduationCap,
  KeyRound,
  Linkedin,
  Mail,
  Radar,
  ShieldCheck,
  Terminal,
  Wifi,
} from "lucide-react";

export const resume = {
  name: "Luckychowdary Uppalapati",
  headline: "Cybersecurity Student | SOC Operations | Offensive Security | Cloud Security ",
  location: "India",
  email: "luckychowdaryuppalapati@gmail.com",
  phone: "+91 9110585022",
  resumeFile: "/resume/Luckychowdary_Resume_ATS_One_Page_v4.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/Luckychows", icon: Github },
    { label: "LinkedIn", href: "https://www.linkedin.com/search/results/all/?keywords=Luckychowdary%20Uppalapati", icon: Linkedin },
    { label: "Email", href: "mailto:luckychowdaryuppalapati@gmail.com", icon: Mail },
  ],
  summary:
    "Cybersecurity student focused on SOC operations, Offensive Security, and Cloud Security. Experienced in building AWS-based security monitoring systems and AI-assisted incident triage platforms with hands-on expertise in SIEM operations, threat detection, and cloud security automation.",
  targets: [
    "SOC Operations Internships",
    "Offensive Security",
    "Cloud Security",
    "Incident Response",
  ],
  workExperience: [
    {
      company: "TEXIAL",
      position: "Cybersecurity Intern",
      period: "March 2026 - Present",
      responsibilities: [
        "Performed web and network security assessments using Burp Suite, Nmap, Nessus, Metasploit, and Wireshark; documented validated findings with risk, impact, and remediation steps.",
        "Supported ethical hacking across OWASP Top 10, authentication flaws, exposed services, and Linux/AD misconfigurations using Kali Linux and exploitation validation workflows.",
        "Monitored and triaged events in Splunk, Microsoft Sentinel, Wazuh, and Microsoft Defender; mapped alerts to MITRE ATT&CK and escalated high-risk activity.",
        "Built detection queries and incident notes from Windows Event Logs, Sysmon, CloudTrail, and firewall logs to support SOC investigations and response playbooks.",
      ],
    },
  ],
  education: {
    school: "Bennett University",
    degree: "B.Tech in Computer Science Engineering (Cyber Security)",
    period: "Aug 2023 - Apr 2027 (Expected)",
    coursework: [
      "Linux & Shell Scripting",
      "System & Network Security",
      "Ethical Hacking & Penetration Testing",
      "Digital Forensics",
    ],
  },
  skills: [
    {
      category: "SIEM & Security Operations",
      icon: Radar,
      level: 90,
      items: ["Microsoft Sentinel", "Splunk", "Wazuh", "ELK/OpenSearch", "Microsoft Defender", "KQL", "SPL", "Alert Triage", "Threat Hunting", "Incident Response"],
    },
    {
      category: "Vulnerability Assessment & Penetration Testing",
      icon: ShieldCheck,
      level: 88,
      items: ["Burp Suite", "Nessus", "Nmap", "Metasploit", "sqlmap", "FFUF", "BloodHound", "Impacket", "OWASP Top 10", "CVSS Reporting"],
    },
    {
      category: "Cloud Security & DevOps",
      icon: CloudCog,
      level: 86,
      items: ["AWS IAM", "CloudTrail", "CloudWatch", "EventBridge", "Lambda", "AWS Config", "S3", "EC2", "Cloud Misconfiguration Detection", "Docker"],
    },
    {
      category: "Detection Engineering",
      icon: BrainCircuit,
      level: 84,
      items: ["Windows Event Logs", "Sysmon", "CloudTrail Logs", "Firewall Logs", "MITRE ATT&CK Mapping", "IOC Extraction", "Detection Queries", "Incident Notes"],
    },
    {
      category: "Programming & Automation",
      icon: Code2,
      level: 82,
      items: ["Python", "Bash", "PowerShell", "SQL", "LangChain", "FastAPI", "Flask"],
    },
    {
      category: "Networking & Systems Administration",
      icon: Wifi,
      level: 80,
      items: ["TCP/IP", "DNS", "DHCP", "VLANs", "VPN", "IPSec", "TLS/SSL", "Linux Administration", "Active Directory", "AD/LDAP", "Kerberos"],
    },
    {
      category: "Security Frameworks & Forensics",
      icon: DatabaseZap,
      level: 78,
      items: ["NIST CSF", "NIST 800-61", "MITRE ATT&CK", "Cyber Kill Chain", "Autopsy", "FTK Imager", "Volatility", "TheHive", "MISP"],
    },
  ],
  certifications: [
    {
      name: "Certified Ethical Hacker (EC-Council)",
      href: "https://aspen.eccouncil.org/VerifyBadge?type=certification&a=0hVZUuIoRjPRIsAy8K5dlbSyhmQ9ebWARmrXmcdHZ2Q%3D",
    },
    {
      name: "CompTIA Security+ (Pursuing)",
      href: "#",
    },
    {
      name: "Microsoft SC-200 (Pursuing)",
      href: "#",
    },
  ],
  majorProjects: [
    {
      name: "SOC-ASTRA",
      period: "Aug 2025 - Nov 2025",
      stack: ["RAG", "LangChain", "Milvus", "Docker", "Flask", "SQLite"],
      github: "https://github.com/Luckychows/SOC-ASTRA",
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
      github: "https://github.com/Luckychows/AWS-DefenderX",
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
      github: "https://github.com/Luckychows/WiFi-DeAuth-Tool",
      icon: Wifi,
      summary:
        "A controlled lab tool for understanding deauthentication behaviour, wireless attack surfaces, and defensive monitoring techniques in authorized environments.",
    },
    {
      name: "ReconForge",
      stack: ["Python", "Automation", "Reconnaissance"],
      github: "https://github.com/Luckychows/ReconForge",
      icon: Radar,
      summary:
        "A reconnaissance-focused security automation tool for repeatable target discovery, service checks, and structured vulnerability assessment workflows.",
    },
    {
      name: "Python Based Keylogger",
      stack: ["Python", "Endpoint Security", "Lab Testing"],
      github: "https://github.com/Luckychows/KeyLogger",
      icon: KeyRound,
      summary:
        "An authorized lab project for understanding keyboard event capture, endpoint telemetry, and defensive detection opportunities around suspicious input monitoring.",
    },
  ],
  achievements: [
    {
      title: "3rd Place, Bennett Project Expo 2025",
      detail: "Recognized for SOC-ASTRA, an AI-powered SOC incident triage and threat analysis platform showcasing detection engineering expertise.",
      icon: Award,
    },
    {
      title: "Active TryHackMe Learner",
      detail: "Consistent hands-on learning across SOC operations, penetration testing, and cloud security labs to stay current with security trends.",
      icon: Terminal,
    },
    {
      title: "Cybersecurity Labs & Tools",
      detail: "Built personal cybersecurity labs including steganography tool, Python vulnerability scanner, Python-based keylogger, and Wi-Fi de-authentication testing tool.",
      icon: ShieldCheck,
    },
    {
      title: "Medium Blogger",
      detail: "Actively publishing blogs related to current cybersecurity trends, hands-on experience, and technical learnings to share knowledge with the community.",
      icon: Code2,
    },
    {
      title: "Ethical Hacking Certified",
      detail: "Certified Ethical Hacker (EC-Council) with demonstrated expertise in penetration testing, vulnerability assessment, and ethical security assessments.",
      icon: GraduationCap,
    },
  ],
};

export type ResumeData = typeof resume;
