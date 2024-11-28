#!/bin/bash

# update system and install deps
sudo apt update -y && sudo apt upgrade -y && \
    apt --y install python3-pip python3-venv apache2 libapache2-mod-wsgi-py3 git

# clone repo
cd /opt
sudo git clone -b stable --depth 1 https://github.com/dargen3/PDBCharges PDBCharges

# install python deps
sudo python3 -m venv venv_PDBCharges
source venv_PDBCharges/bin/activate
sudo chown -R ubuntu:ubuntu /opt
pip install -r PDBCharges/requirements.txt

# setup web server
sudo rm -f /etc/apache2/sites-available/*
sudo cp PDBCharges/PDBCharges.conf /etc/apache2/sites-available/
sudo chown -R www-data:www-data /opt
sudo chmod o+rx PDBCharges/app/PDBCharges.wsgi
sudo chmod o+rx PDBCharges/app/routes.py
sudo a2ensite PDBCharges.conf
sudo a2enmod ssl
sudo a2enmod brotli
sudo a2enmod http2
sudo systemctl restart apache2

