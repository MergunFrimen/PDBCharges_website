<div align="center">
  <br>
  <a href="https://github.com/sb-ncbr/PDBCharges_website"><img src="https://github.com/sb-ncbr/PDBCharges_website/blob/main/app/static/assets/logo.png" alt="AlphaCharges" width="220"></a>
  <br>
    <br>
</div>



PDBCharges is a [web application](https://pdbcharges.biodata.ceitec.cz/) providing partial atomic charges of protein structures from the [Protein Data Bank](https://www.ebi.ac.uk/pdbe/). The charges are computed by the [semiempirical quantum mechanical methods GFN1-xTB](https://pubs.acs.org/doi/10.1021/acs.jctc.7b00118) and reproduce the PBE0/TZVP/CM5 charges. Before computation of the charges, hydrogens are added to the structure by [Hydride](https://almob.biomedcentral.com/articles/10.1186/s13015-022-00215-x) and [MoleculeKit](https://pubs.acs.org/doi/abs/10.1021/acs.jctc.6b00049) at pH 7.2. The positions of the added hydrogens are also optimized using the [GFN-FF force-field](https://onlinelibrary.wiley.com/doi/full/10.1002/anie.202004239). The details about the methodology and usage are described in the [manual](https://github.com/sb-ncbr/PDBCharges_website/wiki).

## How to run

To run PDBCharges locally, you will need to have [Python 3.12](https://www.python.org/downloads/) and [pip](https://pip.pypa.io/en/stable/installing/) installed.

Then, clone project and install the project dependencies by running:

```bash
$ cd /opt
$ git clone https://github.com/sb-ncbr/PDBCharges
$ pyenv virtualenv pdbcharges-website
$ pyenv activate pdbcharges-website
$ pip install -r requirements.txt
```
Run the project by running the following command inside the virtual environment:

1. Development
```shell
flask --app app/routes.py --debug run
```

2. Production
```bash
(venv) $ cd /opt/PDBCharges/app
(venv) $ export FLASK_APP=routes.py
(venv) $ flask run
```

and point your browser to localhost:5000/.

## License
MIT
