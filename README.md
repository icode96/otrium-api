# otrium-api

OtriumAPI is a simple REST & GraphQL API to facilitate product dashboard.

- [Prereuisites](#prerequisites)
- [Tech Stack](#prerequisites)
- [Init Steps](#init-steps)
- [Scripts](#scripts)
- [How to Test](#how-to-test)

## Prerequisites

- git
- docker-compose

## Tech Stack

|                | > version < |
| -------------- | ----------- |
| Node.js        | 14.15.1     |
| NPM            | 6.14.8      |
| MySQL          | 8.0         |
| Docker         | 20.10.2     |
| docker-compose | 1.27.4      |

## Init Steps

1.  Git clone `https://github.com/icode96/otrium-api.git`
2.  `cd otrium-api`
3.  create `otrium` directory in host machine `~/ddata/otrium/`
    - _volumes mount point of docker images_

## Scripts

- `yarn start`
  - this command will start the application in developer mode with nodemon and ts-node
- `yarn build`
  - build the application

## How to Test

1.  Go inside of otrium-api app. `otrium-api`
2.  Create docker network `docker network create otriumnet`
3.  `docker-compose up -d`
4.  go inside the `node` container (`otrium_api`)
5.  `yarn start`

## Next

1.  Performance test the API
