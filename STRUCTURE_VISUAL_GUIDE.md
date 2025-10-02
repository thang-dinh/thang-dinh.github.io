# Visual Structure Guide
## Thang N. Dinh Personal Website

This document complements the main STRUCTURE_ANALYSIS.md with visual diagrams and detailed component breakdowns.

---

## Visual Layout Overview

Based on the screenshot analysis, here's a detailed visual breakdown:

### Full Page Structure (Top to Bottom)

```
╔═══════════════════════════════════════════════════════════════════════╗
║                        NAVIGATION BAR (Fixed)                         ║
║  Navy Blue Background (#002366) | White Text                         ║
║  [Home] [Publications] [Research] [Teaching]                          ║
╚═══════════════════════════════════════════════════════════════════════╝

╔═══════════════════════════════════════════════════════════════════════╗
║                    SECTION 1: HOME (id="home")                        ║
║                  Light Green Background (#e0f3e0)                     ║
║  ┌─────────────────────────────────────┬─────────────────────────┐   ║
║  │  LEFT COLUMN (col-lg-6)             │  RIGHT COLUMN (col-lg-4)│   ║
║  │  • Thang N. Dinh (H1)              │  • Portrait Image       │   ║
║  │  • Associate Professor (2019-now)   │    (250px width)        │   ║
║  │  • Assistant Professor (2013-2019)  │                         │   ║
║  │  • Department Link                  │                         │   ║
║  │  • University Link                  │                         │   ║
║  └─────────────────────────────────────┴─────────────────────────┘   ║
║                                                                        ║
║  ┌─────────────────────────────────────┬─────────────────────────┐   ║
║  │  EDUCATION (col-md-6)               │  CONTACT (col-md-6)     │   ║
║  │  • Ph.D (2008-2013)                 │  • Office: ERB 2321     │   ║
║  │  • B.S. (2003-2007)                 │  • Email: tndinh@vcu    │   ║
║  └─────────────────────────────────────┴─────────────────────────┘   ║
║                                                                        ║
║  ┌───────────────────────────────────────────────────────────────┐   ║
║  │  RESEARCH INTERESTS (col-md-12)                                │   ║
║  │  • Graph Machine Learning                                      │   ║
║  │  • Quantum Computing                                           │   ║
║  │  • Approximation Algorithm                                     │   ║
║  │  • Applications (Social Networks, Blockchain, etc.)            │   ║
║  └───────────────────────────────────────────────────────────────┘   ║
║                                                                        ║
║  Erdős Number: 3 (Paul Erdős → Ronald Graham → Panos Pardalos)       ║
╚═══════════════════════════════════════════════════════════════════════╝

╔═══════════════════════════════════════════════════════════════════════╗
║                 SECTION 2: AWARDS (id="awards")                       ║
║                    Light/White Background (bg-light)                  ║
║  ┌───────────────────────────────────────────────────────────────┐   ║
║  │  Awards and Honors (H2)                                        │   ║
║  │  • Best Paper Award, ACM Mobicom 2019                          │   ║
║  │  • Best Paper Award Nominee, ACM Sensys 2018                   │   ║
║  │  • Selected for Best Papers of ICDM 2017                       │   ║
║  │  • Best Paper Award Nominee, ACM Sensys'17                     │   ║
║  │  • Best Paper Award, ACM MobiCom 2017 - S3 Workshop            │   ║
║  │  • Best-in-Session Presentation Award, INFOCOM 2016            │   ║
║  │  • Best Paper Award, 4th Int. Conf. CSN, 2015                  │   ║
║  │  • Alumni Fellowship Award, UF, 2008                           │   ║
║  │  • Honda Young Engineer & Scientist Award, 2007                │   ║
║  │  • Distinguished Academic Achievement Award, VNU, 2007         │   ║
║  │  • Microsoft Scholarship (Bill Gates), 2006                    │   ║
║  │  • Bronze Medal, Int. Olympiad in Informatics, 2003            │   ║
║  └───────────────────────────────────────────────────────────────┘   ║
╚═══════════════════════════════════════════════════════════════════════╝

╔═══════════════════════════════════════════════════════════════════════╗
║            SECTION 3: PUBLICATIONS (id="publications")                ║
║                  Light Green Background (#e0f3e0)                     ║
║  ┌───────────────────────────────────────────────────────────────┐   ║
║  │  Selected Publications (H2)                                    │   ║
║  │  1. Scalable Quantum-Inspired Optimization (AAAI 2025) [Oral] │   ║
║  │  2. FastHare: Fast Hamiltonian Reduction (QCE 2022)           │   ║
║  │  3. SaPHyRa: Learning Theory Approach (ICDE 2022)             │   ║
║  │  4. AI and blockchain integration (IEEE Computer 2018)        │   ║
║  │  5. Outward influence estimation (SIGMETRICS 2017)            │   ║
║  │  6. Network Clustering via Modularity (ICDM 2015)             │   ║
║  └───────────────────────────────────────────────────────────────┘   ║
║                                                                        ║
║  Full List of Publications:                                           ║
║  [Google Scholar Button] [DBLP Button] [Scopus Button]                ║
╚═══════════════════════════════════════════════════════════════════════╝

╔═══════════════════════════════════════════════════════════════════════╗
║              SECTION 4: RESEARCH (id="research")                      ║
║                    Light/White Background (bg-light)                  ║
║  Research Projects (H2)                                               ║
║                                                                        ║
║  ROW 1 (Two Cards Side-by-Side)                                       ║
║  ┌─────────────────────────────────┬─────────────────────────────┐   ║
║  │  CARD 1 (col-lg-6)              │  CARD 2 (col-lg-6)          │   ║
║  │  ┌───────────────────────────┐  │  ┌───────────────────────┐  │   ║
║  │  │ Quantum-inspired State    │  │  │ Quantum Leap in       │  │   ║
║  │  │ Estimation                │  │  │ Health Optimization   │  │   ║
║  │  │                           │  │  │                       │  │   ║
║  │  │ • Quantum network arch    │  │  │ • Medical optimization│  │   ║
║  │  │ • Quantum computing soln  │  │  │ • Molecule positioning│  │   ║
║  │  │ • Robust distributed est  │  │  │ • Quantum-accelerated │  │   ║
║  │  └───────────────────────────┘  │  └───────────────────────┘  │   ║
║  └─────────────────────────────────┴─────────────────────────────┘   ║
║                                                                        ║
║  ROW 2 (Two Cards Side-by-Side)                                       ║
║  ┌─────────────────────────────────┬─────────────────────────────┐   ║
║  │  CARD 3 (col-lg-6)              │  CARD 4 (col-lg-6)          │   ║
║  │  ┌───────────────────────────┐  │  ┌───────────────────────┐  │   ║
║  │  │ Trustworthy & Privacy-    │  │  │ Fighting Misinfo &    │  │   ║
║  │  │ preserving Fed Learning   │  │  │ Covert Terrorism      │  │   ║
║  │  │                           │  │  │                       │  │   ║
║  │  │ • Secure aggregation      │  │  │ • Billion-scale nets  │  │   ║
║  │  │ • SNARK attestation       │  │  │ • Misinfo propagation │  │   ║
║  │  │ • Blockchain-based FL     │  │  │ • Social media dynamics│ │   ║
║  │  └───────────────────────────┘  │  └───────────────────────┘  │   ║
║  └─────────────────────────────────┴─────────────────────────────┘   ║
║                                                                        ║
║  ┌───────────────────────────────────────────────────────────────┐   ║
║  │  The research is made possible thanks to the support of (H4)  │   ║
║  │                                                                │   ║
║  │  [NSF] [DOE] [CCI Virginia] [VCU] [Harmony] [Nvidia] [D-Wave] │   ║
║  │   (7 sponsor logos displayed in flexbox layout)               │   ║
║  └───────────────────────────────────────────────────────────────┘   ║
╚═══════════════════════════════════════════════════════════════════════╝

╔═══════════════════════════════════════════════════════════════════════╗
║               SECTION 5: TEACHING (id="teaching")                     ║
║                  Light Green Background (#e0f3e0)                     ║
║  ┌───────────────────────────────────────────────────────────────┐   ║
║  │  Teaching (H2)                                                 │   ║
║  │  • CMSC 691: Graph Neural Networks and Applications            │   ║
║  │  • CMSC 691: Advanced Social Network Analysis & Security       │   ║
║  │  • CMSC 491: Introduction to Blockchain and Applications       │   ║
║  │  • CMSC 501: Advanced Algorithms                               │   ║
║  └───────────────────────────────────────────────────────────────┘   ║
╚═══════════════════════════════════════════════════════════════════════╝

╔═══════════════════════════════════════════════════════════════════════╗
║                           FOOTER                                      ║
║                    Light Background (bg-light)                        ║
║                  © 2023 Thang N. Dinh. All rights reserved.           ║
╚═══════════════════════════════════════════════════════════════════════╝
```

