// ============================================================
// data.js — SecQ Lab Conference & Journal Tracker
// All venue data in one place. Edit here to add/update venues.
// PI: Thang N. Dinh, Virginia Commonwealth University
// ============================================================

const LAB = {
  name: 'SecQ Lab',
  pi: 'Thang N. Dinh',
  dept: 'Dept. of Computer Science',
  univ: 'Virginia Commonwealth University',
  url: 'https://thang-dinh.github.io/',
};

// ============================================================
// CONFERENCES
// Each deadline object:
//   date         — 'YYYY-MM-DD' or null (TBD)
//   type         — 'paper'|'abstract'|'other'
//   label        — short display label
//   rebuttal     — 'YYYY-MM-DD' or 'MMM DD–DD' string or null
//   notification — 'YYYY-MM-DD' or string or null
// ============================================================
const CONFERENCES = [

  // ===================== QUANTUM =====================
  {id:'qce', name:'IEEE QCE26 (Quantum Week)', full:'IEEE Intl Conf on Quantum Computing & Engineering', cat:'quantum',
   deadlines:[
     {date:'2026-04-13', type:'paper', label:'Technical paper', notification:'2026-06-15'},
   ],
   confDates:'Sep 13–18, 2026', location:'Toronto, Canada', core:'Unranked*', coreClass:'other',
   url:'https://qce.quantum.ieee.org/2026/'},

  {id:'tqc', name:'TQC 2026', full:'Theory of Quantum Computation, Comm. & Cryptography', cat:'quantum',
   deadlines:[
     {date:'2026-02-01', type:'paper', label:'Talk submission', notification:'2026-04-02'},
   ],
   confDates:'Aug 31 – Sep 4, 2026', location:'Sherbrooke, QC', core:'B', coreClass:'b',
   url:'https://tqc-conference.org/2026/'},

  {id:'aqis', name:'AQIS 2026', full:'26th Asian Quantum Information Science Conf.', cat:'quantum',
   deadlines:[
     {date:null, type:'paper', label:'Talk (est. Apr–May)'},
   ],
   confDates:'Aug 24–28, 2026', location:'Seoul, South Korea', core:'—', coreClass:'other',
   url:'http://aqis-conf.org/'},

  {id:'qip', name:'QIP 2026', full:'Quantum Information Processing', cat:'quantum',
   deadlines:[
     {date:'2025-09-12', type:'paper', label:'Talk submission', notification:'2025-11-15'},
   ],
   confDates:'Jan 24–30, 2026', location:'Riga, Latvia', core:'A (de facto)', coreClass:'a',
   url:'https://qip2026.lu.lv/'},

  {id:'qsw', name:'IEEE QSW 2026', full:'IEEE Intl Conf on Quantum Software', cat:'quantum',
   deadlines:[
     {date:'2026-03-08', type:'paper', label:'Paper', notification:'2026-05-01'},
   ],
   confDates:'Jul 13–17, 2026', location:'Sydney, Australia', core:'—', coreClass:'other',
   url:'https://services.conferences.computer.org/2026/qsw/'},

  {id:'qctip', name:'QCTiP 2026', full:'Quantum Computing Theory in Practice', cat:'quantum',
   deadlines:[
     {date:'2026-02-01', type:'paper', label:'Paper'},
   ],
   confDates:'Apr 20–22, 2026', location:'Oxford, UK', core:'—', coreClass:'other', url:''},

  {id:'qcnc', name:'QCNC 2026', full:'Quantum Communications, Networking & Computing', cat:'quantum',
   deadlines:[
     {date:'2025-11-15', type:'paper', label:'Paper', notification:'2026-01-15'},
   ],
   confDates:'Apr 6–8, 2026', location:'Kobe, Japan', core:'—', coreClass:'other',
   url:'https://www.ieee-qcnc.org/2026/'},

  // ===================== THEORY =====================
  {id:'focs', name:'FOCS 2026', full:'IEEE Symp. on Foundations of Computer Science', cat:'theory',
   deadlines:[
     {date:'2026-04-01', type:'paper', label:'Full paper', notification:'2026-07-03'},
   ],
   confDates:'Nov 8–11, 2026', location:'New York, USA', core:'A*', coreClass:'astar',
   url:'https://ieee-focs.org/'},

  {id:'stoc', name:'STOC 2026', full:'ACM Symp. on Theory of Computing', cat:'theory',
   deadlines:[
     {date:'2025-11-04', type:'paper', label:'Full paper', notification:'2026-02-01'},
   ],
   confDates:'Jun 22–26, 2026', location:'Salt Lake City, UT', core:'A*', coreClass:'astar',
   url:'https://acm-stoc.org/stoc2026/'},

  {id:'soda27', name:'SODA 2027', full:'ACM-SIAM Symp. on Discrete Algorithms', cat:'theory',
   deadlines:[
     {date:'2026-07-09', type:'paper', label:'Full paper', notification:'2026-09-30'},
   ],
   confDates:'Jan 24–27, 2027', location:'Philadelphia, PA', core:'A*', coreClass:'astar',
   url:'https://www.siam.org/conferences-events/siam-conferences/soda27/'},

  {id:'ipco', name:'IPCO 2026', full:'Intl Conf on Integer Programming & Combinatorial Opt.', cat:'theory',
   deadlines:[
     {date:'2025-10-31', type:'paper', label:'Full paper', notification:'2026-02-15'},
   ],
   confDates:'Jun 17–19, 2026', location:'Padova, Italy', core:'A', coreClass:'a',
   url:'https://events.math.unipd.it/ipco2026/'},

  {id:'mfcs', name:'MFCS 2026', full:'Symp. on Math. Foundations of CS', cat:'theory',
   deadlines:[
     {date:'2026-04-24', type:'paper', label:'Full paper', notification:'2026-06-20'},
   ],
   confDates:'Aug 24–28, 2026', location:'Paris, France', core:'B', coreClass:'b',
   url:'https://mfcs2026.irif.fr'},

  {id:'icalp', name:'ICALP 2026', full:'Intl Colloquium on Automata, Languages & Programming', cat:'theory',
   deadlines:[
     {date:'2026-02-06', type:'paper', label:'Full paper', notification:'2026-04-14'},
   ],
   confDates:'Jul 7–10, 2026', location:'Egham, UK', core:'A*', coreClass:'astar', url:''},

  // ===================== ML / AI =====================
  {id:'neurips', name:'NeurIPS 2026', full:'Conf on Neural Information Processing Systems', cat:'ml',
   deadlines:[
     {date:'2026-05-04', type:'abstract', label:'Abstract'},
     {date:'2026-05-06', type:'paper', label:'Full paper', rebuttal:'Aug 2026', notification:'2026-09-18'},
   ],
   confDates:'Dec 6–12, 2026', location:'Sydney, Australia', core:'A*', coreClass:'astar',
   url:'https://neurips.cc/Conferences/2026'},

  {id:'icml', name:'ICML 2026', full:'Intl Conf on Machine Learning', cat:'ml',
   deadlines:[
     {date:'2026-02-01', type:'paper', label:'Full paper', rebuttal:'Mar 2026', notification:'2026-04-30'},
   ],
   confDates:'Jul 6–12, 2026', location:'Seoul, South Korea', core:'A*', coreClass:'astar',
   url:'https://icml.cc/'},

  {id:'iclr', name:'ICLR 2026', full:'Intl Conf on Learning Representations', cat:'ml',
   deadlines:[
     {date:'2025-09-27', type:'paper', label:'Full paper', rebuttal:'Nov 2025', notification:'2026-01-22'},
   ],
   confDates:'Apr 24–28, 2026', location:'TBA', core:'A*', coreClass:'astar',
   url:'https://iclr.cc/'},

  {id:'ijcai', name:'IJCAI-ECAI 2026', full:'Intl Joint Conf on AI', cat:'ml',
   deadlines:[
     {date:'2026-01-19', type:'paper', label:'Full paper', rebuttal:'2026-04-07 – 2026-04-10', notification:'2026-04-29'},
   ],
   confDates:'Aug 15–21, 2026', location:'Bremen, Germany', core:'A*', coreClass:'astar',
   url:'https://2026.ijcai.org/'},

  {id:'aaai27', name:'AAAI 2027', full:'AAAI Conf on Artificial Intelligence', cat:'ml',
   deadlines:[
     {date:null, type:'paper', label:'Full paper (est. ~Aug 2026)'},
   ],
   confDates:'~Feb 2027', location:'TBD', core:'A*', coreClass:'astar',
   url:'https://aaai.org/'},

  {id:'kdd', name:'KDD 2026', full:'ACM SIGKDD Knowledge Discovery & Data Mining', cat:'ml',
   deadlines:[
     {date:'2026-02-08', type:'paper', label:'Full paper', notification:'2026-05-16'},
   ],
   confDates:'Aug 3–7, 2026', location:'TBD', core:'A*', coreClass:'astar',
   url:'https://kdd.org/'},

  // ===================== OPTIMIZATION =====================
  {id:'cp', name:'CP 2026 (FLoC)', full:'Intl Conf on Constraint Programming', cat:'opt',
   deadlines:[
     {date:'2026-03-07', type:'paper', label:'Full paper', rebuttal:'2026-03-09 – 2026-03-12', notification:'2026-04-30'},
   ],
   confDates:'Jul 20–23, 2026', location:'Lisbon, Portugal', core:'A', coreClass:'a',
   url:'https://cp2026.a4cp.org/'},

  {id:'sat', name:'SAT 2026 (FLoC)', full:'Intl Conf on Satisfiability Testing', cat:'opt',
   deadlines:[
     {date:'2026-02-27', type:'paper', label:'Full paper', rebuttal:'2026-04-13 – 2026-04-17', notification:'2026-04-30'},
   ],
   confDates:'Jul 20–23, 2026', location:'Lisbon, Portugal', core:'A', coreClass:'a', url:''},

  {id:'cpaior', name:'CPAIOR 2026', full:'Integration of CP, AI, and OR', cat:'opt',
   deadlines:[
     {date:'2025-12-07', type:'paper', label:'Full paper', rebuttal:'2026-01-20 – 2026-01-23', notification:'2026-02-09'},
   ],
   confDates:'May 26–29, 2026', location:'Rabat, Morocco', core:'B', coreClass:'b', url:''},

  // ===================== INFO THEORY =====================
  {id:'isit', name:'ISIT 2026', full:'IEEE Intl Symp. on Information Theory', cat:'infoth',
   deadlines:[
     {date:'2026-01-16', type:'paper', label:'Main paper', notification:'2026-04-01'},
   ],
   confDates:'Jun 28 – Jul 3, 2026', location:'Guangzhou, China', core:'A', coreClass:'a',
   url:'https://2026.ieee-isit.org/'},

  // ===================== SECURITY =====================
  {id:'ccs', name:'CCS 2026', full:'ACM Conf on Computer & Communications Security', cat:'sec',
   deadlines:[
     {date:'2026-01-07', type:'paper', label:'Cycle 1', rebuttal:'2026-03-17 – 2026-03-20', notification:'2026-04-09'},
     {date:'2026-04-22', type:'paper', label:'Cycle 2', rebuttal:'2026-06-29 – 2026-07-01', notification:'2026-07-17'},
   ],
   confDates:'Nov 15–19, 2026', location:'The Hague, NL', core:'A*', coreClass:'astar', url:''},

  {id:'sp27', name:'IEEE S&P 2027', full:'IEEE Symp. on Security & Privacy', cat:'sec',
   deadlines:[
     {date:'2026-06-05', type:'paper', label:'Cycle 1', notification:'2026-09-09'},
     {date:'2026-11-06', type:'paper', label:'Cycle 2', notification:'2027-03-10'},
   ],
   confDates:'~May 2027', location:'San Francisco, CA', core:'A*', coreClass:'astar', url:''},

  {id:'usenix26', name:"USENIX Security '26", full:'USENIX Security Symposium', cat:'sec',
   deadlines:[
     {date:'2025-08-26', type:'paper', label:'Cycle 1', notification:'2025-11-19'},
     {date:'2026-02-05', type:'paper', label:'Cycle 2', notification:'2026-05-04'},
   ],
   confDates:'Aug 12–14, 2026', location:'Baltimore, MD', core:'A*', coreClass:'astar',
   url:'https://www.usenix.org/conference/usenixsecurity26'},

  {id:'usenix27', name:"USENIX Security '27", full:'USENIX Security Symposium', cat:'sec',
   deadlines:[
     {date:'2026-08-25', type:'paper', label:'Cycle 1', notification:'2026-11-19'},
     {date:'2027-01-26', type:'paper', label:'Cycle 2', notification:'2027-05-04'},
   ],
   confDates:'Aug 11–13, 2027', location:'Denver, CO', core:'A*', coreClass:'astar', url:''},

  // ===================== BLOCKCHAIN =====================
  {id:'icbc', name:'IEEE ICBC 2026', full:'IEEE Intl Conf on Blockchain and Cryptocurrency', cat:'blockchain',
   deadlines:[
     {date:'2026-01-07', type:'paper', label:'Paper/Poster', notification:'2026-03-18'},
   ],
   confDates:'Jun 2026', location:'TBD', core:'—', coreClass:'other',
   url:'https://icbc2026.ieee-icbc.org/'},

  // ===================== DATA / WEB / IR =====================
  {id:'www27', name:'WWW 2027', full:'The Web Conference', cat:'data',
   deadlines:[
     {date:null, type:'paper', label:'Full paper (est. ~Oct 2026)'},
   ],
   confDates:'~Apr 2027', location:'TBD', core:'A*', coreClass:'astar', url:''},

  {id:'sigir', name:'SIGIR 2026', full:'ACM SIGIR Conf on Information Retrieval', cat:'data',
   deadlines:[
     {date:'2025-12-15', type:'paper', label:'Full paper', notification:'2026-03-20'},
   ],
   confDates:'Jul 20–24, 2026', location:'Melbourne, Australia', core:'A*', coreClass:'astar',
   url:'https://sigir2026.org/'},

  {id:'sigmod27', name:'SIGMOD 2027', full:'ACM SIGMOD Intl Conf on Management of Data', cat:'data',
   deadlines:[
     {date:'2026-01-17', type:'paper', label:'Round 1', rebuttal:'2026-03-10 – 2026-03-17', notification:'2026-04-19'},
     {date:'2026-04-17', type:'paper', label:'Round 2', notification:'~Jul 2026'},
     {date:'2026-07-17', type:'paper', label:'Round 3', notification:'~Oct 2026'},
     {date:'2026-10-17', type:'paper', label:'Round 4', notification:'~Jan 2027'},
   ],
   confDates:'Jun 13–19, 2027', location:'Huntington Beach, CA', core:'A*', coreClass:'astar',
   url:'https://2027.sigmod.org/'},

  {id:'vldb27', name:'VLDB 2027', full:'Intl Conf on Very Large Data Bases', cat:'data',
   deadlines:[
     {date:null, type:'paper', label:'Rolling monthly (est. starts ~Mar 2026)'},
   ],
   confDates:'Aug 23–27, 2027', location:'Athens, Greece', core:'A*', coreClass:'astar', url:''},

  {id:'sigmetrics', name:'SIGMETRICS 2026', full:'ACM SIGMETRICS Conf on Measurement & Modeling', cat:'data',
   deadlines:[
     {date:'2025-07-22', type:'paper', label:'Summer deadline'},
     {date:'2025-10-14', type:'paper', label:'Fall deadline'},
     {date:'2026-01-13', type:'paper', label:'Winter deadline'},
   ],
   confDates:'Jun 8–12, 2026', location:'Ann Arbor, MI', core:'A', coreClass:'a',
   url:'https://www.sigmetrics.org/sigmetrics2026/'},
];

