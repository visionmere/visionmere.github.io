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
        "yaw": 1.669710752406206,
        "pitch": 0.04253046089920787,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 2.423076664706697,
          "pitch": 0.19243738324461646,
          "rotation": 0,
          "target": "1-master"
        },
        {
          "yaw": 1.6451868249308799,
          "pitch": 0.12005900651175594,
          "rotation": 0,
          "target": "5-lounge"
        },
        {
          "yaw": 1.8005026741246812,
          "pitch": 0.11469960225506348,
          "rotation": 1.5707963267948966,
          "target": "4-bedroom2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-master",
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
        "yaw": 0.19601390060859814,
        "pitch": 0.05396991316098365,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -2.9037424582247375,
          "pitch": 0.08739262399916647,
          "rotation": 0,
          "target": "2-wir"
        },
        {
          "yaw": 2.6824767339103204,
          "pitch": 0.07306383895059199,
          "rotation": 0,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-wir",
      "name": "WIR",
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
        "yaw": -0.8003933873331697,
        "pitch": 0.15634514920004428,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 1.5740251651000152,
          "pitch": 0.3825255014042579,
          "rotation": 0,
          "target": "3-ensuite"
        },
        {
          "yaw": -3.081116348815147,
          "pitch": 0.16734191105547325,
          "rotation": 0,
          "target": "1-master"
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6565533289878651,
          "pitch": 0.17299002545267683,
          "rotation": 0,
          "target": "1-master"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bedroom2",
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
        "yaw": 1.0755442498514967,
        "pitch": 0.046612453121197106,
        "fov": 1.3046490827601978
      },
      "linkHotspots": [
        {
          "yaw": -1.8574095018908086,
          "pitch": 0.11129670875545195,
          "rotation": 0,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-lounge",
      "name": "Lounge",
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
        "yaw": 2.1092817022626154,
        "pitch": 0.14394912040837582,
        "fov": 1.3046490827601978
      },
      "linkHotspots": [
        {
          "yaw": -1.077023109091396,
          "pitch": 0.12124616560784318,
          "rotation": 0,
          "target": "4-bedroom2"
        },
        {
          "yaw": -0.9559303386305,
          "pitch": 0.12137248011396018,
          "rotation": 1.5707963267948966,
          "target": "0-entrance"
        },
        {
          "yaw": -2.2776376250220007,
          "pitch": 0.14916601968346654,
          "rotation": 4.71238898038469,
          "target": "6-living1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-living1",
      "name": "Living.1",
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
        "yaw": -1.3128765307801409,
        "pitch": -0.1080886594728625,
        "fov": 1.3046490827601978
      },
      "linkHotspots": [
        {
          "yaw": 0.976909015795453,
          "pitch": 0.1223891893210034,
          "rotation": 0,
          "target": "5-lounge"
        },
        {
          "yaw": -1.674813023627987,
          "pitch": 0.12305291045295519,
          "rotation": 0,
          "target": "11-backyard"
        },
        {
          "yaw": 0.20092337550975436,
          "pitch": 0.28513172986590973,
          "rotation": 0,
          "target": "8-hallway"
        },
        {
          "yaw": -1.4695606982224199,
          "pitch": 0.29151433307844066,
          "rotation": 0,
          "target": "7-living2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-living2",
      "name": "Living.2",
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
        "yaw": -0.7130718032799663,
        "pitch": 0.03142311927484265,
        "fov": 1.3046490827601978
      },
      "linkHotspots": [
        {
          "yaw": 1.5232866531085465,
          "pitch": 0.17877649601591195,
          "rotation": 0,
          "target": "6-living1"
        },
        {
          "yaw": 1.2820155483832476,
          "pitch": 0.06510972057655273,
          "rotation": 0,
          "target": "5-lounge"
        },
        {
          "yaw": 1.018370340939125,
          "pitch": 0.11665443111670548,
          "rotation": 0,
          "target": "8-hallway"
        },
        {
          "yaw": -1.7544247207168535,
          "pitch": 0.11367682010167002,
          "rotation": 0,
          "target": "11-backyard"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-hallway",
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
        "yaw": 1.2690151593338914,
        "pitch": -0.028574500022475746,
        "fov": 1.3046490827601978
      },
      "linkHotspots": [
        {
          "yaw": 2.2999709613205646,
          "pitch": 0.3030933861016756,
          "rotation": 0,
          "target": "9-bedroom3"
        },
        {
          "yaw": 0.31698210841375385,
          "pitch": 0.16024728975450486,
          "rotation": 0,
          "target": "10-second-bath"
        },
        {
          "yaw": -1.7887181093863003,
          "pitch": 0.23733674125108095,
          "rotation": 0,
          "target": "6-living1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.563623730541658,
          "pitch": 0.07217849170551105,
          "title": "Powder Room",
          "text": "Text"
        },
        {
          "yaw": -0.13156646681233042,
          "pitch": -0.00752627440835596,
          "title": "Bedroom 4",
          "text": "Text"
        }
      ]
    },
    {
      "id": "9-bedroom3",
      "name": "Bedroom3",
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
        "yaw": 3.0834398090295725,
        "pitch": 0.09815336533538144,
        "fov": 1.3046490827601978
      },
      "linkHotspots": [
        {
          "yaw": 1.1125077342458223,
          "pitch": 0.17562312668664504,
          "rotation": 0,
          "target": "8-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-second-bath",
      "name": "Second Bath",
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
          "yaw": 3.1204899526735908,
          "pitch": 0.10970515898264921,
          "rotation": 0,
          "target": "8-hallway"
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
        "yaw": 1.247382903266983,
        "pitch": -0.06751205796180315,
        "fov": 1.3046490827601978
      },
      "linkHotspots": [
        {
          "yaw": -1.1260671837935448,
          "pitch": 0.1333196243555257,
          "rotation": 0,
          "target": "7-living2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
