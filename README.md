# Bootcamp Project 6 - Rocketseat - GoNode - App Marketplace

## Install Application

Download master branch

```bash
git clone https://github.com/diogomascarenha/rocketseat-bootcamp-6-go-node-app-marketplace.git app-marketpace
cd app-marketpace
```

Make a copy **.env.example** and rename to **.env**

```bash
cp .env.example .env
```

Configure **.env** file

Install dependencies

```bash
docker-compose run app yarn
```

Start docker-compose

```bash
docker-compose up -d
```

(OPTIONAL) Fetch the logs of containers

```bash
docker-compose logs -f
```

(OPTIONAL) Open Mailhog


Open Browser [http://localhost:8025](http://localhost:8025)


## APIs

### Create User

```bash
curl -X POST \
  http://localhost:3000/users \
  -H 'Content-Type: application/json' \
  -d '{
	"name":"User Test",
	"email":"sample@example.com",
	"password":"123456"
}'
```

### Create Session

```bash
curl -X POST \
  http://localhost:3000/sessions \
  -H 'Content-Type: application/json' \
  -d '{
	"email":"sample@example.com",
	"password":"123456"
}'
```

### Create Ad

- replace **SESSION_TOKEN_HERE**

```bash
curl -X POST \
  http://localhost:3000/ads \
  -H 'Authorization: Bearer SESSION_TOKEN_HERE' \
  -H 'Content-Type: application/json' \
  -d '{
	"title":"Sample Title",
	"description":"Sample Description",
	"price":123.45
}'
```

### Create Purchase

- replace **SESSION_TOKEN_HERE** and **AD_ID_HERE**

```bash
curl -X POST \
  http://localhost:3000/purchases \
  -H 'Authorization: Bearer SESSION_TOKEN_HERE' \
  -H 'Content-Type: application/json' \
  -d '{
	"ad":"AD_ID_HERE",
	"content":"Test Mail Message"
}'
```
