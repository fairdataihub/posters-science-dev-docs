# Poster Schema

The Posters.science JSON Schema was developed with the University of California Curation Center (UC3). The schema balances adherence to DataCite standards with unique poster metadata needs.

**Current version:** [v0.2](https://posters.science/schema/v0.2/poster_schema.json) (DataCite 4.7) | **Previous:** [v0.1](https://posters.science/schema/v0.1/poster_schema.json) (DataCite 4.6)

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

### Content

The **content** object stores extracted text with a flexible structure:
- **sections**: Array of content sections, where each section contains:
  - **sectionTitle**: The heading of the section (e.g., "Introduction", "Methods", "Results", "Discussion", "Conclusions")
  - **sectionContent**: The text content of that section
- **unstructuredContent**: Optional fallback for content that cannot be organized into clear sections

This flexible structure accommodates unstructured poster layouts without forcing content into rigid predefined sections.

### Image and Table Captions

Separate arrays for visual element descriptions:
- **imageCaptions**: Array of objects with caption text and optional ID for cross-referencing
- **tableCaptions**: Array of objects with caption text and optional ID for cross-referencing

## Identifiers

### Primary Identifier: psID

The identifiers array includes **psID** (Posters.science system identifier) as a mandatory identifier, serving as the primary database key. This ensures every poster has a unique, permanent identifier within the platform.

### DOI Assignment

DOIs are added to the identifiers array when posters are deposited to repositories (Zenodo or Figshare).

### Resource Type

As of schema v0.2 (DataCite 4.7), resource types default to "Poster" — a new controlled vocabulary value added in DataCite 4.7 alongside "Presentation". In v0.1, the default was "Other" since DataCite 4.6 did not include "Poster" as a specific option.

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

## What's New in v0.2 (DataCite 4.7)

- **"Poster" and "Presentation"** added to `resourceTypeGeneral` controlled list — posters no longer need to use "Other"
- **Default `resourceTypeGeneral`** changed from "Other" to "Poster"
- **"RAiD" and "SWHID"** added to `relatedIdentifierType` controlled list
- **"Other" relationType** added with new `relationTypeInformation` sub-property for describing custom relationships
- **`relationTypeInformation`** sub-property added to `relatedIdentifiers` items

## Schema Versioning

The schema follows semantic versioning (MAJOR.MINOR.PATCH):
- **MAJOR**: Breaking changes to schema structure
- **MINOR**: New fields or non-breaking additions
- **PATCH**: Bug fixes and clarifications

Each schema version is archived on Zenodo with its own DOI for permanent reference and citation.
