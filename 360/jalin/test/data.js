var APP_DATA = {
  "scenes": [
    {
      "id": "0-deck",
      "name": "Deck",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.2671689133474988,
          "pitch": -0.03927828610026651,
          "rotation": 5.497787143782138,
          "target": "1-side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-side",
      "name": "Side",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.039142768698116726,
        "pitch": -0.006850966174173578,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 3.0918359376855546,
          "pitch": 0.6144051648380646,
          "rotation": 12.566370614359176,
          "target": "0-deck"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.2870736453390883,
          "pitch": 0.10144341079549513,
          "title": "Succulent",
          "text": "succulent A"
        }
      ]
    }
  ],
  "name": "Test",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
