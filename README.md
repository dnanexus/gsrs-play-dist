# GSRS

```
This document does not aspire to be a thoroughful creators documentation. 
It's rather just a list of informations I found important when I was trying to make this code "working". 
Feel free to add anything you find important or missing in here. 
```

```
TODO
- Explain what the index is
- There is only DDL script for the necessary DB. Would be nice to have also some small dataset and corresponding index. 
```

This repo is checked out into docker container which is defined in the [precision-fda repo](https://github.com/dnanexus/precision-fda) (see [the respective repo README file](https://github.com/dnanexus/precision-fda/blob/master/docs/DOCKER_BASED_SETUP.md#running-application-with-external-services) for more details). 
Keep this in mind if performing any changes here.

Technically there are three modules (_frontend, ROOT, substances_) which are meant to be copied into Apache Tomcat _webapps_ folder. 
In order to make the app somewhat running, there has to be a MariaDB database with a specific DB schema created available (explained bellow).

## Modules
### Frontend
Config file: ```frontend/WEB-INF/classes/static/assets/data/config.json```

The interesting parameter in the config file is _apiBaseUrl_. 
The port used in there is 3000, because while running along with the aforementioned _precision-fda_, there is a reverse proxy handling the requests running on this port. If you wanna run this repo alone, you will likely want to change the port to 8080 (or wherever your tomcat is listening).  

### ROOT (Gateway)
Config file: ```ROOT/WEB-INF/classes/application.yml```

This module is just a router.
- If the _substances_ module is not loaded properly (and therefore not running), this router "miss" it and ends up in a death loop. 
So if there is something like ```substances/substances/substances/substances/substances/...``` in the log, then it's because the _substances_ module is not running. 
No need to try to fix the router.
- The router expect the Tomcat to listen on port 8080. In case you configure it to listen on different port, you need to change this config file.

### Substances (backend)
Config file: ```substances/WEB-INF/classes/application.conf```

#### Index
It's not necessary to worry about this index in order to start the backend.

_ix.home_: folder with "index" (either absolute or relative to Tomcat root)

#### Database configuration

Database used in the aforementioned dockerized version is MariaDB with the following configuration:

_spring.datasource.url_="jdbc:mariadb://gsrsdb:3306/ixginas" \
_spring.datasource.username_="root"\
_spring.datasource.password_="password"

DDL script for this DB is in file _gsrsdb.sql_.
This _substances_ backend won't start unless the DB is available and initialized with this DDL script!
