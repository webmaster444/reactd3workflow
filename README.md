# React Component for Workflow
This app is built with react and d3.js for creating component which allow you to draw workflow from json file.

### How to run

```
$ git clone https://github.com/webmaster444/reactd3workflow
$ cd reactd3workflow
$ npm install
$ npm run build
$ npm start
```

### Json file format is as follows

```
[{
  "items": {
    "1": {
      "title": "Buyer receives payment notification",
      "id": 1,
      "description": "",
      "type": "start",
      "stream": 1,
      "attachment": "http://upload1.location",
      "connectors": {
        "1": {
          "title": "",
          "type": "simple",
          "linkTo": 2
        }
      }
    },
    "2": {
      "title": "",
      "id": 2,
      "description": "",
      "type": "junction",
      "stream": 1,
      "attachment": "http://upload1.location",
      "connectors": {
        "1": {
          "title": "",
          "type": "simple",
          "linkTo": 3
        }
      }
    },
    "3": {
      "title": "Fully Paid?",
      "id": 3,
      "description": "",
      "type": "decision",
      "stream": 1,
      "attachment": "http://upload1.location",
      "connectors": {
        "1": {
          "title": "Connector 5 Name",
          "type": "simple",
          "linkTo": 4
        },
        "2": {
          "title": "Connector 4 Name",
          "type": "simple",
          "linkTo": 5
        }
      }
    },
    "4": {
      "title": "Email buyer ask for full payment",
      "id": 4,
      "description": "",
      "type": "process-simple",
      "stream": 1,
      "attachment": "http://upload1.location",
      "connectors": {
        "1": {
          "title": "",
          "type": "simple",
          "linkTo": 2
        }
      }
    },
    "5": {
      "title": "Send Invoice to Buyer",
      "id": 5,
      "description": "",
      "type": "process-simple",
      "stream": 1,
      "attachment": "http://upload1.location",
      "connectors": {
        "1": {
          "title": "",
          "type": "simple",
          "linkTo": 6
        }
      }
    },

    "6": {
      "title": "Send Shipment notice to Buyer",
      "id": 6,
      "description": "",
      "type": "finish",
      "stream": 1,
      "attachment": "http://upload1.location",
      "connectors": {}
    }
  },
  "streams": {
    "1": {
      "id": 1,
      "title": "HR Staff",
      "order": "1"
    }
  }
}]
```

You could find sample json files inside *src/data/* here.

