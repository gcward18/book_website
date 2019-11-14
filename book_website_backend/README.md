# HOW TO RUN

First the 'export_env.sh' must be converted to an executable to do this run the following command

`chmod +x export_env.sh`

This script will also log you onto the MST Campus VPN so that you can connect to our Database in DBeaver. Then simply run the following command to start up the backend server.

`./rest_api.py`

Now the backend should be running on your computer, if you're using a Linux machine then the VPN connection the campus must be open for the rest server to work.

<br/>
You also need to install the following files in pip3

`pip3 install Flask-Cors --user` <br/>
`pip3 install Flask --user` <br/>
`pip3 install Flask-RESTful --user`