---

## Component Hierarchy Tree

```
index.html
├── <head>
│   ├── Meta tags (charset, viewport)
│   ├── Title: "Thang N. Dinh's Personal Website"
│   ├── External CSS
│   │   ├── Bootstrap 4.5.2
│   │   └── Google Fonts (Roboto)
│   ├── External JavaScript
│   │   ├── jQuery 3.5.1
│   │   ├── Popper.js 1.16.0
│   │   └── Bootstrap JS 4.5.2
│   └── Embedded <style> CSS
│
└── <body>
    ├── <nav> Navigation Bar
    │   └── .container
    │       ├── Navbar Toggle Button (mobile)
    │       └── .navbar-collapse
    │           └── <ul> Navigation Links
    │               ├── Home → #home
    │               ├── Publications → #publications
    │               ├── Research → #research
    │               └── Teaching → #teaching
    │
    ├── .container (Main Content)
    │   │
    │   ├── <section id="home"> Home Section
    │   │   ├── Row 1: Profile
    │   │   │   ├── col-lg-6: Name, Positions, Affiliations
    │   │   │   └── col-lg-4: Portrait Image
    │   │   ├── Row 2: Education & Contact
    │   │   │   ├── col-md-6: Education Details
    │   │   │   └── col-md-6: Contact Information
    │   │   ├── Row 3: Research Interests
    │   │   │   └── col-md-12: Bulleted List
    │   │   └── Erdős Number Note
    │   │
    │   ├── <section id="awards"> Awards Section
    │   │   ├── <h2> "Awards and Honors"
    │   │   └── <ul> List of 11 Awards
    │   │
    │   ├── <section id="publications"> Publications Section
    │   │   ├── <h2> "Selected Publications"
    │   │   ├── <ol> Ordered List (6 publications)
    │   │   └── <p> Full List Links
    │   │       ├── Google Scholar Button
    │   │       ├── DBLP Button
    │   │       └── Scopus Button
    │   │
    │   ├── <section id="research"> Research Section
    │   │   ├── <h2> "Research Projects"
    │   │   ├── Row 1: Two Cards
    │   │   │   ├── col-lg-6
    │   │   │   │   └── Card: Quantum-inspired State Estimation
    │   │   │   └── col-lg-6
    │   │   │       └── Card: Quantum Leap in Health
    │   │   ├── Row 2: Two Cards
    │   │   │   ├── col-lg-6
    │   │   │   │   └── Card: Trustworthy Federated Learning
    │   │   │   └── col-lg-6
    │   │   │       └── Card: Fighting Misinformation
    │   │   └── Funding Acknowledgment
    │   │       ├── <h4> Heading
    │   │       └── <div> Flex Container
    │   │           └── 7 Sponsor Logo Images
    │   │
    │   └── <section id="teaching"> Teaching Section
    │       ├── <h2> "Teaching"
    │       └── <ul> List of 4 Courses
    │
    └── <footer>
        └── Copyright Notice (© 2023)
```

