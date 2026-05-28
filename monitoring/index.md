# Monitoring & Observability

The Posters.science platform uses a mix of deployed and planned monitoring tools to ensure system health, performance, and security.

::: info Partially Planned
Some components below (backups, email) are deployed. Application monitoring, logging, analytics, and error tracking tooling are under active development.
:::

## Current Components

- **Data Backups**: Nightly PostgreSQL backups to Cloudflare R2
- **Email Services**: Resend for transactional emails (verification, DOI confirmations)

## Planned Components

- **Application Monitoring**: Prometheus + Grafana for performance and health tracking
- **Logging**: Centralized log management
- **Error Tracking**: Sentry for real-time error monitoring
- **User Analytics**: Umami for privacy-friendly usage analytics

## Data Backups

Nightly PostgreSQL backups export to Cloudflare R2 storage, covering:
- Metadata
- poster.json versions
- Sessions
- Embeddings

## Email Services

Resend handles transactional emails:
- Verification
- Password resets
- DOI confirmations

## Implementation Strategy

Tools will be introduced incrementally based on deployment scale, starting with health checks and Sentry integration. All selected tools are open source and privacy-focused.
