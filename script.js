
const portfolioData = {
    pt: {
        hero: {
            greeting: "Olá, eu sou",
            name: "David Nathan",
            title: "Data Analyst & Creative Developer",
            subtitle: "Decifrando o futuro através de dados e código",
            cta: "Explorar Meu Universo"
        },
        about: {
            title: "Sobre Mim",
            description: "Graduado em Análise e Desenvolvimento de Sistemas, atualmente em transição para o universo fascinante da Análise de Dados. Minha missão é transformar dados brutos em insights visuais que impulsionam decisões estratégicas. Combino habilidades técnicas com criatividade para criar experiências digitais que contam histórias através de números."
        },
        techStack: {
            title: "Módulos de Habilidade",
            subtitle: "Arsenal Tecnológico",
            skills: [
                {
                    name: "Python",
                    description: "A linguagem da ciência de dados e automação. Bibliotecas como Pandas, NumPy e Matplotlib são minhas aliadas.",
                    level: 85
                },
                {
                    name: "MySQL",
                    description: "Gerenciamento e cons dulta de bancos de dados relacionais para extração e manipulação eficiente de informações.",
                    level: 80
                },
                {
                    name: "Power BI",
                    description: "Criação de dashboards interativos e visualizações que transformam dados complexos em insights acionáveis.",
                    level: 90
                },
                {
                    name: "Excel",
                    description: "Análise avançada com fórmulas complexas, tabelas dinâmicas e automação via VBA.",
                    level: 88
                },
                {
                    name: "HTML/CSS",
                    description: "Desenvolvimento web semântico e responsivo com foco em experiências visuais modernas.",
                    level: 85
                },
                {
                    name: "JavaScript",
                    description: "Interatividade dinâmica e manipulação de dados no front-end para aplicações web imersivas.",
                    level: 78
                }
            ]
        },
        projects: {
            title: "Projetos Estelares",
            subtitle: "Explorando o Cosmos dos Dados",
            items: [
                {
                    title: "Data Core Alpha",
                    description: "Sistema de análise preditiva utilizando machine learning para identificar padrões em grandes volumes de dados financeiros.",
                    tags: ["Python", "Pandas", "Scikit-learn"],
                    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                },
                {
                    title: "Insight Matrix Beta",
                    description: "Dashboard interativo em Power BI integrando múltiplas fontes de dados para visualização em tempo real de KPIs corporativos.",
                    tags: ["Power BI", "DAX", "MySQL"],
                    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                },
                {
                    title: "Neural Net V1",
                    description: "Modelo de classificação para segmentação de clientes baseado em comportamento de compra e demografia.",
                    tags: ["Python", "TensorFlow", "Data Viz"],
                    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80"
                },
                {
            title: "Quantum Analytics",
            description: "Pipeline ETL automatizado em Python que processa e unifica 4 datasets de E-commerce, gerando uma fonte única de verdade para análise de dados.",
            tags: ["Python", "Pandas", "ETL"],
            image: "imagens/visu_quantum.png",
            link: "https://github.com/codebydavidd/Quantum-Analytics-ETL"
                },
            ]
        },
        cv: {
            title: "Baixar Currículo",
            button: "Download CV"
        },
        footer: {
            rights: "Todos os direitos reservados.",
            made: "Feito com",
            and: "e"
        }
    },
    en: {
        hero: {
            greeting: "Hello, I'm",
            name: "David Nathan",
            title: "Data Analyst & Creative Developer",
            subtitle: "Deciphering the future through data and code",
            cta: "Explore My Universe"
        },
        about: {
            title: "About Me",
            description: "Graduated in Systems Analysis and Development, currently transitioning into the fascinating universe of Data Analysis. My mission is to transform raw data into visual insights that drive strategic decisions. I combine technical skills with creativity to create digital experiences that tell stories through numbers."
        },
        techStack: {
            title: "Skill Modules",
            subtitle: "Technological Arsenal",
            skills: [
                {
                    name: "Python",
                    description: "The language of data science and automation. Libraries like Pandas, NumPy, and Matplotlib are my allies.",
                    level: 85
                },
                {
                    name: "MySQL",
                    description: "Relational database management and querying for efficient information extraction and manipulation.",
                    level: 80
                },
                {
                    name: "Power BI",
                    description: "Creating interactive dashboards and visualizations that transform complex data into actionable insights.",
                    level: 90
                },
                {
                    name: "Excel",
                    description: "Advanced analysis with complex formulas, pivot tables, and VBA automation.",
                    level: 88
                },
                {
                    name: "HTML/CSS",
                    description: "Semantic and responsive web development with focus on modern visual experiences.",
                    level: 85
                },
                {
                    name: "JavaScript",
                    description: "Dynamic interactivity and front-end data manipulation for immersive web applications.",
                    level: 78
                }
            ]
        },
        projects: {
            title: "Stellar Projects",
            subtitle: "Exploring the Data Cosmos",
            items: [
                {
                    title: "Data Core Alpha",
                    description: "Predictive analysis system using machine learning to identify patterns in large volumes of financial data.",
                    tags: ["Python", "Pandas", "Scikit-learn"],
                    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                },
                {
                    title: "Insight Matrix Beta",
                    description: "Interactive Power BI dashboard integrating multiple data sources for real-time corporate KPI visualization.",
                    tags: ["Power BI", "DAX", "MySQL"],
                    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                },
                {
                    title: "Neural Net V1",
                    description: "Classification model for customer segmentation based on purchasing behavior and demographics.",
                    tags: ["Python", "TensorFlow", "Data Viz"],
                    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80"
                },
                {
                    title: "Quantum Analytics",
                    description: "Report automation and ETL pipelines for processing data from multiple corporate APIs.",
                    tags: ["Python", "APIs", "Automation"],
                    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80"
                }
            ]
        },
        cv: {
            title: "Download Resume",
            button: "Download CV"
        },
        footer: {
            rights: "All rights reserved.",
            made: "Made with",
            and: "and"
        }
    }
};