---

## CSS Class Structure

### Bootstrap Classes Used

#### Grid System
- `.container` - Main content container
- `.row` - Row wrapper
- `.col-lg-6` - 6-column width on large screens
- `.col-lg-4` - 4-column width on large screens
- `.col-md-6` - 6-column width on medium screens
- `.col-md-12` - Full-width on medium screens

#### Spacing
- `.mt-5` - Margin top (modified to 1rem in custom CSS)
- `.py-5` - Padding top/bottom
- `.mt-4` - Margin top 1.5rem
- `.m-2` - Margin 0.5rem (for logos)

#### Components
- `.navbar` - Navigation bar
- `.navbar-expand-lg` - Responsive navbar
- `.navbar-toggler` - Mobile menu button
- `.nav-link` - Navigation link
- `.card` - Card component
- `.card-body` - Card content wrapper
- `.btn` - Button styling
- `.btn-primary` - Primary button color

#### Background & Text
- `.bg-light` - Light background
- `.bg-dark` - Modified to light green (#e0f3e0)
- `.text-center` - Center-aligned text
- `.text-left` - Left-aligned text

#### Images
- `.img-fluid` - Responsive image
- `.rounded` - Rounded corners

#### Flexbox
- `.d-flex` - Flex container
- `.justify-content-center` - Center items horizontally
- `.align-items-center` - Center items vertically
- `.flex-wrap` - Allow wrapping

### Custom CSS Classes

#### Layout
- `.navbar-custom` - Custom navbar styling (navy blue)
- `.portrait-container` - Portrait image container (250px, flex)

#### Typography
- `.position` - Position row with flex layout
- `.position-title` - Position title (left-aligned)
- `.degree` - Degree row with flex layout
- `.degree-title` - Degree title (left-aligned)
- `.year` - Year display (right-aligned)

---

## Color Palette

### Primary Colors
| Color Name | Hex Code | Usage |
|------------|----------|--------|
| Navy Blue | `#002366` | Navbar background |
| Light Green | `#e0f3e0` | Section backgrounds (Home, Publications, Teaching) |
| White | `#ffffff` | Navbar text, card backgrounds |
| Light Gray | `#cccccc` | Navbar hover state |

### Text Colors
- **Default**: Black (inherited from body)
- **Links**: Blue (default browser link color)
- **Navbar Links**: White (#ffffff)

---

## Responsive Breakpoints

Based on Bootstrap 4 grid system:

| Breakpoint | Size | Behavior |
|------------|------|----------|
| xs | <576px | Mobile - Single column, navbar collapses |
| sm | ≥576px | Small tablet - Navbar still collapsed |
| md | ≥768px | Tablet - Education/Contact side-by-side |
| lg | ≥992px | Desktop - Navbar expands, research cards 2x2 |
| xl | ≥1200px | Large desktop - Same as lg |

### Key Responsive Features:
1. **Navbar**: Collapses to hamburger menu on mobile
2. **Profile Section**: Portrait moves below text on mobile
3. **Education/Contact**: Stack vertically on mobile
4. **Research Cards**: Stack vertically on mobile, 2x2 on desktop
5. **Sponsor Logos**: Wrap to multiple rows on mobile

---

## Interactive Elements

### Navigation
- **Anchor Links**: Smooth scroll to sections
- **Active State**: Home link marked as active
- **Hover Effects**: Navbar links change to light gray on hover

### Links
- **External Links**: Publications, institutional pages, academic profiles
- **Document Links**: PDF file (IEEEComp18_BlockchainAI.pdf)
- **Button Links**: Google Scholar, DBLP, Scopus (styled as primary buttons)

### Mobile Features
- **Navbar Toggle**: Hamburger menu on mobile devices
- **Responsive Grid**: Content reflows for mobile viewing

---

## Asset Dependencies

### Images
All images stored in `/img/` directory:

| File | Purpose | Dimensions |
|------|---------|------------|
| `thang.png` | Portrait photo | Variable (responsive) |
| `NSF.png` | Sponsor logo | Max height: 60px |
| `DOE.png` | Sponsor logo | Max height: 60px |
| `CCI.png` | Sponsor logo | Max height: 60px |
| `vcu.png` | Sponsor logo | Max height: 60px |
| `Harmony.png` | Sponsor logo | Max height: 60px |
| `Nvidia.png` | Sponsor logo | Max height: 60px |
| `D-Wave.png` | Sponsor logo | Max height: 60px, Max width: 100px |

### Documents
- `/files/IEEEComp18_BlockchainAI.pdf` - Research paper PDF

---

## Content Sections Summary

### 1. Home Section
- **Lines**: 85-143
- **Elements**: 28 interactive elements (links, text nodes)
- **Key Info**: Profile, education, contact, research interests, Erdős number

### 2. Awards Section
- **Lines**: 146-162
- **Elements**: 11 list items
- **Key Info**: Academic honors and awards (2003-2019)

### 3. Publications Section
- **Lines**: 163-193
- **Elements**: 6 publications + 3 external profile links
- **Key Info**: Selected publications (2015-2025)

### 4. Research Section
- **Lines**: 195-277
- **Elements**: 4 research project cards + 7 sponsor logos
- **Key Info**: Current research focus areas and funding sources

### 5. Teaching Section
- **Lines**: 279-287
- **Elements**: 4 course listings
- **Key Info**: Graduate-level computer science courses

---

## Performance Considerations

### External Resources
- All CSS/JS libraries loaded from CDNs
- Google Fonts loaded asynchronously
- Benefits from CDN caching

### Images
- Portrait: Single image, responsive sizing
- Sponsor logos: 7 small PNG files
- No lazy loading implemented

### Page Weight (Estimated)
- HTML: ~11 KB
- Images: ~200 KB (estimated)
- External resources: Cached by CDN

---

## Accessibility Notes

### Current Implementation
✅ Semantic HTML5 elements (`<nav>`, `<section>`, `<footer>`)  
✅ Alt text on images  
✅ Proper heading hierarchy (H1 → H2 → H4 → H5)  
✅ Descriptive link text  
✅ Responsive design for mobile accessibility  

### Potential Improvements
⚠️ Add ARIA labels for navigation  
⚠️ Add skip-to-content link  
⚠️ Improve color contrast ratios  
⚠️ Add focus indicators for keyboard navigation  
⚠️ Add lang attributes to non-English text  

---

## SEO Observations

### Current Implementation
✅ Descriptive page title  
✅ Semantic HTML structure  
✅ Proper heading hierarchy  
✅ External links to authoritative sources  

### Potential Improvements
⚠️ Add meta description  
⚠️ Add Open Graph tags  
⚠️ Add structured data (Schema.org)  
⚠️ Add keywords meta tag  
⚠️ Add canonical URL  

---

This visual guide complements the detailed STRUCTURE_ANALYSIS.md document and provides a more visual representation of the website's structure.
