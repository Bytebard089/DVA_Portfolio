import React, { useState } from 'react';
import { Mail, MapPin, Link as LinkIcon, Users, Star, BookOpen, Layout, Package, X } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './index.css';

import proj1 from './assets/project1.png';
import proj2 from './assets/project2.png';
import proj3 from './assets/project3.png';
import proj4 from './assets/project4.png';
import profileImg from './assets/profile.jpg';

const projects = [
  {
    id: 1,
    title: "FinShield — Loan Risk Analytics",
    description: "Identified high-risk borrowers using financial data and built a risk segmentation framework to support better underwriting decisions and reduce default exposure.",
    language: "Python",
    categories: ["Python", "Tableau", "Data Analytics"],
    langColor: "#3572A5",
    link: "https://github.com/dakshbatra01/SectionD_G1_FinShield/tree/main",
    stars: 8,
    forks: 1,
    image: proj1
  },
  {
    id: 2,
    title: "ChurnGuard — Customer Retention Analytics",
    description: "Analyzed customer behavior and engagement patterns to identify churn risk, enabling proactive retention strategies and improved customer lifetime value.",
    language: "Python",
    categories: ["Python", "Streamlit", "Data Analytics"],
    langColor: "#3572A5",
    link: "https://churnguard-ten.vercel.app/",
    stars: 6,
    forks: 0,
    image: proj2
  },
  {
    id: 3,
    title: "Valuation Ratio Analysis",
    description: "Financial modeling and valuation ratio analysis for BEL and HAL, including Earnings Per Share, Price to Earnings, and Price to Sales ratios.",
    language: "Excel",
    categories: ["Excel", "Business Analytics", "Data Visualisation"],
    langColor: "#217346",
    link: "https://rishihoodeduin-my.sharepoint.com/:x:/g/personal/ishan_goyal2024_rishihood_edu_in/ETRjqGNgwdlLq8HPIjWuspgBSCRTA90Ksg25jBMwdqPh0Q?e=kCBHNB",
    stars: 5,
    forks: 0,
    image: proj3
  },
  {
    id: 4,
    title: "DuPont Analysis",
    description: "3-Stage and 5-Stage DuPont Analysis dashboard detailing Return on Asset (ROA) and Return on Equity (ROE) metrics for major corporations.",
    language: "Excel",
    categories: ["Excel", "Operations Analytics", "Data Visualisation"],
    langColor: "#217346",
    link: "https://rishihoodeduin-my.sharepoint.com/:x:/g/personal/milind_bansal2024_rishihood_edu_in/IQCiCxf_HEKFS6VZwfkuR47cAbLblauFupohasMVfrtmBGQ?e=xL8dAF",
    stars: 4,
    forks: 0,
    image: proj4
  }
];

