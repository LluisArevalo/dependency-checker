# Dependency Checker

This CLI tool checks all the depdencies of a Node.js-based project and check if they are obsolete.

## Usage instructions
- Install the package as global library.
- Go to the project folder root (Node.js based projects).
- Run the command `dependency-checker`.

## Folder structure

- `bin`: the CLI. What gets called when someone runs the CLI.
- `src/commands`: holds individual command files. This makes adding new commands or editing existing ones cleaner.
- `src/utils`: utility functions that might be needed across several commands, like formatting data.
- `src/lib`: where core functionality resides, especially API interactions or complex logics.

