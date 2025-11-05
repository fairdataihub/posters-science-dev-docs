# Discovery Portal

The Posters.science discovery portal enables users to search, explore, and access publicly shared scientific posters through advanced search capabilities and AI-powered discovery tools.

## Overview

The discovery portal allows searching through publicly shared posters. Meilisearch powers search functionality with full-text queries and filtered searches (author, year, conference). When viewing a poster, users see structured metadata, abstract, and a link to the repository file. Redis caches frequent queries for performance. The platform supports user-driven feedback for metadata corrections and contributions.

## Search Capabilities

### Traditional Search

- **Full-Text Search**: Search across poster content and metadata
- **Faceted Filtering**: Filter by author, year, conference, repository
- **Sorting Options**: Relevance, date, title, author
- **Search Suggestions**: Auto-complete and query suggestions

### AI-Enhanced Discovery

- **Natural Language Queries**: Conversational search interface
- **Contextual Understanding**: Semantic search capabilities
- **Related Content**: AI-powered recommendations

## Smart Search Implementation

Smart Search enables natural language questions with AI-generated summaries and links to relevant posters. The Retrieval Augmented Generation (RAG) pipeline:

1. Embeds user queries
2. Performs vector similarity search against pre-computed poster embeddings in the database
3. Retrieves the top 5 posters
4. Passes them as context to an LLM for response generation

### Embedding Model

The bge-large-en-v1.5 embedding model (Apache 2.0 license) generates 1024-dimensional embeddings from up to 512 tokens. Each poster is embedded by combining title, authors, conference, abstract, keywords, and content.

The 512-token limit is addressed through weighted averaging:
- Title: 25%
- Abstract: 35%
- Keywords: 20%
- Content: 15%
- Metadata: 5%

Separate embeddings are combined into a weighted average.

### Vector Storage

Pgvector (PostgreSQL extension) stores embeddings directly in the database. The *poster_embeddings* table uses an IVFFlat index optimized for cosine similarity, configured with 100 lists for ~50,000 posters (10-50ms query performance).

### Query Processing

Query processing includes:
- Named entity recognition for conferences/years
- Medical term expansion with synonyms
- Embedding for vector similarity search

### Response Generation

Response generation uses Llama 3.3 70B (4-bit quantization, vLLM deployment) with an 8,192-token context window. The prompt provides context from five retrieved posters and instructs the LLM to synthesize information, cite sources, and respond in under 300 words.

### Performance Targets

**Evaluation targets:**
- Precision@5 ≥80%
- Recall@5 ≥60%
- SciBERT similarity ≥0.70
- Human evaluation ≥4.0/5.0
- Hallucination rate <5%
- Total latency <3 seconds

Redis caches identical queries for 24 hours. Poster embeddings are pre-computed nightly.

## Overview Page Analytics

The Overview page provides visualizations of database trends and patterns:

- **Poster Growth Over Time**: time-series chart of monthly registrations  
- **Top Institutions**: bar chart of 20 institutions with most posters  
- **Research Domain Distribution**: treemap showing poster distribution across fields  
- **Conference Landscape**: network graph mapping conference ecosystem  
- **Funding Landscape**: Sankey diagram showing funder-to-domain flows  
- **Geographic Distribution**: world map with choropleth coloring  
- **Collaboration Network**: force-directed graph of inter-institutional collaborations

### Technical Implementation

Visualizations use Apache ECharts or D3.js in Vue 3 components. Data is served via API endpoints querying PostgreSQL materialized views (refreshed nightly, cached in Redis for 24 hours). 

The dashboard includes:
- Interactive filtering
- Drill-down capabilities
- Export options (PNG, SVG, CSV)

### Accessibility Features

- High contrast mode
- Keyboard navigation
- Screen reader support

## Technical Implementation

### Search Engine

- **Meilisearch**: Fast, typo-tolerant search

### Performance Optimization

- **Redis Caching**: Frequent query caching
- **Client-side Caching**: Browser storage optimization
