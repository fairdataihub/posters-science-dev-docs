# LLM Search Integration (Planned)

::: info Coming Soon
Smart Search is under active development and not yet available. This page describes the planned feature design.
:::

The Posters.science platform will integrate Large Language Models (LLMs) to provide AI-powered discovery capabilities, enabling users to find relevant scientific posters through natural language queries.

## Smart Search Feature

Users will be able to click a "Smart Search" button and ask specific questions, e.g., "What new discoveries were presented at ARVO 2025 regarding the connection between the eye and Alzheimer's disease?". Smart Search will query the Posters.science database to generate an answer and list the most relevant posters.

### Example Queries

- _"What discoveries related to Alzheimer's were presented at ARVO 2025?"_
- _"Show me recent research on machine learning in medical imaging"_
- _"Find posters about climate change from European conferences"_
- _"What are the latest findings in cancer immunotherapy?"_

## Planned Technical Approach

### Infrastructure

- **Local GPU Compute**: On-premises LLM processing
- **Retrieval-Augmented Generation (RAG)**: Context-aware responses grounded in poster content
- **pgvector + HNSW indexing**: Vector similarity search within PostgreSQL
- **Meilisearch integration**: Hybrid keyword + vector retrieval

### Processing Pipeline

1. **Query Analysis**: Intent and entity extraction
2. **Context Retrieval**: Relevant poster content gathering via vector similarity
3. **Prompt Construction**: Context-aware prompt generation
4. **LLM Inference**: Response generation grounded in retrieved posters
5. **Result Formatting**: User-friendly response with source citations

## Planned Capabilities

### Query Processing

- **Entity Recognition**: Conference names, years, research topics
- **Query Expansion**: Related term and synonym inclusion
- **Semantic Search**: Meaning-based matching beyond keyword overlap

### Response Generation

- **Summarization**: Concise content summaries across relevant posters
- **Citation**: Source attribution linking back to specific posters
- **Recommendations**: Related poster suggestions