// Global State
let currentLanguage = 'pt';
let isMuted = false;
let audioContext = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initStarfield();
    initCursor();
    initLanguageToggle();
    initAudioToggle();
    
    renderContent(); 
    initScrollAnimations(); 
    
    initCVButton();
});

// Preloader
function initPreloader() {
    const preloader = document.getElementById('preloader');
    const progressFill = document.getElementById('progressFill');
    const progressPercent = document.getElementById('progressPercent');
    const preloaderText = document.getElementById('preloaderText');
    
    // Verificação de segurança caso o HTML não exista
    if (!preloader) return;

    const texts = [
        'INICIALIZANDO SISTEMA...',
        'CARREGANDO REDES NEURAIS...',
        'CONECTANDO AO NÚCLEO DE DADOS...',
        'ACESSANDO ARQUIVOS...',
        'DESCRIPTOGRAFANDO MATRIZ...',
        'PRONTO PARA O LANÇAMENTO'
    ];
    
    let textIndex = 0;
    let progress = 0;
    
    const textInterval = setInterval(() => {
        if (textIndex < texts.length) {
            preloaderText.textContent = texts[textIndex];
            textIndex++;
        }
    }, 400);
    
    const progressInterval = setInterval(() => {
        if (progress < 100) {
            progress += Math.random() * 15;
            if (progress > 100) progress = 100;
            progressFill.style.width = progress + '%';
            progressPercent.textContent = Math.floor(progress) + '%';
        } else {
            clearInterval(progressInterval);
            setTimeout(() => {
                preloader.classList.add('hidden');
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 500);
            }, 500);
        }
    }, 300);
    
    setTimeout(() => {
        clearInterval(textInterval);
    }, texts.length * 400);
}

