TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMin": 102,
  "class": "Video360",
  "video": [
   {
    "posterURL": "media/media_60223D73_6D7D_768C_41D0_39C2DC3B8214_poster.jpg",
    "width": 3840,
    "type": "video/mp4",
    "url": "media/media_60223D73_6D7D_768C_41D0_39C2DC3B8214.mp4",
    "bitrate": 20736,
    "height": 2160,
    "framerate": 25,
    "class": "Video360Resource"
   },
   {
    "posterURL": "media/media_60223D73_6D7D_768C_41D0_39C2DC3B8214_poster.jpg",
    "width": 3168,
    "type": "video/mp4",
    "url": "media/media_60223D73_6D7D_768C_41D0_39C2DC3B8214_ios.mp4",
    "bitrate": 14113,
    "height": 1782,
    "framerate": 25,
    "class": "Video360Resource"
   }
  ],
  "id": "media_60223D73_6D7D_768C_41D0_39C2DC3B8214",
  "loop": true,
  "overlays": [
   {
    "angle": 0,
    "id": "media_60223D73_6D7D_768C_41D0_39C2DC3B8214_tcap0",
    "image": {
     "levels": [
      {
       "width": 850,
       "height": 850,
       "url": "media/media_60223D73_6D7D_768C_41D0_39C2DC3B8214_tcap0.png",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "TripodCapPanoramaOverlay",
    "distance": 100,
    "hfov": 45,
    "rotate": false,
    "inertia": false
   },
   {
    "data": {
     "label": "Image"
    },
    "id": "overlay_7CE1085D_6DA5_3EB4_41B5_E648E64BC261",
    "areas": [
     {
      "mapColor": "image",
      "class": "HotspotPanoramaOverlayArea",
      "click": "this.startPanoramaWithCamera(this.media_7DC4D66A_6DBF_329C_41D2_E51D8DE0B3BA, this.camera_541CB56F_75C9_06FE_41DB_8CACF50CAC19); this.mainPlayList.set('selectedIndex', 6); this.MainViewerPanoramaPlayer.play()"
     }
    ],
    "items": [
     {
      "pitch": 0,
      "playbackPositions": [
       {
        "timestamp": 0,
        "hfov": 9.37,
        "pitch": -1.09,
        "yaw": -2.8,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0
       }
      ],
      "image": {
       "rowCount": 6,
       "colCount": 4,
       "levels": [
        {
         "width": 400,
         "height": 360,
         "url": "media/media_60223D73_6D7D_768C_41D0_39C2DC3B8214_HS_0_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "frameCount": 24,
       "class": "AnimatedImageResource",
       "frameDuration": 40
      },
      "class": "HotspotPanoramaOverlayImage",
      "yaw": 0,
      "distance": 100
     }
    ],
    "enabledInCardboard": true,
    "rollOverDisplay": false,
    "maps": [],
    "class": "HotspotPanoramaOverlay",
    "useHandCursor": true
   },
   {
    "data": {
     "label": "Image"
    },
    "id": "overlay_7FBBA186_6DA5_F194_41C1_19E0F7421E0D",
    "areas": [
     {
      "mapColor": "image",
      "class": "HotspotPanoramaOverlayArea",
      "click": "this.startPanoramaWithCamera(this.panorama_7B014C7B_6DE7_377C_417F_222A70AD8AA1, this.camera_5424E577_75C9_06EE_41CE_2B612C9D7270); this.mainPlayList.set('selectedIndex', 7)"
     },
     {
      "class": "HotspotPanoramaOverlayArea"
     }
    ],
    "items": [
     {
      "pitch": 0,
      "playbackPositions": [
       {
        "timestamp": 0,
        "hfov": 9.37,
        "pitch": -2.64,
        "yaw": 158.4,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0
       }
      ],
      "image": {
       "rowCount": 6,
       "colCount": 4,
       "levels": [
        {
         "width": 400,
         "height": 360,
         "url": "media/media_60223D73_6D7D_768C_41D0_39C2DC3B8214_HS_1_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "frameCount": 24,
       "class": "AnimatedImageResource",
       "frameDuration": 40
      },
      "class": "HotspotPanoramaOverlayImage",
      "yaw": 0,
      "distance": 100
     }
    ],
    "enabledInCardboard": true,
    "rollOverDisplay": false,
    "maps": [],
    "class": "HotspotPanoramaOverlay",
    "useHandCursor": true
   },
   {
    "data": {
     "label": "Image"
    },
    "id": "overlay_7B149184_6DAD_7194_41DA_9C5AE000728B",
    "areas": [
     {
      "mapColor": "image",
      "toolTip": "Magistrates Court",
      "displayTooltipInTouchScreens": true,
      "class": "HotspotPanoramaOverlayArea",
      "click": "this.showPopupPanoramaOverlay(this.popup_64AACC0D_7539_0622_41C8_066817B0109E, {'iconHeight':20,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconHeight':20,'iconLineWidth':5,'paddingTop':5,'pressedBorderColor':'#000000','paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'rollOverIconLineWidth':5,'borderColor':'#000000','pressedIconHeight':20,'rollOverBorderSize':0,'pressedIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'pressedIconColor':'#888888','borderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0}, null, null, null, null, this.audio_6CC858D0_7537_0E22_41B8_60A4BD71F642, false)"
     },
     {
      "class": "HotspotPanoramaOverlayArea"
     }
    ],
    "items": [
     {
      "pitch": 0,
      "playbackPositions": [
       {
        "timestamp": 0,
        "hfov": 9.34,
        "pitch": 5.14,
        "yaw": 6.07,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0
       }
      ],
      "image": {
       "levels": [
        {
         "width": 179,
         "height": 179,
         "url": "media/media_60223D73_6D7D_768C_41D0_39C2DC3B8214_HS_2_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "HotspotPanoramaOverlayImage",
      "yaw": 0,
      "distance": 100
     }
    ],
    "enabledInCardboard": true,
    "rollOverDisplay": false,
    "maps": [],
    "class": "HotspotPanoramaOverlay",
    "useHandCursor": true
   },
   {
    "data": {
     "label": "Image"
    },
    "id": "overlay_7B96C3A5_6DAD_5194_41D3_24E7A16CEC8C",
    "areas": [
     {
      "mapColor": "image",
      "toolTip": "Coroners Court",
      "displayTooltipInTouchScreens": true,
      "class": "HotspotPanoramaOverlayArea",
      "click": "this.showPopupPanoramaOverlay(this.popup_6497BDE3_7539_01E6_41D9_8B9E6EE26ADB, {'iconHeight':20,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconHeight':20,'iconLineWidth':5,'paddingTop':5,'pressedBorderColor':'#000000','paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'rollOverIconLineWidth':5,'borderColor':'#000000','pressedIconHeight':20,'rollOverBorderSize':0,'pressedIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'pressedIconColor':'#888888','borderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0}, null, null, null, null, this.audio_6CADE524_7537_0662_41CA_FFB1193DF2EC, false)"
     },
     {
      "class": "HotspotPanoramaOverlayArea"
     },
     {
      "class": "HotspotPanoramaOverlayArea"
     }
    ],
    "items": [
     {
      "pitch": 0,
      "playbackPositions": [
       {
        "timestamp": 0,
        "hfov": 6.55,
        "pitch": 3.3,
        "yaw": 37.91,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0
       }
      ],
      "image": {
       "levels": [
        {
         "width": 179,
         "height": 179,
         "url": "media/media_60223D73_6D7D_768C_41D0_39C2DC3B8214_HS_3_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "HotspotPanoramaOverlayImage",
      "yaw": 0,
      "distance": 35.35
     }
    ],
    "enabledInCardboard": true,
    "rollOverDisplay": false,
    "maps": [],
    "class": "HotspotPanoramaOverlay",
    "useHandCursor": true
   },
   {
    "data": {
     "label": "Image"
    },
    "id": "overlay_7BFAB10A_6DAE_CE9C_41D7_81C412DC1CAB",
    "areas": [
     {
      "mapColor": "image",
      "toolTip": "District Court",
      "displayTooltipInTouchScreens": true,
      "class": "HotspotPanoramaOverlayArea",
      "click": "this.showPopupPanoramaOverlay(this.popup_6481270C_7537_0222_418F_89CFF30A2A7A, {'iconHeight':20,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconHeight':20,'iconLineWidth':5,'paddingTop':5,'pressedBorderColor':'#000000','paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'rollOverIconLineWidth':5,'borderColor':'#000000','pressedIconHeight':20,'rollOverBorderSize':0,'pressedIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'pressedIconColor':'#888888','borderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0}, null, null, null, null, this.audio_6F3BFF82_7539_0226_41C2_66599C3A6694, false)"
     },
     {
      "class": "HotspotPanoramaOverlayArea"
     },
     {
      "class": "HotspotPanoramaOverlayArea"
     },
     {
      "class": "HotspotPanoramaOverlayArea"
     }
    ],
    "items": [
     {
      "pitch": 0,
      "playbackPositions": [
       {
        "timestamp": 0,
        "hfov": 9.31,
        "pitch": 6.69,
        "yaw": 159.43,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0
       }
      ],
      "image": {
       "levels": [
        {
         "width": 179,
         "height": 179,
         "url": "media/media_60223D73_6D7D_768C_41D0_39C2DC3B8214_HS_4_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "HotspotPanoramaOverlayImage",
      "yaw": 0,
      "distance": 100
     }
    ],
    "enabledInCardboard": true,
    "rollOverDisplay": false,
    "maps": [],
    "class": "HotspotPanoramaOverlay",
    "useHandCursor": true
   },
   {
    "data": {
     "label": "Image"
    },
    "id": "overlay_7B5854E8_6DAF_779C_41D2_E2A804D6AA1C",
    "areas": [
     {
      "mapColor": "image",
      "toolTip": "Youth Court",
      "displayTooltipInTouchScreens": true,
      "class": "HotspotPanoramaOverlayArea",
      "click": "this.showPopupPanoramaOverlay(this.popup_6488708D_7537_1E22_419C_E8F779B13632, {'iconHeight':20,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconHeight':20,'iconLineWidth':5,'paddingTop':5,'pressedBorderColor':'#000000','paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'rollOverIconLineWidth':5,'borderColor':'#000000','pressedIconHeight':20,'rollOverBorderSize':0,'pressedIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'pressedIconColor':'#888888','borderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0}, null, null, null, null, this.audio_6F50AFE4_7539_01E2_41C6_F73914D83A32, false)"
     },
     {
      "class": "HotspotPanoramaOverlayArea"
     },
     {
      "class": "HotspotPanoramaOverlayArea"
     },
     {
      "class": "HotspotPanoramaOverlayArea"
     }
    ],
    "items": [
     {
      "pitch": 0,
      "playbackPositions": [
       {
        "timestamp": 0,
        "hfov": 6.4,
        "pitch": 12.58,
        "yaw": 112.77,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0
       }
      ],
      "image": {
       "levels": [
        {
         "width": 179,
         "height": 179,
         "url": "media/media_60223D73_6D7D_768C_41D0_39C2DC3B8214_HS_5_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "HotspotPanoramaOverlayImage",
      "yaw": 0,
      "distance": 35.35
     }
    ],
    "enabledInCardboard": true,
    "rollOverDisplay": false,
    "maps": [],
    "class": "HotspotPanoramaOverlay",
    "useHandCursor": true
   },
   {
    "data": {
     "label": "Image"
    },
    "id": "overlay_7B1E05EE_6DAB_3194_41CB_8A371405605F",
    "areas": [
     {
      "mapColor": "image",
      "toolTip": "Federal Court",
      "displayTooltipInTouchScreens": true,
      "class": "HotspotPanoramaOverlayArea",
      "click": "this.showPopupPanoramaOverlay(this.popup_65FD6618_7539_0222_41BF_B009470D19B6, {'iconHeight':20,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconHeight':20,'iconLineWidth':5,'paddingTop':5,'pressedBorderColor':'#000000','paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'rollOverIconLineWidth':5,'borderColor':'#000000','pressedIconHeight':20,'rollOverBorderSize':0,'pressedIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'pressedIconColor':'#888888','borderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0}, null, null, null, null, this.audio_64025093_753B_7E26_41B7_C34F1164367B, false)"
     },
     {
      "class": "HotspotPanoramaOverlayArea"
     },
     {
      "class": "HotspotPanoramaOverlayArea"
     }
    ],
    "items": [
     {
      "pitch": 0,
      "playbackPositions": [
       {
        "timestamp": 0,
        "hfov": 9.34,
        "pitch": 5.14,
        "yaw": -14.82,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0
       }
      ],
      "image": {
       "levels": [
        {
         "width": 179,
         "height": 179,
         "url": "media/media_60223D73_6D7D_768C_41D0_39C2DC3B8214_HS_6_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "HotspotPanoramaOverlayImage",
      "yaw": 0,
      "distance": 100
     }
    ],
    "enabledInCardboard": true,
    "rollOverDisplay": false,
    "maps": [],
    "class": "HotspotPanoramaOverlay",
    "useHandCursor": true
   },
   {
    "data": {
     "label": "Image"
    },
    "id": "overlay_7B31FBBD_6DAB_71F4_417B_F3D60A71EFD4",
    "areas": [
     {
      "mapColor": "image",
      "toolTip": "Supreme Court",
      "displayTooltipInTouchScreens": true,
      "class": "HotspotPanoramaOverlayArea",
      "click": "this.showPopupPanoramaOverlay(this.popup_648BDEFA_7537_03E6_41D2_B5D5C307742C, {'iconHeight':20,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconHeight':20,'iconLineWidth':5,'paddingTop':5,'pressedBorderColor':'#000000','paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'rollOverIconLineWidth':5,'borderColor':'#000000','pressedIconHeight':20,'rollOverBorderSize':0,'pressedIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'pressedIconColor':'#888888','borderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0}, null, null, null, null, this.audio_6F78A2B4_7539_0262_41D5_2CCCC8280695, false)"
     },
     {
      "class": "HotspotPanoramaOverlayArea"
     },
     {
      "class": "HotspotPanoramaOverlayArea"
     },
     {
      "class": "HotspotPanoramaOverlayArea"
     },
     {
      "class": "HotspotPanoramaOverlayArea"
     }
    ],
    "items": [
     {
      "pitch": 0,
      "playbackPositions": [
       {
        "timestamp": 0,
        "hfov": 9.34,
        "pitch": 5.14,
        "yaw": 101.99,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0
       }
      ],
      "image": {
       "levels": [
        {
         "width": 179,
         "height": 179,
         "url": "media/media_60223D73_6D7D_768C_41D0_39C2DC3B8214_HS_7_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "HotspotPanoramaOverlayImage",
      "yaw": 0,
      "distance": 100
     }
    ],
    "enabledInCardboard": true,
    "rollOverDisplay": false,
    "maps": [],
    "class": "HotspotPanoramaOverlay",
    "useHandCursor": true
   },
   {
    "showDuration": 500,
    "popupMaxHeight": "95%",
    "pitch": 0,
    "popupMaxWidth": "95%",
    "rotationZ": 0,
    "rotationY": 0,
    "yaw": 0,
    "playbackPositions": [
     {
      "yaw": -14.82,
      "timestamp": 0,
      "hfov": 9.34,
      "pitch": 5.14,
      "class": "PopupPanoramaOverlayPlaybackPosition"
     }
    ],
    "class": "PopupPanoramaOverlay",
    "id": "popup_65FD6618_7539_0222_41BF_B009470D19B6",
    "hideEasing": "cubic_out",
    "showEasing": "cubic_in",
    "popupDistance": 100,
    "hfov": 7.75,
    "image": {
     "levels": [
      {
       "width": 620,
       "height": 800,
       "url": "media/popup_65FD6618_7539_0222_41BF_B009470D19B6_0_0.png",
       "class": "ImageResourceLevel"
      },
      {
       "width": 396,
       "height": 512,
       "url": "media/popup_65FD6618_7539_0222_41BF_B009470D19B6_0_1.png",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "rotationX": 0,
    "hideDuration": 500
   },
   {
    "showDuration": 500,
    "popupMaxHeight": "95%",
    "pitch": 0,
    "popupMaxWidth": "95%",
    "rotationZ": 0,
    "rotationY": 0,
    "yaw": 0,
    "playbackPositions": [
     {
      "yaw": 6.07,
      "timestamp": 0,
      "hfov": 9.34,
      "pitch": 5.14,
      "class": "PopupPanoramaOverlayPlaybackPosition"
     }
    ],
    "class": "PopupPanoramaOverlay",
    "id": "popup_64AACC0D_7539_0622_41C8_066817B0109E",
    "hideEasing": "cubic_out",
    "showEasing": "cubic_in",
    "popupDistance": 100,
    "hfov": 7.75,
    "image": {
     "levels": [
      {
       "width": 620,
       "height": 800,
       "url": "media/popup_64AACC0D_7539_0622_41C8_066817B0109E_0_0.png",
       "class": "ImageResourceLevel"
      },
      {
       "width": 396,
       "height": 512,
       "url": "media/popup_64AACC0D_7539_0622_41C8_066817B0109E_0_1.png",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "rotationX": 0,
    "hideDuration": 500
   },
   {
    "showDuration": 500,
    "popupMaxHeight": "95%",
    "pitch": 0,
    "popupMaxWidth": "95%",
    "rotationZ": 0,
    "rotationY": 0,
    "yaw": 0,
    "playbackPositions": [
     {
      "yaw": 37.91,
      "timestamp": 0,
      "hfov": 6.55,
      "pitch": 3.3,
      "class": "PopupPanoramaOverlayPlaybackPosition"
     }
    ],
    "class": "PopupPanoramaOverlay",
    "id": "popup_6497BDE3_7539_01E6_41D9_8B9E6EE26ADB",
    "hideEasing": "cubic_out",
    "showEasing": "cubic_in",
    "popupDistance": 100,
    "hfov": 7.75,
    "image": {
     "levels": [
      {
       "width": 620,
       "height": 800,
       "url": "media/popup_6497BDE3_7539_01E6_41D9_8B9E6EE26ADB_0_0.png",
       "class": "ImageResourceLevel"
      },
      {
       "width": 396,
       "height": 512,
       "url": "media/popup_6497BDE3_7539_01E6_41D9_8B9E6EE26ADB_0_1.png",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "rotationX": 0,
    "hideDuration": 500
   },
   {
    "showDuration": 500,
    "popupMaxHeight": "95%",
    "pitch": 0,
    "popupMaxWidth": "95%",
    "rotationZ": 0,
    "rotationY": 0,
    "yaw": 0,
    "playbackPositions": [
     {
      "yaw": 101.99,
      "timestamp": 0,
      "hfov": 9.34,
      "pitch": 5.14,
      "class": "PopupPanoramaOverlayPlaybackPosition"
     }
    ],
    "class": "PopupPanoramaOverlay",
    "id": "popup_648BDEFA_7537_03E6_41D2_B5D5C307742C",
    "hideEasing": "cubic_out",
    "showEasing": "cubic_in",
    "popupDistance": 100,
    "hfov": 7.75,
    "image": {
     "levels": [
      {
       "width": 620,
       "height": 800,
       "url": "media/popup_648BDEFA_7537_03E6_41D2_B5D5C307742C_0_0.png",
       "class": "ImageResourceLevel"
      },
      {
       "width": 396,
       "height": 512,
       "url": "media/popup_648BDEFA_7537_03E6_41D2_B5D5C307742C_0_1.png",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "rotationX": 0,
    "hideDuration": 500
   },
   {
    "showDuration": 500,
    "popupMaxHeight": "95%",
    "pitch": 0,
    "popupMaxWidth": "95%",
    "rotationZ": 0,
    "rotationY": 0,
    "yaw": 0,
    "playbackPositions": [
     {
      "yaw": 112.77,
      "timestamp": 0,
      "hfov": 6.4,
      "pitch": 12.58,
      "class": "PopupPanoramaOverlayPlaybackPosition"
     }
    ],
    "class": "PopupPanoramaOverlay",
    "id": "popup_6488708D_7537_1E22_419C_E8F779B13632",
    "hideEasing": "cubic_out",
    "showEasing": "cubic_in",
    "popupDistance": 100,
    "hfov": 7.75,
    "image": {
     "levels": [
      {
       "width": 620,
       "height": 800,
       "url": "media/popup_6488708D_7537_1E22_419C_E8F779B13632_0_0.png",
       "class": "ImageResourceLevel"
      },
      {
       "width": 396,
       "height": 512,
       "url": "media/popup_6488708D_7537_1E22_419C_E8F779B13632_0_1.png",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "rotationX": 0,
    "hideDuration": 500
   },
   {
    "showDuration": 500,
    "popupMaxHeight": "95%",
    "pitch": 0,
    "popupMaxWidth": "95%",
    "rotationZ": 0,
    "rotationY": 0,
    "yaw": 0,
    "playbackPositions": [
     {
      "yaw": 159.43,
      "timestamp": 0,
      "hfov": 9.31,
      "pitch": 6.69,
      "class": "PopupPanoramaOverlayPlaybackPosition"
     }
    ],
    "class": "PopupPanoramaOverlay",
    "id": "popup_6481270C_7537_0222_418F_89CFF30A2A7A",
    "hideEasing": "cubic_out",
    "showEasing": "cubic_in",
    "popupDistance": 100,
    "hfov": 7.75,
    "image": {
     "levels": [
      {
       "width": 620,
       "height": 800,
       "url": "media/popup_6481270C_7537_0222_418F_89CFF30A2A7A_0_0.png",
       "class": "ImageResourceLevel"
      },
      {
       "width": 396,
       "height": 512,
       "url": "media/popup_6481270C_7537_0222_418F_89CFF30A2A7A_0_1.png",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "rotationX": 0,
    "hideDuration": 500
   },
   {
    "data": {
     "label": "Image"
    },
    "id": "overlay_6438E291_7549_0222_41B0_7285896AA1BA",
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotPanoramaOverlayArea",
      "click": "this.showPopupPanoramaOverlay(this.popup_649C7821_754B_0E62_41D3_83F9B7D6B8C9, {'iconHeight':20,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconHeight':20,'iconLineWidth':5,'paddingTop':5,'pressedBorderColor':'#000000','paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'rollOverIconLineWidth':5,'borderColor':'#000000','pressedIconHeight':20,'rollOverBorderSize':0,'pressedIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'pressedIconColor':'#888888','borderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0}, null, null, null, null, this.audio_6DBA2459_7537_0622_41A6_536C54DF77B4, false)"
     }
    ],
    "items": [
     {
      "pitch": 0,
      "playbackPositions": [
       {
        "timestamp": 0,
        "hfov": 9.43,
        "pitch": -15.36,
        "yaw": -111.4,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0
       }
      ],
      "image": {
       "levels": [
        {
         "width": 179,
         "height": 179,
         "url": "media/media_60223D73_6D7D_768C_41D0_39C2DC3B8214_HS_8_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "HotspotPanoramaOverlayImage",
      "yaw": 0,
      "distance": 50
     }
    ],
    "enabledInCardboard": true,
    "rollOverDisplay": false,
    "maps": [
     {
      "yaw": 0,
      "playbackPositions": [
       {
        "timestamp": 0,
        "hfov": 9.43,
        "pitch": -15.36,
        "yaw": -111.4,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0
       }
      ],
      "pitch": 0,
      "class": "HotspotPanoramaOverlayMap",
      "image": {
       "levels": [
        {
         "width": 16,
         "height": 16,
         "url": "media/media_60223D73_6D7D_768C_41D0_39C2DC3B8214_HS_8_0_0_map.gif",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    ],
    "class": "HotspotPanoramaOverlay",
    "useHandCursor": true
   },
   {
    "data": {
     "label": "Image"
    },
    "id": "overlay_64A3FBF9_7549_01E2_41CC_3A0FFAE01435",
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotPanoramaOverlayArea",
      "click": "this.showPopupPanoramaOverlay(this.popup_64A91B8E_754B_023E_41C8_914836AF004D, {'iconHeight':20,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconHeight':20,'iconLineWidth':5,'paddingTop':5,'pressedBorderColor':'#000000','paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'rollOverIconLineWidth':5,'borderColor':'#000000','pressedIconHeight':20,'rollOverBorderSize':0,'pressedIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'pressedIconColor':'#888888','borderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0}, null, null, null, null, this.audio_6CEBD85F_7537_0EDE_41A6_C5CBA14BB3DF, false)"
     },
     {
      "class": "HotspotPanoramaOverlayArea"
     }
    ],
    "items": [
     {
      "pitch": 0,
      "playbackPositions": [
       {
        "timestamp": 0,
        "hfov": 9.41,
        "pitch": -15.67,
        "yaw": -158.4,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0
       }
      ],
      "image": {
       "levels": [
        {
         "width": 179,
         "height": 179,
         "url": "media/media_60223D73_6D7D_768C_41D0_39C2DC3B8214_HS_9_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "HotspotPanoramaOverlayImage",
      "yaw": 0,
      "distance": 50
     }
    ],
    "enabledInCardboard": true,
    "rollOverDisplay": false,
    "maps": [
     {
      "yaw": 0,
      "playbackPositions": [
       {
        "timestamp": 0,
        "hfov": 9.41,
        "pitch": -15.67,
        "yaw": -158.4,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0
       }
      ],
      "pitch": 0,
      "class": "HotspotPanoramaOverlayMap",
      "image": {
       "levels": [
        {
         "width": 16,
         "height": 16,
         "url": "media/media_60223D73_6D7D_768C_41D0_39C2DC3B8214_HS_9_0_0_map.gif",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    ],
    "class": "HotspotPanoramaOverlay",
    "useHandCursor": true
   },
   {
    "data": {
     "label": "Image"
    },
    "id": "overlay_6769F633_7549_0266_41D2_D502308CB7FD",
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotPanoramaOverlayArea",
      "click": "this.showPopupPanoramaOverlay(this.popup_64F6280E_7549_0E3E_41B6_9B3CEF00253D, {'iconHeight':20,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconHeight':20,'iconLineWidth':5,'paddingTop':5,'pressedBorderColor':'#000000','paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'rollOverIconLineWidth':5,'borderColor':'#000000','pressedIconHeight':20,'rollOverBorderSize':0,'pressedIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'pressedIconColor':'#888888','borderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0}, null, null, null, null, this.audio_6C4ABFFB_754B_01E6_41D3_FC7251F72A00, false)"
     },
     {
      "class": "HotspotPanoramaOverlayArea"
     }
    ],
    "items": [
     {
      "pitch": 0,
      "playbackPositions": [
       {
        "timestamp": 0,
        "hfov": 9.58,
        "pitch": 11.41,
        "yaw": -134.38,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0
       }
      ],
      "image": {
       "levels": [
        {
         "width": 179,
         "height": 179,
         "url": "media/media_60223D73_6D7D_768C_41D0_39C2DC3B8214_HS_10_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "HotspotPanoramaOverlayImage",
      "yaw": 0,
      "distance": 50
     }
    ],
    "enabledInCardboard": true,
    "rollOverDisplay": false,
    "maps": [
     {
      "yaw": 0,
      "playbackPositions": [
       {
        "timestamp": 0,
        "hfov": 9.58,
        "pitch": 11.41,
        "yaw": -134.38,
        "opacity": 1,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0
       }
      ],
      "pitch": 0,
      "class": "HotspotPanoramaOverlayMap",
      "image": {
       "levels": [
        {
         "width": 16,
         "height": 16,
         "url": "media/media_60223D73_6D7D_768C_41D0_39C2DC3B8214_HS_10_0_0_map.gif",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    ],
    "class": "HotspotPanoramaOverlay",
    "useHandCursor": true
   },
   {
    "showDuration": 500,
    "popupMaxHeight": "95%",
    "pitch": 0,
    "popupMaxWidth": "95%",
    "rotationZ": 0,
    "rotationY": 0,
    "yaw": 0,
    "playbackPositions": [
     {
      "yaw": -134.38,
      "timestamp": 0,
      "hfov": 9.58,
      "pitch": 11.41,
      "class": "PopupPanoramaOverlayPlaybackPosition"
     }
    ],
    "class": "PopupPanoramaOverlay",
    "id": "popup_64F6280E_7549_0E3E_41B6_9B3CEF00253D",
    "hideEasing": "cubic_out",
    "showEasing": "cubic_in",
    "popupDistance": 100,
    "hfov": 7.75,
    "image": {
     "levels": [
      {
       "width": 620,
       "height": 800,
       "url": "media/popup_64F6280E_7549_0E3E_41B6_9B3CEF00253D_0_0.png",
       "class": "ImageResourceLevel"
      },
      {
       "width": 396,
       "height": 512,
       "url": "media/popup_64F6280E_7549_0E3E_41B6_9B3CEF00253D_0_1.png",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "rotationX": 0,
    "hideDuration": 500
   },
   {
    "showDuration": 500,
    "popupMaxHeight": "95%",
    "pitch": 0,
    "popupMaxWidth": "95%",
    "rotationZ": 0,
    "rotationY": 0,
    "yaw": 0,
    "playbackPositions": [
     {
      "yaw": -158.4,
      "timestamp": 0,
      "hfov": 9.41,
      "pitch": -15.67,
      "class": "PopupPanoramaOverlayPlaybackPosition"
     }
    ],
    "class": "PopupPanoramaOverlay",
    "id": "popup_64A91B8E_754B_023E_41C8_914836AF004D",
    "hideEasing": "cubic_out",
    "showEasing": "cubic_in",
    "popupDistance": 100,
    "hfov": 7.75,
    "image": {
     "levels": [
      {
       "width": 620,
       "height": 800,
       "url": "media/popup_64A91B8E_754B_023E_41C8_914836AF004D_0_0.png",
       "class": "ImageResourceLevel"
      },
      {
       "width": 396,
       "height": 512,
       "url": "media/popup_64A91B8E_754B_023E_41C8_914836AF004D_0_1.png",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "rotationX": 0,
    "hideDuration": 500
   },
   {
    "showDuration": 500,
    "popupMaxHeight": "95%",
    "pitch": 0,
    "popupMaxWidth": "95%",
    "rotationZ": 0,
    "rotationY": 0,
    "yaw": 0,
    "playbackPositions": [
     {
      "yaw": -111.4,
      "timestamp": 0,
      "hfov": 9.43,
      "pitch": -15.36,
      "class": "PopupPanoramaOverlayPlaybackPosition"
     }
    ],
    "class": "PopupPanoramaOverlay",
    "id": "popup_649C7821_754B_0E62_41D3_83F9B7D6B8C9",
    "hideEasing": "cubic_out",
    "showEasing": "cubic_in",
    "popupDistance": 100,
    "hfov": 7.75,
    "image": {
     "levels": [
      {
       "width": 620,
       "height": 800,
       "url": "media/popup_649C7821_754B_0E62_41D3_83F9B7D6B8C9_0_0.png",
       "class": "ImageResourceLevel"
      },
      {
       "width": 396,
       "height": 512,
       "url": "media/popup_649C7821_754B_0E62_41D3_83F9B7D6B8C9_0_1.png",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "rotationX": 0,
    "hideDuration": 500
   }
  ],
  "partial": false,
  "pitch": 0,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "hfovMin": 107,
     "class": "Video360",
     "video": [
      {
       "posterURL": "media/media_7DC4D66A_6DBF_329C_41D2_E51D8DE0B3BA_poster.jpg",
       "width": 3840,
       "type": "video/mp4",
       "url": "media/media_7DC4D66A_6DBF_329C_41D2_E51D8DE0B3BA.mp4",
       "bitrate": 15552,
       "height": 2160,
       "framerate": 25,
       "class": "Video360Resource"
      },
      {
       "posterURL": "media/media_7DC4D66A_6DBF_329C_41D2_E51D8DE0B3BA_poster.jpg",
       "width": 3168,
       "type": "video/mp4",
       "url": "media/media_7DC4D66A_6DBF_329C_41D2_E51D8DE0B3BA_ios.mp4",
       "bitrate": 10585,
       "height": 1782,
       "framerate": 25,
       "class": "Video360Resource"
      }
     ],
     "id": "media_7DC4D66A_6DBF_329C_41D2_E51D8DE0B3BA",
     "loop": true,
     "overlays": [
      {
       "data": {
        "label": "Image"
       },
       "id": "overlay_7FE455F6_6DA7_7174_41BC_5B430E7E2162",
       "areas": [
        {
         "mapColor": "image",
         "class": "HotspotPanoramaOverlayArea",
         "click": "this.startPanoramaWithCamera(this.media_60223D73_6D7D_768C_41D0_39C2DC3B8214, this.camera_540E6560_75C9_06E2_41D7_E159790C0EC6); this.mainPlayList.set('selectedIndex', 0); this.MainViewerPanoramaPlayer.play()"
        }
       ],
       "items": [
        {
         "pitch": 0,
         "playbackPositions": [
          {
           "timestamp": 0,
           "hfov": 9.37,
           "pitch": -1.32,
           "yaw": -59.11,
           "opacity": 1,
           "class": "PanoramaOverlayPlaybackPosition",
           "roll": 0
          }
         ],
         "image": {
          "rowCount": 6,
          "colCount": 4,
          "levels": [
           {
            "width": 400,
            "height": 360,
            "url": "media/media_7DC4D66A_6DBF_329C_41D2_E51D8DE0B3BA_HS_0_0.png",
            "class": "ImageResourceLevel"
           }
          ],
          "frameCount": 24,
          "class": "AnimatedImageResource",
          "frameDuration": 40
         },
         "class": "HotspotPanoramaOverlayImage",
         "yaw": 0,
         "distance": 100
        }
       ],
       "enabledInCardboard": true,
       "rollOverDisplay": false,
       "maps": [],
       "class": "HotspotPanoramaOverlay",
       "useHandCursor": true
      },
      {
       "data": {
        "label": "Image"
       },
       "id": "overlay_784AFFA7_6DEF_D194_41D6_F1739B38B0C0",
       "areas": [
        {
         "mapColor": "image",
         "class": "HotspotPanoramaOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 12)"
        }
       ],
       "items": [
        {
         "pitch": 0,
         "playbackPositions": [
          {
           "timestamp": 0,
           "hfov": 9.29,
           "pitch": -7.59,
           "yaw": -176.1,
           "opacity": 1,
           "class": "PanoramaOverlayPlaybackPosition",
           "roll": 0
          }
         ],
         "image": {
          "rowCount": 6,
          "colCount": 4,
          "levels": [
           {
            "width": 400,
            "height": 360,
            "url": "media/media_7DC4D66A_6DBF_329C_41D2_E51D8DE0B3BA_HS_1_0.png",
            "class": "ImageResourceLevel"
           }
          ],
          "frameCount": 24,
          "class": "AnimatedImageResource",
          "frameDuration": 41
         },
         "class": "HotspotPanoramaOverlayImage",
         "yaw": 0,
         "distance": 100
        }
       ],
       "enabledInCardboard": true,
       "rollOverDisplay": false,
       "maps": [],
       "class": "HotspotPanoramaOverlay",
       "useHandCursor": true
      },
      {
       "angle": 0,
       "id": "media_7DC4D66A_6DBF_329C_41D2_E51D8DE0B3BA_tcap0",
       "image": {
        "levels": [
         {
          "width": 850,
          "height": 850,
          "url": "media/media_60223D73_6D7D_768C_41D0_39C2DC3B8214_tcap0.png",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       },
       "class": "TripodCapPanoramaOverlay",
       "distance": 100,
       "hfov": 45,
       "rotate": false,
       "inertia": false
      },
      {
       "data": {
        "label": "Image"
       },
       "id": "overlay_64D2811C_754B_1E22_41D5_95208B5AFBB8",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotPanoramaOverlayArea",
         "click": "this.showPopupPanoramaOverlay(this.popup_64B41C73_7549_06E6_41DA_DD21805F6B3B, {'iconHeight':20,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconHeight':20,'iconLineWidth':5,'paddingTop':5,'pressedBorderColor':'#000000','paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'rollOverIconLineWidth':5,'borderColor':'#000000','pressedIconHeight':20,'rollOverBorderSize':0,'pressedIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'pressedIconColor':'#888888','borderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0}, null, null, null, null, this.audio_6F143763_753B_02E6_41D4_2478BB7D55B8, false)"
        },
        {
         "class": "HotspotPanoramaOverlayArea"
        }
       ],
       "items": [
        {
         "pitch": 0,
         "playbackPositions": [
          {
           "timestamp": 0,
           "hfov": 9.49,
           "pitch": 13.89,
           "yaw": -176.85,
           "opacity": 1,
           "class": "PanoramaOverlayPlaybackPosition",
           "roll": 0
          }
         ],
         "image": {
          "levels": [
           {
            "width": 179,
            "height": 179,
            "url": "media/media_7DC4D66A_6DBF_329C_41D2_E51D8DE0B3BA_HS_2_0.png",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         },
         "class": "HotspotPanoramaOverlayImage",
         "yaw": 0,
         "distance": 50
        }
       ],
       "enabledInCardboard": true,
       "rollOverDisplay": false,
       "maps": [
        {
         "yaw": 0,
         "playbackPositions": [
          {
           "timestamp": 0,
           "hfov": 9.49,
           "pitch": 13.89,
           "yaw": -176.85,
           "opacity": 1,
           "class": "PanoramaOverlayPlaybackPosition",
           "roll": 0
          }
         ],
         "pitch": 0,
         "class": "HotspotPanoramaOverlayMap",
         "image": {
          "levels": [
           {
            "width": 16,
            "height": 16,
            "url": "media/media_7DC4D66A_6DBF_329C_41D2_E51D8DE0B3BA_HS_2_0_0_map.gif",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         }
        }
       ],
       "class": "HotspotPanoramaOverlay",
       "useHandCursor": true
      },
      {
       "data": {
        "label": "Image"
       },
       "id": "overlay_64932407_754B_062E_41C8_56A420620F1C",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotPanoramaOverlayArea",
         "click": "this.showPopupPanoramaOverlay(this.popup_67415BA4_7549_0262_41C7_B907AD2E41A1, {'iconHeight':20,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconHeight':20,'iconLineWidth':5,'paddingTop':5,'pressedBorderColor':'#000000','paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'rollOverIconLineWidth':5,'borderColor':'#000000','pressedIconHeight':20,'rollOverBorderSize':0,'pressedIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'pressedIconColor':'#888888','borderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0}, null, null, null, null, this.audio_6E40519A_753B_1E26_41BD_B272A7DDE9D8, false)"
        },
        {
         "class": "HotspotPanoramaOverlayArea"
        },
        {
         "class": "HotspotPanoramaOverlayArea"
        }
       ],
       "items": [
        {
         "pitch": 0,
         "playbackPositions": [
          {
           "timestamp": 0,
           "hfov": 9.68,
           "pitch": -7.93,
           "yaw": -144.3,
           "opacity": 1,
           "class": "PanoramaOverlayPlaybackPosition",
           "roll": 0
          }
         ],
         "image": {
          "levels": [
           {
            "width": 179,
            "height": 179,
            "url": "media/media_7DC4D66A_6DBF_329C_41D2_E51D8DE0B3BA_HS_3_0.png",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         },
         "class": "HotspotPanoramaOverlayImage",
         "yaw": 0,
         "distance": 50
        }
       ],
       "enabledInCardboard": true,
       "rollOverDisplay": false,
       "maps": [
        {
         "yaw": 0,
         "playbackPositions": [
          {
           "timestamp": 0,
           "hfov": 9.68,
           "pitch": -7.93,
           "yaw": -144.3,
           "opacity": 1,
           "class": "PanoramaOverlayPlaybackPosition",
           "roll": 0
          }
         ],
         "pitch": 0,
         "class": "HotspotPanoramaOverlayMap",
         "image": {
          "levels": [
           {
            "width": 16,
            "height": 16,
            "url": "media/media_7DC4D66A_6DBF_329C_41D2_E51D8DE0B3BA_HS_3_0_0_map.gif",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         }
        }
       ],
       "class": "HotspotPanoramaOverlay",
       "useHandCursor": true
      },
      {
       "data": {
        "label": "Image"
       },
       "id": "overlay_6766F422_754B_0666_41CD_BA552C7DFE8F",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotPanoramaOverlayArea",
         "click": "this.showPopupPanoramaOverlay(this.popup_64B4C3F1_7549_01E2_41C0_BEA301BD1D1C, {'iconHeight':20,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconHeight':20,'iconLineWidth':5,'paddingTop':5,'pressedBorderColor':'#000000','paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'rollOverIconLineWidth':5,'borderColor':'#000000','pressedIconHeight':20,'rollOverBorderSize':0,'pressedIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'pressedIconColor':'#888888','borderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0}, null, null, null, null, this.audio_6FC329A8_753B_0E62_41C5_A28FC5729321, false)"
        },
        {
         "class": "HotspotPanoramaOverlayArea"
        },
        {
         "class": "HotspotPanoramaOverlayArea"
        }
       ],
       "items": [
        {
         "pitch": 0,
         "playbackPositions": [
          {
           "timestamp": 0,
           "hfov": 8.55,
           "pitch": -28.98,
           "yaw": -171.8,
           "opacity": 1,
           "class": "PanoramaOverlayPlaybackPosition",
           "roll": 0
          }
         ],
         "image": {
          "levels": [
           {
            "width": 179,
            "height": 179,
            "url": "media/media_7DC4D66A_6DBF_329C_41D2_E51D8DE0B3BA_HS_4_0.png",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         },
         "class": "HotspotPanoramaOverlayImage",
         "yaw": 0,
         "distance": 50
        }
       ],
       "enabledInCardboard": true,
       "rollOverDisplay": false,
       "maps": [
        {
         "yaw": 0,
         "playbackPositions": [
          {
           "timestamp": 0,
           "hfov": 8.55,
           "pitch": -28.98,
           "yaw": -171.8,
           "opacity": 1,
           "class": "PanoramaOverlayPlaybackPosition",
           "roll": 0
          }
         ],
         "pitch": 0,
         "class": "HotspotPanoramaOverlayMap",
         "image": {
          "levels": [
           {
            "width": 16,
            "height": 16,
            "url": "media/media_7DC4D66A_6DBF_329C_41D2_E51D8DE0B3BA_HS_4_0_0_map.gif",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         }
        }
       ],
       "class": "HotspotPanoramaOverlay",
       "useHandCursor": true
      },
      {
       "data": {
        "label": "Image"
       },
       "id": "overlay_67F1A2EB_7549_03E6_41CA_0200B2DE27FF",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotPanoramaOverlayArea",
         "click": "this.showPopupPanoramaOverlay(this.popup_64BE23FF_7549_01DE_41CB_8AE3914F91D6, {'iconHeight':20,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconHeight':20,'iconLineWidth':5,'paddingTop':5,'pressedBorderColor':'#000000','paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'rollOverIconLineWidth':5,'borderColor':'#000000','pressedIconHeight':20,'rollOverBorderSize':0,'pressedIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'pressedIconColor':'#888888','borderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0}, null, null, null, null, this.audio_6F8BCCE5_7539_07E2_41D5_3AE0A92088B9, false)"
        },
        {
         "class": "HotspotPanoramaOverlayArea"
        },
        {
         "class": "HotspotPanoramaOverlayArea"
        }
       ],
       "items": [
        {
         "pitch": 0,
         "playbackPositions": [
          {
           "timestamp": 0,
           "hfov": 9.69,
           "pitch": -7.62,
           "yaw": 150.07,
           "opacity": 1,
           "class": "PanoramaOverlayPlaybackPosition",
           "roll": 0
          }
         ],
         "image": {
          "levels": [
           {
            "width": 179,
            "height": 179,
            "url": "media/media_7DC4D66A_6DBF_329C_41D2_E51D8DE0B3BA_HS_5_0.png",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         },
         "class": "HotspotPanoramaOverlayImage",
         "yaw": 0,
         "distance": 50
        }
       ],
       "enabledInCardboard": true,
       "rollOverDisplay": false,
       "maps": [
        {
         "yaw": 0,
         "playbackPositions": [
          {
           "timestamp": 0,
           "hfov": 9.69,
           "pitch": -7.62,
           "yaw": 150.07,
           "opacity": 1,
           "class": "PanoramaOverlayPlaybackPosition",
           "roll": 0
          }
         ],
         "pitch": 0,
         "class": "HotspotPanoramaOverlayMap",
         "image": {
          "levels": [
           {
            "width": 16,
            "height": 16,
            "url": "media/media_7DC4D66A_6DBF_329C_41D2_E51D8DE0B3BA_HS_5_0_0_map.gif",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         }
        }
       ],
       "class": "HotspotPanoramaOverlay",
       "useHandCursor": true
      },
      {
       "showDuration": 500,
       "popupMaxHeight": "95%",
       "pitch": 0,
       "popupMaxWidth": "95%",
       "rotationZ": 0,
       "rotationY": 0,
       "yaw": 0,
       "playbackPositions": [
        {
         "yaw": -171.8,
         "timestamp": 0,
         "hfov": 8.55,
         "pitch": -28.98,
         "class": "PopupPanoramaOverlayPlaybackPosition"
        }
       ],
       "class": "PopupPanoramaOverlay",
       "id": "popup_64B4C3F1_7549_01E2_41C0_BEA301BD1D1C",
       "hideEasing": "cubic_out",
       "showEasing": "cubic_in",
       "popupDistance": 100,
       "hfov": 7.75,
       "image": {
        "levels": [
         {
          "width": 620,
          "height": 800,
          "url": "media/popup_64B4C3F1_7549_01E2_41C0_BEA301BD1D1C_0_0.png",
          "class": "ImageResourceLevel"
         },
         {
          "width": 396,
          "height": 512,
          "url": "media/popup_64B4C3F1_7549_01E2_41C0_BEA301BD1D1C_0_1.png",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       },
       "rotationX": 0,
       "hideDuration": 500
      },
      {
       "showDuration": 500,
       "popupMaxHeight": "95%",
       "pitch": 0,
       "popupMaxWidth": "95%",
       "rotationZ": 0,
       "rotationY": 0,
       "yaw": 0,
       "playbackPositions": [
        {
         "yaw": -176.85,
         "timestamp": 0,
         "hfov": 9.49,
         "pitch": 13.89,
         "class": "PopupPanoramaOverlayPlaybackPosition"
        }
       ],
       "class": "PopupPanoramaOverlay",
       "id": "popup_64B41C73_7549_06E6_41DA_DD21805F6B3B",
       "hideEasing": "cubic_out",
       "showEasing": "cubic_in",
       "popupDistance": 100,
       "hfov": 7.75,
       "image": {
        "levels": [
         {
          "width": 620,
          "height": 800,
          "url": "media/popup_64B41C73_7549_06E6_41DA_DD21805F6B3B_0_0.png",
          "class": "ImageResourceLevel"
         },
         {
          "width": 396,
          "height": 512,
          "url": "media/popup_64B41C73_7549_06E6_41DA_DD21805F6B3B_0_1.png",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       },
       "rotationX": 0,
       "hideDuration": 500
      },
      {
       "showDuration": 500,
       "popupMaxHeight": "95%",
       "pitch": 0,
       "popupMaxWidth": "95%",
       "rotationZ": 0,
       "rotationY": 0,
       "yaw": 0,
       "playbackPositions": [
        {
         "yaw": 150.07,
         "timestamp": 0,
         "hfov": 9.69,
         "pitch": -7.62,
         "class": "PopupPanoramaOverlayPlaybackPosition"
        }
       ],
       "class": "PopupPanoramaOverlay",
       "id": "popup_64BE23FF_7549_01DE_41CB_8AE3914F91D6",
       "hideEasing": "cubic_out",
       "showEasing": "cubic_in",
       "popupDistance": 100,
       "hfov": 7.75,
       "image": {
        "levels": [
         {
          "width": 620,
          "height": 800,
          "url": "media/popup_64BE23FF_7549_01DE_41CB_8AE3914F91D6_0_0.png",
          "class": "ImageResourceLevel"
         },
         {
          "width": 396,
          "height": 512,
          "url": "media/popup_64BE23FF_7549_01DE_41CB_8AE3914F91D6_0_1.png",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       },
       "rotationX": 0,
       "hideDuration": 500
      },
      {
       "showDuration": 500,
       "popupMaxHeight": "95%",
       "pitch": 0,
       "popupMaxWidth": "95%",
       "rotationZ": 0,
       "rotationY": 0,
       "yaw": 0,
       "playbackPositions": [
        {
         "yaw": -144.3,
         "timestamp": 0,
         "hfov": 9.68,
         "pitch": -7.93,
         "class": "PopupPanoramaOverlayPlaybackPosition"
        }
       ],
       "class": "PopupPanoramaOverlay",
       "id": "popup_67415BA4_7549_0262_41C7_B907AD2E41A1",
       "hideEasing": "cubic_out",
       "showEasing": "cubic_in",
       "popupDistance": 100,
       "hfov": 7.75,
       "image": {
        "levels": [
         {
          "width": 620,
          "height": 800,
          "url": "media/popup_67415BA4_7549_0262_41C7_B907AD2E41A1_0_0.png",
          "class": "ImageResourceLevel"
         },
         {
          "width": 396,
          "height": 512,
          "url": "media/popup_67415BA4_7549_0262_41C7_B907AD2E41A1_0_1.png",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       },
       "rotationX": 0,
       "hideDuration": 500
      }
     ],
     "partial": false,
     "pitch": 0,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "frames": [
         {
          "sphere": {
           "levels": [
            {
             "width": 5640,
             "height": 2820,
             "url": "media/panorama_2268A1BF_2C7D_FA1C_41C4_DE30535B3AEB_hq.jpeg",
             "class": "ImageResourceLevel"
            },
            {
             "width": 2048,
             "height": 1024,
             "url": "media/panorama_2268A1BF_2C7D_FA1C_41C4_DE30535B3AEB_lq.jpeg",
             "class": "ImageResourceLevel",
             "tags": "preload"
            },
            {
             "width": 4002,
             "height": 2001,
             "url": "media/panorama_2268A1BF_2C7D_FA1C_41C4_DE30535B3AEB.jpeg",
             "class": "ImageResourceLevel"
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_2268A1BF_2C7D_FA1C_41C4_DE30535B3AEB_t.jpg",
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "data": {
             "label": "Image"
            },
            "id": "overlay_2268B1BF_2C7D_FA1C_4194_AA3D9EA5ACBA",
            "areas": [
             {
              "mapColor": "image",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.media_7DC4D66A_6DBF_329C_41D2_E51D8DE0B3BA, this.camera_54EB3549_75C9_0622_41D7_9638E96A72DE); this.mainPlayList.set('selectedIndex', 6); this.MainViewerPanoramaPlayer.play()"
             }
            ],
            "items": [
             {
              "pitch": -11.45,
              "image": {
               "rowCount": 6,
               "colCount": 4,
               "levels": [
                {
                 "width": 400,
                 "height": 360,
                 "url": "media/panorama_2268A1BF_2C7D_FA1C_41C4_DE30535B3AEB_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "frameCount": 24,
               "class": "AnimatedImageResource",
               "frameDuration": 33
              },
              "yaw": -9.34,
              "hfov": 6.13,
              "class": "HotspotPanoramaOverlayImage",
              "distance": 100
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "maps": [],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true
           },
           {
            "angle": 0,
            "id": "panorama_226881BF_2C7D_FA1C_4175_97ECB8F86B8D",
            "image": {
             "levels": [
              {
               "width": 850,
               "height": 850,
               "url": "media/panorama_226881BF_2C7D_FA1C_4175_97ECB8F86B8D.png",
               "class": "ImageResourceLevel"
              }
             ],
             "class": "ImageResource"
            },
            "class": "TripodCapPanoramaOverlay",
            "distance": 100,
            "hfov": 45,
            "rotate": false,
            "inertia": false
           },
           {
            "id": "overlay_226891BF_2C7D_FA1C_41C5_692CFD6B654F",
            "bleaching": 0.51,
            "yaw": 161.61,
            "bleachingDistance": 0.21,
            "pitch": 71.96,
            "class": "LensFlarePanoramaOverlay"
           },
           {
            "data": {
             "label": "Image"
            },
            "id": "overlay_226941BF_2C7D_FA1C_41B7_80EA7210DDD0",
            "areas": [
             {
              "mapColor": "image",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.showPopupPanoramaOverlay(this.popup_62C10426_7579_066E_418E_B3B25CEC8DC9, {'iconHeight':20,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconHeight':20,'iconLineWidth':5,'paddingTop':5,'pressedBorderColor':'#000000','paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'rollOverIconLineWidth':5,'borderColor':'#000000','pressedIconHeight':20,'rollOverBorderSize':0,'pressedIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'pressedIconColor':'#888888','borderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0}, null, null, null, null, this.audio_6EB91B7C_753F_02E2_41B2_A72404485268, false)"
             }
            ],
            "items": [
             {
              "pitch": -16.04,
              "image": {
               "levels": [
                {
                 "width": 115,
                 "height": 116,
                 "url": "media/panorama_2268A1BF_2C7D_FA1C_41C4_DE30535B3AEB_0_HS_10_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -77.74,
              "hfov": 7.05,
              "class": "HotspotPanoramaOverlayImage",
              "distance": 100
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "maps": [],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true
           },
           {
            "data": {
             "label": "Image"
            },
            "id": "overlay_226921BF_2C7D_FA1C_41C2_00CB00175E85",
            "areas": [
             {
              "mapColor": "image",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.showPopupPanoramaOverlay(this.popup_6365C75F_7579_02DE_41D8_2D39FC086C81, {'iconHeight':20,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconHeight':20,'iconLineWidth':5,'paddingTop':5,'pressedBorderColor':'#000000','paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'rollOverIconLineWidth':5,'borderColor':'#000000','pressedIconHeight':20,'rollOverBorderSize':0,'pressedIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'pressedIconColor':'#888888','borderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0}, null, null, null, null, this.audio_6949AFB6_753F_026E_41D3_6BFA75B635F8, false)"
             }
            ],
            "items": [
             {
              "pitch": -32.95,
              "image": {
               "levels": [
                {
                 "width": 115,
                 "height": 116,
                 "url": "media/panorama_2268A1BF_2C7D_FA1C_41C4_DE30535B3AEB_0_HS_12_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -155.5,
              "hfov": 6.16,
              "class": "HotspotPanoramaOverlayImage",
              "distance": 100
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "maps": [],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true
           },
           {
            "data": {
             "label": "Image"
            },
            "id": "overlay_226931BF_2C7D_FA1C_41C1_9F6E82E3924B",
            "areas": [
             {
              "mapColor": "image",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.showPopupPanoramaOverlay(this.popup_632E33D0_757B_0222_41CF_CF662511AE89, {'iconHeight':20,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconHeight':20,'iconLineWidth':5,'paddingTop':5,'pressedBorderColor':'#000000','paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'rollOverIconLineWidth':5,'borderColor':'#000000','pressedIconHeight':20,'rollOverBorderSize':0,'pressedIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'pressedIconColor':'#888888','borderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0}, null, null, null, null, this.audio_6841120B_7539_0226_41D1_101BFA33561B, false)"
             }
            ],
            "items": [
             {
              "pitch": -11.68,
              "image": {
               "levels": [
                {
                 "width": 115,
                 "height": 116,
                 "url": "media/panorama_2268A1BF_2C7D_FA1C_41C4_DE30535B3AEB_0_HS_13_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 63.64,
              "hfov": 7.19,
              "class": "HotspotPanoramaOverlayImage",
              "distance": 100
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "maps": [],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true
           },
           {
            "data": {
             "label": "Image"
            },
            "id": "overlay_226911BF_2C7D_FA1C_41B3_367EB712DA9F",
            "areas": [
             {
              "mapColor": "image",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.showPopupPanoramaOverlay(this.popup_624E56DA_757B_0226_41C1_190CD5E87C41, {'iconHeight':20,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconHeight':20,'iconLineWidth':5,'paddingTop':5,'pressedBorderColor':'#000000','paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'rollOverIconLineWidth':5,'borderColor':'#000000','pressedIconHeight':20,'rollOverBorderSize':0,'pressedIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'pressedIconColor':'#888888','borderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0}, null, null, null, null, this.audio_6840A9D8_7539_0E22_41B8_705C7CB63BDD, false)"
             }
            ],
            "items": [
             {
              "pitch": -23.36,
              "image": {
               "levels": [
                {
                 "width": 115,
                 "height": 116,
                 "url": "media/panorama_2268A1BF_2C7D_FA1C_41C4_DE30535B3AEB_0_HS_15_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 140.86,
              "hfov": 6.74,
              "class": "HotspotPanoramaOverlayImage",
              "distance": 100
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "maps": [],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true
           },
           {
            "data": {
             "label": "Image"
            },
            "id": "overlay_2269E1BF_2C7D_FA1C_41B7_F93F97665C20",
            "areas": [
             {
              "mapColor": "image",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.showPopupPanoramaOverlay(this.popup_63A5E408_757B_0622_41D3_0163780D94A8, {'iconHeight':20,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconHeight':20,'iconLineWidth':5,'paddingTop':5,'pressedBorderColor':'#000000','paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'rollOverIconLineWidth':5,'borderColor':'#000000','pressedIconHeight':20,'rollOverBorderSize':0,'pressedIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'pressedIconColor':'#888888','borderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0}, null, null, null, null, this.audio_68606AF5_7539_03E2_41C1_AF10F0C3AEEA, false)"
             }
            ],
            "items": [
             {
              "pitch": -5.4,
              "image": {
               "levels": [
                {
                 "width": 115,
                 "height": 116,
                 "url": "media/panorama_2268A1BF_2C7D_FA1C_41C4_DE30535B3AEB_0_HS_16_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 140.7,
              "hfov": 7.31,
              "class": "HotspotPanoramaOverlayImage",
              "distance": 100
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "maps": [],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true
           },
           {
            "data": {
             "label": "Image"
            },
            "id": "overlay_2269F1BF_2C7D_FA1C_41AC_625A2731C8F6",
            "areas": [
             {
              "mapColor": "image",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.showPopupPanoramaOverlay(this.popup_63637A86_757B_022E_41D2_393CEE140FCE, {'iconHeight':20,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconHeight':20,'iconLineWidth':5,'paddingTop':5,'pressedBorderColor':'#000000','paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'rollOverIconLineWidth':5,'borderColor':'#000000','pressedIconHeight':20,'rollOverBorderSize':0,'pressedIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'pressedIconColor':'#888888','borderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0}, null, null, null, null, this.audio_6828B583_7539_0626_41CA_9058C0062757, false)"
             }
            ],
            "items": [
             {
              "pitch": 0.18,
              "image": {
               "levels": [
                {
                 "width": 115,
                 "height": 116,
                 "url": "media/panorama_2268A1BF_2C7D_FA1C_41C4_DE30535B3AEB_0_HS_17_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 176.09,
              "hfov": 7.34,
              "class": "HotspotPanoramaOverlayImage",
              "distance": 100
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "maps": [],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true
           },
           {
            "data": {
             "label": "Image"
            },
            "id": "overlay_43CFB417_50B3_01F7_41D3_D2FF8D97B4CB",
            "areas": [
             {
              "mapColor": "image",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.showPopupPanoramaOverlay(this.popup_6261C74A_7579_0226_41B1_C7B693A522DC, {'iconHeight':20,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconHeight':20,'iconLineWidth':5,'paddingTop':5,'pressedBorderColor':'#000000','paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'rollOverIconLineWidth':5,'borderColor':'#000000','pressedIconHeight':20,'rollOverBorderSize':0,'pressedIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'pressedIconColor':'#888888','borderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0}, null, null, null, null, this.audio_6949AFB6_753F_026E_41D3_6BFA75B635F8, false)"
             },
             {
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "pitch": -33.64,
              "image": {
               "levels": [
                {
                 "width": 115,
                 "height": 116,
                 "url": "media/panorama_2268A1BF_2C7D_FA1C_41C4_DE30535B3AEB_0_HS_26_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 68.7,
              "hfov": 6.11,
              "class": "HotspotPanoramaOverlayImage",
              "distance": 100
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "maps": [],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true
           },
           {
            "data": {
             "label": "Image"
            },
            "id": "overlay_429CED0C_50BF_03D9_41C9_C1FFC0981AE2",
            "areas": [
             {
              "mapColor": "image",
              "toolTip": "The Chief Justice on the role of the courts and judges",
              "displayTooltipInTouchScreens": true,
              "class": "HotspotPanoramaOverlayArea",
              "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_428F2CF5_50BF_024B_41C7_6850A97074BD, {'iconHeight':20,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconHeight':20,'iconLineWidth':5,'paddingTop':5,'pressedBorderColor':'#000000','paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'rollOverIconLineWidth':5,'borderColor':'#000000','pressedIconHeight':20,'rollOverBorderSize':0,'pressedIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'pressedIconColor':'#888888','borderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0}) } else { this.showPopupMedia(this.window_788D9F81_7537_0222_41DB_F039DA430E77, this.video_77836E3E_6F9B_32F4_41DA_73A34C473700, this.PlayList_7BFC4D21_7539_0662_41D0_CE219889DF10, '70%', '70%', true, true) }"
             },
             {
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "pitch": 8.63,
              "image": {
               "levels": [
                {
                 "width": 97,
                 "height": 102,
                 "url": "media/panorama_2268A1BF_2C7D_FA1C_41C4_DE30535B3AEB_0_HS_27_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 140.99,
              "hfov": 6.13,
              "class": "HotspotPanoramaOverlayImage",
              "distance": 100
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "maps": [],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true
           },
           {
            "data": {
             "label": "Image"
            },
            "id": "overlay_43FC76D4_50B1_0E49_41A7_D087B97B4EBC",
            "areas": [
             {
              "mapColor": "image",
              "toolTip": "Threshold of the Court",
              "displayTooltipInTouchScreens": true,
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.showPopupPanoramaOverlay(this.popup_63C74390_757B_0222_41D3_58A076361D17, {'iconHeight':20,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconHeight':20,'iconLineWidth':5,'paddingTop':5,'pressedBorderColor':'#000000','paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'rollOverIconLineWidth':5,'borderColor':'#000000','pressedIconHeight':20,'rollOverBorderSize':0,'pressedIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'pressedIconColor':'#888888','borderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0}, null, null, null, null, this.audio_6815DAA5_7539_0262_41D8_7EB9D202CE02, false)"
             },
             {
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "pitch": -1.04,
              "image": {
               "levels": [
                {
                 "width": 115,
                 "height": 116,
                 "url": "media/panorama_2268A1BF_2C7D_FA1C_41C4_DE30535B3AEB_0_HS_28_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -9.06,
              "hfov": 7.34,
              "class": "HotspotPanoramaOverlayImage",
              "distance": 0.25
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "maps": [],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true
           },
           {
            "showDuration": 500,
            "popupMaxHeight": "70%",
            "pitch": 8.63,
            "autoplay": true,
            "hideDuration": 500,
            "yaw": 140.99,
            "rotationY": 0,
            "class": "PopupPanoramaOverlay",
            "video": {
             "width": 1920,
             "height": 1080,
             "class": "VideoResource",
             "mp4Url": "media/video_77836E3E_6F9B_32F4_41DA_73A34C473700.mp4"
            },
            "rotationZ": 0,
            "hfov": 6.13,
            "loop": false,
            "hideEasing": "cubic_out",
            "showEasing": "cubic_in",
            "popupDistance": 41.23,
            "id": "popup_428F2CF5_50BF_024B_41C7_6850A97074BD",
            "rotationX": 0,
            "popupMaxWidth": "70%"
           },
           {
            "showDuration": 500,
            "popupMaxHeight": "95%",
            "pitch": -33.64,
            "popupMaxWidth": "95%",
            "rotationZ": 0,
            "yaw": 68.7,
            "rotationY": 0,
            "class": "PopupPanoramaOverlay",
            "hfov": 4.78,
            "hideEasing": "cubic_out",
            "showEasing": "cubic_in",
            "popupDistance": 100,
            "id": "popup_6261C74A_7579_0226_41B1_C7B693A522DC",
            "image": {
             "levels": [
              {
               "width": 620,
               "height": 800,
               "url": "media/popup_6261C74A_7579_0226_41B1_C7B693A522DC_0_0.png",
               "class": "ImageResourceLevel"
              },
              {
               "width": 396,
               "height": 512,
               "url": "media/popup_6261C74A_7579_0226_41B1_C7B693A522DC_0_1.png",
               "class": "ImageResourceLevel"
              }
             ],
             "class": "ImageResource"
            },
            "rotationX": 0,
            "hideDuration": 500
           },
           {
            "showDuration": 500,
            "popupMaxHeight": "95%",
            "pitch": -32.95,
            "popupMaxWidth": "95%",
            "rotationZ": 0,
            "yaw": -155.5,
            "rotationY": 0,
            "class": "PopupPanoramaOverlay",
            "hfov": 4.82,
            "hideEasing": "cubic_out",
            "showEasing": "cubic_in",
            "popupDistance": 100,
            "id": "popup_6365C75F_7579_02DE_41D8_2D39FC086C81",
            "image": {
             "levels": [
              {
               "width": 620,
               "height": 800,
               "url": "media/popup_6365C75F_7579_02DE_41D8_2D39FC086C81_0_0.png",
               "class": "ImageResourceLevel"
              },
              {
               "width": 396,
               "height": 512,
               "url": "media/popup_6365C75F_7579_02DE_41D8_2D39FC086C81_0_1.png",
               "class": "ImageResourceLevel"
              }
             ],
             "class": "ImageResource"
            },
            "rotationX": 0,
            "hideDuration": 500
           },
           {
            "showDuration": 500,
            "popupMaxHeight": "95%",
            "pitch": -16.04,
            "popupMaxWidth": "95%",
            "rotationZ": 0,
            "yaw": -77.74,
            "rotationY": 0,
            "class": "PopupPanoramaOverlay",
            "hfov": 5.52,
            "hideEasing": "cubic_out",
            "showEasing": "cubic_in",
            "popupDistance": 100,
            "id": "popup_62C10426_7579_066E_418E_B3B25CEC8DC9",
            "image": {
             "levels": [
              {
               "width": 620,
               "height": 800,
               "url": "media/popup_62C10426_7579_066E_418E_B3B25CEC8DC9_0_0.png",
               "class": "ImageResourceLevel"
              },
              {
               "width": 396,
               "height": 512,
               "url": "media/popup_62C10426_7579_066E_418E_B3B25CEC8DC9_0_1.png",
               "class": "ImageResourceLevel"
              }
             ],
             "class": "ImageResource"
            },
            "rotationX": 0,
            "hideDuration": 500
           },
           {
            "showDuration": 500,
            "popupMaxHeight": "95%",
            "pitch": -1.04,
            "popupMaxWidth": "95%",
            "rotationZ": 0,
            "yaw": -9.06,
            "rotationY": 0,
            "class": "PopupPanoramaOverlay",
            "hfov": 5.74,
            "hideEasing": "cubic_out",
            "showEasing": "cubic_in",
            "popupDistance": 100,
            "id": "popup_63C74390_757B_0222_41D3_58A076361D17",
            "image": {
             "levels": [
              {
               "width": 620,
               "height": 800,
               "url": "media/popup_63C74390_757B_0222_41D3_58A076361D17_0_0.png",
               "class": "ImageResourceLevel"
              },
              {
               "width": 396,
               "height": 512,
               "url": "media/popup_63C74390_757B_0222_41D3_58A076361D17_0_1.png",
               "class": "ImageResourceLevel"
              }
             ],
             "class": "ImageResource"
            },
            "rotationX": 0,
            "hideDuration": 500
           },
           {
            "showDuration": 500,
            "popupMaxHeight": "95%",
            "pitch": -23.36,
            "popupMaxWidth": "95%",
            "rotationZ": 0,
            "yaw": 140.86,
            "rotationY": 0,
            "class": "PopupPanoramaOverlay",
            "hfov": 5.27,
            "hideEasing": "cubic_out",
            "showEasing": "cubic_in",
            "popupDistance": 100,
            "id": "popup_624E56DA_757B_0226_41C1_190CD5E87C41",
            "image": {
             "levels": [
              {
               "width": 620,
               "height": 800,
               "url": "media/popup_624E56DA_757B_0226_41C1_190CD5E87C41_0_0.png",
               "class": "ImageResourceLevel"
              },
              {
               "width": 396,
               "height": 512,
               "url": "media/popup_624E56DA_757B_0226_41C1_190CD5E87C41_0_1.png",
               "class": "ImageResourceLevel"
              }
             ],
             "class": "ImageResource"
            },
            "rotationX": 0,
            "hideDuration": 500
           },
           {
            "showDuration": 500,
            "popupMaxHeight": "95%",
            "pitch": -11.68,
            "popupMaxWidth": "95%",
            "rotationZ": 0,
            "yaw": 63.64,
            "rotationY": 0,
            "class": "PopupPanoramaOverlay",
            "hfov": 5.62,
            "hideEasing": "cubic_out",
            "showEasing": "cubic_in",
            "popupDistance": 100,
            "id": "popup_632E33D0_757B_0222_41CF_CF662511AE89",
            "image": {
             "levels": [
              {
               "width": 620,
               "height": 800,
               "url": "media/popup_632E33D0_757B_0222_41CF_CF662511AE89_0_0.png",
               "class": "ImageResourceLevel"
              },
              {
               "width": 396,
               "height": 512,
               "url": "media/popup_632E33D0_757B_0222_41CF_CF662511AE89_0_1.png",
               "class": "ImageResourceLevel"
              }
             ],
             "class": "ImageResource"
            },
            "rotationX": 0,
            "hideDuration": 500
           },
           {
            "showDuration": 500,
            "popupMaxHeight": "95%",
            "pitch": -5.4,
            "popupMaxWidth": "95%",
            "rotationZ": 0,
            "yaw": 140.7,
            "rotationY": 0,
            "class": "PopupPanoramaOverlay",
            "hfov": 5.71,
            "hideEasing": "cubic_out",
            "showEasing": "cubic_in",
            "popupDistance": 100,
            "id": "popup_63A5E408_757B_0622_41D3_0163780D94A8",
            "image": {
             "levels": [
              {
               "width": 620,
               "height": 800,
               "url": "media/popup_63A5E408_757B_0622_41D3_0163780D94A8_0_0.png",
               "class": "ImageResourceLevel"
              },
              {
               "width": 396,
               "height": 512,
               "url": "media/popup_63A5E408_757B_0622_41D3_0163780D94A8_0_1.png",
               "class": "ImageResourceLevel"
              }
             ],
             "class": "ImageResource"
            },
            "rotationX": 0,
            "hideDuration": 500
           },
           {
            "showDuration": 500,
            "popupMaxHeight": "95%",
            "pitch": 0.18,
            "popupMaxWidth": "95%",
            "rotationZ": 0,
            "yaw": 176.09,
            "rotationY": 0,
            "class": "PopupPanoramaOverlay",
            "hfov": 5.74,
            "hideEasing": "cubic_out",
            "showEasing": "cubic_in",
            "popupDistance": 100,
            "id": "popup_63637A86_757B_022E_41D2_393CEE140FCE",
            "image": {
             "levels": [
              {
               "width": 620,
               "height": 800,
               "url": "media/popup_63637A86_757B_022E_41D2_393CEE140FCE_0_0.png",
               "class": "ImageResourceLevel"
              },
              {
               "width": 396,
               "height": 512,
               "url": "media/popup_63637A86_757B_022E_41D2_393CEE140FCE_0_1.png",
               "class": "ImageResourceLevel"
              }
             ],
             "class": "ImageResource"
            },
            "rotationX": 0,
            "hideDuration": 500
           },
           {
            "data": {
             "label": "Image"
            },
            "id": "overlay_540B1B42_75CF_0226_41D4_3E1BC01F9997",
            "areas": [
             {
              "mapColor": "image",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.showPopupPanoramaOverlay(this.popup_54FF8B2C_75CF_0262_41C5_2A2E334BD3D5, {'iconHeight':20,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconHeight':20,'iconLineWidth':5,'paddingTop':5,'pressedBorderColor':'#000000','paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'rollOverIconLineWidth':5,'borderColor':'#000000','pressedIconHeight':20,'rollOverBorderSize':0,'pressedIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'pressedIconColor':'#888888','borderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0}, null, null, null, null, this.audio_6E96826B_753F_02E6_41D5_5F8F0A4811F8, false)"
             },
             {
              "class": "HotspotPanoramaOverlayArea"
             },
             {
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "pitch": -7.15,
              "image": {
               "levels": [
                {
                 "width": 115,
                 "height": 116,
                 "url": "media/panorama_2268A1BF_2C7D_FA1C_41C4_DE30535B3AEB_0_HS_30_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -140.85,
              "hfov": 7.28,
              "class": "HotspotPanoramaOverlayImage",
              "distance": 100
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "maps": [],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true
           },
           {
            "showDuration": 500,
            "popupMaxHeight": "95%",
            "pitch": -7.15,
            "popupMaxWidth": "95%",
            "rotationZ": 0,
            "yaw": -140.85,
            "rotationY": 0,
            "class": "PopupPanoramaOverlay",
            "hfov": 7.28,
            "hideEasing": "cubic_out",
            "showEasing": "cubic_in",
            "popupDistance": 100,
            "id": "popup_54FF8B2C_75CF_0262_41C5_2A2E334BD3D5",
            "image": {
             "levels": [
              {
               "width": 620,
               "height": 800,
               "url": "media/popup_54FF8B2C_75CF_0262_41C5_2A2E334BD3D5_0_0.png",
               "class": "ImageResourceLevel"
              },
              {
               "width": 396,
               "height": 512,
               "url": "media/popup_54FF8B2C_75CF_0262_41C5_2A2E334BD3D5_0_1.png",
               "class": "ImageResourceLevel"
              }
             ],
             "class": "ImageResource"
            },
            "rotationX": 0,
            "hideDuration": 500
           }
          ]
         }
        ],
        "hfovMin": 132,
        "class": "Panorama",
        "id": "panorama_2268A1BF_2C7D_FA1C_41C4_DE30535B3AEB",
        "partial": false,
        "pitch": 0,
        "vfov": 180,
        "label": "Mag-Court-Take3_V1770231",
        "hfov": 360,
        "thumbnailUrl": "media/panorama_2268A1BF_2C7D_FA1C_41C4_DE30535B3AEB_t.jpg",
        "hfovMax": 132,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.media_7DC4D66A_6DBF_329C_41D2_E51D8DE0B3BA"
         }
        ]
       }
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.media_60223D73_6D7D_768C_41D0_39C2DC3B8214"
      }
     ],
     "hfov": 360,
     "thumbnailUrl": "media/media_7DC4D66A_6DBF_329C_41D2_E51D8DE0B3BA_t.jpg",
     "hfovMax": 140,
     "label": "Outside_Mag_Court_Trimmed",
     "vfov": 180
    }
   },
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "frames": [
      {
       "sphere": {
        "levels": [
         {
          "width": 5640,
          "height": 2170,
          "url": "media/panorama_7B014C7B_6DE7_377C_417F_222A70AD8AA1_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "width": 2048,
          "height": 787,
          "url": "media/panorama_7B014C7B_6DE7_377C_417F_222A70AD8AA1_lq.jpeg",
          "class": "ImageResourceLevel",
          "tags": "preload"
         },
         {
          "width": 4002,
          "height": 1539,
          "url": "media/panorama_7B014C7B_6DE7_377C_417F_222A70AD8AA1.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_7B014C7B_6DE7_377C_417F_222A70AD8AA1_t.jpg",
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "data": {
          "label": "Image"
         },
         "id": "overlay_7B60DDF9_6DE6_D17C_41C1_AB9D8A94576E",
         "areas": [
          {
           "mapColor": "image",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_7AF184FF_6DE5_7774_41CC_EA868CD5ECB3, this.camera_54E0E541_75C9_0622_41B9_6A630CDDB620); this.mainPlayList.set('selectedIndex', 8)"
          }
         ],
         "items": [
          {
           "pitch": -3.79,
           "image": {
            "rowCount": 6,
            "colCount": 4,
            "levels": [
             {
              "width": 400,
              "height": 360,
              "url": "media/panorama_7B014C7B_6DE7_377C_417F_222A70AD8AA1_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "frameCount": 24,
            "class": "AnimatedImageResource",
            "frameDuration": 41
           },
           "yaw": 25.98,
           "hfov": 8.7,
           "class": "HotspotPanoramaOverlayImage",
           "distance": 100
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "maps": [],
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true
        },
        {
         "data": {
          "label": "Image"
         },
         "id": "overlay_7BE22EC8_6DE5_539C_41D6_5101E9893488",
         "areas": [
          {
           "mapColor": "image",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.mainPlayList.set('selectedIndex', 0); this.MainViewerPanoramaPlayer.play()"
          }
         ],
         "items": [
          {
           "pitch": -6.23,
           "image": {
            "rowCount": 6,
            "colCount": 4,
            "levels": [
             {
              "width": 400,
              "height": 360,
              "url": "media/panorama_7B014C7B_6DE7_377C_417F_222A70AD8AA1_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "frameCount": 24,
            "class": "AnimatedImageResource",
            "frameDuration": 41
           },
           "yaw": 161.52,
           "hfov": 8.67,
           "class": "HotspotPanoramaOverlayImage",
           "distance": 100
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "maps": [],
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true
        },
        {
         "angle": 0,
         "id": "panorama_7B014C7B_6DE7_377C_417F_222A70AD8AA1_tcap0",
         "image": {
          "levels": [
           {
            "width": 850,
            "height": 850,
            "url": "media/media_60223D73_6D7D_768C_41D0_39C2DC3B8214_tcap0.png",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         },
         "class": "TripodCapPanoramaOverlay",
         "distance": 100,
         "hfov": 45,
         "rotate": false,
         "inertia": false
        },
        {
         "data": {
          "label": "Image"
         },
         "id": "overlay_5E008BF0_5091_0649_41D2_B26759F86F1E",
         "areas": [
          {
           "mapColor": "image",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.showPopupPanoramaOverlay(this.popup_675312AE_7549_027E_41D2_059BDBF5D7FF, {'iconHeight':20,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconHeight':20,'iconLineWidth':5,'paddingTop':5,'pressedBorderColor':'#000000','paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'rollOverIconLineWidth':5,'borderColor':'#000000','pressedIconHeight':20,'rollOverBorderSize':0,'pressedIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'pressedIconColor':'#888888','borderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0}, null, null, null, null, null, false)"
          }
         ],
         "items": [
          {
           "pitch": 6.24,
           "image": {
            "levels": [
             {
              "width": 119,
              "height": 106,
              "url": "media/panorama_7B014C7B_6DE7_377C_417F_222A70AD8AA1_0_HS_3_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 25.86,
           "hfov": 7.56,
           "class": "HotspotPanoramaOverlayImage",
           "distance": 100
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "maps": [],
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true
        },
        {
         "showDuration": 500,
         "popupMaxHeight": "95%",
         "pitch": 6.24,
         "popupMaxWidth": "95%",
         "rotationZ": 0,
         "yaw": 25.86,
         "rotationY": 0,
         "class": "PopupPanoramaOverlay",
         "hfov": 5.23,
         "hideEasing": "cubic_out",
         "showEasing": "cubic_in",
         "popupDistance": 100,
         "id": "popup_675312AE_7549_027E_41D2_059BDBF5D7FF",
         "image": {
          "levels": [
           {
            "width": 620,
            "height": 800,
            "url": "media/popup_675312AE_7549_027E_41D2_059BDBF5D7FF_0_0.png",
            "class": "ImageResourceLevel"
           },
           {
            "width": 396,
            "height": 512,
            "url": "media/popup_675312AE_7549_027E_41D2_059BDBF5D7FF_0_1.png",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         },
         "rotationX": 0,
         "hideDuration": 500
        },
        {
         "data": {
          "label": "Image"
         },
         "id": "overlay_67B88842_7549_0E26_41C3_71E6DA6F69A3",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.showPopupPanoramaOverlay(this.popup_679905DC_754B_0622_4196_CDAB2E552ABB, {'iconHeight':20,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconHeight':20,'iconLineWidth':5,'paddingTop':5,'pressedBorderColor':'#000000','paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'rollOverIconLineWidth':5,'borderColor':'#000000','pressedIconHeight':20,'rollOverBorderSize':0,'pressedIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'pressedIconColor':'#888888','borderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0}, null, null, null, null, this.audio_6F8BCCE5_7539_07E2_41D5_3AE0A92088B9, false)"
          }
         ],
         "items": [
          {
           "pitch": -9.64,
           "image": {
            "levels": [
             {
              "width": 142,
              "height": 150,
              "url": "media/panorama_7B014C7B_6DE7_377C_417F_222A70AD8AA1_0_HS_4_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -13.86,
           "hfov": 8.94,
           "class": "HotspotPanoramaOverlayImage",
           "distance": 50
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "maps": [
          {
           "yaw": -13.86,
           "hfov": 8.94,
           "pitch": -9.64,
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "width": 16,
              "height": 16,
              "url": "media/panorama_7B014C7B_6DE7_377C_417F_222A70AD8AA1_0_HS_4_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true
        },
        {
         "data": {
          "label": "Image"
         },
         "id": "overlay_6759868C_7549_0222_41D4_C22899654AE8",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.showPopupPanoramaOverlay(this.popup_649DAC1E_754B_065E_41DA_5104CE9C6EF8, {'iconHeight':20,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconHeight':20,'iconLineWidth':5,'paddingTop':5,'pressedBorderColor':'#000000','paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'rollOverIconLineWidth':5,'borderColor':'#000000','pressedIconHeight':20,'rollOverBorderSize':0,'pressedIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'pressedIconColor':'#888888','borderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0}, null, null, null, null, this.audio_6FC329A8_753B_0E62_41C5_A28FC5729321, false)"
          },
          {
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "pitch": -22.54,
           "image": {
            "levels": [
             {
              "width": 142,
              "height": 150,
              "url": "media/panorama_7B014C7B_6DE7_377C_417F_222A70AD8AA1_0_HS_5_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 26.76,
           "hfov": 8.38,
           "class": "HotspotPanoramaOverlayImage",
           "distance": 50
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "maps": [
          {
           "yaw": 26.76,
           "hfov": 8.38,
           "pitch": -22.54,
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "width": 16,
              "height": 16,
              "url": "media/panorama_7B014C7B_6DE7_377C_417F_222A70AD8AA1_0_HS_5_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true
        },
        {
         "data": {
          "label": "Image"
         },
         "id": "overlay_6716A56E_7549_06FE_41DB_A3E46EE43DCA",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.showPopupPanoramaOverlay(this.popup_67FD2A80_754B_0222_41B4_5256F4314794, {'iconHeight':20,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconHeight':20,'iconLineWidth':5,'paddingTop':5,'pressedBorderColor':'#000000','paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'rollOverIconLineWidth':5,'borderColor':'#000000','pressedIconHeight':20,'rollOverBorderSize':0,'pressedIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'pressedIconColor':'#888888','borderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0}, null, null, null, null, this.audio_6E40519A_753B_1E26_41BD_B272A7DDE9D8, false)"
          },
          {
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "pitch": -3.71,
           "image": {
            "levels": [
             {
              "width": 142,
              "height": 150,
              "url": "media/panorama_7B014C7B_6DE7_377C_417F_222A70AD8AA1_0_HS_6_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 53.61,
           "hfov": 9.05,
           "class": "HotspotPanoramaOverlayImage",
           "distance": 50
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "maps": [
          {
           "yaw": 53.61,
           "hfov": 9.05,
           "pitch": -3.71,
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "width": 16,
              "height": 16,
              "url": "media/panorama_7B014C7B_6DE7_377C_417F_222A70AD8AA1_0_HS_6_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true
        },
        {
         "data": {
          "label": "Image"
         },
         "id": "overlay_67C57664_7549_02E2_41C7_0F53ABBC45B1",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.showPopupPanoramaOverlay(this.popup_662DE2AB_754B_0266_41DD_2FF582040453, {'iconHeight':20,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconHeight':20,'iconLineWidth':5,'paddingTop':5,'pressedBorderColor':'#000000','paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'rollOverIconLineWidth':5,'borderColor':'#000000','pressedIconHeight':20,'rollOverBorderSize':0,'pressedIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'pressedIconColor':'#888888','borderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0}, null, null, null, null, this.audio_6F143763_753B_02E6_41D4_2478BB7D55B8, false)"
          },
          {
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "pitch": 18.78,
           "image": {
            "levels": [
             {
              "width": 142,
              "height": 150,
              "url": "media/panorama_7B014C7B_6DE7_377C_417F_222A70AD8AA1_0_HS_7_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 25.54,
           "hfov": 8.59,
           "class": "HotspotPanoramaOverlayImage",
           "distance": 50
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "maps": [
          {
           "yaw": 25.54,
           "hfov": 8.59,
           "pitch": 18.78,
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "width": 16,
              "height": 16,
              "url": "media/panorama_7B014C7B_6DE7_377C_417F_222A70AD8AA1_0_HS_7_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true
        },
        {
         "showDuration": 500,
         "popupMaxHeight": "95%",
         "pitch": -22.54,
         "popupMaxWidth": "95%",
         "rotationZ": 0,
         "yaw": 26.76,
         "rotationY": 0,
         "class": "PopupPanoramaOverlay",
         "hfov": 6.87,
         "hideEasing": "cubic_out",
         "showEasing": "cubic_in",
         "popupDistance": 100,
         "id": "popup_649DAC1E_754B_065E_41DA_5104CE9C6EF8",
         "image": {
          "levels": [
           {
            "width": 620,
            "height": 800,
            "url": "media/popup_649DAC1E_754B_065E_41DA_5104CE9C6EF8_0_0.png",
            "class": "ImageResourceLevel"
           },
           {
            "width": 396,
            "height": 512,
            "url": "media/popup_649DAC1E_754B_065E_41DA_5104CE9C6EF8_0_1.png",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         },
         "rotationX": 0,
         "hideDuration": 500
        },
        {
         "showDuration": 500,
         "popupMaxHeight": "95%",
         "pitch": -9.64,
         "popupMaxWidth": "95%",
         "rotationZ": 0,
         "yaw": -13.86,
         "rotationY": 0,
         "class": "PopupPanoramaOverlay",
         "hfov": 7.33,
         "hideEasing": "cubic_out",
         "showEasing": "cubic_in",
         "popupDistance": 100,
         "id": "popup_679905DC_754B_0622_4196_CDAB2E552ABB",
         "image": {
          "levels": [
           {
            "width": 620,
            "height": 800,
            "url": "media/popup_679905DC_754B_0622_4196_CDAB2E552ABB_0_0.png",
            "class": "ImageResourceLevel"
           },
           {
            "width": 396,
            "height": 512,
            "url": "media/popup_679905DC_754B_0622_4196_CDAB2E552ABB_0_1.png",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         },
         "rotationX": 0,
         "hideDuration": 500
        },
        {
         "showDuration": 500,
         "popupMaxHeight": "95%",
         "pitch": -3.71,
         "popupMaxWidth": "95%",
         "rotationZ": 0,
         "yaw": 53.61,
         "rotationY": 0,
         "class": "PopupPanoramaOverlay",
         "hfov": 7.42,
         "hideEasing": "cubic_out",
         "showEasing": "cubic_in",
         "popupDistance": 100,
         "id": "popup_67FD2A80_754B_0222_41B4_5256F4314794",
         "image": {
          "levels": [
           {
            "width": 620,
            "height": 800,
            "url": "media/popup_67FD2A80_754B_0222_41B4_5256F4314794_0_0.png",
            "class": "ImageResourceLevel"
           },
           {
            "width": 396,
            "height": 512,
            "url": "media/popup_67FD2A80_754B_0222_41B4_5256F4314794_0_1.png",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         },
         "rotationX": 0,
         "hideDuration": 500
        },
        {
         "showDuration": 500,
         "popupMaxHeight": "95%",
         "pitch": 18.78,
         "popupMaxWidth": "95%",
         "rotationZ": 0,
         "yaw": 25.54,
         "rotationY": 0,
         "class": "PopupPanoramaOverlay",
         "hfov": 7.04,
         "hideEasing": "cubic_out",
         "showEasing": "cubic_in",
         "popupDistance": 100,
         "id": "popup_662DE2AB_754B_0266_41DD_2FF582040453",
         "image": {
          "levels": [
           {
            "width": 620,
            "height": 800,
            "url": "media/popup_662DE2AB_754B_0266_41DD_2FF582040453_0_0.png",
            "class": "ImageResourceLevel"
           },
           {
            "width": 396,
            "height": 512,
            "url": "media/popup_662DE2AB_754B_0266_41DD_2FF582040453_0_1.png",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         },
         "rotationX": 0,
         "hideDuration": 500
        }
       ]
      }
     ],
     "hfovMin": 107,
     "class": "Panorama",
     "id": "panorama_7B014C7B_6DE7_377C_417F_222A70AD8AA1",
     "partial": false,
     "pitch": 20.74,
     "vfov": 138.51,
     "label": "Outside_District_court",
     "hfov": 360,
     "thumbnailUrl": "media/panorama_7B014C7B_6DE7_377C_417F_222A70AD8AA1_t.jpg",
     "hfovMax": 130,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": "this.media_60223D73_6D7D_768C_41D0_39C2DC3B8214"
      },
      {
       "yaw": 25.98,
       "backwardYaw": -31.99,
       "distance": 1,
       "class": "AdjacentPanorama",
       "panorama": {
        "frames": [
         {
          "sphere": {
           "levels": [
            {
             "width": 5640,
             "height": 2820,
             "url": "media/panorama_7AF184FF_6DE5_7774_41CC_EA868CD5ECB3_hq.jpeg",
             "class": "ImageResourceLevel"
            },
            {
             "width": 2048,
             "height": 1024,
             "url": "media/panorama_7AF184FF_6DE5_7774_41CC_EA868CD5ECB3_lq.jpeg",
             "class": "ImageResourceLevel",
             "tags": "preload"
            },
            {
             "width": 4002,
             "height": 2001,
             "url": "media/panorama_7AF184FF_6DE5_7774_41CC_EA868CD5ECB3.jpeg",
             "class": "ImageResourceLevel"
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_7AF184FF_6DE5_7774_41CC_EA868CD5ECB3_t.jpg",
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "data": {
             "label": "Image"
            },
            "id": "overlay_786AE2E2_6DEB_538C_41D1_321CD859138C",
            "areas": [
             {
              "mapColor": "image",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_7B94663A_6DEA_D2FC_41CF_1A18EEE31DA9, this.camera_54F03551_75C9_0622_41D4_5735D78076AA); this.mainPlayList.set('selectedIndex', 9)"
             }
            ],
            "items": [
             {
              "pitch": -22.27,
              "image": {
               "rowCount": 6,
               "colCount": 4,
               "levels": [
                {
                 "width": 400,
                 "height": 360,
                 "url": "media/panorama_7AF184FF_6DE5_7774_41CC_EA868CD5ECB3_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "frameCount": 24,
               "class": "AnimatedImageResource",
               "frameDuration": 41
              },
              "yaw": 109.39,
              "hfov": 8.07,
              "class": "HotspotPanoramaOverlayImage",
              "distance": 100
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "maps": [],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true
           },
           {
            "data": {
             "label": "Image"
            },
            "id": "overlay_7BD5DF23_6DEA_F28C_41B2_195415503094",
            "areas": [
             {
              "mapColor": "image",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_7B014C7B_6DE7_377C_417F_222A70AD8AA1, this.camera_54F95558_75C9_0622_419B_0C40C97C1A09); this.mainPlayList.set('selectedIndex', 7)"
             }
            ],
            "items": [
             {
              "pitch": -11.38,
              "image": {
               "rowCount": 6,
               "colCount": 4,
               "levels": [
                {
                 "width": 400,
                 "height": 360,
                 "url": "media/panorama_7AF184FF_6DE5_7774_41CC_EA868CD5ECB3_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "frameCount": 24,
               "class": "AnimatedImageResource",
               "frameDuration": 41
              },
              "yaw": -31.99,
              "hfov": 8.55,
              "class": "HotspotPanoramaOverlayImage",
              "distance": 100
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "maps": [],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true
           },
           {
            "angle": 0,
            "id": "panorama_7AF184FF_6DE5_7774_41CC_EA868CD5ECB3_tcap0",
            "image": {
             "levels": [
              {
               "width": 850,
               "height": 850,
               "url": "media/media_60223D73_6D7D_768C_41D0_39C2DC3B8214_tcap0.png",
               "class": "ImageResourceLevel"
              }
             ],
             "class": "ImageResource"
            },
            "class": "TripodCapPanoramaOverlay",
            "distance": 100,
            "hfov": 45,
            "rotate": false,
            "inertia": false
           },
           {
            "data": {
             "label": "Image"
            },
            "id": "overlay_43051407_50B1_01D7_41C6_95FEC3AE29A1",
            "areas": [
             {
              "mapColor": "image",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.showPopupPanoramaOverlay(this.popup_60871949_7549_0E22_41D7_751207DE46C2, {'iconHeight':20,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconHeight':20,'iconLineWidth':5,'paddingTop':5,'pressedBorderColor':'#000000','paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'rollOverIconLineWidth':5,'borderColor':'#000000','pressedIconHeight':20,'rollOverBorderSize':0,'pressedIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'pressedIconColor':'#888888','borderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0}, null, null, null, null, this.audio_6949AFB6_753F_026E_41D3_6BFA75B635F8, false)"
             },
             {
              "class": "HotspotPanoramaOverlayArea"
             },
             {
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "pitch": -38,
              "image": {
               "levels": [
                {
                 "width": 115,
                 "height": 116,
                 "url": "media/panorama_7AF184FF_6DE5_7774_41CC_EA868CD5ECB3_0_HS_3_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 48.47,
              "hfov": 5.78,
              "class": "HotspotPanoramaOverlayImage",
              "distance": 100
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "maps": [],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true
           },
           {
            "data": {
             "label": "Image"
            },
            "id": "overlay_430BD06A_50B1_0259_4175_DFD579332CD8",
            "areas": [
             {
              "mapColor": "image",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.showPopupPanoramaOverlay(this.popup_60BC9C16_7549_062E_41D4_70084B27638B, {'iconHeight':20,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconHeight':20,'iconLineWidth':5,'paddingTop':5,'pressedBorderColor':'#000000','paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'rollOverIconLineWidth':5,'borderColor':'#000000','pressedIconHeight':20,'rollOverBorderSize':0,'pressedIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'pressedIconColor':'#888888','borderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0}, null, null, null, null, this.audio_6949AFB6_753F_026E_41D3_6BFA75B635F8, false)"
             },
             {
              "class": "HotspotPanoramaOverlayArea"
             },
             {
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "pitch": -39.05,
              "image": {
               "levels": [
                {
                 "width": 115,
                 "height": 116,
                 "url": "media/panorama_7AF184FF_6DE5_7774_41CC_EA868CD5ECB3_0_HS_4_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 167.89,
              "hfov": 5.7,
              "class": "HotspotPanoramaOverlayImage",
              "distance": 100
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "maps": [],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true
           },
           {
            "data": {
             "label": "Image"
            },
            "id": "overlay_439CDEC7_50B1_1E57_41D0_E4BEB5A23C70",
            "areas": [
             {
              "mapColor": "image",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.showPopupPanoramaOverlay(this.popup_62C9154A_7549_0626_41D0_0D8B777D2D68, {'iconHeight':20,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconHeight':20,'iconLineWidth':5,'paddingTop':5,'pressedBorderColor':'#000000','paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'rollOverIconLineWidth':5,'borderColor':'#000000','pressedIconHeight':20,'rollOverBorderSize':0,'pressedIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'pressedIconColor':'#888888','borderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0}, null, null, null, null, this.audio_6840A9D8_7539_0E22_41B8_705C7CB63BDD, false)"
             },
             {
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "pitch": -47.42,
              "image": {
               "levels": [
                {
                 "width": 115,
                 "height": 116,
                 "url": "media/panorama_7AF184FF_6DE5_7774_41CC_EA868CD5ECB3_0_HS_5_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 103.72,
              "hfov": 4.97,
              "class": "HotspotPanoramaOverlayImage",
              "distance": 100
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "maps": [],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true
           },
           {
            "data": {
             "label": "Image"
            },
            "id": "overlay_439B1712_50B7_0FC9_41C6_6A9094B1E56C",
            "areas": [
             {
              "mapColor": "image",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.showPopupPanoramaOverlay(this.popup_635F1057_757F_1E2E_41CF_5793EED3EC75, {'iconHeight':20,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconHeight':20,'iconLineWidth':5,'paddingTop':5,'pressedBorderColor':'#000000','paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'rollOverIconLineWidth':5,'borderColor':'#000000','pressedIconHeight':20,'rollOverBorderSize':0,'pressedIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'pressedIconColor':'#888888','borderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0}, null, null, null, null, this.audio_6EB91B7C_753F_02E2_41B2_A72404485268, false)"
             },
             {
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "pitch": -16.04,
              "image": {
               "levels": [
                {
                 "width": 115,
                 "height": 116,
                 "url": "media/panorama_7AF184FF_6DE5_7774_41CC_EA868CD5ECB3_0_HS_6_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -77.74,
              "hfov": 7.05,
              "class": "HotspotPanoramaOverlayImage",
              "distance": 100
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "maps": [],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true
           },
           {
            "data": {
             "label": "Image"
            },
            "id": "overlay_439A9193_50B7_02CF_41C7_1770C68496A4",
            "areas": [
             {
              "mapColor": "image",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.showPopupPanoramaOverlay(this.popup_57952474_75C9_06E2_41D9_CE597C51C3BD, {'iconHeight':20,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconHeight':20,'iconLineWidth':5,'paddingTop':5,'pressedBorderColor':'#000000','paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'rollOverIconLineWidth':5,'borderColor':'#000000','pressedIconHeight':20,'rollOverBorderSize':0,'pressedIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'pressedIconColor':'#888888','borderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0}, null, null, null, null, this.audio_6E96826B_753F_02E6_41D5_5F8F0A4811F8, false)"
             },
             {
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "pitch": -4.53,
              "image": {
               "levels": [
                {
                 "width": 115,
                 "height": 116,
                 "url": "media/panorama_7AF184FF_6DE5_7774_41CC_EA868CD5ECB3_0_HS_7_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 9.07,
              "hfov": 7.32,
              "class": "HotspotPanoramaOverlayImage",
              "distance": 100
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "maps": [],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true
           },
           {
            "data": {
             "label": "Image"
            },
            "id": "overlay_4390C594_50B7_02C9_41BD_E01D058EE44B",
            "areas": [
             {
              "mapColor": "image",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.showPopupPanoramaOverlay(this.popup_60A6ED24_7579_0662_41B1_83B368D0538D, {'iconHeight':20,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconHeight':20,'iconLineWidth':5,'paddingTop':5,'pressedBorderColor':'#000000','paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'rollOverIconLineWidth':5,'borderColor':'#000000','pressedIconHeight':20,'rollOverBorderSize':0,'pressedIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'pressedIconColor':'#888888','borderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0}, null, null, null, null, this.audio_6815DAA5_7539_0262_41D8_7EB9D202CE02, false)"
             },
             {
              "class": "HotspotPanoramaOverlayArea"
             },
             {
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "pitch": -1.74,
              "image": {
               "levels": [
                {
                 "width": 115,
                 "height": 116,
                 "url": "media/panorama_7AF184FF_6DE5_7774_41CC_EA868CD5ECB3_0_HS_8_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -32.24,
              "hfov": 7.34,
              "class": "HotspotPanoramaOverlayImage",
              "distance": 100
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "maps": [],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true
           },
           {
            "showDuration": 500,
            "popupMaxHeight": "95%",
            "pitch": -38,
            "popupMaxWidth": "95%",
            "rotationZ": 0,
            "yaw": 48.47,
            "rotationY": 0,
            "class": "PopupPanoramaOverlay",
            "hfov": 4.52,
            "hideEasing": "cubic_out",
            "showEasing": "cubic_in",
            "popupDistance": 100,
            "id": "popup_60871949_7549_0E22_41D7_751207DE46C2",
            "image": {
             "levels": [
              {
               "width": 620,
               "height": 800,
               "url": "media/popup_60871949_7549_0E22_41D7_751207DE46C2_0_0.png",
               "class": "ImageResourceLevel"
              },
              {
               "width": 396,
               "height": 512,
               "url": "media/popup_60871949_7549_0E22_41D7_751207DE46C2_0_1.png",
               "class": "ImageResourceLevel"
              }
             ],
             "class": "ImageResource"
            },
            "rotationX": 0,
            "hideDuration": 500
           },
           {
            "showDuration": 500,
            "popupMaxHeight": "95%",
            "pitch": -39.05,
            "popupMaxWidth": "95%",
            "rotationZ": 0,
            "yaw": 167.89,
            "rotationY": 0,
            "class": "PopupPanoramaOverlay",
            "hfov": 4.46,
            "hideEasing": "cubic_out",
            "showEasing": "cubic_in",
            "popupDistance": 100,
            "id": "popup_60BC9C16_7549_062E_41D4_70084B27638B",
            "image": {
             "levels": [
              {
               "width": 620,
               "height": 800,
               "url": "media/popup_60BC9C16_7549_062E_41D4_70084B27638B_0_0.png",
               "class": "ImageResourceLevel"
              },
              {
               "width": 396,
               "height": 512,
               "url": "media/popup_60BC9C16_7549_062E_41D4_70084B27638B_0_1.png",
               "class": "ImageResourceLevel"
              }
             ],
             "class": "ImageResource"
            },
            "rotationX": 0,
            "hideDuration": 500
           },
           {
            "showDuration": 500,
            "popupMaxHeight": "95%",
            "pitch": -47.42,
            "popupMaxWidth": "95%",
            "rotationZ": 0,
            "yaw": 103.72,
            "rotationY": 0,
            "class": "PopupPanoramaOverlay",
            "hfov": 3.88,
            "hideEasing": "cubic_out",
            "showEasing": "cubic_in",
            "popupDistance": 100,
            "id": "popup_62C9154A_7549_0626_41D0_0D8B777D2D68",
            "image": {
             "levels": [
              {
               "width": 620,
               "height": 800,
               "url": "media/popup_62C9154A_7549_0626_41D0_0D8B777D2D68_0_0.png",
               "class": "ImageResourceLevel"
              },
              {
               "width": 396,
               "height": 512,
               "url": "media/popup_62C9154A_7549_0626_41D0_0D8B777D2D68_0_1.png",
               "class": "ImageResourceLevel"
              }
             ],
             "class": "ImageResource"
            },
            "rotationX": 0,
            "hideDuration": 500
           },
           {
            "showDuration": 500,
            "popupMaxHeight": "95%",
            "pitch": -1.74,
            "popupMaxWidth": "95%",
            "rotationZ": 0,
            "yaw": -32.24,
            "rotationY": 0,
            "class": "PopupPanoramaOverlay",
            "hfov": 5.74,
            "hideEasing": "cubic_out",
            "showEasing": "cubic_in",
            "popupDistance": 100,
            "id": "popup_60A6ED24_7579_0662_41B1_83B368D0538D",
            "image": {
             "levels": [
              {
               "width": 620,
               "height": 800,
               "url": "media/popup_60A6ED24_7579_0662_41B1_83B368D0538D_0_0.png",
               "class": "ImageResourceLevel"
              },
              {
               "width": 396,
               "height": 512,
               "url": "media/popup_60A6ED24_7579_0662_41B1_83B368D0538D_0_1.png",
               "class": "ImageResourceLevel"
              }
             ],
             "class": "ImageResource"
            },
            "rotationX": 0,
            "hideDuration": 500
           },
           {
            "showDuration": 500,
            "popupMaxHeight": "95%",
            "pitch": -16.04,
            "popupMaxWidth": "95%",
            "rotationZ": 0,
            "yaw": -77.74,
            "rotationY": 0,
            "class": "PopupPanoramaOverlay",
            "hfov": 5.52,
            "hideEasing": "cubic_out",
            "showEasing": "cubic_in",
            "popupDistance": 100,
            "id": "popup_635F1057_757F_1E2E_41CF_5793EED3EC75",
            "image": {
             "levels": [
              {
               "width": 620,
               "height": 800,
               "url": "media/popup_635F1057_757F_1E2E_41CF_5793EED3EC75_0_0.png",
               "class": "ImageResourceLevel"
              },
              {
               "width": 396,
               "height": 512,
               "url": "media/popup_635F1057_757F_1E2E_41CF_5793EED3EC75_0_1.png",
               "class": "ImageResourceLevel"
              }
             ],
             "class": "ImageResource"
            },
            "rotationX": 0,
            "hideDuration": 500
           },
           {
            "showDuration": 500,
            "popupMaxHeight": "95%",
            "pitch": -4.53,
            "popupMaxWidth": "95%",
            "rotationZ": 0,
            "yaw": 9.07,
            "rotationY": 0,
            "class": "PopupPanoramaOverlay",
            "hfov": 5.72,
            "hideEasing": "cubic_out",
            "showEasing": "cubic_in",
            "popupDistance": 100,
            "id": "popup_57952474_75C9_06E2_41D9_CE597C51C3BD",
            "image": {
             "levels": [
              {
               "width": 620,
               "height": 800,
               "url": "media/popup_57952474_75C9_06E2_41D9_CE597C51C3BD_0_0.png",
               "class": "ImageResourceLevel"
              },
              {
               "width": 396,
               "height": 512,
               "url": "media/popup_57952474_75C9_06E2_41D9_CE597C51C3BD_0_1.png",
               "class": "ImageResourceLevel"
              }
             ],
             "class": "ImageResource"
            },
            "rotationX": 0,
            "hideDuration": 500
           }
          ]
         }
        ],
        "hfovMin": 60,
        "class": "Panorama",
        "id": "panorama_7AF184FF_6DE5_7774_41CC_EA868CD5ECB3",
        "partial": false,
        "pitch": 0,
        "vfov": 180,
        "label": "District_CourtRoom_Near Gallery_VV2070261",
        "hfov": 360,
        "thumbnailUrl": "media/panorama_7AF184FF_6DE5_7774_41CC_EA868CD5ECB3_t.jpg",
        "hfovMax": 130,
        "adjacentPanoramas": [
         {
          "yaw": 109.39,
          "backwardYaw": 176.16,
          "distance": 1,
          "class": "AdjacentPanorama",
          "panorama": {
           "frames": [
            {
             "sphere": {
              "levels": [
               {
                "width": 5640,
                "height": 2820,
                "url": "media/panorama_7B94663A_6DEA_D2FC_41CF_1A18EEE31DA9_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "width": 2048,
                "height": 1024,
                "url": "media/panorama_7B94663A_6DEA_D2FC_41CF_1A18EEE31DA9_lq.jpeg",
                "class": "ImageResourceLevel",
                "tags": "preload"
               },
               {
                "width": 4002,
                "height": 2001,
                "url": "media/panorama_7B94663A_6DEA_D2FC_41CF_1A18EEE31DA9.jpeg",
                "class": "ImageResourceLevel"
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_7B94663A_6DEA_D2FC_41CF_1A18EEE31DA9_t.jpg",
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "data": {
                "label": "Image"
               },
               "id": "overlay_784B1132_6DED_4E8C_41D3_4A9D978093D7",
               "areas": [
                {
                 "mapColor": "image",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_7AF184FF_6DE5_7774_41CC_EA868CD5ECB3, this.camera_54178568_75C9_06E2_41C0_A85EBE857296); this.mainPlayList.set('selectedIndex', 8)"
                }
               ],
               "items": [
                {
                 "pitch": -19.22,
                 "image": {
                  "rowCount": 6,
                  "colCount": 4,
                  "levels": [
                   {
                    "width": 400,
                    "height": 360,
                    "url": "media/panorama_7B94663A_6DEA_D2FC_41CF_1A18EEE31DA9_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "frameCount": 24,
                  "class": "AnimatedImageResource",
                  "frameDuration": 41
                 },
                 "yaw": 176.16,
                 "hfov": 7.24,
                 "class": "HotspotPanoramaOverlayImage",
                 "distance": 100
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "maps": [],
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true
              },
              {
               "angle": 0,
               "id": "panorama_7B94663A_6DEA_D2FC_41CF_1A18EEE31DA9_tcap0",
               "image": {
                "levels": [
                 {
                  "width": 850,
                  "height": 850,
                  "url": "media/media_60223D73_6D7D_768C_41D0_39C2DC3B8214_tcap0.png",
                  "class": "ImageResourceLevel"
                 }
                ],
                "class": "ImageResource"
               },
               "class": "TripodCapPanoramaOverlay",
               "distance": 100,
               "hfov": 45,
               "rotate": false,
               "inertia": false
              },
              {
               "data": {
                "label": "Image"
               },
               "id": "overlay_77167512_6E9E_F68C_41A1_910D537B3E26",
               "areas": [
                {
                 "mapColor": "image",
                 "toolTip": "The Chief Justice on the role of the courts and judges",
                 "displayTooltipInTouchScreens": true,
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_743BC7F4_6FAD_3174_41D4_8E8C43CF55E8, {'iconHeight':20,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconHeight':20,'iconLineWidth':5,'paddingTop':5,'pressedBorderColor':'#000000','paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'rollOverIconLineWidth':5,'borderColor':'#000000','pressedIconHeight':20,'rollOverBorderSize':0,'pressedIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'pressedIconColor':'#888888','borderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0}) } else { this.showPopupMedia(this.window_788C7F82_7537_0226_41DB_4D98C727A0BA, this.video_77836E3E_6F9B_32F4_41DA_73A34C473700, this.PlayList_7BFCFD21_7539_0662_41CC_F885B6725EF0, '70%', '70%', true, true) }"
                }
               ],
               "items": [
                {
                 "pitch": 0.43,
                 "image": {
                  "levels": [
                   {
                    "width": 97,
                    "height": 102,
                    "url": "media/panorama_7B94663A_6DEA_D2FC_41CF_1A18EEE31DA9_0_HS_1_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 0.13,
                 "hfov": 6.2,
                 "class": "HotspotPanoramaOverlayImage",
                 "distance": 100
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "maps": [],
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true
              },
              {
               "data": {
                "label": "Image"
               },
               "id": "overlay_426EC7E6_50B1_0E49_41D3_D437C0D1C507",
               "areas": [
                {
                 "mapColor": "image",
                 "toolTip": "Witness Video",
                 "displayTooltipInTouchScreens": true,
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_43BB6C1C_50B1_01F9_41D1_F6663EBFC9B4, {'iconHeight':20,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconHeight':20,'iconLineWidth':5,'paddingTop':5,'pressedBorderColor':'#000000','paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'rollOverIconLineWidth':5,'borderColor':'#000000','pressedIconHeight':20,'rollOverBorderSize':0,'pressedIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'pressedIconColor':'#888888','borderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0}) } else { this.showPopupMedia(this.window_788C6F82_7537_0226_41B2_1538DD111F06, this.video_43FD236E_50BF_0659_41C8_35A1A2C95276, this.PlayList_7BFD5D21_7539_0662_41D3_F865CF1EF8CA, '70%', '70%', true, true) }"
                },
                {
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "pitch": -2.36,
                 "image": {
                  "levels": [
                   {
                    "width": 97,
                    "height": 102,
                    "url": "media/panorama_7B94663A_6DEA_D2FC_41CF_1A18EEE31DA9_0_HS_2_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": -60.37,
                 "hfov": 6.19,
                 "class": "HotspotPanoramaOverlayImage",
                 "distance": 100
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "maps": [],
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true
              },
              {
               "data": {
                "label": "Image"
               },
               "id": "overlay_439E497A_50B1_0239_41B7_4D9955185030",
               "areas": [
                {
                 "mapColor": "image",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.showPopupPanoramaOverlay(this.popup_608A0ECA_757F_0226_41C3_63E6A39F2E82, {'iconHeight':20,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconHeight':20,'iconLineWidth':5,'paddingTop':5,'pressedBorderColor':'#000000','paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'rollOverIconLineWidth':5,'borderColor':'#000000','pressedIconHeight':20,'rollOverBorderSize':0,'pressedIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'pressedIconColor':'#888888','borderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0}, null, null, null, null, this.audio_68606AF5_7539_03E2_41C1_AF10F0C3AEEA, false)"
                },
                {
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "pitch": -6.45,
                 "image": {
                  "levels": [
                   {
                    "width": 115,
                    "height": 116,
                    "url": "media/panorama_7B94663A_6DEA_D2FC_41CF_1A18EEE31DA9_0_HS_3_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": -0.34,
                 "hfov": 7.29,
                 "class": "HotspotPanoramaOverlayImage",
                 "distance": 100
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "maps": [],
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true
              },
              {
               "data": {
                "label": "Image"
               },
               "id": "overlay_439F7C3C_50B1_0239_41CF_049E0C5721E7",
               "areas": [
                {
                 "mapColor": "image",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.showPopupPanoramaOverlay(this.popup_635C96F3_757F_03E6_41C5_CB998A63F453, {'iconHeight':20,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconHeight':20,'iconLineWidth':5,'paddingTop':5,'pressedBorderColor':'#000000','paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'rollOverIconLineWidth':5,'borderColor':'#000000','pressedIconHeight':20,'rollOverBorderSize':0,'pressedIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'pressedIconColor':'#888888','borderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0}, null, null, null, null, this.audio_6828B583_7539_0626_41CA_9058C0062757, false)"
                },
                {
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "pitch": -5.74,
                 "image": {
                  "levels": [
                   {
                    "width": 115,
                    "height": 116,
                    "url": "media/panorama_7B94663A_6DEA_D2FC_41CF_1A18EEE31DA9_0_HS_4_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": -42.7,
                 "hfov": 7.3,
                 "class": "HotspotPanoramaOverlayImage",
                 "distance": 100
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "maps": [],
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true
              },
              {
               "data": {
                "label": "Image"
               },
               "id": "overlay_439E89E6_50B1_0249_41C5_F321DC6CDD84",
               "areas": [
                {
                 "mapColor": "image",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.showPopupPanoramaOverlay(this.popup_6355528B_757F_0226_41DB_4DEC94773057, {'iconHeight':20,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconHeight':20,'iconLineWidth':5,'paddingTop':5,'pressedBorderColor':'#000000','paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'rollOverIconLineWidth':5,'borderColor':'#000000','pressedIconHeight':20,'rollOverBorderSize':0,'pressedIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'pressedIconColor':'#888888','borderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0}, null, null, null, null, this.audio_6841120B_7539_0226_41D1_101BFA33561B, false)"
                },
                {
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "pitch": -13.25,
                 "image": {
                  "levels": [
                   {
                    "width": 115,
                    "height": 116,
                    "url": "media/panorama_7B94663A_6DEA_D2FC_41CF_1A18EEE31DA9_0_HS_5_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": -57.87,
                 "hfov": 7.15,
                 "class": "HotspotPanoramaOverlayImage",
                 "distance": 100
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "maps": [],
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true
              },
              {
               "data": {
                "label": "Image"
               },
               "id": "overlay_431B8B5F_50B7_0677_41CC_A58AA42BE224",
               "areas": [
                {
                 "mapColor": "image",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.showPopupPanoramaOverlay(this.popup_60A3F2A6_757F_026E_41B2_42F1A27FA4E8, {'iconHeight':20,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconHeight':20,'iconLineWidth':5,'paddingTop':5,'pressedBorderColor':'#000000','paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'rollOverIconLineWidth':5,'borderColor':'#000000','pressedIconHeight':20,'rollOverBorderSize':0,'pressedIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'pressedIconColor':'#888888','borderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0}, null, null, null, null, this.audio_55F48311_7539_0222_41D0_EA06BA3EA04B, false)"
                },
                {
                 "class": "HotspotPanoramaOverlayArea"
                },
                {
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "pitch": -10.46,
                 "image": {
                  "levels": [
                   {
                    "width": 115,
                    "height": 116,
                    "url": "media/panorama_7B94663A_6DEA_D2FC_41CF_1A18EEE31DA9_0_HS_6_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 86.3,
                 "hfov": 7.22,
                 "class": "HotspotPanoramaOverlayImage",
                 "distance": 100
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "maps": [],
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true
              },
              {
               "showDuration": 500,
               "popupMaxHeight": "70%",
               "pitch": -2.36,
               "autoplay": true,
               "hideDuration": 500,
               "yaw": -60.37,
               "rotationY": 0,
               "class": "PopupPanoramaOverlay",
               "video": {
                "width": 1920,
                "height": 1080,
                "class": "VideoResource",
                "mp4Url": "media/video_77836E3E_6F9B_32F4_41DA_73A34C473700.mp4"
               },
               "rotationZ": 0,
               "hfov": 6.19,
               "loop": false,
               "hideEasing": "cubic_out",
               "showEasing": "cubic_in",
               "popupDistance": 41.23,
               "id": "popup_743BC7F4_6FAD_3174_41D4_8E8C43CF55E8",
               "rotationX": 0,
               "popupMaxWidth": "70%"
              },
              {
               "showDuration": 500,
               "popupMaxHeight": "70%",
               "pitch": -2.36,
               "autoplay": true,
               "hideDuration": 500,
               "yaw": -60.37,
               "rotationY": 0,
               "class": "PopupPanoramaOverlay",
               "video": {
                "width": 1920,
                "height": 1080,
                "class": "VideoResource",
                "mp4Url": "media/video_43FD236E_50BF_0659_41C8_35A1A2C95276.mp4"
               },
               "rotationZ": 0,
               "hfov": 6.19,
               "loop": false,
               "hideEasing": "cubic_out",
               "showEasing": "cubic_in",
               "popupDistance": 100,
               "id": "popup_43BB6C1C_50B1_01F9_41D1_F6663EBFC9B4",
               "rotationX": 0,
               "popupMaxWidth": "70%"
              },
              {
               "showDuration": 500,
               "popupMaxHeight": "95%",
               "pitch": -6.45,
               "popupMaxWidth": "95%",
               "rotationZ": 0,
               "yaw": -0.34,
               "rotationY": 0,
               "class": "PopupPanoramaOverlay",
               "hfov": 5.7,
               "hideEasing": "cubic_out",
               "showEasing": "cubic_in",
               "popupDistance": 100,
               "id": "popup_608A0ECA_757F_0226_41C3_63E6A39F2E82",
               "image": {
                "levels": [
                 {
                  "width": 620,
                  "height": 800,
                  "url": "media/popup_608A0ECA_757F_0226_41C3_63E6A39F2E82_0_0.png",
                  "class": "ImageResourceLevel"
                 },
                 {
                  "width": 396,
                  "height": 512,
                  "url": "media/popup_608A0ECA_757F_0226_41C3_63E6A39F2E82_0_1.png",
                  "class": "ImageResourceLevel"
                 }
                ],
                "class": "ImageResource"
               },
               "rotationX": 0,
               "hideDuration": 500
              },
              {
               "showDuration": 500,
               "popupMaxHeight": "95%",
               "pitch": -10.46,
               "popupMaxWidth": "95%",
               "rotationZ": 0,
               "yaw": 86.3,
               "rotationY": 0,
               "class": "PopupPanoramaOverlay",
               "hfov": 5.64,
               "hideEasing": "cubic_out",
               "showEasing": "cubic_in",
               "popupDistance": 100,
               "id": "popup_60A3F2A6_757F_026E_41B2_42F1A27FA4E8",
               "image": {
                "levels": [
                 {
                  "width": 620,
                  "height": 800,
                  "url": "media/popup_60A3F2A6_757F_026E_41B2_42F1A27FA4E8_0_0.png",
                  "class": "ImageResourceLevel"
                 },
                 {
                  "width": 396,
                  "height": 512,
                  "url": "media/popup_60A3F2A6_757F_026E_41B2_42F1A27FA4E8_0_1.png",
                  "class": "ImageResourceLevel"
                 }
                ],
                "class": "ImageResource"
               },
               "rotationX": 0,
               "hideDuration": 500
              },
              {
               "showDuration": 500,
               "popupMaxHeight": "95%",
               "pitch": -13.25,
               "popupMaxWidth": "95%",
               "rotationZ": 0,
               "yaw": -57.87,
               "rotationY": 0,
               "class": "PopupPanoramaOverlay",
               "hfov": 5.59,
               "hideEasing": "cubic_out",
               "showEasing": "cubic_in",
               "popupDistance": 100,
               "id": "popup_6355528B_757F_0226_41DB_4DEC94773057",
               "image": {
                "levels": [
                 {
                  "width": 620,
                  "height": 800,
                  "url": "media/popup_6355528B_757F_0226_41DB_4DEC94773057_0_0.png",
                  "class": "ImageResourceLevel"
                 },
                 {
                  "width": 396,
                  "height": 512,
                  "url": "media/popup_6355528B_757F_0226_41DB_4DEC94773057_0_1.png",
                  "class": "ImageResourceLevel"
                 }
                ],
                "class": "ImageResource"
               },
               "rotationX": 0,
               "hideDuration": 500
              },
              {
               "data": {
                "label": "Image"
               },
               "id": "overlay_60AE8F14_755F_0222_41D8_016619ED8419",
               "areas": [
                {
                 "mapColor": "image",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.showPopupPanoramaOverlay(this.popup_634D07DF_755F_01DE_41D7_819EE741C0D4, {'iconHeight':20,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconHeight':20,'iconLineWidth':5,'paddingTop':5,'pressedBorderColor':'#000000','paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'rollOverIconLineWidth':5,'borderColor':'#000000','pressedIconHeight':20,'rollOverBorderSize':0,'pressedIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'pressedIconColor':'#888888','borderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0}, null, null, null, null, null, false)"
                },
                {
                 "class": "HotspotPanoramaOverlayArea"
                },
                {
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "pitch": 10.3,
                 "image": {
                  "levels": [
                   {
                    "width": 115,
                    "height": 116,
                    "url": "media/panorama_7B94663A_6DEA_D2FC_41CF_1A18EEE31DA9_0_HS_7_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": -54.03,
                 "hfov": 7.22,
                 "class": "HotspotPanoramaOverlayImage",
                 "distance": 100
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "maps": [],
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true
              },
              {
               "data": {
                "label": "Image"
               },
               "id": "overlay_54368B70_7539_02E2_41B9_1861F602FFA4",
               "areas": [
                {
                 "mapColor": "image",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.showPopupPanoramaOverlay(this.popup_5460A8F8_7539_0FE2_4193_28426C4E97FB, {'iconHeight':20,'rollOverIconColor':'#666666','backgroundOpacity':0.3,'rollOverIconHeight':20,'iconLineWidth':5,'paddingTop':5,'pressedBorderColor':'#000000','paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'rollOverIconLineWidth':5,'borderColor':'#000000','pressedIconHeight':20,'rollOverBorderSize':0,'pressedIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'pressedIconColor':'#888888','borderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0}, null, null, null, null, null, false)"
                },
                {
                 "class": "HotspotPanoramaOverlayArea"
                },
                {
                 "class": "HotspotPanoramaOverlayArea"
                },
                {
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "pitch": -9.58,
                 "image": {
                  "levels": [
                   {
                    "width": 115,
                    "height": 116,
                    "url": "media/panorama_7B94663A_6DEA_D2FC_41CF_1A18EEE31DA9_0_HS_8_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": -77.05,
                 "hfov": 7.24,
                 "class": "HotspotPanoramaOverlayImage",
                 "distance": 100
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "maps": [],
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true
              },
              {
               "showDuration": 500,
               "popupMaxHeight": "95%",
               "pitch": -5.74,
               "popupMaxWidth": "95%",
               "rotationZ": 0,
               "yaw": -42.7,
               "rotationY": 0,
               "class": "PopupPanoramaOverlay",
               "hfov": 5.71,
               "hideEasing": "cubic_out",
               "showEasing": "cubic_in",
               "popupDistance": 100,
               "id": "popup_635C96F3_757F_03E6_41C5_CB998A63F453",
               "image": {
                "levels": [
                 {
                  "width": 620,
                  "height": 800,
                  "url": "media/popup_635C96F3_757F_03E6_41C5_CB998A63F453_0_0.png",
                  "class": "ImageResourceLevel"
                 },
                 {
                  "width": 396,
                  "height": 512,
                  "url": "media/popup_635C96F3_757F_03E6_41C5_CB998A63F453_0_1.png",
                  "class": "ImageResourceLevel"
                 }
                ],
                "class": "ImageResource"
               },
               "rotationX": 0,
               "hideDuration": 500
              },
              {
               "showDuration": 500,
               "popupMaxHeight": "95%",
               "pitch": -9.58,
               "popupMaxWidth": "95%",
               "rotationZ": 0,
               "yaw": -77.05,
               "rotationY": 0,
               "class": "PopupPanoramaOverlay",
               "hfov": 5.66,
               "hideEasing": "cubic_out",
               "showEasing": "cubic_in",
               "popupDistance": 100,
               "id": "popup_5460A8F8_7539_0FE2_4193_28426C4E97FB",
               "image": {
                "levels": [
                 {
                  "width": 620,
                  "height": 800,
                  "url": "media/popup_5460A8F8_7539_0FE2_4193_28426C4E97FB_0_0.png",
                  "class": "ImageResourceLevel"
                 },
                 {
                  "width": 396,
                  "height": 512,
                  "url": "media/popup_5460A8F8_7539_0FE2_4193_28426C4E97FB_0_1.png",
                  "class": "ImageResourceLevel"
                 }
                ],
                "class": "ImageResource"
               },
               "rotationX": 0,
               "hideDuration": 500
              },
              {
               "showDuration": 500,
               "popupMaxHeight": "95%",
               "pitch": -4,
               "popupMaxWidth": "95%",
               "rotationZ": 0,
               "yaw": -141.55,
               "rotationY": 0,
               "class": "PopupPanoramaOverlay",
               "hfov": 5.72,
               "hideEasing": "cubic_out",
               "showEasing": "cubic_in",
               "popupDistance": 100,
               "id": "popup_634D07DF_755F_01DE_41D7_819EE741C0D4",
               "image": {
                "levels": [
                 {
                  "width": 620,
                  "height": 800,
                  "url": "media/popup_634D07DF_755F_01DE_41D7_819EE741C0D4_0_0.png",
                  "class": "ImageResourceLevel"
                 },
                 {
                  "width": 396,
                  "height": 512,
                  "url": "media/popup_634D07DF_755F_01DE_41D7_819EE741C0D4_0_1.png",
                  "class": "ImageResourceLevel"
                 }
                ],
                "class": "ImageResource"
               },
               "rotationX": 0,
               "hideDuration": 500
              }
             ]
            }
           ],
           "hfovMin": 60,
           "class": "Panorama",
           "id": "panorama_7B94663A_6DEA_D2FC_41CF_1A18EEE31DA9",
           "partial": false,
           "pitch": 0,
           "vfov": 180,
           "label": "District_CourtRoom_Near Judge_V2000254",
           "hfov": 360,
           "thumbnailUrl": "media/panorama_7B94663A_6DEA_D2FC_41CF_1A18EEE31DA9_t.jpg",
           "hfovMax": 130,
           "adjacentPanoramas": [
            {
             "yaw": 176.16,
             "backwardYaw": 109.39,
             "distance": 1,
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_7AF184FF_6DE5_7774_41CC_EA868CD5ECB3"
            }
           ]
          }
         },
         {
          "yaw": -31.99,
          "backwardYaw": 25.98,
          "distance": 1,
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_7B014C7B_6DE7_377C_417F_222A70AD8AA1"
         }
        ]
       }
      }
     ]
    }
   }
  ],
  "hfov": 360,
  "thumbnailUrl": "media/media_60223D73_6D7D_768C_41D0_39C2DC3B8214_t.jpg",
  "hfovMax": 140,
  "label": "Vic_Square_trimmed",
  "vfov": 180
 },
 {
  "viewerArea": "this.MainViewer",
  "id": "MainViewerPanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonCardboardView": "this.IconButton_7AF5BA6B_753B_02E6_4174_3F24322DF7BC",
  "mouseControlMode": "drag_rotation",
  "displayPlaybackBar": true,
  "touchControlMode": "drag_rotation",
  "class": "PanoramaPlayer"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -133.43,
   "hfov": 120,
   "pitch": 4.64,
   "class": "RotationalCameraPosition"
  },
  "manualZoomSpeed": 1,
  "automaticRotationSpeed": 10,
  "id": "media_60223D73_6D7D_768C_41D0_39C2DC3B8214_camera",
  "class": "RotationalCamera",
  "manualRotationSpeed": 1800
 },
 {
  "playList": {
   "id": "album_10106133_27DF_F682_41C0_E49F8DB34988_AlbumPlayList",
   "items": [
    {
     "camera": {
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "easing": "linear",
      "scaleMode": "fit_inside",
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.42",
       "class": "PhotoCameraPosition",
       "y": "0.44"
      },
      "class": "MovementPhotoCamera",
      "duration": 0
     },
     "media": {
      "label": "Magistrates Court",
      "height": 3006,
      "class": "Photo",
      "id": "album_67C9E01C_6D65_4EB4_41C5_F238DEAFC7B4",
      "duration": 0,
      "width": 5484,
      "image": {
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_67C9E01C_6D65_4EB4_41C5_F238DEAFC7B4.jpg"
        }
       ],
       "class": "ImageResource"
      }
     },
     "class": "PhotoPlayListItem"
    }
   ],
   "class": "PhotoPlayList"
  },
  "class": "PhotoAlbum",
  "label": "Magistrates Court",
  "id": "album_10106133_27DF_F682_41C0_E49F8DB34988",
  "thumbnailUrl": "media/album_10106133_27DF_F682_41C0_E49F8DB34988_t.png"
 },
 {
  "viewerArea": "this.MainViewer",
  "id": "MainViewerPhotoAlbumPlayer",
  "class": "PhotoAlbumPlayer"
 },
 "this.album_67C9E01C_6D65_4EB4_41C5_F238DEAFC7B4",
 {
  "playList": {
   "id": "album_111AD21A_27D8_9A82_419E_AC1A841FA9CF_AlbumPlayList",
   "items": [
    {
     "camera": {
      "class": "PhotoCamera",
      "scaleMode": "fit_inside"
     },
     "media": {
      "label": "Coroners Court",
      "height": 3744,
      "class": "Photo",
      "id": "album_111AD21A_27D8_9A82_419E_AC1A841FA9CF_0",
      "thumbnailUrl": "media/album_111AD21A_27D8_9A82_419E_AC1A841FA9CF_0_t.jpg",
      "duration": 0,
      "width": 5616,
      "image": {
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_111AD21A_27D8_9A82_419E_AC1A841FA9CF_0.jpg"
        }
       ],
       "class": "ImageResource"
      }
     },
     "class": "PhotoPlayListItem"
    }
   ],
   "class": "PhotoPlayList"
  },
  "class": "PhotoAlbum",
  "label": "Coroners Court",
  "id": "album_111AD21A_27D8_9A82_419E_AC1A841FA9CF",
  "thumbnailUrl": "media/album_111AD21A_27D8_9A82_419E_AC1A841FA9CF_t.png"
 },
 "this.album_111AD21A_27D8_9A82_419E_AC1A841FA9CF_0",
 {
  "playList": {
   "id": "album_11054270_27D8_BA9E_41B3_F43DB0D055DE_AlbumPlayList",
   "items": [
    {
     "camera": {
      "class": "PhotoCamera",
      "scaleMode": "fit_inside"
     },
     "media": {
      "label": "Supreme Law Courts",
      "height": 3570,
      "class": "Photo",
      "id": "album_66503111_6D65_4E8C_41D5_90B81BECB006",
      "duration": 0,
      "width": 5190,
      "image": {
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_66503111_6D65_4E8C_41D5_90B81BECB006.jpg"
        }
       ],
       "class": "ImageResource"
      }
     },
     "class": "PhotoPlayListItem"
    }
   ],
   "class": "PhotoPlayList"
  },
  "class": "PhotoAlbum",
  "label": "Supreme Law Courts",
  "id": "album_11054270_27D8_BA9E_41B3_F43DB0D055DE",
  "thumbnailUrl": "media/album_11054270_27D8_BA9E_41B3_F43DB0D055DE_t.png"
 },
 "this.album_66503111_6D65_4E8C_41D5_90B81BECB006",
 {
  "playList": {
   "id": "album_11EAE1EA_27D8_9982_41AF_4582B4741DC6_AlbumPlayList",
   "items": [
    {
     "camera": {
      "class": "PhotoCamera",
      "scaleMode": "fit_inside"
     },
     "media": {
      "label": "Youth Court",
      "height": 5616,
      "class": "Photo",
      "id": "album_11EAE1EA_27D8_9982_41AF_4582B4741DC6_0",
      "thumbnailUrl": "media/album_11EAE1EA_27D8_9982_41AF_4582B4741DC6_0_t.jpg",
      "duration": 0,
      "width": 3744,
      "image": {
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_11EAE1EA_27D8_9982_41AF_4582B4741DC6_0.jpg"
        }
       ],
       "class": "ImageResource"
      }
     },
     "class": "PhotoPlayListItem"
    }
   ],
   "class": "PhotoPlayList"
  },
  "class": "PhotoAlbum",
  "label": "Youth Court",
  "id": "album_11EAE1EA_27D8_9982_41AF_4582B4741DC6",
  "thumbnailUrl": "media/album_11EAE1EA_27D8_9982_41AF_4582B4741DC6_t.png"
 },
 "this.album_11EAE1EA_27D8_9982_41AF_4582B4741DC6_0",
 {
  "playList": {
   "id": "album_1C921E6F_27DB_EA82_41A6_455A763B2E59_AlbumPlayList",
   "items": [
    {
     "camera": {
      "class": "PhotoCamera",
      "scaleMode": "fit_inside"
     },
     "media": {
      "label": "District Court",
      "height": 5336,
      "class": "Photo",
      "id": "album_1C921E6F_27DB_EA82_41A6_455A763B2E59_0",
      "thumbnailUrl": "media/album_1C921E6F_27DB_EA82_41A6_455A763B2E59_0_t.jpg",
      "duration": 5000,
      "width": 3696,
      "image": {
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_1C921E6F_27DB_EA82_41A6_455A763B2E59_0.jpg"
        }
       ],
       "class": "ImageResource"
      }
     },
     "class": "PhotoPlayListItem"
    }
   ],
   "class": "PhotoPlayList"
  },
  "class": "PhotoAlbum",
  "label": "District Court",
  "id": "album_1C921E6F_27DB_EA82_41A6_455A763B2E59",
  "thumbnailUrl": "media/album_1C921E6F_27DB_EA82_41A6_455A763B2E59_t.png"
 },
 "this.album_1C921E6F_27DB_EA82_41A6_455A763B2E59_0",
 "this.media_7DC4D66A_6DBF_329C_41D2_E51D8DE0B3BA",
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -172.3,
   "hfov": 120,
   "pitch": 9.47,
   "class": "RotationalCameraPosition"
  },
  "manualZoomSpeed": 1,
  "automaticRotationSpeed": 10,
  "id": "media_7DC4D66A_6DBF_329C_41D2_E51D8DE0B3BA_camera",
  "class": "RotationalCamera",
  "manualRotationSpeed": 1800
 },
 "this.panorama_7B014C7B_6DE7_377C_417F_222A70AD8AA1",
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 25.46,
   "pitch": 1.67,
   "class": "PanoramaCameraPosition"
  },
  "automaticRotationSpeed": 0,
  "id": "panorama_7B014C7B_6DE7_377C_417F_222A70AD8AA1_camera",
  "class": "PanoramaCamera"
 },
 "this.panorama_7AF184FF_6DE5_7774_41CC_EA868CD5ECB3",
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticRotationSpeed": 0,
  "id": "panorama_7AF184FF_6DE5_7774_41CC_EA868CD5ECB3_camera",
  "class": "PanoramaCamera"
 },
 "this.panorama_7B94663A_6DEA_D2FC_41CF_1A18EEE31DA9",
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticRotationSpeed": 0,
  "id": "panorama_7B94663A_6DEA_D2FC_41CF_1A18EEE31DA9_camera",
  "class": "PanoramaCamera"
 },
 {
  "playList": {
   "id": "album_7B043A70_6DAD_728C_41D5_28CE4790A7CB_AlbumPlayList",
   "items": [
    {
     "camera": {
      "class": "PhotoCamera",
      "scaleMode": "fit_inside"
     },
     "media": {
      "label": "Federal Court",
      "height": 5184,
      "class": "Photo",
      "id": "album_7B043A70_6DAD_728C_41D5_28CE4790A7CB_0",
      "thumbnailUrl": "media/album_7B043A70_6DAD_728C_41D5_28CE4790A7CB_0_t.jpg",
      "duration": 5000,
      "width": 3888,
      "image": {
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_7B043A70_6DAD_728C_41D5_28CE4790A7CB_0.JPG"
        }
       ],
       "class": "ImageResource"
      }
     },
     "class": "PhotoPlayListItem"
    }
   ],
   "class": "PhotoPlayList"
  },
  "class": "PhotoAlbum",
  "label": "Photo Album Federal_Court_1",
  "id": "album_7B043A70_6DAD_728C_41D5_28CE4790A7CB",
  "thumbnailUrl": "media/album_7B043A70_6DAD_728C_41D5_28CE4790A7CB_t.png"
 },
 "this.album_7B043A70_6DAD_728C_41D5_28CE4790A7CB_0",
 {
  "scaleMode": "fit_inside",
  "height": 1080,
  "class": "Video",
  "video": {
   "width": 1920,
   "height": 1080,
   "class": "VideoResource",
   "mp4Url": "media/video_77836E3E_6F9B_32F4_41DA_73A34C473700.mp4"
  },
  "label": "Chris_K_on_the_role_of_the_courts_and_judges",
  "id": "video_77836E3E_6F9B_32F4_41DA_73A34C473700",
  "thumbnailUrl": "media/video_77836E3E_6F9B_32F4_41DA_73A34C473700_t.jpg",
  "loop": false,
  "width": 1920
 },
 {
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true,
  "id": "MainViewerVideoPlayer",
  "class": "VideoPlayer"
 },
 "this.panorama_2268A1BF_2C7D_FA1C_41C4_DE30535B3AEB",
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 138.37,
   "hfov": 132,
   "pitch": 1.5,
   "class": "PanoramaCameraPosition"
  },
  "automaticRotationSpeed": 0,
  "id": "panorama_2268A1BF_2C7D_FA1C_41C4_DE30535B3AEB_camera",
  "class": "PanoramaCamera"
 },
 {
  "playList": {
   "id": "album_5E1FA894_5097_02C9_41D2_047C056CCE37_AlbumPlayList",
   "items": [
    {
     "camera": {
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "easing": "linear",
      "scaleMode": "fit_outside",
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.56",
       "class": "PhotoCameraPosition",
       "y": "0.32"
      },
      "class": "MovementPhotoCamera",
      "duration": 5000
     },
     "media": {
      "label": "1",
      "height": 3888,
      "class": "Photo",
      "id": "album_5E1FA894_5097_02C9_41D2_047C056CCE37_0",
      "thumbnailUrl": "media/album_5E1FA894_5097_02C9_41D2_047C056CCE37_0_t.jpg",
      "duration": 5000,
      "width": 5184,
      "image": {
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_5E1FA894_5097_02C9_41D2_047C056CCE37_0.JPG"
        }
       ],
       "class": "ImageResource"
      }
     },
     "class": "PhotoPlayListItem"
    },
    {
     "camera": {
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "easing": "linear",
      "scaleMode": "fit_outside",
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.60",
       "class": "PhotoCameraPosition",
       "y": "0.53"
      },
      "class": "MovementPhotoCamera",
      "duration": 5000
     },
     "media": {
      "label": "2",
      "height": 3888,
      "class": "Photo",
      "id": "album_5E1FA894_5097_02C9_41D2_047C056CCE37_1",
      "thumbnailUrl": "media/album_5E1FA894_5097_02C9_41D2_047C056CCE37_1_t.jpg",
      "duration": 5000,
      "width": 5184,
      "image": {
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_5E1FA894_5097_02C9_41D2_047C056CCE37_1.JPG"
        }
       ],
       "class": "ImageResource"
      }
     },
     "class": "PhotoPlayListItem"
    },
    {
     "camera": {
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "easing": "linear",
      "scaleMode": "fit_outside",
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.61",
       "class": "PhotoCameraPosition",
       "y": "0.44"
      },
      "class": "MovementPhotoCamera",
      "duration": 5000
     },
     "media": {
      "label": "3",
      "height": 3888,
      "class": "Photo",
      "id": "album_5E1FA894_5097_02C9_41D2_047C056CCE37_2",
      "thumbnailUrl": "media/album_5E1FA894_5097_02C9_41D2_047C056CCE37_2_t.jpg",
      "duration": 5000,
      "width": 5184,
      "image": {
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_5E1FA894_5097_02C9_41D2_047C056CCE37_2.JPG"
        }
       ],
       "class": "ImageResource"
      }
     },
     "class": "PhotoPlayListItem"
    },
    {
     "camera": {
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "easing": "linear",
      "scaleMode": "fit_outside",
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.33",
       "class": "PhotoCameraPosition",
       "y": "0.75"
      },
      "class": "MovementPhotoCamera",
      "duration": 5000
     },
     "media": {
      "label": "4",
      "height": 3888,
      "class": "Photo",
      "id": "album_5E1FA894_5097_02C9_41D2_047C056CCE37_3",
      "thumbnailUrl": "media/album_5E1FA894_5097_02C9_41D2_047C056CCE37_3_t.jpg",
      "duration": 5000,
      "width": 5184,
      "image": {
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_5E1FA894_5097_02C9_41D2_047C056CCE37_3.JPG"
        }
       ],
       "class": "ImageResource"
      }
     },
     "class": "PhotoPlayListItem"
    }
   ],
   "class": "PhotoPlayList"
  },
  "class": "PhotoAlbum",
  "label": "Photo Album 1",
  "id": "album_5E1FA894_5097_02C9_41D2_047C056CCE37",
  "thumbnailUrl": "media/album_5E1FA894_5097_02C9_41D2_047C056CCE37_t.png"
 },
 "this.album_5E1FA894_5097_02C9_41D2_047C056CCE37_0",
 "this.album_5E1FA894_5097_02C9_41D2_047C056CCE37_1",
 "this.album_5E1FA894_5097_02C9_41D2_047C056CCE37_2",
 "this.album_5E1FA894_5097_02C9_41D2_047C056CCE37_3",
 {
  "scaleMode": "fit_inside",
  "height": 1080,
  "class": "Video",
  "video": {
   "width": 1920,
   "height": 1080,
   "class": "VideoResource",
   "mp4Url": "media/video_43FD236E_50BF_0659_41C8_35A1A2C95276.mp4"
  },
  "label": "Andrea Lewis - RSPCA (rough edit)",
  "id": "video_43FD236E_50BF_0659_41C8_35A1A2C95276",
  "thumbnailUrl": "media/video_43FD236E_50BF_0659_41C8_35A1A2C95276_t.jpg",
  "loop": false,
  "width": 1920
 },
 {
  "id": "mainPlayList",
  "items": [
   {
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 0)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.media_60223D73_6D7D_768C_41D0_39C2DC3B8214",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)",
    "camera": "this.media_60223D73_6D7D_768C_41D0_39C2DC3B8214_camera",
    "class": "Video360PlayListItem"
   },
   {
    "player": "this.MainViewerPhotoAlbumPlayer",
    "media": "this.album_10106133_27DF_F682_41C0_E49F8DB34988",
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "player": "this.MainViewerPhotoAlbumPlayer",
    "media": "this.album_111AD21A_27D8_9A82_419E_AC1A841FA9CF",
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "player": "this.MainViewerPhotoAlbumPlayer",
    "media": "this.album_11054270_27D8_BA9E_41B3_F43DB0D055DE",
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "player": "this.MainViewerPhotoAlbumPlayer",
    "media": "this.album_11EAE1EA_27D8_9982_41AF_4582B4741DC6",
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "player": "this.MainViewerPhotoAlbumPlayer",
    "media": "this.album_1C921E6F_27DB_EA82_41A6_455A763B2E59",
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.mainPlayList, 6, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 6)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.media_7DC4D66A_6DBF_329C_41D2_E51D8DE0B3BA",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)",
    "camera": "this.media_7DC4D66A_6DBF_329C_41D2_E51D8DE0B3BA_camera",
    "class": "Video360PlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_7B014C7B_6DE7_377C_417F_222A70AD8AA1",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "camera": "this.panorama_7B014C7B_6DE7_377C_417F_222A70AD8AA1_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_7AF184FF_6DE5_7774_41CC_EA868CD5ECB3",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "camera": "this.panorama_7AF184FF_6DE5_7774_41CC_EA868CD5ECB3_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_7B94663A_6DEA_D2FC_41CF_1A18EEE31DA9",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "camera": "this.panorama_7B94663A_6DEA_D2FC_41CF_1A18EEE31DA9_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPhotoAlbumPlayer",
    "media": "this.album_7B043A70_6DAD_728C_41D5_28CE4790A7CB",
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)"
   },
   {
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_77836E3E_6F9B_32F4_41DA_73A34C473700",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 11, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 11)",
    "class": "VideoPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2268A1BF_2C7D_FA1C_41C4_DE30535B3AEB",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "camera": "this.panorama_2268A1BF_2C7D_FA1C_41C4_DE30535B3AEB_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPhotoAlbumPlayer",
    "media": "this.album_5E1FA894_5097_02C9_41D2_047C056CCE37",
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)"
   },
   {
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_43FD236E_50BF_0659_41C8_35A1A2C95276",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 14, 0)",
    "end": "this.trigger('tourEnded')",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 14, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 14)",
    "class": "VideoPlayListItem"
   }
  ],
  "class": "PlayList"
 },
 {
  "id": "PlayList_7BFCFD21_7539_0662_41CC_F885B6725EF0",
  "items": [
   {
    "player": {
     "viewerArea": {
      "borderRadius": 0,
      "progressBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarBackgroundOpacity": 1,
      "playbackBarHeadShadowHorizontalLength": 0,
      "toolTipOpacity": 1,
      "height": "100%",
      "borderSize": 0,
      "displayTooltipInTouchScreens": true,
      "progressBorderRadius": 0,
      "playbackBarHeadShadowColor": "#000000",
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadBorderRadius": 0,
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "paddingLeft": 0,
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "shadow": false,
      "playbackBarHeadShadowOpacity": 0.7,
      "paddingRight": 0,
      "progressRight": 0,
      "toolTipPaddingBottom": 4,
      "toolTipPaddingRight": 6,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarProgressBorderSize": 0,
      "toolTipFontStyle": "normal",
      "toolTipPaddingTop": 4,
      "playbackBarBorderColor": "#FFFFFF",
      "playbackBarLeft": 0,
      "playbackBarHeadBorderColor": "#000000",
      "toolTipFontColor": "#606060",
      "progressOpacity": 1,
      "playbackBarBottom": 0,
      "progressBackgroundColorDirection": "vertical",
      "progressBarBackgroundColorDirection": "vertical",
      "propagateClick": false,
      "progressBorderColor": "#000000",
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarHeadHeight": 15,
      "paddingTop": 0,
      "class": "ViewerArea",
      "progressBarBorderRadius": 0,
      "transitionDuration": 500,
      "id": "viewer_uid511BC511_75C9_0622_41D5_81CAE4537903",
      "width": "100%",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipFontSize": "1.11vh",
      "toolTipFontWeight": "normal",
      "toolTipShadowColor": "#333333",
      "playbackBarHeadShadow": true,
      "toolTipFontFamily": "Arial",
      "transitionMode": "blending",
      "playbackBarBorderRadius": 0,
      "paddingBottom": 0,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "progressBackgroundOpacity": 1,
      "minHeight": 50,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBorderColor": "#000000",
      "playbackBarHeight": 10,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarOpacity": 1,
      "playbackBarHeadWidth": 6,
      "progressBarBackgroundColorRatios": [
       0
      ],
      "playbackBarBackgroundColorDirection": "vertical",
      "toolTipShadowSpread": 0,
      "playbackBarRight": 0,
      "progressBarOpacity": 1,
      "progressBottom": 2,
      "minWidth": 100,
      "playbackBarHeadOpacity": 1,
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "toolTipBorderRadius": 3,
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipBorderSize": 1,
      "progressBarBorderSize": 0,
      "toolTipBorderColor": "#767676",
      "toolTipPaddingLeft": 6,
      "progressHeight": 10,
      "toolTipDisplayTime": 600,
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "progressLeft": 0,
      "toolTipTextShadowOpacity": 0,
      "playbackBarBorderSize": 0,
      "data": {
       "name": "ViewerArea59158"
      },
      "toolTipShadowOpacity": 1,
      "progressBorderSize": 0,
      "toolTipTextShadowColor": "#000000",
      "playbackBarProgressBorderRadius": 0,
      "toolTipShadowBlurRadius": 3,
      "playbackBarProgressOpacity": 1
     },
     "displayPlaybackBar": true,
     "id": "viewer_uid7B898D0D_7539_0622_41D1_E2506F01E629VideoPlayer",
     "class": "VideoPlayer"
    },
    "media": "this.video_77836E3E_6F9B_32F4_41DA_73A34C473700",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid7B898D0D_7539_0622_41D1_E2506F01E629VideoPlayer)",
    "start": "this.viewer_uid7B898D0D_7539_0622_41D1_E2506F01E629VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_7BFCFD21_7539_0662_41CC_F885B6725EF0, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_7BFCFD21_7539_0662_41CC_F885B6725EF0, 0)",
    "class": "VideoPlayListItem"
   }
  ],
  "class": "PlayList"
 },
 {
  "id": "PlayList_7BFD5D21_7539_0662_41D3_F865CF1EF8CA",
  "items": [
   {
    "player": {
     "viewerArea": {
      "borderRadius": 0,
      "progressBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarBackgroundOpacity": 1,
      "playbackBarHeadShadowHorizontalLength": 0,
      "toolTipOpacity": 1,
      "height": "100%",
      "borderSize": 0,
      "displayTooltipInTouchScreens": true,
      "progressBorderRadius": 0,
      "playbackBarHeadShadowColor": "#000000",
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadBorderRadius": 0,
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "paddingLeft": 0,
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "shadow": false,
      "playbackBarHeadShadowOpacity": 0.7,
      "paddingRight": 0,
      "progressRight": 0,
      "toolTipPaddingBottom": 4,
      "toolTipPaddingRight": 6,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarProgressBorderSize": 0,
      "toolTipFontStyle": "normal",
      "toolTipPaddingTop": 4,
      "playbackBarBorderColor": "#FFFFFF",
      "playbackBarLeft": 0,
      "playbackBarHeadBorderColor": "#000000",
      "toolTipFontColor": "#606060",
      "progressOpacity": 1,
      "playbackBarBottom": 0,
      "progressBackgroundColorDirection": "vertical",
      "progressBarBackgroundColorDirection": "vertical",
      "propagateClick": false,
      "progressBorderColor": "#000000",
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarHeadHeight": 15,
      "paddingTop": 0,
      "class": "ViewerArea",
      "progressBarBorderRadius": 0,
      "transitionDuration": 500,
      "id": "viewer_uid54C8A516_75C9_062E_41CE_9FA5B85F1D3B",
      "width": "100%",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipFontSize": "1.11vh",
      "toolTipFontWeight": "normal",
      "toolTipShadowColor": "#333333",
      "playbackBarHeadShadow": true,
      "toolTipFontFamily": "Arial",
      "transitionMode": "blending",
      "playbackBarBorderRadius": 0,
      "paddingBottom": 0,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "progressBackgroundOpacity": 1,
      "minHeight": 50,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBorderColor": "#000000",
      "playbackBarHeight": 10,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarOpacity": 1,
      "playbackBarHeadWidth": 6,
      "progressBarBackgroundColorRatios": [
       0
      ],
      "playbackBarBackgroundColorDirection": "vertical",
      "toolTipShadowSpread": 0,
      "playbackBarRight": 0,
      "progressBarOpacity": 1,
      "progressBottom": 2,
      "minWidth": 100,
      "playbackBarHeadOpacity": 1,
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "toolTipBorderRadius": 3,
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipBorderSize": 1,
      "progressBarBorderSize": 0,
      "toolTipBorderColor": "#767676",
      "toolTipPaddingLeft": 6,
      "progressHeight": 10,
      "toolTipDisplayTime": 600,
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "progressLeft": 0,
      "toolTipTextShadowOpacity": 0,
      "playbackBarBorderSize": 0,
      "data": {
       "name": "ViewerArea59159"
      },
      "toolTipShadowOpacity": 1,
      "progressBorderSize": 0,
      "toolTipTextShadowColor": "#000000",
      "playbackBarProgressBorderRadius": 0,
      "toolTipShadowBlurRadius": 3,
      "playbackBarProgressOpacity": 1
     },
     "displayPlaybackBar": true,
     "id": "viewer_uid7B897D0E_7539_063E_41D8_DB5F29FF4938VideoPlayer",
     "class": "VideoPlayer"
    },
    "media": "this.video_43FD236E_50BF_0659_41C8_35A1A2C95276",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid7B897D0E_7539_063E_41D8_DB5F29FF4938VideoPlayer)",
    "start": "this.viewer_uid7B897D0E_7539_063E_41D8_DB5F29FF4938VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_7BFD5D21_7539_0662_41D3_F865CF1EF8CA, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_7BFD5D21_7539_0662_41D3_F865CF1EF8CA, 0)",
    "class": "VideoPlayListItem"
   }
  ],
  "class": "PlayList"
 },
 {
  "id": "PlayList_7BFC4D21_7539_0662_41D0_CE219889DF10",
  "items": [
   {
    "player": {
     "viewerArea": {
      "borderRadius": 0,
      "progressBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarBackgroundOpacity": 1,
      "playbackBarHeadShadowHorizontalLength": 0,
      "toolTipOpacity": 1,
      "height": "100%",
      "borderSize": 0,
      "displayTooltipInTouchScreens": true,
      "progressBorderRadius": 0,
      "playbackBarHeadShadowColor": "#000000",
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadBorderRadius": 0,
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "paddingLeft": 0,
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "shadow": false,
      "playbackBarHeadShadowOpacity": 0.7,
      "paddingRight": 0,
      "progressRight": 0,
      "toolTipPaddingBottom": 4,
      "toolTipPaddingRight": 6,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarProgressBorderSize": 0,
      "toolTipFontStyle": "normal",
      "toolTipPaddingTop": 4,
      "playbackBarBorderColor": "#FFFFFF",
      "playbackBarLeft": 0,
      "playbackBarHeadBorderColor": "#000000",
      "toolTipFontColor": "#606060",
      "progressOpacity": 1,
      "playbackBarBottom": 0,
      "progressBackgroundColorDirection": "vertical",
      "progressBarBackgroundColorDirection": "vertical",
      "propagateClick": false,
      "progressBorderColor": "#000000",
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarHeadHeight": 15,
      "paddingTop": 0,
      "class": "ViewerArea",
      "progressBarBorderRadius": 0,
      "transitionDuration": 500,
      "id": "viewer_uid54D6E518_75C9_0622_41BE_2F31166F3A94",
      "width": "100%",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipFontSize": "1.11vh",
      "toolTipFontWeight": "normal",
      "toolTipShadowColor": "#333333",
      "playbackBarHeadShadow": true,
      "toolTipFontFamily": "Arial",
      "transitionMode": "blending",
      "playbackBarBorderRadius": 0,
      "paddingBottom": 0,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "progressBackgroundOpacity": 1,
      "minHeight": 50,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBorderColor": "#000000",
      "playbackBarHeight": 10,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarOpacity": 1,
      "playbackBarHeadWidth": 6,
      "progressBarBackgroundColorRatios": [
       0
      ],
      "playbackBarBackgroundColorDirection": "vertical",
      "toolTipShadowSpread": 0,
      "playbackBarRight": 0,
      "progressBarOpacity": 1,
      "progressBottom": 2,
      "minWidth": 100,
      "playbackBarHeadOpacity": 1,
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "toolTipBorderRadius": 3,
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipBorderSize": 1,
      "progressBarBorderSize": 0,
      "toolTipBorderColor": "#767676",
      "toolTipPaddingLeft": 6,
      "progressHeight": 10,
      "toolTipDisplayTime": 600,
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "progressLeft": 0,
      "toolTipTextShadowOpacity": 0,
      "playbackBarBorderSize": 0,
      "data": {
       "name": "ViewerArea59160"
      },
      "toolTipShadowOpacity": 1,
      "progressBorderSize": 0,
      "toolTipTextShadowColor": "#000000",
      "playbackBarProgressBorderRadius": 0,
      "toolTipShadowBlurRadius": 3,
      "playbackBarProgressOpacity": 1
     },
     "displayPlaybackBar": true,
     "id": "viewer_uid7B8F8D10_7539_0622_4191_E9B64D6A228EVideoPlayer",
     "class": "VideoPlayer"
    },
    "media": "this.video_77836E3E_6F9B_32F4_41DA_73A34C473700",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid7B8F8D10_7539_0622_4191_E9B64D6A228EVideoPlayer)",
    "start": "this.viewer_uid7B8F8D10_7539_0622_4191_E9B64D6A228EVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_7BFC4D21_7539_0662_41D0_CE219889DF10, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_7BFC4D21_7539_0662_41D0_CE219889DF10, 0)",
    "class": "VideoPlayListItem"
   }
  ],
  "class": "PlayList"
 },
 "this.popup_64AACC0D_7539_0622_41C8_066817B0109E",
 "this.popup_6497BDE3_7539_01E6_41D9_8B9E6EE26ADB",
 "this.popup_6481270C_7537_0222_418F_89CFF30A2A7A",
 "this.popup_6488708D_7537_1E22_419C_E8F779B13632",
 "this.popup_65FD6618_7539_0222_41BF_B009470D19B6",
 "this.popup_648BDEFA_7537_03E6_41D2_B5D5C307742C",
 "this.popup_649C7821_754B_0E62_41D3_83F9B7D6B8C9",
 "this.popup_64A91B8E_754B_023E_41C8_914836AF004D",
 "this.popup_64F6280E_7549_0E3E_41B6_9B3CEF00253D",
 "this.popup_64B41C73_7549_06E6_41DA_DD21805F6B3B",
 "this.popup_67415BA4_7549_0262_41C7_B907AD2E41A1",
 "this.popup_64B4C3F1_7549_01E2_41C0_BEA301BD1D1C",
 "this.popup_64BE23FF_7549_01DE_41CB_8AE3914F91D6",
 "this.popup_675312AE_7549_027E_41D2_059BDBF5D7FF",
 "this.popup_679905DC_754B_0622_4196_CDAB2E552ABB",
 "this.popup_649DAC1E_754B_065E_41DA_5104CE9C6EF8",
 "this.popup_67FD2A80_754B_0222_41B4_5256F4314794",
 "this.popup_662DE2AB_754B_0266_41DD_2FF582040453",
 "this.popup_60871949_7549_0E22_41D7_751207DE46C2",
 "this.popup_60BC9C16_7549_062E_41D4_70084B27638B",
 "this.popup_62C9154A_7549_0626_41D0_0D8B777D2D68",
 "this.popup_635F1057_757F_1E2E_41CF_5793EED3EC75",
 "this.popup_57952474_75C9_06E2_41D9_CE597C51C3BD",
 "this.popup_60A6ED24_7579_0662_41B1_83B368D0538D",
 {
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonRollOverBorderColor": "#000000",
  "data": {
   "name": "Window448"
  },
  "bodyPaddingTop": 0,
  "borderRadius": 5,
  "backgroundColor": [],
  "headerPaddingLeft": 10,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundColorRatios": [],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonPressedIconLineWidth": 5,
  "titlePaddingBottom": 5,
  "headerBackgroundOpacity": 0,
  "overflow": "scroll",
  "modal": true,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonIconLineWidth": 5,
  "headerPaddingBottom": 5,
  "borderSize": 0,
  "titlePaddingRight": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingLeft": 0,
  "titlePaddingTop": 5,
  "backgroundOpacity": 1,
  "headerPaddingRight": 0,
  "closeButtonBorderSize": 0,
  "closeButtonBorderColor": "#000000",
  "shadow": true,
  "contentOpaque": false,
  "paddingRight": 0,
  "headerVerticalAlign": "middle",
  "closeButtonBorderRadius": 0,
  "closeButtonPressedBackgroundOpacity": 0.3,
  "footerBackgroundOpacity": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "children": [
   "this.viewer_uid511BC511_75C9_0622_41D5_81CAE4537903"
  ],
  "closeButtonPaddingLeft": 5,
  "closeButtonRollOverIconLineWidth": 5,
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerHeight": 5,
  "bodyPaddingBottom": 0,
  "shadowColor": "#000000",
  "titleFontSize": "1.29vh",
  "closeButtonBackgroundColorDirection": "vertical",
  "closeButtonPressedBorderSize": 0,
  "titlePaddingLeft": 5,
  "closeButtonIconColor": "#000000",
  "closeButtonIconWidth": 20,
  "propagateClick": false,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "shadowSpread": 1,
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "bodyPaddingRight": 0,
  "scrollBarWidth": 10,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "paddingTop": 0,
  "bodyBackgroundOpacity": 0,
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "shadowVerticalLength": 0,
  "gap": 10,
  "id": "window_788C7F82_7537_0226_41DB_4D98C727A0BA",
  "scrollBarVisible": "rollOver",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "creationPolicy": "inAdvance",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "titleFontFamily": "Arial",
  "bodyPaddingLeft": 0,
  "closeButtonIconHeight": 20,
  "veilColorRatios": [
   0,
   1
  ],
  "horizontalAlign": "center",
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "paddingBottom": 0,
  "scrollBarMargin": 2,
  "headerPaddingTop": 10,
  "verticalAlign": "middle",
  "minHeight": 20,
  "shadowBlurRadius": 6,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonRollOverIconColor": "#666666",
  "closeButtonPaddingBottom": 5,
  "veilOpacity": 0.4,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "closeButtonPressedBorderColor": "#000000",
  "layout": "vertical",
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonRollOverBorderSize": 0,
  "minWidth": 20,
  "scrollBarOpacity": 0.5,
  "shadowHorizontalLength": 3,
  "shadowOpacity": 0.5,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "headerBackgroundColorDirection": "vertical",
  "scrollBarColor": "#000000",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "closeButtonPressedIconColor": "#888888",
  "closeButtonPaddingTop": 5,
  "footerBackgroundColorDirection": "vertical",
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonBackgroundOpacity": 0.3,
  "closeButtonPaddingRight": 5
 },
 "this.popup_743BC7F4_6FAD_3174_41D4_8E8C43CF55E8",
 {
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonRollOverBorderColor": "#000000",
  "data": {
   "name": "Window449"
  },
  "bodyPaddingTop": 0,
  "borderRadius": 5,
  "backgroundColor": [],
  "headerPaddingLeft": 10,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundColorRatios": [],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonPressedIconLineWidth": 5,
  "titlePaddingBottom": 5,
  "headerBackgroundOpacity": 0,
  "overflow": "scroll",
  "modal": true,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonIconLineWidth": 5,
  "headerPaddingBottom": 5,
  "borderSize": 0,
  "titlePaddingRight": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingLeft": 0,
  "titlePaddingTop": 5,
  "backgroundOpacity": 1,
  "headerPaddingRight": 0,
  "closeButtonBorderSize": 0,
  "closeButtonBorderColor": "#000000",
  "shadow": true,
  "contentOpaque": false,
  "paddingRight": 0,
  "headerVerticalAlign": "middle",
  "closeButtonBorderRadius": 0,
  "closeButtonPressedBackgroundOpacity": 0.3,
  "footerBackgroundOpacity": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "children": [
   "this.viewer_uid54C8A516_75C9_062E_41CE_9FA5B85F1D3B"
  ],
  "closeButtonPaddingLeft": 5,
  "closeButtonRollOverIconLineWidth": 5,
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerHeight": 5,
  "bodyPaddingBottom": 0,
  "shadowColor": "#000000",
  "titleFontSize": "1.29vh",
  "closeButtonBackgroundColorDirection": "vertical",
  "closeButtonPressedBorderSize": 0,
  "titlePaddingLeft": 5,
  "closeButtonIconColor": "#000000",
  "closeButtonIconWidth": 20,
  "propagateClick": false,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "shadowSpread": 1,
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "bodyPaddingRight": 0,
  "scrollBarWidth": 10,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "paddingTop": 0,
  "bodyBackgroundOpacity": 0,
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "shadowVerticalLength": 0,
  "gap": 10,
  "id": "window_788C6F82_7537_0226_41B2_1538DD111F06",
  "scrollBarVisible": "rollOver",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "creationPolicy": "inAdvance",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "titleFontFamily": "Arial",
  "bodyPaddingLeft": 0,
  "closeButtonIconHeight": 20,
  "veilColorRatios": [
   0,
   1
  ],
  "horizontalAlign": "center",
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "paddingBottom": 0,
  "scrollBarMargin": 2,
  "headerPaddingTop": 10,
  "verticalAlign": "middle",
  "minHeight": 20,
  "shadowBlurRadius": 6,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonRollOverIconColor": "#666666",
  "closeButtonPaddingBottom": 5,
  "veilOpacity": 0.4,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "closeButtonPressedBorderColor": "#000000",
  "layout": "vertical",
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonRollOverBorderSize": 0,
  "minWidth": 20,
  "scrollBarOpacity": 0.5,
  "shadowHorizontalLength": 3,
  "shadowOpacity": 0.5,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "headerBackgroundColorDirection": "vertical",
  "scrollBarColor": "#000000",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "closeButtonPressedIconColor": "#888888",
  "closeButtonPaddingTop": 5,
  "footerBackgroundColorDirection": "vertical",
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonBackgroundOpacity": 0.3,
  "closeButtonPaddingRight": 5
 },
 "this.popup_43BB6C1C_50B1_01F9_41D1_F6663EBFC9B4",
 "this.popup_608A0ECA_757F_0226_41C3_63E6A39F2E82",
 "this.popup_635C96F3_757F_03E6_41C5_CB998A63F453",
 "this.popup_6355528B_757F_0226_41DB_4DEC94773057",
 "this.popup_60A3F2A6_757F_026E_41B2_42F1A27FA4E8",
 "this.popup_634D07DF_755F_01DE_41D7_819EE741C0D4",
 "this.popup_5460A8F8_7539_0FE2_4193_28426C4E97FB",
 "this.popup_62C10426_7579_066E_418E_B3B25CEC8DC9",
 "this.popup_6365C75F_7579_02DE_41D8_2D39FC086C81",
 "this.popup_632E33D0_757B_0222_41CF_CF662511AE89",
 "this.popup_624E56DA_757B_0226_41C1_190CD5E87C41",
 "this.popup_63A5E408_757B_0622_41D3_0163780D94A8",
 "this.popup_63637A86_757B_022E_41D2_393CEE140FCE",
 "this.popup_6261C74A_7579_0226_41B1_C7B693A522DC",
 {
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonRollOverBorderColor": "#000000",
  "data": {
   "name": "Window447"
  },
  "bodyPaddingTop": 0,
  "borderRadius": 5,
  "backgroundColor": [],
  "headerPaddingLeft": 10,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundColorRatios": [],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonPressedIconLineWidth": 5,
  "titlePaddingBottom": 5,
  "headerBackgroundOpacity": 0,
  "overflow": "scroll",
  "modal": true,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonIconLineWidth": 5,
  "headerPaddingBottom": 5,
  "borderSize": 0,
  "titlePaddingRight": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingLeft": 0,
  "titlePaddingTop": 5,
  "backgroundOpacity": 1,
  "headerPaddingRight": 0,
  "closeButtonBorderSize": 0,
  "closeButtonBorderColor": "#000000",
  "shadow": true,
  "contentOpaque": false,
  "paddingRight": 0,
  "headerVerticalAlign": "middle",
  "closeButtonBorderRadius": 0,
  "closeButtonPressedBackgroundOpacity": 0.3,
  "footerBackgroundOpacity": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "children": [
   "this.viewer_uid54D6E518_75C9_0622_41BE_2F31166F3A94"
  ],
  "closeButtonPaddingLeft": 5,
  "closeButtonRollOverIconLineWidth": 5,
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerHeight": 5,
  "bodyPaddingBottom": 0,
  "shadowColor": "#000000",
  "titleFontSize": "1.29vh",
  "closeButtonBackgroundColorDirection": "vertical",
  "closeButtonPressedBorderSize": 0,
  "titlePaddingLeft": 5,
  "closeButtonIconColor": "#000000",
  "closeButtonIconWidth": 20,
  "propagateClick": false,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "shadowSpread": 1,
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "bodyPaddingRight": 0,
  "scrollBarWidth": 10,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "paddingTop": 0,
  "bodyBackgroundOpacity": 0,
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "shadowVerticalLength": 0,
  "gap": 10,
  "id": "window_788D9F81_7537_0222_41DB_F039DA430E77",
  "scrollBarVisible": "rollOver",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "creationPolicy": "inAdvance",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "titleFontFamily": "Arial",
  "bodyPaddingLeft": 0,
  "closeButtonIconHeight": 20,
  "veilColorRatios": [
   0,
   1
  ],
  "horizontalAlign": "center",
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "paddingBottom": 0,
  "scrollBarMargin": 2,
  "headerPaddingTop": 10,
  "verticalAlign": "middle",
  "minHeight": 20,
  "shadowBlurRadius": 6,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonRollOverIconColor": "#666666",
  "closeButtonPaddingBottom": 5,
  "veilOpacity": 0.4,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "closeButtonPressedBorderColor": "#000000",
  "layout": "vertical",
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonRollOverBorderSize": 0,
  "minWidth": 20,
  "scrollBarOpacity": 0.5,
  "shadowHorizontalLength": 3,
  "shadowOpacity": 0.5,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "headerBackgroundColorDirection": "vertical",
  "scrollBarColor": "#000000",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "closeButtonPressedIconColor": "#888888",
  "closeButtonPaddingTop": 5,
  "footerBackgroundColorDirection": "vertical",
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonBackgroundOpacity": 0.3,
  "closeButtonPaddingRight": 5
 },
 "this.popup_428F2CF5_50BF_024B_41C7_6850A97074BD",
 "this.popup_63C74390_757B_0222_41D3_58A076361D17",
 "this.popup_54FF8B2C_75CF_0262_41C5_2A2E334BD3D5",
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 148.01,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticRotationSpeed": 0,
  "id": "camera_54E0E541_75C9_0622_41B9_6A630CDDB620",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "hfov": 120,
   "pitch": 0,
   "class": "RotationalCameraPosition"
  },
  "manualZoomSpeed": 1,
  "automaticRotationSpeed": 10,
  "id": "camera_54EB3549_75C9_0622_41D7_9638E96A72DE",
  "class": "RotationalCamera",
  "manualRotationSpeed": 1800
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -3.84,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticRotationSpeed": 0,
  "id": "camera_54F03551_75C9_0622_41D4_5735D78076AA",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -154.02,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticRotationSpeed": 0,
  "id": "camera_54F95558_75C9_0622_419B_0C40C97C1A09",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 83.9,
   "hfov": 120,
   "pitch": 0.45,
   "class": "RotationalCameraPosition"
  },
  "manualZoomSpeed": 1,
  "automaticRotationSpeed": 10,
  "id": "camera_540E6560_75C9_06E2_41D7_E159790C0EC6",
  "class": "RotationalCamera",
  "manualRotationSpeed": 1800
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -70.61,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticRotationSpeed": 0,
  "id": "camera_54178568_75C9_06E2_41C0_A85EBE857296",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -165.85,
   "hfov": 120,
   "pitch": -3.15,
   "class": "RotationalCameraPosition"
  },
  "manualZoomSpeed": 1,
  "automaticRotationSpeed": 10,
  "id": "camera_541CB56F_75C9_06FE_41DB_8CACF50CAC19",
  "class": "RotationalCamera",
  "manualRotationSpeed": 1800
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 38.66,
   "pitch": 2.03,
   "class": "PanoramaCameraPosition"
  },
  "automaticRotationSpeed": 0,
  "id": "camera_5424E577_75C9_06EE_41CE_2B612C9D7270",
  "class": "PanoramaCamera"
 },
 {
  "data": {
   "label": "Federal"
  },
  "id": "audio_64025093_753B_7E26_41B7_C34F1164367B",
  "autoplay": true,
  "audio": {
   "oggUrl": "media/audio_64025093_753B_7E26_41B7_C34F1164367B.ogg",
   "mp3Url": "media/audio_64025093_753B_7E26_41B7_C34F1164367B.mp3",
   "class": "AudioResource"
  },
  "class": "MediaAudio"
 },
 {
  "data": {
   "label": "Intro"
  },
  "id": "audio_6C4ABFFB_754B_01E6_41D3_FC7251F72A00",
  "autoplay": true,
  "audio": {
   "oggUrl": "media/audio_6C4ABFFB_754B_01E6_41D3_FC7251F72A00.ogg",
   "mp3Url": "media/audio_6C4ABFFB_754B_01E6_41D3_FC7251F72A00.mp3",
   "class": "AudioResource"
  },
  "class": "MediaAudio"
 },
 {
  "data": {
   "label": "Court Intro"
  },
  "id": "audio_6DBA2459_7537_0622_41A6_536C54DF77B4",
  "autoplay": true,
  "audio": {
   "oggUrl": "media/audio_6DBA2459_7537_0622_41A6_536C54DF77B4.ogg",
   "mp3Url": "media/audio_6DBA2459_7537_0622_41A6_536C54DF77B4.mp3",
   "class": "AudioResource"
  },
  "class": "MediaAudio"
 },
 {
  "data": {
   "label": "What do the courts do-"
  },
  "id": "audio_6CEBD85F_7537_0EDE_41A6_C5CBA14BB3DF",
  "autoplay": true,
  "audio": {
   "oggUrl": "media/audio_6CEBD85F_7537_0EDE_41A6_C5CBA14BB3DF.ogg",
   "mp3Url": "media/audio_6CEBD85F_7537_0EDE_41A6_C5CBA14BB3DF.mp3",
   "class": "AudioResource"
  },
  "class": "MediaAudio"
 },
 {
  "data": {
   "label": "Magistrates Court"
  },
  "id": "audio_6CC858D0_7537_0E22_41B8_60A4BD71F642",
  "autoplay": true,
  "audio": {
   "oggUrl": "media/audio_6CC858D0_7537_0E22_41B8_60A4BD71F642.ogg",
   "mp3Url": "media/audio_6CC858D0_7537_0E22_41B8_60A4BD71F642.mp3",
   "class": "AudioResource"
  },
  "class": "MediaAudio"
 },
 {
  "data": {
   "label": "Coronor's Court"
  },
  "id": "audio_6CADE524_7537_0662_41CA_FFB1193DF2EC",
  "autoplay": true,
  "audio": {
   "oggUrl": "media/audio_6CADE524_7537_0662_41CA_FFB1193DF2EC.ogg",
   "mp3Url": "media/audio_6CADE524_7537_0662_41CA_FFB1193DF2EC.mp3",
   "class": "AudioResource"
  },
  "class": "MediaAudio"
 },
 {
  "data": {
   "label": "Supreme Court"
  },
  "id": "audio_6F78A2B4_7539_0262_41D5_2CCCC8280695",
  "autoplay": true,
  "audio": {
   "oggUrl": "media/audio_6F78A2B4_7539_0262_41D5_2CCCC8280695.ogg",
   "mp3Url": "media/audio_6F78A2B4_7539_0262_41D5_2CCCC8280695.mp3",
   "class": "AudioResource"
  },
  "class": "MediaAudio"
 },
 {
  "data": {
   "label": "Youth Court"
  },
  "id": "audio_6F50AFE4_7539_01E2_41C6_F73914D83A32",
  "autoplay": true,
  "audio": {
   "oggUrl": "media/audio_6F50AFE4_7539_01E2_41C6_F73914D83A32.ogg",
   "mp3Url": "media/audio_6F50AFE4_7539_01E2_41C6_F73914D83A32.mp3",
   "class": "AudioResource"
  },
  "class": "MediaAudio"
 },
 {
  "data": {
   "label": "District"
  },
  "id": "audio_6F3BFF82_7539_0226_41C2_66599C3A6694",
  "autoplay": true,
  "audio": {
   "oggUrl": "media/audio_6F3BFF82_7539_0226_41C2_66599C3A6694.ogg",
   "mp3Url": "media/audio_6F3BFF82_7539_0226_41C2_66599C3A6694.mp3",
   "class": "AudioResource"
  },
  "class": "MediaAudio"
 },
 {
  "data": {
   "label": "Case Lists"
  },
  "id": "audio_6F8BCCE5_7539_07E2_41D5_3AE0A92088B9",
  "autoplay": true,
  "audio": {
   "oggUrl": "media/audio_6F8BCCE5_7539_07E2_41D5_3AE0A92088B9.ogg",
   "mp3Url": "media/audio_6F8BCCE5_7539_07E2_41D5_3AE0A92088B9.mp3",
   "class": "AudioResource"
  },
  "class": "MediaAudio"
 },
 {
  "data": {
   "label": "Registry"
  },
  "id": "audio_6E40519A_753B_1E26_41BD_B272A7DDE9D8",
  "autoplay": true,
  "audio": {
   "oggUrl": "media/audio_6E40519A_753B_1E26_41BD_B272A7DDE9D8.ogg",
   "mp3Url": "media/audio_6E40519A_753B_1E26_41BD_B272A7DDE9D8.mp3",
   "class": "AudioResource"
  },
  "class": "MediaAudio"
 },
 {
  "data": {
   "label": "Which court am I headed for-"
  },
  "id": "audio_6FC329A8_753B_0E62_41C5_A28FC5729321",
  "autoplay": true,
  "audio": {
   "oggUrl": "media/audio_6FC329A8_753B_0E62_41C5_A28FC5729321.ogg",
   "mp3Url": "media/audio_6FC329A8_753B_0E62_41C5_A28FC5729321.mp3",
   "class": "AudioResource"
  },
  "class": "MediaAudio"
 },
 {
  "data": {
   "label": "Security Conveyer Belt"
  },
  "id": "audio_6F143763_753B_02E6_41D4_2478BB7D55B8",
  "autoplay": true,
  "audio": {
   "oggUrl": "media/audio_6F143763_753B_02E6_41D4_2478BB7D55B8.ogg",
   "mp3Url": "media/audio_6F143763_753B_02E6_41D4_2478BB7D55B8.mp3",
   "class": "AudioResource"
  },
  "class": "MediaAudio"
 },
 {
  "data": {
   "label": "Lawyers"
  },
  "id": "audio_6949AFB6_753F_026E_41D3_6BFA75B635F8",
  "autoplay": true,
  "audio": {
   "oggUrl": "media/audio_6949AFB6_753F_026E_41D3_6BFA75B635F8.ogg",
   "mp3Url": "media/audio_6949AFB6_753F_026E_41D3_6BFA75B635F8.mp3",
   "class": "AudioResource"
  },
  "class": "MediaAudio"
 },
 {
  "data": {
   "label": "Defendant"
  },
  "id": "audio_6E96826B_753F_02E6_41D5_5F8F0A4811F8",
  "autoplay": true,
  "audio": {
   "oggUrl": "media/audio_6E96826B_753F_02E6_41D5_5F8F0A4811F8.ogg",
   "mp3Url": "media/audio_6E96826B_753F_02E6_41D5_5F8F0A4811F8.mp3",
   "class": "AudioResource"
  },
  "class": "MediaAudio"
 },
 {
  "data": {
   "label": "Gallery"
  },
  "id": "audio_6EB91B7C_753F_02E2_41B2_A72404485268",
  "autoplay": true,
  "audio": {
   "oggUrl": "media/audio_6EB91B7C_753F_02E2_41B2_A72404485268.ogg",
   "mp3Url": "media/audio_6EB91B7C_753F_02E2_41B2_A72404485268.mp3",
   "class": "AudioResource"
  },
  "class": "MediaAudio"
 },
 {
  "data": {
   "label": "Threshold"
  },
  "id": "audio_6815DAA5_7539_0262_41D8_7EB9D202CE02",
  "autoplay": true,
  "audio": {
   "oggUrl": "media/audio_6815DAA5_7539_0262_41D8_7EB9D202CE02.ogg",
   "mp3Url": "media/audio_6815DAA5_7539_0262_41D8_7EB9D202CE02.mp3",
   "class": "AudioResource"
  },
  "class": "MediaAudio"
 },
 {
  "data": {
   "label": "Witness Stand"
  },
  "id": "audio_6841120B_7539_0226_41D1_101BFA33561B",
  "autoplay": true,
  "audio": {
   "oggUrl": "media/audio_6841120B_7539_0226_41D1_101BFA33561B.ogg",
   "mp3Url": "media/audio_6841120B_7539_0226_41D1_101BFA33561B.mp3",
   "class": "AudioResource"
  },
  "class": "MediaAudio"
 },
 {
  "data": {
   "label": "Inside the Courtroom"
  },
  "id": "audio_6840A9D8_7539_0E22_41B8_705C7CB63BDD",
  "autoplay": true,
  "audio": {
   "oggUrl": "media/audio_6840A9D8_7539_0E22_41B8_705C7CB63BDD.ogg",
   "mp3Url": "media/audio_6840A9D8_7539_0E22_41B8_705C7CB63BDD.mp3",
   "class": "AudioResource"
  },
  "class": "MediaAudio"
 },
 {
  "data": {
   "label": "The Bench"
  },
  "id": "audio_68606AF5_7539_03E2_41C1_AF10F0C3AEEA",
  "autoplay": true,
  "audio": {
   "oggUrl": "media/audio_68606AF5_7539_03E2_41C1_AF10F0C3AEEA.ogg",
   "mp3Url": "media/audio_68606AF5_7539_03E2_41C1_AF10F0C3AEEA.mp3",
   "class": "AudioResource"
  },
  "class": "MediaAudio"
 },
 {
  "data": {
   "label": "Chambers"
  },
  "id": "audio_6828B583_7539_0626_41CA_9058C0062757",
  "autoplay": true,
  "audio": {
   "oggUrl": "media/audio_6828B583_7539_0626_41CA_9058C0062757.ogg",
   "mp3Url": "media/audio_6828B583_7539_0626_41CA_9058C0062757.mp3",
   "class": "AudioResource"
  },
  "class": "MediaAudio"
 },
 {
  "data": {
   "label": "Jury Box"
  },
  "id": "audio_55F48311_7539_0222_41D0_EA06BA3EA04B",
  "autoplay": true,
  "audio": {
   "oggUrl": "media/audio_55F48311_7539_0222_41D0_EA06BA3EA04B.ogg",
   "mp3Url": "media/audio_55F48311_7539_0222_41D0_EA06BA3EA04B.mp3",
   "class": "AudioResource"
  },
  "class": "MediaAudio"
 }
], "children": [
 {
  "borderRadius": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarBackgroundOpacity": 1,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipOpacity": 1,
  "height": "100%",
  "borderSize": 0,
  "displayTooltipInTouchScreens": true,
  "progressBorderRadius": 0,
  "playbackBarHeadShadowColor": "#000000",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadBorderRadius": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "paddingLeft": 0,
  "toolTipShadowVerticalLength": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "shadow": false,
  "playbackBarHeadShadowOpacity": 0.7,
  "paddingRight": 0,
  "progressRight": 0,
  "toolTipPaddingBottom": 4,
  "toolTipPaddingRight": 6,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarProgressBorderSize": 0,
  "toolTipFontStyle": "normal",
  "toolTipPaddingTop": 4,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarLeft": 0,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipFontColor": "#606060",
  "progressOpacity": 1,
  "playbackBarBottom": 5,
  "progressBackgroundColorDirection": "vertical",
  "progressBarBackgroundColorDirection": "vertical",
  "propagateClick": false,
  "progressBorderColor": "#000000",
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeadHeight": 15,
  "paddingTop": 0,
  "class": "ViewerArea",
  "progressBarBorderRadius": 0,
  "transitionDuration": 700,
  "id": "MainViewer",
  "width": "100%",
  "playbackBarHeadBorderSize": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipFontSize": "1.11vh",
  "toolTipFontWeight": "normal",
  "toolTipShadowColor": "#333333",
  "playbackBarHeadShadow": true,
  "toolTipFontFamily": "Arial",
  "transitionMode": "blending",
  "playbackBarBorderRadius": 0,
  "paddingBottom": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBackgroundOpacity": 1,
  "minHeight": 50,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarProgressBorderColor": "#000000",
  "progressBarBorderColor": "#000000",
  "playbackBarHeight": 10,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarOpacity": 1,
  "playbackBarHeadWidth": 6,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadOpacity": 1,
  "playbackBarRight": 0,
  "progressBarOpacity": 1,
  "progressBottom": 0,
  "minWidth": 100,
  "toolTipShadowSpread": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "toolTipBorderRadius": 3,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipBorderSize": 1,
  "progressBarBorderSize": 0,
  "toolTipBorderColor": "#767676",
  "toolTipPaddingLeft": 6,
  "progressHeight": 10,
  "toolTipDisplayTime": 600,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressLeft": 0,
  "toolTipTextShadowOpacity": 0,
  "playbackBarBorderSize": 0,
  "data": {
   "name": "Main Viewer"
  },
  "toolTipShadowOpacity": 1,
  "progressBorderSize": 0,
  "toolTipTextShadowColor": "#000000",
  "playbackBarProgressBorderRadius": 0,
  "toolTipShadowBlurRadius": 3,
  "playbackBarProgressOpacity": 1
 },
 {
  "paddingTop": 0,
  "right": "5.94%",
  "class": "IconButton",
  "width": 55.5,
  "id": "IconButton_7AF5BA6B_753B_02E6_4174_3F24322DF7BC",
  "borderRadius": 0,
  "mode": "push",
  "maxWidth": 56,
  "bottom": "9.18%",
  "maxHeight": 56,
  "height": 56,
  "borderSize": 0,
  "horizontalAlign": "center",
  "paddingLeft": 0,
  "paddingBottom": 0,
  "transparencyActive": false,
  "verticalAlign": "middle",
  "minHeight": 1,
  "backgroundOpacity": 0,
  "shadow": false,
  "paddingRight": 0,
  "cursor": "hand",
  "minWidth": 1,
  "iconURL": "skin/IconButton_7AF5BA6B_753B_02E6_4174_3F24322DF7BC.png",
  "data": {
   "name": "IconButton14318"
  },
  "propagateClick": false
 },
 {
  "top": 0,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 350,
   "easing": "cubic_in_out"
  },
  "paddingTop": 0,
  "right": 0,
  "class": "UIComponent",
  "backgroundColor": [
   "#000000"
  ],
  "bottom": 0,
  "id": "veilPopupPanorama",
  "borderRadius": 0,
  "backgroundColorRatios": [
   0
  ],
  "backgroundColorDirection": "vertical",
  "borderSize": 0,
  "visible": false,
  "paddingLeft": 0,
  "paddingBottom": 0,
  "minHeight": 0,
  "backgroundOpacity": 0.55,
  "shadow": false,
  "paddingRight": 0,
  "minWidth": 0,
  "data": {
   "name": "UIComponent59161"
  },
  "propagateClick": false,
  "left": 0
 },
 {
  "top": 0,
  "paddingTop": 0,
  "right": 0,
  "class": "ZoomImage",
  "backgroundColor": [],
  "bottom": 0,
  "id": "zoomImagePopupPanorama",
  "borderRadius": 0,
  "backgroundColorRatios": [],
  "backgroundColorDirection": "vertical",
  "borderSize": 0,
  "visible": false,
  "paddingLeft": 0,
  "paddingBottom": 0,
  "minHeight": 0,
  "backgroundOpacity": 1,
  "shadow": false,
  "paddingRight": 0,
  "minWidth": 0,
  "data": {
   "name": "ZoomImage59162"
  },
  "scaleMode": "custom",
  "propagateClick": false,
  "left": 0
 },
 {
  "iconBeforeLabel": true,
  "top": 10,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 350,
   "easing": "cubic_in_out"
  },
  "paddingTop": 5,
  "right": 10,
  "class": "CloseButton",
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "rollOverIconColor": "#666666",
  "id": "closeButtonPopupPanorama",
  "borderRadius": 0,
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "gap": 5,
  "mode": "push",
  "backgroundColorDirection": "vertical",
  "pressedIconColor": "#888888",
  "iconColor": "#000000",
  "fontFamily": "Arial",
  "borderSize": 0,
  "visible": false,
  "horizontalAlign": "center",
  "paddingLeft": 5,
  "paddingBottom": 5,
  "textDecoration": "none",
  "iconWidth": 20,
  "verticalAlign": "middle",
  "minHeight": 0,
  "backgroundOpacity": 0.3,
  "fontWeight": "normal",
  "shadow": false,
  "iconHeight": 20,
  "fontColor": "#FFFFFF",
  "paddingRight": 5,
  "shadowBlurRadius": 6,
  "cursor": "hand",
  "fontSize": "1.29vh",
  "layout": "horizontal",
  "iconLineWidth": 5,
  "minWidth": 0,
  "fontStyle": "normal",
  "borderColor": "#000000",
  "shadowColor": "#000000",
  "data": {
   "name": "CloseButton59163"
  },
  "label": "",
  "propagateClick": false,
  "shadowSpread": 1
 }
], 
 "paddingTop": 0,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_7AF5BA6B_753B_02E6_4174_3F24322DF7BC], 'cardboardAvailable'); this.mainPlayList.set('selectedIndex', 0)",
 "borderRadius": 0,
 "class": "Player",
 "width": "100%",
 "gap": 10,
 "id": "rootPlayer",
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "mouseWheelEnabled": true,
 "overflow": "visible",
 "creationPolicy": "inAdvance",
 "height": "100%",
 "borderSize": 0,
 "desktopMipmappingEnabled": true,
 "horizontalAlign": "left",
 "vrPolyfillScale": 1,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "minHeight": 20,
 "shadow": false,
 "contentOpaque": false,
 "layout": "absolute",
 "paddingRight": 0,
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "scripts": {
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var caller = playList.get('items')[index].get('media').get('id'); var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getKey": function(key){  return window[key]; },
  "unregisterKey": function(key){  delete window[key]; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } return this.mainPlayList.get('items')[index]; },
  "existsKey": function(key){  return key in window; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "registerKey": function(key, value){  window[key] = value; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); player.bind('stateChange', stateChangeFunction, self); }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } var currentMedia = this.getMediaFromPlayer(item.get('player')); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = item.get('player'); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } }
 },
 "backgroundPreloadEnabled": true,
 "mobileMipmappingEnabled": true,
 "data": {
  "name": "Player437"
 },
 "scrollBarColor": "#000000",
 "propagateClick": false
})