// ============================================================
// TOPICS — maps conference id → topic tags
// ============================================================
const TOPIC_MAP = {
  qce:['quantum','optimization','ml'], tqc:['quantum','theory'],
  aqis:['quantum','theory'], qip:['quantum','theory'], qsw:['quantum'],
  qctip:['quantum','theory'], qcnc:['quantum'],
  focs:['theory','quantum'], stoc:['theory','quantum'], soda27:['theory','optimization'],
  ipco:['theory','optimization'], mfcs:['theory'], icalp:['theory'],
  neurips:['ml','quantum'], icml:['ml','quantum'], iclr:['ml'],
  ijcai:['ml','optimization'], aaai27:['ml','optimization'], kdd:['ml'],
  cp:['optimization','theory'], sat:['optimization','theory'], cpaior:['optimization','ml'],
  isit:['infoth','theory'],
  ccs:['security'], sp27:['security'], usenix26:['security'], usenix27:['security'],
  icbc:['blockchain','security'],
  www27:['data','ml'], sigir:['data','ml'], sigmod27:['data'], vldb27:['data'],
  sigmetrics:['data','theory'],
};

const TOPIC_LABELS = {
  quantum:'Quantum', ml:'ML/AI', theory:'Theory', optimization:'Optimization',
  security:'Security', infoth:'Info Theory', data:'Data/Web', blockchain:'Blockchain',
};