// Starfield Canvas
function initStarfield() {
    const canvas = document.getElementById('starfield');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = { x: 0, y: 0 };
    let animationId;
    
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles();
    }
    
    function initParticles() {
        particles = [];
        const particleCount = window.innerWidth < 768 ? 100 : 300;
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                z: Math.random() * 5,
                vx: (Math.random() - 0.5) * 0.2,
                vy: (Math.random() - 0.5) * 0.2
            });
        }
    }
    
    function updateColor() {
        const root = getComputedStyle(document.documentElement);
        const accentR = parseInt(root.getPropertyValue('--accent-r')) || 168;
        const accentG = parseInt(root.getPropertyValue('--accent-g')) || 85;
        const accentB = parseInt(root.getPropertyValue('--accent-b')) || 247;
        return { r: accentR, g: accentG, b: accentB };
    }
    
    function animate() {
        ctx.fillStyle = 'rgba(10, 10, 15, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        const color = updateColor();
        
        particles.forEach(particle => {
            // Mouse interaction
            const dx = mouse.x - particle.x;
            const dy = mouse.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 150) {
                particle.x -= dx * 0.001;
                particle.y -= dy * 0.001;
            }
            
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Wrap around
            if (particle.x < 0) particle.x = canvas.width;
            if (particle.x > canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = canvas.height;
            if (particle.y > canvas.height) particle.y = 0;
            
            // Draw particle
            const size = particle.z + 0.5;
            const opacity = 0.3 + particle.z * 0.15;
            
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity})`;
            ctx.fill();
        });
        
        animationId = requestAnimationFrame(animate);
    }
    
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });
    
    window.addEventListener('resize', resize);
    
    resize();
    animate();
}

// Custom Cursor
function initCursor() {
    if (window.innerWidth < 768) return;
    
    const cursorMain = document.getElementById('cursorMain');
    const cursorTrail = document.getElementById('cursorTrail');
    if (!cursorMain || !cursorTrail) return;

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let trailX = 0, trailY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateCursor() {
        // Main cursor - fast
        cursorX += (mouseX - cursorX) * 0.5;
        cursorY += (mouseY - cursorY) * 0.5;
        cursorMain.style.left = cursorX + 'px';
        cursorMain.style.top = cursorY + 'px';
        
        // Trail cursor - slow
        trailX += (mouseX - trailX) * 0.15;
        trailY += (mouseY - trailY) * 0.15;
        cursorTrail.style.left = trailX + 'px';
        cursorTrail.style.top = trailY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    
    animateCursor();
    
    // Scale on hover
    document.querySelectorAll('button, a, .project-card, .tech-card').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorMain.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorTrail.style.transform = 'translate(-50%, -50%) scale(1.8)';
        });
        el.addEventListener('mouseleave', () => {
            cursorMain.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorTrail.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
}

// Language Toggle 
function initLanguageToggle() {
    const langToggle = document.getElementById('langToggle');
    const langText = document.getElementById('langText');
    
    if (!langToggle) return;

    langToggle.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
        if (langText) langText.textContent = currentLanguage.toUpperCase();
        updateTheme();
        
        
        renderContent();
        
        
        initScrollAnimations();
        
        playSound('click');
    });
}

// Update Theme Colors
function updateTheme() {
    const root = document.documentElement;
    if (currentLanguage === 'en') {
        root.style.setProperty('--accent-r', '239');
        root.style.setProperty('--accent-g', '68');
        root.style.setProperty('--accent-b', '68');
        root.style.setProperty('--accent-primary', 'rgb(239, 68, 68)');
        root.style.setProperty('--accent-secondary', 'rgb(220, 38, 38)');
        root.style.setProperty('--accent-glow', 'rgba(239, 68, 68, 0.5)');
    } else {
        root.style.setProperty('--accent-r', '168');
        root.style.setProperty('--accent-g', '85');
        root.style.setProperty('--accent-b', '247');
        root.style.setProperty('--accent-primary', 'rgb(168, 85, 247)');
        root.style.setProperty('--accent-secondary', 'rgb(126, 34, 206)');
        root.style.setProperty('--accent-glow', 'rgba(168, 85, 247, 0.5)');
    }
}

// Audio Toggle
function initAudioToggle() {
    const audioToggle = document.getElementById('audioToggle');
    
    if (audioToggle) {
        audioToggle.addEventListener('click', () => {
            isMuted = !isMuted;
            audioToggle.classList.toggle('muted', isMuted);
            playSound('click');
        });
    }
    
    // Initialize Web Audio
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
}

// Play Sound
function playSound(type) {
    // FIX: Verificar se o contexto existe e tentar dar resume se estiver suspenso (Browser Policy)
    if (audioContext && audioContext.state === 'suspended') {
        audioContext.resume().catch(e => console.log("Audio resume failed", e));
    }

    if (isMuted || !audioContext) return;
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    let frequency, duration, waveType;
    
    switch(type) {
        case 'hover':
            frequency = 800;
            duration = 0.05;
            waveType = 'sine';
            break;
        case 'click':
            frequency = 1200;
            duration = 0.08;
            waveType = 'square';
            break;
        case 'card-hover':
            frequency = 600;
            duration = 0.1;
            waveType = 'triangle';
            break;
        default:
            frequency = 400;
            duration = 0.05;
            waveType = 'sine';
    }
    
    oscillator.frequency.value = frequency;
    oscillator.type = waveType;
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
}

// Render Content
function renderContent() {
    const content = portfolioData[currentLanguage];
    
    // Helper function to safely set text
    const setText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    };

    // Hero
    setText('heroGreeting', content.hero.greeting);
    setText('heroName', content.hero.name);
    setText('heroTitle', content.hero.title);
    setText('heroSubtitle', content.hero.subtitle);
    setText('heroCtaText', content.hero.cta);
    
    // About
    setText('aboutTitle', content.about.title);
    setText('aboutDescription', content.about.description);
    
    // Tech Stack
    setText('techTitle', content.techStack.title);
    setText('techSubtitle', content.techStack.subtitle);
    if (document.getElementById('techGrid')) renderTechStack(content.techStack.skills);
    
    // Projects
    setText('projectsTitle', content.projects.title);
    setText('projectsSubtitle', content.projects.subtitle);
    if (document.getElementById('projectsGrid')) renderProjects(content.projects.items);
    
    // CV
    setText('cvTitle', content.cv.title);
    setText('cvButtonText', content.cv.button);
    
    // Footer
    setText('footerRights', content.footer.rights);
    setText('footerMade', content.footer.made);
    setText('footerAnd', content.footer.and);
}

// Render Tech Stack
function renderTechStack(skills) {
    const techGrid = document.getElementById('techGrid');
    if (!techGrid) return;

    const icons = {
        'Python': '<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>',
        'MySQL': '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>',
        'Power BI': '<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>',
        'Excel': '<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>',
        'HTML/CSS': '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',
        'JavaScript': '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>'
    };
    
    techGrid.innerHTML = skills.map(skill => `
        <div class="tech-card animate-on-scroll" onmouseenter="playSound('card-hover')">
            <div class="tech-card-header">
                <div class="tech-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        ${icons[skill.name] || icons['Python']}
                    </svg>
                </div>
                <span class="tech-level">${skill.level}%</span>
            </div>
            <h3 class="tech-name">${skill.name}</h3>
            <div class="tech-progress">
                <div class="tech-progress-fill" style="width: ${skill.level}%"></div>
            </div>
            <p class="tech-description">${skill.description}</p>
        </div>
    `).join('');
}

// Render Projects
function renderProjects(projects) {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;

    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card animate-on-scroll" onclick="window.open('${project.link || '#'}', '_blank')" onmouseenter="playSound('card-hover')">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-overlay"></div>
                
                <a href="${project.link || '#'}" target="_blank" class="project-link-icon" onclick="event.stopPropagation()">
                    <svg class="project-hover-icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                </a>
            </div>
            <div class="project-content">
                <h3 class="project-title">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 3v18m-4-4l4 4 4-4"></path>
                    </svg>
                    ${project.title}
                </h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// CV Button Magnetic Effect
function initCVButton() {
    const cvButton = document.getElementById('cvButton');
    if (!cvButton) return;
    let isHovering = false;
    
    cvButton.addEventListener('mouseenter', () => {
        isHovering = true;
        playSound('hover');
    });
    
    cvButton.addEventListener('mouseleave', () => {
        isHovering = false;
        cvButton.style.transform = 'translate(0, 0) scale(1)';
    });
    
    cvButton.addEventListener('mousemove', (e) => {
        if (!isHovering) return;
        
        const rect = cvButton.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        cvButton.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.05)`;
    });
    
    cvButton.addEventListener('click', () => {
        playSound('click');
        alert('CV download will be available soon!');
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// Add hover sound to buttons
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelectorAll('button:not(#audioToggle):not(#langToggle)').forEach(btn => {
            btn.addEventListener('mouseenter', () => playSound('hover'));
        });
    }, 2500); // After preloader
});