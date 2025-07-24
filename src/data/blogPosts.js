const blogPosts = [
    {
      id: 1,
      title: 'WebAssembly 101',
      date: 'June 19, 2025',
      snippet: 'Follow a step‑by‑step guide to deploy a Node.js microservice on AWS Lambda with the Serverless Framework—no servers to manage...',
      link: 'https://github.com/lobowicz/web-assembly-101-blg'
    },
    {
      id: 2,
      title: 'Building Your First Serverless Microservice',
      date: 'May 3, 2025',
      snippet: 'In this post, I explain step-by-step how I synced YouTube highlights with live stats using Python and JavaScript…',
      link: 'https://github.com/lobowicz/building-serverless-microservice-blg'
    },
    {
      id: 3,
      title: 'Analyzing Grocery Shopping Trends with R',
      date: 'April 12, 2025',
      snippet: 'A walkthrough of how I used R (tidyverse) to dig into the GroceryDB dataset and plot interesting shopping patterns…',
      link: 'https://github.com/lobowicz/portfolio'
    },
    {
      id: 4,
      title: 'Under the Hood of Diffusion Models',
      date: 'March 20, 2025',
      snippet: 'In this post, Discover how diffusion‑based generative models reverse engineered noise into realistic images and try it yourself with Hugging Face’s Diffusers...',
      link: 'https://github.com/lobowicz/diffusion-models-intro-blg'
    },
    {
      id: 5,
      title: 'Container Orchestration for Beginners',
      date: 'Jan 2, 2025',
      snippet: 'Explore how Kubernetes automates deployment, scaling, and healing of containerized workloads using a simple Minikube setup...',
      link: 'https://github.com/lobowicz/containers-for-beginners-blg'
    },
    {
      id: 6,
      title: 'GraphQL vs. REST',
      date: 'December 16, 2024',
      snippet: 'Understand the strengths and trade‑offs of REST’s resource‑oriented APIs versus GraphQL’s flexible querying to design the right data contract for your clients...',
      link: 'https://github.com/lobowicz/graphQL-vs-REST-blg'
    },
    {
      id: 7,
      title: 'Continuous Deployment with GitHub Actions',
      date: 'November 2, 2024',
      snippet: 'Automate every step from testing to building to production release by defining your CI/CD pipeline natively in GitHub.',
      link: 'https://github.com/lobowicz/continuous-deployment-github-actions-blg'
    },
    {
      id: 8,
      title: 'Infrastructure as Code with Terraform',
      date: 'October 14, 2024',
      snippet: 'See how Terraform’s declarative configurations let you provision, version, and manage AWS infrastructure safely and reproducibly...',
      link: 'https://github.com/lobowicz/terraform-blg'
    },
    {
      id: 9,
      title: 'Zero‑Knowledge Proofs',
      date: 'September 5, 2024',
      snippet: 'Uncover the cryptographic trick that proves you know a secret without revealing it—from Ali Baba’s cave to privacy‑preserving blockchains...',
      link: 'https://github.com/lobowicz/zero-knowledge-proofs-blg'
    },
    {
      id: 10,
      title: 'The Magic Behind Google Docs',
      date: 'July 23, 2024',
      snippet: 'Dive into CRDTs, the conflict‑free data structures that power real‑time, offline‑first collaboration in apps like Google Docs and Figma...',
      link: 'https://github.com/lobowicz/the-magic-behind-docs-blg'
    },
    {
      id: 11,
      title: 'Vector Databases - The Unsung Heroes of the AI Revolution',
      date: 'May 21, 2024',
      snippet: 'Here, we discover how vector databases act as the long-term memory and semantic search engine behind stateless LLMs, empowering AI applications with context and precision...',
      link: 'https://github.com/lobowicz/vector-databases-blg'
    },
    {
      id: 12,
      title: 'Media Framing in Political News Outlets',
      date: 'January 2, 2024',
      snippet: 'We analyze a 17,362‑article corpus to uncover how word choice, sentiment, and topic emphasis vary across left‑leaning, neutral, and right‑leaning news outlets using statistical analyses and topic modeling...',
      link: 'https://github.com/lobowicz/media-framing-political-news-outlets/blob/main/final_project.pdf'
    },
    {
      id: 13,
      title: 'Are We Making the Right Choices When It Comes to Frozen Food?',
      date: 'December 6, 2023',
      snippet: 'We perform analysis on over 50,000 frozen meals to compare nutritional value, cost, and convenience across grocery stores and evaluate whether homemade breakfast sandwiches offer healthier, more cost‑effective alternatives...',
      link: 'https://github.com/lobowicz/frozen-food-choices/blob/main/project1.pdf'
    },
    {
      id: 14,
      title: 'Learn English Through Taylor Swift’s Albums?',
      date: 'October 15, 2023',
      snippet: 'Let us investigate Taylor Swift’s discography by measuring vocabulary size, lyrical density, and new word intervals to assess its effectiveness as a tool for English language learners...',
      link: 'https://github.com/lobowicz/learn-english-with-albums/blob/main/project2.pdf'
    },
    {
      id: 15,
      title: 'Topic Modeling Drivers of Movie Review Sentiments',
      date: 'August 1, 2023',
      snippet: 'We apply latent Dirichlet allocation to IMDB reviews to identify themes distinguishing positive and negative sentiments, then built a gradient boosted classifier on topic proportions...',
      link: 'https://github.com/lobowicz/topic-model-drivers-movie-review-sentiments/blob/main/project3.pdf'
    },
    {
      id: 16,
      title: 'Building and Deploying a React Portfolio Website with Netlify',
      date: 'June 8, 2023',
      snippet: 'A comprehensive guide for beginners to create a professional portfolio website using React and deploy it for free on Netlify…',
      link: 'https://github.com/lobowicz/personal-website-blog#'
    },
    // …add more posts as needed
  ];
  
  export default blogPosts;
  