# Search Functionality

The Posters.science discovery portal provides powerful search capabilities that enable users to find relevant scientific posters through multiple search methods and filtering options.

## Search Interface

The poster discovery page contains a search bar, a filtering menu, a "Smart Search" button, an "Overview" button, and a list of the latest posters registered in the Posters.science database.

### Standard Search

The search bar and filtering features are very standard. The user will be able to type any query in the search bar. The search feature will then search through the most relevant posters through the database. A list of relevant posters will be provided to the users who will be able to further filter them using the filtering menu.

### Filtering Options

The following filtering options will be available:

- **Author**
- **Publication date** (range)
- **Conference**
- **Affiliation**
- **Access type** (open/controlled/closed)

There will be an option to download the record of the returned posters as a JSON file for further analysis if needed.

## Technical Implementation

### Search Engine

- **Meilisearch**: Primary search engine for fast, typo-tolerant search
- **PostgreSQL**: Metadata storage and complex query support
- **Redis**: Caching layer for performance optimization
- **Real-time Indexing**: Instant search index updates
