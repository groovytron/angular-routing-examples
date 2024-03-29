# Slides

This folder contains some slides' source code.

## Requirements

You will need the following softwares installed:

- `make`
- `pandoc`
- `pandoc-crossref`
- `fswatch`

## Edit the slides

Run `make watch` to start building the slides and rebuild automatically when a file changed.

You can then edit the slides and access their HTML export in the `build` folder.

You can also edit the `metadata.yaml` file following your use case.
More information about this metadata file can be found on
[pandoc's `yaml_metadata_block`'s documentation](https://pandoc.org/MANUAL.html#extension-yaml_metadata_block).

Run `make slides` to build the slides in HTML format.

Run `make pdf` to build the slides in PDF format.

Either building HTML or PDF will output the result in the `build` folder.

Run `make all` (or simply `make`) to build the slides in both HTML and PDF format.

Run `make clean` to delete the `build` folder.
