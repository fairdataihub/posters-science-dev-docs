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

### AI-Enhanced Discovery (Planned)

::: info Coming Soon
Smart Search and AI-enhanced discovery features are under active development and not yet available.
:::

- **Natural Language Queries**: Conversational search interface
- **Contextual Understanding**: Semantic search capabilities
- **Related Content**: AI-powered recommendations

## Smart Search (Planned)

Smart Search will enable natural language questions with AI-generated summaries and links to relevant posters. The planned Retrieval Augmented Generation (RAG) pipeline:

1. Embeds user queries
2. Performs vector similarity search against pre-computed poster embeddings in the database
3. Retrieves the top relevant posters
4. Passes them as context to an LLM for response generation

### Planned Architecture

- **Vector storage**: pgvector (PostgreSQL extension) with HNSW indexing for fast approximate nearest-neighbor search
- **Search integration**: Meilisearch for hybrid keyword + vector retrieval
- **Response generation**: LLM model selection in progress

## Overview Page Analytics (Planned)

::: info Planned
The Overview page and its visualizations are under active development.
:::

The Overview page will provide visualizations of database trends and patterns:

- **Poster Growth Over Time**: time-series chart of monthly registrations  
- **Top Institutions**: bar chart of institutions with the most posters  
- **Research Domain Distribution**: treemap showing poster distribution across fields  
- **Conference Landscape**: network graph mapping the conference ecosystem  
- **Funding Landscape**: Sankey diagram showing funder-to-domain flows  
- **Geographic Distribution**: world map with choropleth coloring  
- **Collaboration Network**: force-directed graph of inter-institutional collaborations

## Technical Implementation

### Search Engine

- **Meilisearch**: Fast, typo-tolerant search

### Performance Optimization

- **Redis Caching**: Frequent query caching
- **Client-side Caching**: Browser storage optimization
