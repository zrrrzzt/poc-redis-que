# poc-redis-que
Proof of Concept Redis que and pub/sub

Run setup

```sh
$ npm run setup
```

Spin up a Dockercontainer with Redis

```sh
$ docker run -p 6379:6379 --name redis -d redis
```

Start server

```sh
$ npm start
```

In another terminalsession start sub
```sh
$ node sub.js
```

Post messages to pub

```sh
$ echo '{"text": "Hello, world!"}' | curl -d @- http://localhost:3000/pub/channel1 --header "Content-Type:application/json"
```

Post messages to list
```sh
$ echo '{"text": "Hello, world!"}' | curl -d @- http://localhost:3000/list/list1 --header "Content-Type:application/json"
```

