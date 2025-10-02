# Main Page Structure Analysis
## Thang N. Dinh Personal Website (thang-dinh.github.io)

This document provides a comprehensive analysis of the main page structure of Thang N. Dinh's personal academic website.

---

## Table of Contents
1. [Overview](#overview)
2. [HTML Document Structure](#html-document-structure)
3. [Navigation](#navigation)
4. [Main Sections](#main-sections)
5. [Styling and Design](#styling-and-design)
6. [External Dependencies](#external-dependencies)
7. [Assets](#assets)
8. [Page Flow Diagram](#page-flow-diagram)

---

## Overview

**File**: `index.html`  
**Type**: Single-page application (SPA) with anchor navigation  
**Framework**: Bootstrap 4.5.2  
**Language**: English  
**Purpose**: Academic personal website showcasing professional profile, research, publications, and teaching

---

## HTML Document Structure

### Head Section
The `<head>` section contains metadata, external resource links, and embedded CSS:

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thang N. Dinh's Personal Website</title>
    
    <!-- External Stylesheets -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
    
    <!-- JavaScript Libraries -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    
    <!-- Embedded CSS Styles -->
    <style>...</style>
</head>
```

**Key Features**:
- Responsive viewport settings for mobile compatibility
- Bootstrap 4.5.2 for responsive grid layout
- Google Fonts (Roboto) for typography
- jQuery 3.5.1, Popper.js 1.16.0 for Bootstrap functionality
- Custom CSS embedded in `<style>` tags

---

## Navigation

### Navbar Component
**Location**: Lines 59-82  
**Type**: Bootstrap responsive navbar  
**Behavior**: Collapsible on mobile devices

```html
<nav class="navbar navbar-expand-lg navbar-custom">
    <div class="container">
        <button class="navbar-toggler">...</button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#home">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#publications">Publications</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#research">Research</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#teaching">Teaching</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
```

**Navigation Links**:
1. Home (`#home`)
2. Publications (`#publications`)
3. Research (`#research`)
4. Teaching (`#teaching`)

**Styling**:
- Navy blue background (`#002366`)
- White text color
- Hover effect (light gray `#cccccc`)

---

## Main Sections

The page consists of five main sections wrapped in a Bootstrap container:

### 1. Home Section
**ID**: `home`  
**Lines**: 85-143  
**Background**: Light green (`#e0f3e0`)  
**Layout**: Multi-row Bootstrap grid

#### Components:
- **Header Row** (Lines 86-104):
  - **Left Column** (col-lg-6):
    - Name: "Thang N. Dinh" (H1)
    - Current Position: Associate Professor (2019-present)
    - Previous Position: Assistant Professor (2013-2019)
    - Affiliation links: Department of Computer Science, VCU
  - **Right Column** (col-lg-4):
    - Portrait image (`img/thang.png`)

- **Education & Contact Row** (Lines 105-128):
  - **Left Column** (col-md-6):
    - Education heading (H4)
    - Ph.D., Computer Engineering, University of Florida (2008-2013)
    - B.S., Information Technology, Vietnam National University (2003-2007)
  - **Right Column** (col-md-6):
    - Contact information
    - Office: ERB 2321
    - Email: tndinh [at] vcu.edu

- **Research Interests Row** (Lines 129-141):
  - Full-width column (col-md-12)
  - Bulleted list:
    - Graph Machine Learning
    - Quantum Computing
    - Approximation Algorithm
    - Applications (social networks, blockchain, smart grids, etc.)

- **Footer Note** (Line 142):
  - Erdős number: 3 (via Paul Erdős → Ronald Graham → Panos Pardalos)

---

### 2. Awards Section
**ID**: `awards`  
**Lines**: 146-162  
**Background**: Light color (`bg-light`)  
**Layout**: Single column

#### Content:
Unordered list of 11 awards and honors, including:
- Best Paper Awards (ACM Mobicom 2019, MobiCom 2017)
- Best Paper Nominees (ACM Sensys 2018, 2017)
- Selected for Best Papers of ICDM 2017
- Best-in-Session Presentation Award (INFOCOM 2016)
- Alumni Fellowship Award (University of Florida, 2008)
- Bronze Medal at International Olympiad in Informatics (2003)
- Various scholarships and academic achievement awards

---

### 3. Publications Section
**ID**: `publications`  
**Lines**: 163-193  
**Background**: Light green (`#e0f3e0`)  
**Layout**: Single column

#### Components:
- **Selected Publications** (H2 heading)
- **Ordered List** of 6 key publications:
  1. Scalable Quantum-Inspired Optimization (AAAI 2025)
  2. FastHare: Fast Hamiltonian Reduction (QCE 2022)
  3. SaPHyRa: Learning Theory Approach (ICDE 2022)
  4. AI and blockchain (IEEE Computer Magazine 2018)
  5. Outward influence estimation (SIGMETRICS 2017)
  6. Network Clustering (ICDM 2015)

- **Full Publication Links**:
  - Google Scholar button
  - DBLP button
  - Scopus button

---

### 4. Research Section
**ID**: `research`  
**Lines**: 195-277  
**Background**: Light color (`bg-light`)  
**Layout**: Multi-row Bootstrap grid with cards

#### Research Projects (4 cards in 2x2 grid):

**Row 1** (Lines 197-232):
1. **Quantum-inspired State Estimation** (col-lg-6)
   - Focus: Power state estimation for smart grids
   - Bullets: quantum network architecture, quantum computing solutions, robust distributed system

2. **Quantum Leap in Health Optimization** (col-lg-6)
   - Focus: NISQ quantum devices for health challenges
   - Bullets: medical optimization problems, molecule positioning, quantum-accelerated data analysis

**Row 2** (Lines 233-261):
3. **Trustworthy Privacy-preserving Federated Learning** (col-lg-6)
   - Focus: Protection against malicious users/servers
   - Bullets: secure aggregation, SNARK attestation, blockchain-based FL architecture

4. **Fighting Misinformation and Covert Terrorism** (col-lg-6)
   - Focus: Billion-scale social network analysis
   - Bullets: misinformation propagation, social media dynamics

#### Funding Acknowledgment (Lines 262-276):
- Heading: "The research is made possible thanks to the support of"
- **Sponsor Logos** (flexbox layout):
  - NSF (National Science Foundation)
  - DOE (Department of Energy)
  - CCI Virginia
  - VCU (Virginia Commonwealth University)
  - Harmony One
  - Nvidia
  - D-Wave

---

### 5. Teaching Section
**ID**: `teaching`  
**Lines**: 279-287  
**Background**: Light green (`#e0f3e0`)  
**Layout**: Single column

#### Courses:
Unordered list of 4 courses:
- CMSC 691: Graph Neural Networks and Applications
- CMSC 691: Advanced Social Network Analysis & Security
- CMSC 491: Introduction to Blockchain and Applications
- CMSC 501: Advanced Algorithms

---

### 6. Footer
**Lines**: 290-292  
**Background**: Light color (`bg-light`)  
**Layout**: Centered text

```html
<footer class="bg-light text-center py-3 mt-5">
    &copy; 2023 Thang N. Dinh. All rights reserved.
</footer>
```

---

## Styling and Design

### Color Scheme
- **Navy Blue**: `#002366` (navbar background)
- **Light Green**: `#e0f3e0` (section backgrounds - Home, Publications, Teaching)
- **White/Light**: Default Bootstrap `bg-light` (Awards, Research, Footer)
- **White Text**: `#ffffff` (navbar links)
- **Light Gray**: `#cccccc` (navbar hover)

### Typography
- **Font Family**: 'Roboto', sans-serif (300, 400, 500 weights)
- **Headings**:
  - H1: Name (Home section)
  - H2: Section titles
  - H4: Subsection titles (Education, Contact, Funding)
  - H5: Card titles (Research projects)

### Custom CSS Classes

#### Layout Classes:
- `.container`: Bootstrap container (main content wrapper)
- `.mt-5`: Modified margin-top: 1rem (overriding Bootstrap default)
- `.py-5`: Padding vertical 3rem (Bootstrap default)

#### Component-Specific Classes:
- `.navbar-custom`: Navy blue navbar styling
- `.bg-light`: Padding 20px 30px (top/bottom and left/right)
- `.bg-dark`: Actually light green (#e0f3e0) with padding
- `.portrait-container`: Flex container for portrait image (250px width)
- `.position`, `.degree`: Flex layout for position/degree rows
- `.position-title`, `.degree-title`: Left-aligned titles
- `.year`: Right-aligned years with right padding

### Responsive Design
- **Bootstrap Grid System**: 
  - `col-lg-*`: Large screens (≥992px)
  - `col-md-*`: Medium screens (≥768px)
  - Responsive navbar with mobile toggle button
- **Viewport Meta Tag**: Ensures proper mobile rendering

---

## External Dependencies

### CSS Frameworks:
1. **Bootstrap 4.5.2**
   - Source: `https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css`
   - Purpose: Responsive grid, components, utilities

2. **Google Fonts - Roboto**
   - Source: `https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap`
   - Purpose: Modern, clean typography

### JavaScript Libraries:
1. **jQuery 3.5.1**
   - Source: `https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js`
   - Purpose: DOM manipulation, Bootstrap dependency

2. **Popper.js 1.16.0**
   - Source: `https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js`
   - Purpose: Tooltip and popover positioning, Bootstrap dependency

3. **Bootstrap JS 4.5.2**
   - Source: `https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js`
   - Purpose: Interactive components (navbar collapse, etc.)

---

## Assets

### Images (in `/img` directory):
1. **Portrait**: `thang.png`, `thang.jpeg`
2. **Sponsor Logos**:
   - `NSF.png` (National Science Foundation)
   - `DOE.png` (Department of Energy)
   - `CCI.png` (CCI Virginia)
   - `vcu.png` (Virginia Commonwealth University)
   - `Harmony.png` (Harmony One)
   - `Nvidia.png` (Nvidia)
   - `D-Wave.png` (D-Wave Quantum Computing)

### Documents (in `/files` directory):
1. `IEEEComp18_BlockchainAI.pdf` - Research paper PDF
2. `index.html` - Empty placeholder file

---

## Page Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    NAVIGATION BAR                           │
│  [Home] [Publications] [Research] [Teaching]                │
│  (Navy Blue #002366)                                        │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│                    MAIN CONTAINER                           │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  HOME SECTION (#home) - Light Green                   │  │
│  │  ┌─────────────────┬──────────────────┐              │  │
│  │  │  Name & Title   │  Portrait Image  │              │  │
│  │  │  Positions      │                  │              │  │
│  │  └─────────────────┴──────────────────┘              │  │
│  │  ┌─────────────────┬──────────────────┐              │  │
│  │  │   Education     │   Contact Info   │              │  │
│  │  └─────────────────┴──────────────────┘              │  │
│  │  ┌─────────────────────────────────────┐             │  │
│  │  │    Research Interests               │             │  │
│  │  └─────────────────────────────────────┘             │  │
│  │  Erdős Number Note                                   │  │
│  └───────────────────────────────────────────────────────┘  │
│                           ↓                                  │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  AWARDS SECTION (#awards) - Light Background         │  │
│  │  • List of 11 awards and honors                      │  │
│  └───────────────────────────────────────────────────────┘  │
│                           ↓                                  │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  PUBLICATIONS SECTION (#publications) - Light Green  │  │
│  │  1. Selected Publications (6 items)                  │  │
│  │  2. Links to full lists (Scholar, DBLP, Scopus)     │  │
│  └───────────────────────────────────────────────────────┘  │
│                           ↓                                  │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  RESEARCH SECTION (#research) - Light Background     │  │
│  │  ┌──────────────────┬──────────────────┐             │  │
│  │  │ Quantum State    │ Quantum Health   │             │  │
│  │  │ Estimation Card  │ Optimization Card│             │  │
│  │  └──────────────────┴──────────────────┘             │  │
│  │  ┌──────────────────┬──────────────────┐             │  │
│  │  │ Federated        │ Fighting         │             │  │
│  │  │ Learning Card    │ Misinfo Card     │             │  │
│  │  └──────────────────┴──────────────────┘             │  │
│  │  ┌─────────────────────────────────────┐             │  │
│  │  │ Funding Acknowledgment              │             │  │
│  │  │ [7 sponsor logos in flex layout]    │             │  │
│  │  └─────────────────────────────────────┘             │  │
│  └───────────────────────────────────────────────────────┘  │
│                           ↓                                  │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  TEACHING SECTION (#teaching) - Light Green          │  │
│  │  • List of 4 courses taught                          │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│                    FOOTER                                   │
│  © 2023 Thang N. Dinh. All rights reserved.                │
│  (Light Background, Centered)                               │
└─────────────────────────────────────────────────────────────┘
```

---

## Technical Specifications

### HTML Version: HTML5
### CSS Framework: Bootstrap 4.5.2
### JavaScript: jQuery 3.5.1, Popper.js 1.16.0, Bootstrap JS 4.5.2
### Font: Google Fonts - Roboto (weights: 300, 400, 500)
### Total Lines: 294 lines
### File Size: ~11 KB (HTML content)

---

## Key Features

1. **Single-Page Application (SPA)**: All content on one page with anchor navigation
2. **Responsive Design**: Mobile-friendly with Bootstrap grid and responsive navbar
3. **Clean Academic Layout**: Professional presentation of academic credentials
4. **Visual Hierarchy**: Clear section divisions with alternating backgrounds
5. **External Links**: Direct links to publications, institutional pages, and academic profiles
6. **Image Assets**: Professional portrait and sponsor logos
7. **Interactive Navigation**: Smooth scroll to sections via navbar links
8. **Modern Typography**: Google Fonts for improved readability

---

## Potential Improvements

While analyzing the structure, here are some observations:

1. **Accessibility**: Could add ARIA labels and alt text improvements
2. **SEO**: Could add meta descriptions and Open Graph tags
3. **Performance**: All dependencies are loaded from CDNs (good for caching)
4. **Code Organization**: CSS could be moved to external file for maintainability
5. **Copyright Year**: Footer shows © 2023 (may need updating)
6. **Color Class Naming**: `.bg-dark` class is actually light green (misleading name)
7. **Missing Favicon**: No favicon specified in head section
8. **Validation**: HTML5 validation recommended

---

## Summary

This is a well-structured, single-page academic website built with Bootstrap 4.5.2. The page effectively presents professional information through five main sections (Home, Awards, Publications, Research, Teaching) with a clean, responsive design. The alternating light green and white backgrounds create visual separation between sections, while the navy blue navbar provides consistent navigation. The use of Bootstrap's grid system ensures mobile responsiveness, and external CDN-hosted libraries keep the codebase lightweight.

---

**Document Created**: 2024  
**Last Updated**: Analysis based on current repository state  
**Maintained by**: Structure Analysis Tool
