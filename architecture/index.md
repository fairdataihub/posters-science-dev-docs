# Architecture Overview

The Posters.science platform is a comprehensive solution for creating, sharing, and discovering scientific posters. This section provides an overview of the system architecture and design decisions.

## Purpose

The Posters.science platform, developed by the FAIR Data Innovations Hub, is a free, open-source, and user-friendly solution for creating poster metadata and sharing scientific posters. It is designed to increase the findability, accessibility, interoperability, and reusability (FAIR) of posters, making them optimally reusable and AI-ready.

Beyond serving immediate projects, the platform aims to become a one-stop hub for sharing, discovering, and reusing scientific posters at scale.

## Key Design Principles

- **FAIR Compliance**: Ensures all posters meet FAIR data principles
- **Open Source**: Free and accessible to the scientific community
- **Scalability**: Built to handle large-scale poster discovery and sharing
- **AI-Ready**: Structured metadata enables AI-powered discovery
- **User-Friendly**: Intuitive interfaces for both submission and discovery

## Overall Architecture

The core of Posters.science is a Nuxt 3 application built on Vue 3, enabling a unified web application for both user interface and backend API requests. The entire stack is developed in TypeScript for type safety and early bug detection. Nuxt 3 supports server-side rendering (SSR), which improves security, performance, and search engine indexing.

Unlike traditional repositories, Posters.science does not host poster files. Instead, posters remain in established repositories like Zenodo and Figshare. The platform indexes these posters, enriches them with structured metadata, and makes them discoverable.

### Technology Stack

The architecture uses:

* **PostgreSQL** database for poster metadata, user information, and system state  
* **Meilisearch** for fast, scalable full-text search  
* **Redis** for caching and session management  
* **Prisma ORM** for typesafe database interactions  
* **Nuxt Auth** for ORCID-based authentication  
* **Locally hosted GPU machines** for LLM-based extraction and Smart Search  
* **Python-based web scraping service** for repositories without APIs

### Deployment

Deployment is handled with Kamal on a single Linux server, with GitHub Actions managing automated deployments. Docker Compose defines all services. Documentation is maintained with Vitepress.

## Repository Integration

Unlike traditional data repositories, Posters.science does not host poster files itself. Instead, posters remain in established repositories such as:

- **Zenodo** - Open research repository
- **Figshare** - Research data repository

Posters.science indexes these posters, enriches them with structured metadata, and makes them discoverable through a unified interface.
