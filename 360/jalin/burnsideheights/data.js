var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
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
        "yaw": -0.020138414446089214,
        "pitch": 0.018962922714536035,
        "fov": 1.3046490827601978
      },
      "linkHotspots": [
        {
          "yaw": -0.008882078523772208,
          "pitch": 0,
          "rotation": 0,
          "target": "1-entrance-hallway"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.1509197892636145,
          "pitch": 0.010963719636992053,
          "title": "Private Entrance",
          "text": "Leafy Surrounds"
        }
      ]
    },
    {
      "id": "1-entrance-hallway",
      "name": "Entrance Hallway",
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
        "yaw": 0.06175780430134026,
        "pitch": -0.00930515744155258,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 0.07001203676024126,
          "pitch": 0.4369437975945072,
          "rotation": 0,
          "target": "4-hallway"
        },
        {
          "yaw": 1.6323943785248503,
          "pitch": 0.28791230686537084,
          "rotation": 0,
          "target": "2-master"
        },
        {
          "yaw": -1.0081686846151285,
          "pitch": 0.2192631074336937,
          "rotation": 0,
          "target": "5-dinning"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-master",
      "name": "Master",
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
        "yaw": -0.2993910947651912,
        "pitch": 0.1302722041816935,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -1.6766915451350357,
          "pitch": -0.022641447474835985,
          "rotation": 0,
          "target": "1-entrance-hallway"
        },
        {
          "yaw": -1.6138601794837015,
          "pitch": 0.09868736185825533,
          "rotation": 7.853981633974483,
          "target": "3-ensuite"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-ensuite",
      "name": "Ensuite",
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
        "yaw": 0.003727187853552749,
        "pitch": -0.0037220629766210322,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 1.8455206107849307,
          "pitch": 0.229980536326984,
          "rotation": 0,
          "target": "2-master"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-hallway",
      "name": "Hallway",
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
        "yaw": -1.6810071150194084,
        "pitch": -0.02763699881142756,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 1.6059238509487512,
          "pitch": 0.12670125449438174,
          "rotation": 0,
          "target": "1-entrance-hallway"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.9852246596514256,
          "pitch": -0.016100727646032098,
          "title": "Double Garage",
          "text": "Text"
        },
        {
          "yaw": -3.1400977010891093,
          "pitch": 0.02179467193938045,
          "title": "Powder Room",
          "text": "Text"
        }
      ]
    },
    {
      "id": "5-dinning",
      "name": "Dinning",
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
        "yaw": 0.0281937802245249,
        "pitch": 0.02605444083635078,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 1.38960310411343,
          "pitch": 0.3729231519426417,
          "rotation": 0,
          "target": "6-hallway-back"
        },
        {
          "yaw": 2.706053468169488,
          "pitch": 0.3376898948264788,
          "rotation": 0,
          "target": "10-living"
        },
        {
          "yaw": 3.0583847516459057,
          "pitch": 0.15733286623647125,
          "rotation": 0,
          "target": "11-backyard"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-hallway-back",
      "name": "Hallway Back",
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
        "yaw": -1.5137703853085078,
        "pitch": -0.0018610314883105161,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -1.560598333873969,
          "pitch": 0.019637038374522575,
          "rotation": 0,
          "target": "8-central-bathroom"
        },
        {
          "yaw": 3.1284755054464917,
          "pitch": 0.001472214812579864,
          "rotation": 0,
          "target": "7-bedroom1"
        },
        {
          "yaw": -0.05940898633633651,
          "pitch": 0.0403380281175032,
          "rotation": 0,
          "target": "9-bedroom2"
        },
        {
          "yaw": 1.352261646173492,
          "pitch": 0.18318373551993972,
          "rotation": 0,
          "target": "5-dinning"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.4631488323033093,
          "pitch": -0.07808201659409342,
          "title": "Linen",
          "text": "Text"
        },
        {
          "yaw": -2.081429691068692,
          "pitch": -0.3296463740919542,
          "title": "Central Bathroom",
          "text": "<span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\">Bedrooms on either side</span>"
        }
      ]
    },
    {
      "id": "7-bedroom1",
      "name": "Bedroom1",
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
        "yaw": 2.727215958765086,
        "pitch": 0.22890687306211888,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -1.2021423778324447,
          "pitch": 0.1468895324139492,
          "rotation": 0,
          "target": "6-hallway-back"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-central-bathroom",
      "name": "Central Bathroom",
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
        "yaw": 0.02148097540916183,
        "pitch": 0.03908166125451018,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 3.111851083128351,
          "pitch": 0.5590480990290452,
          "rotation": 0,
          "target": "6-hallway-back"
        },
        {
          "yaw": 3.1033809449601977,
          "pitch": 0.2859685782936854,
          "rotation": 0,
          "target": "5-dinning"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-bedroom2",
      "name": "Bedroom2",
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
        "yaw": 0.45110034486239137,
        "pitch": 0.0893295114388657,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -3.055942475334888,
          "pitch": 0.20901676973808847,
          "rotation": 0,
          "target": "6-hallway-back"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-living",
      "name": "Living",
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
        "yaw": -0.20138414446089214,
        "pitch": -0.0241934093480225,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 0.231674401043513,
          "pitch": 0.15227898770319648,
          "rotation": 0,
          "target": "5-dinning"
        },
        {
          "yaw": 0.4917670209256908,
          "pitch": 0.13274888512316885,
          "rotation": 0,
          "target": "1-entrance-hallway"
        },
        {
          "yaw": -1.3350812821642428,
          "pitch": -0.0035652227197413566,
          "rotation": 4.71238898038469,
          "target": "11-backyard"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-backyard",
      "name": "Backyard",
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
        "yaw": 0.12083048667653529,
        "pitch": 0.16935386543620723,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 1.8926969406199623,
          "pitch": 0.064998859460065,
          "rotation": 1.5707963267948966,
          "target": "10-living"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "14 Belleville Cl, Burnside Heights",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