const skills = [
  "Tableau", "PowerBI", "Seaborn", "Matplotlib", 
  "Pandas", "NumPy", "SQL", "Excel", 
  "Python", "Statistical Modeling", "Machine Learning", 
  "Scenario Modeling", "KPI Tracking", "Risk Segmentation"
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'All' || project.categories.includes(activeFilter);
    return matchesSearch && matchesFilter;
  });

  const closeModal = () => setSelectedProject(null);

  return (
    <>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerLeft}>
          <div style={styles.headerLogo}>
            <FaGithub size={32} color="#fff" />
          </div>

        </div>
      </header>

      {/* Main Layout */}
      <div style={styles.container}>
        
        {/* Sidebar */}
        <div style={styles.sidebar}>
          <img src={profileImg} alt="Bytebard089" style={styles.avatar} />
          
          <div style={styles.vcardNames}>
            <h1 style={styles.vcardFullname}>Bytebard089</h1>
            <h2 style={styles.vcardUsername}>Bytebard089</h2>
          </div>

          <div style={styles.userProfileBio}>
            Data Visualization & Analytics professional dedicated to "Transforming Complex Data into Actionable Intelligence."
          </div>

          <a href="https://github.com/Bytebard089" target="_blank" rel="noopener noreferrer" style={styles.btnProfile}>
            Follow
          </a>



          <ul style={styles.vcardDetails}>
            <li style={styles.vcardItem}>
              <MapPin size={16} />
              <span>Delhi, India</span>
            </li>
            <li style={styles.vcardItem}>
              <Mail size={16} />
              <a href="mailto:bytebard089@gmail.com">bytebard089@gmail.com</a>
            </li>
            <li style={styles.vcardItem}>
              <LinkIcon size={16} />
              <a href="https://www.linkedin.com/in/bytebard089/" target="_blank" rel="noopener noreferrer">linkedin.com/in/bytebard089</a>
            </li>
          </ul>

          <div style={styles.skillsSection}>
            <h2 style={styles.skillsTitle}>Technical Expertise</h2>
            <div style={styles.skillsBadges}>
              {skills.map(skill => (
                <span key={skill} style={styles.badge}>{skill}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div style={styles.content}>
          
          {/* Tabs */}
          <div style={styles.tabs}>

            <a href="#" style={{...styles.tab, ...styles.activeTab}}>
              <Layout size={16} /> Repositories <span style={styles.counter}>{projects.length}</span>
            </a>

          </div>

          {/* EXACT UI Controls Bar */}
          <div className="controls-bar">
            <input 
              type="text" 
              className="search-input" 
              placeholder="Find a repository..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="filter-group">
              {['All', 'Python', 'Tableau', 'Google Sheets', 'Data Visualisation'].map(filter => (
                <button 
                  key={filter}
                  className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="repo-grid">
            {filteredProjects.length > 0 ? filteredProjects.map(project => (
              <div key={project.id} className="repo-card" onClick={() => setSelectedProject(project)}>
                <img src={project.image} alt={project.title} className="card-cover-image" />
                <div className="repo-card-body">
                  <div style={styles.repoHeader}>
                    <BookOpen size={16} color="var(--gh-text-muted)" />
                    <span style={styles.repoTitle}>
                      {project.title}
                    </span>
                    <span style={styles.publicBadge}>Public</span>
                  </div>
                  
                  <p style={styles.repoDesc}>{project.description}</p>
                  
                  <div style={styles.repoFooter}>
                    <div style={styles.repoLang}>
                      <span style={{...styles.langColor, backgroundColor: project.langColor}}></span>
                      {project.language}
                    </div>
                    <div style={styles.repoStat}>
                      <Star size={14} /> {project.stars}
                    </div>
                  </div>
                </div>
              </div>
            )) : (
              <div style={{gridColumn: 'span 2', padding: '40px', textAlign: 'center', color: 'var(--gh-text-muted)', border: '1px dashed var(--gh-border)', borderRadius: '6px'}}>
                No repositories match your search or filter.
              </div>
            )}
          </div>
          
          {/* Contribution Graph Mock */}
          <div style={styles.contributions}>
            <h2 style={styles.contributionsTitle}>58 contributions in the last year</h2>
            <div style={styles.contributionsBox}>
              <div style={styles.graphMock}>
                {Array.from({ length: 52 }).map((_, col) => (
                  <div key={col} style={styles.graphCol}>
                    {Array.from({ length: 7 }).map((_, row) => {
                      const rand = Math.random();
                      let color = 'var(--gh-bg-secondary)';
                      // Adjusted density for ~58 contributions (roughly 16% of the grid)
                      if (rand > 0.98) color = '#39d353';
                      else if (rand > 0.95) color = '#26a641';
                      else if (rand > 0.90) color = '#006d32';
                      else if (rand > 0.84) color = '#0e4429';
                      
                      return (
                        <div key={row} style={{...styles.graphCell, backgroundColor: color}}></div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <span>© 2026 GitHub, Inc.</span>
          <nav style={styles.footerNav}>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Security</a>
            <a href="#">Status</a>
            <a href="#">Docs</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      </footer>

      {/* Project Modal */}
      <div className={`modal-overlay ${selectedProject ? 'active' : ''}`} onClick={closeModal}>
        {selectedProject && (
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">{selectedProject.title}</div>
              <button className="close-btn" onClick={closeModal}>
                <X size={20} />
              </button>
            </div>
            <div className="modal-body">
              <img src={selectedProject.image} alt={selectedProject.title} className="modal-img" />
              <p className="modal-desc">{selectedProject.description}</p>
            </div>
            <div className="modal-footer">
              <button className="btn-cancel" onClick={closeModal}>Cancel</button>
              <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="btn-primary">
                View Live Repository
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

const styles = {
  header: { backgroundColor: '#010409', padding: '16px 24px', borderBottom: '1px solid var(--gh-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', },
  headerLeft: { display: 'flex', alignItems: 'center', gap: '16px', width: '100%', },
  headerLogo: { display: 'flex', alignItems: 'center', },
  headerSearch: { background: '#0d1117', border: '1px solid var(--gh-border)', borderRadius: '6px', padding: '4px 12px', color: 'var(--gh-text-muted)', fontSize: '14px', width: '280px', },
  headerNav: { display: 'flex', gap: '16px', marginLeft: '8px', },
  headerLink: { color: '#fff', fontWeight: '600', fontSize: '14px', textDecoration: 'none' },
  container: { maxWidth: '1280px', margin: '0 auto', padding: '24px', display: 'flex', gap: '64px', flexGrow: 1, flexWrap: 'nowrap', },
  sidebar: { width: '100%', maxWidth: '296px', flexShrink: 0, },
  avatar: { width: '100%', height: 'auto', aspectRatio: '1', borderRadius: '50%', border: '1px solid var(--gh-border)', marginBottom: '16px', objectFit: 'cover', },
  vcardNames: { marginBottom: '16px', },
  vcardFullname: { fontSize: '24px', fontWeight: 600, lineHeight: 1.25, color: 'var(--gh-text-main)', margin: 0 },
  vcardUsername: { fontSize: '20px', fontWeight: 300, lineHeight: 1.25, color: 'var(--gh-text-muted)', margin: 0 },
  userProfileBio: { marginBottom: '16px', fontSize: '16px', color: 'var(--gh-text-main)', },
  btnProfile: { display: 'block', width: '100%', textAlign: 'center', background: 'var(--gh-btn-bg)', border: '1px solid var(--gh-border)', color: 'var(--gh-text-main)', padding: '5px 16px', borderRadius: '6px', fontWeight: 500, cursor: 'pointer', marginBottom: '16px', textDecoration: 'none' },
  followStats: { display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--gh-text-muted)', fontSize: '14px', marginBottom: '16px', },
  boldText: { fontWeight: 600, color: 'var(--gh-text-main)', },
  vcardDetails: { listStyle: 'none', padding: 0, margin: 0, marginBottom: '24px', borderBottom: '1px solid var(--gh-border)', paddingBottom: '16px', },
  vcardItem: { display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px', color: 'var(--gh-text-main)', fontSize: '14px', wordBreak: 'break-all', },
  skillsSection: { marginTop: '16px', },
  skillsTitle: { fontSize: '16px', fontWeight: 600, marginBottom: '8px', },
  skillsBadges: { display: 'flex', flexWrap: 'wrap', gap: '6px', },
  badge: { border: '1px solid var(--gh-border)', padding: '2px 10px', borderRadius: '2em', fontSize: '12px', fontWeight: 500, color: 'var(--gh-text-muted)', whiteSpace: 'nowrap', backgroundColor: 'rgba(255,255,255,0.02)', },
  content: { flexGrow: 1, minWidth: 0, },
  tabs: { display: 'flex', gap: '8px', borderBottom: '1px solid var(--gh-border)', paddingBottom: '0', marginBottom: '24px', overflowX: 'auto', },
  tab: { padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--gh-text-main)', fontSize: '14px', borderBottom: '2px solid transparent', textDecoration: 'none' },
  activeTab: { fontWeight: 600, borderBottom: '2px solid #f78166', },
  counter: { background: 'rgba(255,255,255,0.1)', borderRadius: '20px', padding: '2px 6px', fontSize: '12px', fontWeight: 500, },
  repoHeader: { display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', },
  repoTitle: { fontSize: '14px', fontWeight: 600, color: 'var(--gh-link)', wordBreak: 'break-all', },
  publicBadge: { border: '1px solid var(--gh-border)', borderRadius: '20px', padding: '0 7px', fontSize: '12px', color: 'var(--gh-text-muted)', marginLeft: 'auto', },
  repoDesc: { fontSize: '12px', color: 'var(--gh-text-muted)', marginBottom: '16px', flexGrow: 1, },
  repoFooter: { display: 'flex', alignItems: 'center', gap: '16px', fontSize: '12px', color: 'var(--gh-text-muted)', },
  repoLang: { display: 'flex', alignItems: 'center', gap: '4px', },
  langColor: { width: '12px', height: '12px', borderRadius: '50%', },
  repoStat: { display: 'flex', alignItems: 'center', gap: '4px', },
  contributions: { marginTop: '32px', },
  contributionsTitle: { fontSize: '16px', fontWeight: 400, marginBottom: '8px', },
  contributionsBox: { border: '1px solid var(--gh-border)', borderRadius: '6px', padding: '16px', },
  graphMock: { display: 'flex', gap: '3px', overflowX: 'auto', paddingBottom: '16px', },
  graphCol: { display: 'flex', flexDirection: 'column', gap: '3px', },
  graphCell: { width: '10px', height: '10px', borderRadius: '2px', },
  footer: { marginTop: '40px', padding: '40px 0', borderTop: '1px solid var(--gh-border)', maxWidth: '1280px', margin: '40px auto 0', width: '100%', },
  footerContent: { display: 'flex', alignItems: 'center', gap: '24px', fontSize: '12px', color: 'var(--gh-text-muted)', flexWrap: 'wrap', padding: '0 24px', },
  footerNav: { display: 'flex', gap: '16px', flexWrap: 'wrap', },
};

export default App;
