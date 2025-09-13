# Technology Stack

The Posters.science platform is built using modern, scalable technologies that ensure performance, security, and maintainability.

## Core Technologies

### Frontend & Backend

- **Nuxt 3**: Meta-framework built on Vue 3 for full-stack development
- **Vue 3**: Progressive JavaScript framework for reactive UI
- **Nuxt UI**: Comprehensive UI kit providing pre-built components and design system
- **TypeScript**: Type-safe development across the entire stack
- **Nitro**: Nuxt's server engine for API routes and server-side logic

### Database & Storage

- **PostgreSQL**: Primary relational database for structured data
- **Prisma ORM**: Type-safe database interactions and migrations
- **Meilisearch**: Fast, typo-tolerant search engine
- **Redis**: In-memory caching and session management
- **pgvector**: Vector storage for AI embeddings

## External Integrations

### Repository Services

- **Zenodo API**: Open research repository integration
- **Figshare API**: Research data repository integration
- **DOI Management**: Persistent identifier handling

### AI & Machine Learning

- **Local GPU Compute**: On-premises AI processing
- **Retrieval-Augmented Generation (RAG)**: Context-aware AI responses
- **Natural Language Processing**: Query understanding and poster summarization

### Communication

- **Resend**: Transactional email delivery
- **Nuxt Auth**: User authentication and session management

## Infrastructure

### Web Scraping

- **Python**: Scraping tools for repository data collection
- **Dedicated VM**: Isolated scraping environment
- **Automated Pipelines**: Scheduled metadata extraction

### Deployment

- **Docker**: Application containerization
- **Docker Compose**: Multi-service orchestration
- **Kamal**: Simple deployment tool for Linux servers
- **GitHub Actions**: Automated CI/CD pipelines

### Future Scalability

- **Kubernetes**: Container orchestration for multi-node deployment
- **Load Balancing**: Traffic distribution and horizontal scaling

## Monitoring & Observability

### Application Monitoring

- **Prometheus**: Metrics collection and alerting
- **Grafana Loki**: Centralized log aggregation
- **Sentry**: Real-time error tracking across frontend and backend
- **Umami**: Privacy-friendly user analytics

### Data Protection

- **Cloudflare R2**: Automated backup storage
- **Nightly Backups**: PostgreSQL data protection
- **Off-site Redundancy**: Disaster recovery capabilities

## Development Tools

### Code Quality

- **Prettier**: Code formatting
- **ESLint**: Code linting and quality assurance
- **TypeScript**: Static type checking
- **Git Hooks**: Pre-commit validation

### Documentation

- **VitePress**: Documentation site generation
- **Markdown**: Documentation format
- **API Documentation**: Automated documentation generation
