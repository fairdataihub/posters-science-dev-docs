# Poster Schema

The Posters.science JSON Schema (v0.1) was developed with the University of California Curation Center (UC3). The schema balances adherence to DataCite standards with unique poster metadata needs.

## Schema Repository

The complete schema specification is available on GitHub:
**[https://github.com/fairdataihub/poster-json-schema](https://github.com/fairdataihub/poster-json-schema)**

## Design Principles

The schema follows these core principles:

- **FAIR Support**: Every required field supports FAIR principles (Findability, Accessibility, Interoperability, Reusability)
- **Extensibility**: Support for additional properties through *additionalProperties*
- **Poster-Specific Fields**: Custom fields for gaps in general schemas
- **Human and Machine Readable**: JSON format optimized for both readability and AI/ML processing
- **Interoperability**: Mapping to repository schemas (Zenodo, Figshare)

## Why DataCite?

DataCite was selected as the base schema because:

- **Industry Standard**: Standard for research output metadata with 10M+ DOIs
- **Comprehensive Coverage**: Complete bibliographic coverage with strong identifier support (ORCID, ROR, DOI)
- **Native Funding Support**: Built-in funding reference support
- **Wide Adoption**: Established standard in research data management

## Poster-Specific Extensions

The schema extends DataCite with fields unique to scientific posters:

### Conference Object

Captures comprehensive conference information:
- **Name**: Conference name (mandatory)
- **Location**: Conference venue and city
- **Dates**: Start and end dates (mandatory)
- **Acronym**: Conference abbreviation
- **Identifiers**: Conference IDs and series information

### Ethics Approvals

Array structure for ethical compliance documentation:
- IRB (Institutional Review Board) protocols
- Ethics committee certifications
- Study approval numbers

### Domain Field

Primary research area categorization:
- Research domain classification
- Subject area tagging
- Discipline identification

### Poster Content

The **posterContent** object stores extracted poster text with a flexible structure:
- **posterTitle**: The main title text as it appears on the poster itself (may differ from metadata title)
- **sections**: Array of content sections, where each section contains:
  - **sectionTitle**: The heading of the section (e.g., "Introduction", "Methods", "Results", "Discussion", "Conclusions")
  - **sectionContent**: The text content of that section

This flexible structure accommodates unstructured poster layouts without forcing content into rigid predefined sections.

### Image and Table Captions

Separate arrays for visual element descriptions:
- **imageCaption**: Array of objects with multi-line image caption support (caption1, caption2, etc.)
- **tableCaption**: Array of objects with multi-line table caption support (caption1, caption2, etc.)

## Identifiers

### Primary Identifier: psID

The identifiers array includes **psID** (Posters.science system identifier) as a mandatory identifier, serving as the primary database key. This ensures every poster has a unique, permanent identifier within the platform.

### DOI Assignment

DOIs are added to the identifiers array when posters are deposited to repositories (Zenodo or Figshare).

### Resource Type

Resource types default to "Other" since DataCite does not include "Poster" as a specific option in its controlled vocabulary.

## Repository Mapping

### Direct Mapping

Most Posters.science fields map directly to Zenodo and Figshare fields, or with minor transformations:
- Authors → Creators
- Conference → Related Identifiers
- Funding → Funding References

### Supplementary File Strategy

For fields without direct equivalents in repository schemas:
- posterContent
- Ethics approvals
- Domain classification

The complete **poster.json** file is included as a supplementary file in the repository deposit, ensuring no metadata is lost.

## Schema Versioning

The schema follows semantic versioning (MAJOR.MINOR.PATCH):
- **MAJOR**: Breaking changes to schema structure
- **MINOR**: New fields or non-breaking additions
- **PATCH**: Bug fixes and clarifications

Each schema version is archived on Zenodo with its own DOI for permanent reference and citation.
