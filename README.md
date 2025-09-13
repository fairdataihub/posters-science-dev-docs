# Posters.science Developer Documentation

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![VitePress](https://img.shields.io/badge/VitePress-blue.svg)](https://vitepress.dev/)

Developer documentation for the Posters.science platform - a free, open-source solution for creating, sharing, and discovering scientific posters.

## About Posters.science

Posters.science is developed by the [FAIR Data Innovations Hub](https://fairdataihub.org/) to provide a comprehensive platform for scientific poster management. The platform focuses on:

- **FAIR Compliance**: Ensuring findability, accessibility, interoperability, and reusability
- **Open Source**: Free and accessible to the scientific community
- **AI-Ready**: Structured metadata for enhanced discovery
- **Repository Integration**: Works with established repositories like Zenodo and Figshare

## Documentation Structure

This documentation covers:

- 🏗️ **[Architecture](./architecture/)** - System design and technology stack
- 📤 **[Submission Portal](./submission/)** - Poster upload and processing workflow
- 🔍 **[Discovery Engine](./discovery/)** - Search capabilities and LLM integration
- 📊 **[Monitoring & Analytics](./monitoring/)** - Observability and performance tracking

## Getting Started

### Prerequisites

- Node.js 22.18.0 (managed via Volta)
- Yarn 1.22.22

### Installation

```bash
# Clone the repository
git clone https://github.com/fairdataihub/posters-science-dev-docs.git
cd posters-science-dev-docs

# Install dependencies
yarn install
```

### Development

```bash
# Start development server
yarn dev

# Or with custom port
yarn docs:dev --port 3000
```

The documentation will be available at `http://localhost:3000` or your custom port if you specified one.

### Building

```bash
# Build for production
yarn docs:build

# Preview production build
yarn docs:preview
```

## Technology Stack

- **[VitePress](https://vitepress.dev/)** - Static site generator
- **[Mermaid](https://mermaid.js.org/)** - Diagram generation
- **[Vue 3](https://vuejs.org/)** - Frontend framework
- **[Prettier](https://prettier.io/)** - Code formatting

## Contributing

We welcome contributions! Please see our [main repository](https://github.com/fairdataihub/posters-science) for contribution guidelines.

## License

This project is licensed under the MIT License.

## Links

- **Platform**: [https://posters.science](https://posters.science)
- **Main Repository**: [https://github.com/fairdataihub/posters-science](https://github.com/fairdataihub/posters-science)
- **Issues**: [https://github.com/fairdataihub/posters-science-dev-docs/issues](https://github.com/fairdataihub/posters-science-dev-docs/issues)
- **FAIR Data Innovations Hub**: [https://fairdataihub.org/](https://fairdataihub.org/)
