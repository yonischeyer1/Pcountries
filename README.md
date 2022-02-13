# install
docker pull mariadb

docker run -p 127.0.0.1:3306:3306  --name some-mariadb -e MARIADB_ROOT_PASSWORD=my-secret-pw -d mariadb:latest

Copy country-capitals.sql and run it in mysql to populate data
## first terminal
```bash
cd server
npm i 
node server.js
```
## second terminal

```bash
cd client
npm i
npm run dev
```

## notes