// Attach topics to each conference
for (const c of CONFERENCES) c.topics = TOPIC_MAP[c.id] || [c.cat];

// ============================================================
// CATEGORY DISPLAY NAMES & ORDER
// ============================================================
const CAT_NAMES = {
  quantum:'Quantum-Specific',
  theory:'Theory of Computing & Algorithms',
  ml:'Machine Learning / AI',
  opt:'Optimization / Constraints',
  data:'Data Management / Web / IR',
  infoth:'Information Theory',
  sec:'Security & Privacy',
  blockchain:'Blockchain & Cryptocurrency',
};
const CAT_ORDER = ['quantum','theory','ml','opt','data','infoth','sec','blockchain'];

// ============================================================
// JOURNALS
// ============================================================
const JOURNALS = [
  {name:'PRX Quantum',           pub:'APS',               if_:11.0, q:'Q1', h:58,  oa:'✅ OA',  scope:'Quantum algorithms, optimization, error correction'},
  {name:'npj Quantum Information',pub:'Nature / Springer', if_:8.3,  q:'Q1', h:85,  oa:'✅ OA',  scope:'Broad quantum information science'},
  {name:'ACM Trans. Quantum Computing', pub:'ACM',        if_:6.8,  q:'Q1', h:27,  oa:'Hybrid', scope:'QC algorithms, complexity, applications'},
  {name:'Quantum Sci. & Technology',    pub:'IOP',        if_:6.6,  q:'Q1', h:63,  oa:'Hybrid', scope:'Quantum computing, sensing, simulation'},
  {name:'Quantum (open journal)',       pub:'Quantum (nonprofit)', if_:6.4, q:'Q1', h:72, oa:'✅ OA', scope:'Quantum science, open access'},
  {name:'IEEE Trans. Quantum Eng.',     pub:'IEEE',       if_:5.2,  q:'Q1', h:28,  oa:'✅ OA',  scope:'Quantum engineering, systems, applications'},
  {name:'Quantum Machine Intelligence', pub:'Springer',   if_:4.4,  q:'Q2', h:25,  oa:'Hybrid', scope:'QML, quantum AI, optimization'},
  {name:'Quantum Info. Processing',     pub:'Springer',   if_:2.2,  q:'Q2', h:70,  oa:'Hybrid', scope:'Broad quantum information'},
  {name:'Quantum Info. & Computation',  pub:'Rinton Press',if_:1.1, q:'Q3', h:77,  oa:'No',     scope:'Quantum computation theory'},

  {cat:'Quantum Technology & Physics'},
  {name:'Nature Physics',           pub:'Nature / Springer', if_:18.4, q:'Q1', h:349, oa:'Hybrid', scope:'High-impact physics; quantum computing, condensed matter'},
  {name:'EPJ Quantum Technology',   pub:'SpringerOpen',      if_:5.6,  q:'Q1', h:33,  oa:'✅ OA',  scope:'Quantum metrology, control, information, sensing'},
  {name:'Physical Review A',        pub:'APS',               if_:2.6,  q:'Q2', h:238, oa:'No',     scope:'AMO physics, quantum mechanics, theory'},
  {name:'New J. of Physics',        pub:'IOP',               if_:2.8,  q:'Q2', h:147, oa:'✅ OA',  scope:'Interdisciplinary physics, QC applications'},

  {cat:'Broader CS / Optimization / AI'},
  {name:'INFORMS J. on Computing',  pub:'INFORMS',     if_:4.4, q:'Q1', h:85,  oa:'No',     scope:'Optimization, algorithms, computational OR'},
  {name:'Mathematical Programming', pub:'Springer',    if_:2.2, q:'Q1', h:130, oa:'Hybrid', scope:'Integer programming, combinatorial optimization'},
  {name:'SIAM J. on Computing',     pub:'SIAM',        if_:1.6, q:'Q1', h:120, oa:'No',     scope:'Algorithms, complexity theory, foundations of CS'},

  {cat:'Graph ML / Data Engineering'},
  {name:'IEEE Trans. Neural Networks & Learning Systems', pub:'IEEE', if_:10.4, q:'Q1', h:340, oa:'Hybrid', scope:'GNN architectures, graph machine learning'},
  {name:'IEEE Trans. Knowledge & Data Engineering',       pub:'IEEE', if_:8.9,  q:'Q1', h:260, oa:'Hybrid', scope:'Graph mining, social networks, large-scale algorithms'},

  {cat:'Smart Grid / Security / Networking'},
  {name:'IEEE Trans. Smart Grid',                    pub:'IEEE',     if_:9.7,  q:'Q1', h:253, oa:'Hybrid', scope:'Smart grid optimization, state estimation, CPS'},
  {name:'IEEE Trans. Info. Forensics & Security',    pub:'IEEE',     if_:6.8,  q:'Q1', h:195, oa:'Hybrid', scope:'CPS security, cyber-physical attack detection'},
  {name:'IEEE Trans. Dependable & Secure Computing', pub:'IEEE',     if_:7.0,  q:'Q1', h:125, oa:'Hybrid', scope:'Trustworthy FL, blockchain security'},
  {name:'IEEE/ACM Trans. Networking',                pub:'IEEE/ACM', if_:3.7,  q:'Q1', h:210, oa:'Hybrid', scope:'Network algorithms, graph problems at scale'},
];

