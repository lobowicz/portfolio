const projects = [ 
    {
        id: 1,
        title: 'MedSearch',
        date: 'May 30, 2025',
        description: 'MedSearch is a map web tool that helps users in Ghana find nearby insurance-accepting pharmacies stocking a given medicine.',
        gif: '/images/medsearch-image.png',
        repoLink: 'https://github.com/lobowicz/medsearch',
        liveLink: 'https://medsearchgh.com/'
    },
    {
        id: 13,
        title: 'Computer Architecture and Kernel Implementation',
        date: 'April 26, 2025',
        description: 'A complete processor from scratch including assembler, full CPU, memory, and kernel with syscall support.',
        gif: '/images/computerachri-image.png',
        repoLink: 'https://github.com/lobowicz/Computer-Architecture-Kernel-Implementation',
        liveLink: ''
    },
    {
        id: 14,
        title: 'Retail Instant Payment Service',
        date: 'March 13, 2025',
        description: 'A full-stack demo retail payment platform showcasing how small-to-medium retailers can integrate their checkout systems to generate dynamic, amount-locked QR codes and accept automated Mobile-Money or bank transfers.',
        gif: '/images/retail-image.png',
        repoLink: 'https://github.com/lobowicz/ghipss-retail-ips',
        liveLink: ''
    },
    {
        id: 2,
        title: 'Convex Hull Illustration - Graham Scan Algorithm',
        date: 'February 17, 2025',
        description: 'Built a Swing UI illustrating the convex hull of points using the Swing toolkit in Java.',
        gif: '/images/convex-image.png',
        repoLink: 'https://github.com/lobowicz/convex-hull-illustration-graham-scan-algorithm',
        liveLink: ''
    },
    {
        id: 3,
        title: 'Needleman-Wunsch Global Sequence Alignment',
        date: 'January 29, 2025',
        description: 'A Java-based tool that implements the Needleman–Wunsch global sequence alignment algorithm with fully configurable scoring matrices and gap penalties, reading any two nucleotide sequences from files and producing an optimal similarity score and alignment.',
        gif: '/images/needle-image.png',
        repoLink: 'https://github.com/lobowicz/needleman-wunsch-global-sequence-alignment',
        liveLink: ''
    },
    {
        id: 6,
        title: 'Square Shooter (Web Game)',
        date: 'January 15, 2025',
        description: 'A top-down shooter with procedurally generated levels and lots of squares.',
        gif: '/images/squshoot-image.png',
        repoLink: 'https://github.com/lobowicz/square-shooter-game',
        liveLink: 'https://lobowicz.itch.io/shape-shooter'
    },
    {
        id: 7,
        title: 'Scrabble Scramble (Web Game)',
        date: 'December 31, 2024',
        description: 'A roguelike twist on the original game, featuring enemy AI spellers.',
        gif: '/images/scrabble-image.png',
        repoLink: 'https://github.com/lobowicz/scrabble-scramble-game',
        liveLink: 'https://lobowicz.itch.io/scrabble'
    },
    {
        id: 8,
        title: 'Studious Procrastinator (Web Game)',
        date: 'December 6, 2024',
        description: 'Procrastinate your way through homework. An idle clicker game with an extensive upgrade system.',
        gif: '/images/procr-image.png',
        repoLink: 'https://github.com/lobowicz/studious-procrastinator-game',
        liveLink: 'https://lobowicz.itch.io/procrastinator'
    },
    {
        id: 10,
        title: 'Learn English Through Taylor Swift’s Albums?',
        date: 'November 20, 2024',
        description: 'Investigated Taylor Swift’s discography by measuring vocabulary size, lyrical density, and new word intervals to assess its effectiveness as a tool for English language learners.',
        gif: '/images/ts-image.png',
        repoLink: 'https://github.com/lobowicz/learn-english-with-albums',
        liveLink: ''
    },
    {
        id: 12,
        title: 'Media Framing in Political News Outlets',
        date: 'September 1, 2024',
        description: 'Analyzed a 17,362‑article corpus to uncover how word choice, sentiment, and topic emphasis vary across left‑leaning, neutral, and right‑leaning news outlets using statistical analyses and topic modeling.',
        gif: '/images/media-image.png',
        repoLink: 'https://github.com/lobowicz/media-framing-political-news-outlets',
        liveLink: ''
    },
    {
        id: 9,
        title: 'Topic Modeling Drivers of Movie Review Sentiments',
        date: 'July 7, 2024',
        description: 'Applied latent Dirichlet allocation to IMDB reviews to identify themes distinguishing positive and negative sentiments, then built a gradient boosted classifier on topic proportions, achieving 90.7% accuracy and 0.897 AUC.',
        gif: '/images/movies-image.png',
        repoLink: 'https://github.com/lobowicz/topic-model-drivers-movie-review-sentiments',
        liveLink: ''
    },
    {
        id: 11,
        title: 'Are We Making the Right Choices When It Comes to Frozen Food?',
        date: 'February 17, 2024',
        description: 'Performed analysis on over 50,000 frozen meals to compare nutritional value, cost, and convenience across grocery stores and evaluate whether homemade breakfast sandwiches offer healthier, more cost‑effective alternatives.',
        gif: '/images/healthy-image.png',
        repoLink: 'https://github.com/lobowicz/frozen-food-choices',
        liveLink: ''
    },
    {
        id: 5,
        title: ' Bar REST API',
        date: 'December 15, 2023',
        description: 'REST API for an interactive adventure-esc bar exploration game.',
        gif: '',
        repoLink: 'https://github.com/lobowicz/bar-REST-API',
        liveLink: ''
    },
    {
        id: 4,
        title: 'iOS App for Exchanging Professional Info',
        date: 'October 12, 2023',
        description: 'An iOS app with profile details with a user-customizable background.',
        gif: '',
        repoLink: 'https://github.com/lobowicz/ios-app',
        liveLink: ''
    },
    {
        id: 15,
        title: 'OCR Gametime Extractor',
        date: 'September 11, 2023',
        description: 'Prototype of a gametime extractor that pulls from YT highlights (component for another project).',
        gif: '/images/technologia.gif',
        repoLink: 'https://github.com/lobowicz/yt-ocr-game-time',
        liveLink: ''
    },
    {
        id: 16,
        title: 'spiTAX',
        date: 'July 20, 2023',
        description: 'Simple tax tool that helps international students file their nonresident taxes.',
        gif: '/images/spitax-image.png',
        repoLink: 'https://github.com/lobowicz/spiTAX',
        liveLink: ''
    },
    {
        id: 17,
        title: 'Portfolio Website',
        date: 'May 2, 2023',
        description: 'This website.',
        gif: '/images/websi-image.png',
        repoLink: 'https://github.com/lobowicz/spiTAX',
        liveLink: 'https://lobowicz.com'
    },
    // add some more projects with project updates 
];

export default projects;