// ============================================================
// PAPER → VENUE STRATEGY
// ============================================================
const STRATEGY = [
  {paper:'Paper 1b (Ising lower bounds)',       path:'FOCS → QIP 2027 → STOC 2027 → TQC poster'},
  {paper:'HDQI impossibility',                  path:'QIP 2027 → TQC → IEEE QCE'},
  {paper:'QeeLIP system',                       path:'IEEE QCE (QAPP) → QSW 2027'},
  {paper:'Quantum-AI CPS security',             path:'IEEE QCE → NeurIPS → CCS'},
  {paper:'GNN / spectral methods',              path:'NeurIPS → ICML 2027 → AAAI 2027'},
  {paper:'RISE/S-RISE spectral annealing',      path:'IEEE QCE (QALG) → CPAIOR 2027 → CP 2027'},
];

const NEXT_CYCLE = [
  {venue:'QIP 2027',  est:'~Sep 2026', note:'Premier quantum theory venue'},
  {venue:'STOC 2027', est:'~Nov 2026', note:'A* theory'},
  {venue:'SODA 2027', est:'Jul 9, 2026', note:'A* discrete algorithms'},
  {venue:'AAAI 2027', est:'~Aug 2026', note:'QML + optimization + AI'},
  {venue:'ICML 2027', est:'~Jan 2027', note:'Quantum-AI, GNN'},
  {venue:'CP 2027',   est:'~Feb 2027', note:'Encoding theory, constraints'},
];
