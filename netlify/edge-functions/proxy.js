const CHANNELS = {
  "oneph": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/oneph_sd/default/index.mpd"
  },
  "buko": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/cg_buko_sd/default/index.mpd"
  },
  "sari_sari_final_hour": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/cg_sarisari/default/index.mpd"
  },
  "ptv4": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/cg_ptv4_sd/default/index.mpd"
  },
  "tv5": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/tv5_hd/default1/index.mpd"
  },
  "conv_local_gma_7": {
    "type": "hls",
    "manifest": "https://converse.nathcreqtives.com/channels/gma-7/playlist.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJQSEMtU1ZXRyIsImlhdCI6MTc3OTQ0OTI4OCwiZXhwIjoxNzg0NjE0OTQ4LCJhY2NvdW50RXhwaXJlZCI6ZmFsc2UsImFjY291bnRFeHBpcmVzQXQiOjE3ODQ2MTQ5NDgsImFsbG93ZWRPcmlnaW5zIjpbImh0dHBzOi8vYW1lbGl0di52ZXJjZWwuYXBwIiwiaHR0cHM6Ly9ibGFzdHR2LnZlcmNlbC5hcHAiLCJodHRwczovL2xpdmVib29rdHYudmVyY2VsLmFwcCJdfQ.fmAAroJrr_mujEeJEUt-0SXmGjDVrpsvl-GVYOk03pw"
  },
  "conv_local_anc": {
    "type": "hls",
    "manifest": "https://converse.nathcreqtives.com/channels/anc/playlist.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJQSEMtU1ZXRyIsImlhdCI6MTc3OTQ0OTI4OCwiZXhwIjoxNzg0NjE0OTQ4LCJhY2NvdW50RXhwaXJlZCI6ZmFsc2UsImFjY291bnRFeHBpcmVzQXQiOjE3ODQ2MTQ5NDgsImFsbG93ZWRPcmlnaW5zIjpbImh0dHBzOi8vYW1lbGl0di52ZXJjZWwuYXBwIiwiaHR0cHM6Ly9ibGFzdHR2LnZlcmNlbC5hcHAiLCJodHRwczovL2xpdmVib29rdHYudmVyY2VsLmFwcCJdfQ.fmAAroJrr_mujEeJEUt-0SXmGjDVrpsvl-GVYOk03pw"
  },
  "conv_local_gnn": {
    "type": "hls",
    "manifest": "https://converse.nathcreqtives.com/channels/gnn/playlist.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJQSEMtU1ZXRyIsImlhdCI6MTc3OTQ0OTI4OCwiZXhwIjoxNzg0NjE0OTQ4LCJhY2NvdW50RXhwaXJlZCI6ZmFsc2UsImFjY291bnRFeHBpcmVzQXQiOjE3ODQ2MTQ5NDgsImFsbG93ZWRPcmlnaW5zIjpbImh0dHBzOi8vYW1lbGl0di52ZXJjZWwuYXBwIiwiaHR0cHM6Ly9ibGFzdHR2LnZlcmNlbC5hcHAiLCJodHRwczovL2xpdmVib29rdHYudmVyY2VsLmFwcCJdfQ.fmAAroJrr_mujEeJEUt-0SXmGjDVrpsvl-GVYOk03pw"
  },
  "rptv": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/cnn_rptv_prod_hd/default/index.mpd"
  },
  "wil_tv": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/wiltv/default/index.mpd"
  },
  "conv_local_gtv": {
    "type": "hls",
    "manifest": "https://converse.nathcreqtives.com/channels/gtv/playlist.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJQSEMtU1ZXRyIsImlhdCI6MTc3OTQ0OTI4OCwiZXhwIjoxNzg0NjE0OTQ4LCJhY2NvdW50RXhwaXJlZCI6ZmFsc2UsImFjY291bnRFeHBpcmVzQXQiOjE3ODQ2MTQ5NDgsImFsbG93ZWRPcmlnaW5zIjpbImh0dHBzOi8vYW1lbGl0di52ZXJjZWwuYXBwIiwiaHR0cHM6Ly9ibGFzdHR2LnZlcmNlbC5hcHAiLCJodHRwczovL2xpdmVib29rdHYudmVyY2VsLmFwcCJdfQ.fmAAroJrr_mujEeJEUt-0SXmGjDVrpsvl-GVYOk03pw"
  },
  "ibc13": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/ibc13_sd_new/default/index.mpd"
  },
  "conv_local_all_tv": {
    "type": "hls",
    "manifest": "https://converse.nathcreqtives.com/channels/all-tv/playlist.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJQSEMtU1ZXRyIsImlhdCI6MTc3OTQ0OTI4OCwiZXhwIjoxNzg0NjE0OTQ4LCJhY2NvdW50RXhwaXJlZCI6ZmFsc2UsImFjY291bnRFeHBpcmVzQXQiOjE3ODQ2MTQ5NDgsImFsbG93ZWRPcmlnaW5zIjpbImh0dHBzOi8vYW1lbGl0di52ZXJjZWwuYXBwIiwiaHR0cHM6Ly9ibGFzdHR2LnZlcmNlbC5hcHAiLCJodHRwczovL2xpdmVib29rdHYudmVyY2VsLmFwcCJdfQ.fmAAroJrr_mujEeJEUt-0SXmGjDVrpsvl-GVYOk03pw"
  },
  "conv_local_dzmm_teleradyo": {
    "type": "hls",
    "manifest": "https://converse.nathcreqtives.com/channels/dzmm-teleradyo/playlist.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJQSEMtU1ZXRyIsImlhdCI6MTc3OTQ0OTI4OCwiZXhwIjoxNzg0NjE0OTQ4LCJhY2NvdW50RXhwaXJlZCI6ZmFsc2UsImFjY291bnRFeHBpcmVzQXQiOjE3ODQ2MTQ5NDgsImFsbG93ZWRPcmlnaW5zIjpbImh0dHBzOi8vYW1lbGl0di52ZXJjZWwuYXBwIiwiaHR0cHM6Ly9ibGFzdHR2LnZlcmNlbC5hcHAiLCJodHRwczovL2xpdmVib29rdHYudmVyY2VsLmFwcCJdfQ.fmAAroJrr_mujEeJEUt-0SXmGjDVrpsvl-GVYOk03pw"
  },
  "conv_local_dzrh_tv": {
    "type": "hls",
    "manifest": "https://converse.nathcreqtives.com/channels/dzrh-tv/playlist.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJQSEMtU1ZXRyIsImlhdCI6MTc3OTQ0OTI4OCwiZXhwIjoxNzg0NjE0OTQ4LCJhY2NvdW50RXhwaXJlZCI6ZmFsc2UsImFjY291bnRFeHBpcmVzQXQiOjE3ODQ2MTQ5NDgsImFsbG93ZWRPcmlnaW5zIjpbImh0dHBzOi8vYW1lbGl0di52ZXJjZWwuYXBwIiwiaHR0cHM6Ly9ibGFzdHR2LnZlcmNlbC5hcHAiLCJodHRwczovL2xpdmVib29rdHYudmVyY2VsLmFwcCJdfQ.fmAAroJrr_mujEeJEUt-0SXmGjDVrpsvl-GVYOk03pw"
  },
  "truefm_tv": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/truefm_tv/default/index.mpd"
  },
  "a2z": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/cg_a2z/default/index.mpd"
  },
  "conv_local_solarflix": {
    "type": "hls",
    "manifest": "https://converse.nathcreqtives.com/channels/solarflix/playlist.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJQSEMtU1ZXRyIsImlhdCI6MTc3OTQ0OTI4OCwiZXhwIjoxNzg0NjE0OTQ4LCJhY2NvdW50RXhwaXJlZCI6ZmFsc2UsImFjY291bnRFeHBpcmVzQXQiOjE3ODQ2MTQ5NDgsImFsbG93ZWRPcmlnaW5zIjpbImh0dHBzOi8vYW1lbGl0di52ZXJjZWwuYXBwIiwiaHR0cHM6Ly9ibGFzdHR2LnZlcmNlbC5hcHAiLCJodHRwczovL2xpdmVib29rdHYudmVyY2VsLmFwcCJdfQ.fmAAroJrr_mujEeJEUt-0SXmGjDVrpsvl-GVYOk03pw"
  },
  "conv_local_aliw_channel": {
    "type": "hls",
    "manifest": "https://converse.nathcreqtives.com/channels/aliw-channel/playlist.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJQSEMtU1ZXRyIsImlhdCI6MTc3OTQ0OTI4OCwiZXhwIjoxNzg0NjE0OTQ4LCJhY2NvdW50RXhwaXJlZCI6ZmFsc2UsImFjY291bnRFeHBpcmVzQXQiOjE3ODQ2MTQ5NDgsImFsbG93ZWRPcmlnaW5zIjpbImh0dHBzOi8vYW1lbGl0di52ZXJjZWwuYXBwIiwiaHR0cHM6Ly9ibGFzdHR2LnZlcmNlbC5hcHAiLCJodHRwczovL2xpdmVib29rdHYudmVyY2VsLmFwcCJdfQ.fmAAroJrr_mujEeJEUt-0SXmGjDVrpsvl-GVYOk03pw"
  },
  "bilyonaryo": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/bilyonaryoch/default/index.mpd"
  },
  "conv_local_net_25": {
    "type": "hls",
    "manifest": "https://converse.nathcreqtives.com/channels/net-25/playlist.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJQSEMtU1ZXRyIsImlhdCI6MTc3OTQ0OTI4OCwiZXhwIjoxNzg0NjE0OTQ4LCJhY2NvdW50RXhwaXJlZCI6ZmFsc2UsImFjY291bnRFeHBpcmVzQXQiOjE3ODQ2MTQ5NDgsImFsbG93ZWRPcmlnaW5zIjpbImh0dHBzOi8vYW1lbGl0di52ZXJjZWwuYXBwIiwiaHR0cHM6Ly9ibGFzdHR2LnZlcmNlbC5hcHAiLCJodHRwczovL2xpdmVib29rdHYudmVyY2VsLmFwcCJdfQ.fmAAroJrr_mujEeJEUt-0SXmGjDVrpsvl-GVYOk03pw"
  },
  "conv_local_rjtv_29": {
    "type": "hls",
    "manifest": "https://converse.nathcreqtives.com/channels/rjtv-29/playlist.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJQSEMtU1ZXRyIsImlhdCI6MTc3OTQ0OTI4OCwiZXhwIjoxNzg0NjE0OTQ4LCJhY2NvdW50RXhwaXJlZCI6ZmFsc2UsImFjY291bnRFeHBpcmVzQXQiOjE3ODQ2MTQ5NDgsImFsbG93ZWRPcmlnaW5zIjpbImh0dHBzOi8vYW1lbGl0di52ZXJjZWwuYXBwIiwiaHR0cHM6Ly9ibGFzdHR2LnZlcmNlbC5hcHAiLCJodHRwczovL2xpdmVib29rdHYudmVyY2VsLmFwcCJdfQ.fmAAroJrr_mujEeJEUt-0SXmGjDVrpsvl-GVYOk03pw"
  },
  "tvn_movies_pinoy": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/cg_tvnmovie/default/index.mpd"
  },
  "celestial_movie_pinoy": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/celmovie_pinoy_sd/default/index.mpd"
  },
  "viva_cignal": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/viva_sd/default/index.mpd"
  },
  "conv_local_cinemo": {
    "type": "hls",
    "manifest": "https://converse.nathcreqtives.com/channels/cinemo/playlist.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJQSEMtU1ZXRyIsImlhdCI6MTc3OTQ0OTI4OCwiZXhwIjoxNzg0NjE0OTQ4LCJhY2NvdW50RXhwaXJlZCI6ZmFsc2UsImFjY291bnRFeHBpcmVzQXQiOjE3ODQ2MTQ5NDgsImFsbG93ZWRPcmlnaW5zIjpbImh0dHBzOi8vYW1lbGl0di52ZXJjZWwuYXBwIiwiaHR0cHM6Ly9ibGFzdHR2LnZlcmNlbC5hcHAiLCJodHRwczovL2xpdmVib29rdHYudmVyY2VsLmFwcCJdfQ.fmAAroJrr_mujEeJEUt-0SXmGjDVrpsvl-GVYOk03pw"
  },
  "conv_local_celestial_classic_movies": {
    "type": "hls",
    "manifest": "https://converse.nathcreqtives.com/channels/celestial-classic-movies/playlist.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJQSEMtU1ZXRyIsImlhdCI6MTc3OTQ0OTI4OCwiZXhwIjoxNzg0NjE0OTQ4LCJhY2NvdW50RXhwaXJlZCI6ZmFsc2UsImFjY291bnRFeHBpcmVzQXQiOjE3ODQ2MTQ5NDgsImFsbG93ZWRPcmlnaW5zIjpbImh0dHBzOi8vYW1lbGl0di52ZXJjZWwuYXBwIiwiaHR0cHM6Ly9ibGFzdHR2LnZlcmNlbC5hcHAiLCJodHRwczovL2xpdmVib29rdHYudmVyY2VsLmFwcCJdfQ.fmAAroJrr_mujEeJEUt-0SXmGjDVrpsvl-GVYOk03pw"
  },
  "conv_local_cinema_one": {
    "type": "hls",
    "manifest": "https://converse.nathcreqtives.com/channels/cinema-one/playlist.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJQSEMtU1ZXRyIsImlhdCI6MTc3OTQ0OTI4OCwiZXhwIjoxNzg0NjE0OTQ4LCJhY2NvdW50RXhwaXJlZCI6ZmFsc2UsImFjY291bnRFeHBpcmVzQXQiOjE3ODQ2MTQ5NDgsImFsbG93ZWRPcmlnaW5zIjpbImh0dHBzOi8vYW1lbGl0di52ZXJjZWwuYXBwIiwiaHR0cHM6Ly9ibGFzdHR2LnZlcmNlbC5hcHAiLCJodHRwczovL2xpdmVib29rdHYudmVyY2VsLmFwcCJdfQ.fmAAroJrr_mujEeJEUt-0SXmGjDVrpsvl-GVYOk03pw"
  },
  "tmc_final_hour": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/cg_tagalogmovie/default/index.mpd"
  },
  "thrill": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/cg_thrill_sd/default/index.mpd"
  },
  "game_show_network": {
    "type": "hls",
    "manifest": "https://a-cdn.klowdtv.com/live2/gsn_720p/playlist.m3u8"
  },
  "hits_movies": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/hitsmovies/default/index.mpd"
  },
  "global_trekker": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/globaltrekker/default/index.mpd"
  },
  "travelchannel": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/travel_channel_sd/default/index.mpd"
  },
  "conv_local_metro_channel": {
    "type": "hls",
    "manifest": "https://converse.nathcreqtives.com/channels/metro-channel/playlist.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJQSEMtU1ZXRyIsImlhdCI6MTc3OTQ0OTI4OCwiZXhwIjoxNzg0NjE0OTQ4LCJhY2NvdW50RXhwaXJlZCI6ZmFsc2UsImFjY291bnRFeHBpcmVzQXQiOjE3ODQ2MTQ5NDgsImFsbG93ZWRPcmlnaW5zIjpbImh0dHBzOi8vYW1lbGl0di52ZXJjZWwuYXBwIiwiaHR0cHM6Ly9ibGFzdHR2LnZlcmNlbC5hcHAiLCJodHRwczovL2xpdmVib29rdHYudmVyY2VsLmFwcCJdfQ.fmAAroJrr_mujEeJEUt-0SXmGjDVrpsvl-GVYOk03pw"
  },
  "nickelodeon_sd": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/dr_nickelodeon/default/index.mpd"
  },
  "babytv_mulit_track": {
    "type": "dash",
    "manifest": "https://tvcdn.tv.telia.lt/live/eds/Baby_TV_H/DASH_5_CPIX_NPVR/Baby_TV_H.mpd"
  },
  "24_7_jimjam_2014": {
    "type": "dash",
    "manifest": "https://tvcdn.tv.telia.lt/live/eds/JimJam/DASH_5_CPIX_NPVR/JimJam.mpd"
  },
  "nickelodeon_3bb": {
    "type": "dash",
    "manifest": "https://udn-streamer1.cdn.3bbtv.com:8443/3bb/live/303/303.mpd"
  },
  "animax": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/cg_animax_sd_new/default/index.mpd"
  },
  "nick_toons_sd": {
    "type": "dash",
    "manifest": "https://dash2.antik.sk/stream/hisi_nikctoons/playlist_cbcs.mpd"
  },
  "aniplus": {
    "type": "hls",
    "manifest": "https://amg18481-amg18481c1-amgplt0352.playout.now3.amagi.tv/playlist/amg18481-amg18481c1-amgplt0352/playlist.m3u8"
  },
  "cartoonito": {
    "type": "hls",
    "manifest": "https://cdn4.skygo.mn/live/disk1/Boomerang/HLSv3-FTA/Boomerang.m3u8"
  },
  "nickjr_hd": {
    "type": "dash",
    "manifest": "https://udn-streamer1.cdn.3bbtv.com:8443/3bb/live/304/304.mpd"
  },
  "moonbug_kids": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/cg_moonbug_kids_sd/default/index.mpd"
  },
  "dreamworks_tagalized": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/cg_dreamworktag/default/index.mpd"
  },
  "nick_jr_europe": {
    "type": "dash",
    "manifest": "https://dash2.antik.sk/stream/hisi_nick_jr/playlist_cbcs.mpd"
  },
  "boom_kids": {
    "type": "dash",
    "manifest": "https://cri-streamer3.cdn.3bbtv.com:8443/3bb/live/306/306.mpd"
  },
  "disney_channel_eu": {
    "type": "dash",
    "manifest": "https://tvcdn.tv.telia.lt/live/eds/Disney_Channel_H/DASH_5_CPIX_NPVR/Disney_Channel_H.mpd"
  },
  "disney_junior_eu": {
    "type": "dash",
    "manifest": "https://tvcdn.tv.telia.lt/live/eds/Disney_Junior_H/DASH_5_CPIX_NPVR/Disney_Junior_H.mpd"
  },
  "conv_local_solarsports": {
    "type": "hls",
    "manifest": "https://converse.nathcreqtives.com/channels/solarsports/playlist.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJQSEMtU1ZXRyIsImlhdCI6MTc3OTQ0OTI4OCwiZXhwIjoxNzg0NjE0OTQ4LCJhY2NvdW50RXhwaXJlZCI6ZmFsc2UsImFjY291bnRFeHBpcmVzQXQiOjE3ODQ2MTQ5NDgsImFsbG93ZWRPcmlnaW5zIjpbImh0dHBzOi8vYW1lbGl0di52ZXJjZWwuYXBwIiwiaHR0cHM6Ly9ibGFzdHR2LnZlcmNlbC5hcHAiLCJodHRwczovL2xpdmVib29rdHYudmVyY2VsLmFwcCJdfQ.fmAAroJrr_mujEeJEUt-0SXmGjDVrpsvl-GVYOk03pw"
  },
  "fifa": {
    "type": "hls",
    "manifest": "https://37b4c228.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/UmFrdXRlblRWLWZyX0ZJRkFQbHVzRnJlbmNoX0hMUw/playlist.m3u8"
  },
  "conv_local_edge_sports": {
    "type": "hls",
    "manifest": "https://converse.nathcreqtives.com/channels/edge-sports/playlist.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJQSEMtU1ZXRyIsImlhdCI6MTc3OTQ0OTI4OCwiZXhwIjoxNzg0NjE0OTQ4LCJhY2NvdW50RXhwaXJlZCI6ZmFsc2UsImFjY291bnRFeHBpcmVzQXQiOjE3ODQ2MTQ5NDgsImFsbG93ZWRPcmlnaW5zIjpbImh0dHBzOi8vYW1lbGl0di52ZXJjZWwuYXBwIiwiaHR0cHM6Ly9ibGFzdHR2LnZlcmNlbC5hcHAiLCJodHRwczovL2xpdmVib29rdHYudmVyY2VsLmFwcCJdfQ.fmAAroJrr_mujEeJEUt-0SXmGjDVrpsvl-GVYOk03pw"
  },
  "fight_sports": {
    "type": "hls",
    "manifest": "https://amg19223-amg19223c6-amgplt0351.playout.now3.amagi.tv/playlist/amg19223-amg19223c6-amgplt0351/playlist.m3u8"
  },
  "fox_sports_1": {
    "type": "dash",
    "manifest": "https://otte.live.fly.ww.aiv-cdn.net/dub-nitro/live/dash/enc/oboxe53wyo/out/v1/f7892a9d706d419a846d738fa22ea33e/cenc.mpd"
  },
  "conv_local_filam_tv": {
    "type": "hls",
    "manifest": "https://converse.nathcreqtives.com/channels/filam-tv/playlist.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJQSEMtU1ZXRyIsImlhdCI6MTc3OTQ0OTI4OCwiZXhwIjoxNzg0NjE0OTQ4LCJhY2NvdW50RXhwaXJlZCI6ZmFsc2UsImFjY291bnRFeHBpcmVzQXQiOjE3ODQ2MTQ5NDgsImFsbG93ZWRPcmlnaW5zIjpbImh0dHBzOi8vYW1lbGl0di52ZXJjZWwuYXBwIiwiaHR0cHM6Ly9ibGFzdHR2LnZlcmNlbC5hcHAiLCJodHRwczovL2xpdmVib29rdHYudmVyY2VsLmFwcCJdfQ.fmAAroJrr_mujEeJEUt-0SXmGjDVrpsvl-GVYOk03pw"
  },
  "conv_local_mindanow_network": {
    "type": "hls",
    "manifest": "https://converse.nathcreqtives.com/channels/mindanow-network/playlist.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJQSEMtU1ZXRyIsImlhdCI6MTc3OTQ0OTI4OCwiZXhwIjoxNzg0NjE0OTQ4LCJhY2NvdW50RXhwaXJlZCI6ZmFsc2UsImFjY291bnRFeHBpcmVzQXQiOjE3ODQ2MTQ5NDgsImFsbG93ZWRPcmlnaW5zIjpbImh0dHBzOi8vYW1lbGl0di52ZXJjZWwuYXBwIiwiaHR0cHM6Ly9ibGFzdHR2LnZlcmNlbC5hcHAiLCJodHRwczovL2xpdmVib29rdHYudmVyY2VsLmFwcCJdfQ.fmAAroJrr_mujEeJEUt-0SXmGjDVrpsvl-GVYOk03pw"
  },
  "conv_local_cltv_36": {
    "type": "hls",
    "manifest": "https://converse.nathcreqtives.com/channels/cltv-36/playlist.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJQSEMtU1ZXRyIsImlhdCI6MTc3OTQ0OTI4OCwiZXhwIjoxNzg0NjE0OTQ4LCJhY2NvdW50RXhwaXJlZCI6ZmFsc2UsImFjY291bnRFeHBpcmVzQXQiOjE3ODQ2MTQ5NDgsImFsbG93ZWRPcmlnaW5zIjpbImh0dHBzOi8vYW1lbGl0di52ZXJjZWwuYXBwIiwiaHR0cHM6Ly9ibGFzdHR2LnZlcmNlbC5hcHAiLCJodHRwczovL2xpdmVib29rdHYudmVyY2VsLmFwcCJdfQ.fmAAroJrr_mujEeJEUt-0SXmGjDVrpsvl-GVYOk03pw"
  },
  "rock_entertainment": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/dr_rockentertainment/default/index.mpd"
  },
  "kapatid_channel": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/kapatid_hd/default/index.mpd"
  },
  "axn": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/cg_axn_sd/default/index.mpd"
  },
  "hitsnow": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/cg_hitsnow/default/index.mpd"
  },
  "lifetime": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/dr_lifetime/default/index.mpd"
  },
  "rock_action": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/dr_rockextreme/default/index.mpd"
  },
  "conv_local_tap_tv": {
    "type": "hls",
    "manifest": "https://converse.nathcreqtives.com/channels/tap-tv/playlist.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJQSEMtU1ZXRyIsImlhdCI6MTc3OTQ0OTI4OCwiZXhwIjoxNzg0NjE0OTQ4LCJhY2NvdW50RXhwaXJlZCI6ZmFsc2UsImFjY291bnRFeHBpcmVzQXQiOjE3ODQ2MTQ5NDgsImFsbG93ZWRPcmlnaW5zIjpbImh0dHBzOi8vYW1lbGl0di52ZXJjZWwuYXBwIiwiaHR0cHM6Ly9ibGFzdHR2LnZlcmNlbC5hcHAiLCJodHRwczovL2xpdmVib29rdHYudmVyY2VsLmFwcCJdfQ.fmAAroJrr_mujEeJEUt-0SXmGjDVrpsvl-GVYOk03pw"
  },
  "conv_local_xingkong": {
    "type": "hls",
    "manifest": "https://converse.nathcreqtives.com/channels/xingkong/playlist.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJQSEMtU1ZXRyIsImlhdCI6MTc3OTQ0OTI4OCwiZXhwIjoxNzg0NjE0OTQ4LCJhY2NvdW50RXhwaXJlZCI6ZmFsc2UsImFjY291bnRFeHBpcmVzQXQiOjE3ODQ2MTQ5NDgsImFsbG93ZWRPcmlnaW5zIjpbImh0dHBzOi8vYW1lbGl0di52ZXJjZWwuYXBwIiwiaHR0cHM6Ly9ibGFzdHR2LnZlcmNlbC5hcHAiLCJodHRwczovL2xpdmVib29rdHYudmVyY2VsLmFwcCJdfQ.fmAAroJrr_mujEeJEUt-0SXmGjDVrpsvl-GVYOk03pw"
  },
  "crime_investigation": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/crime_invest/default/index.mpd"
  },
  "lotus_macau": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/lotusmacau_prd/default/index.mpd"
  },
  "conv_local_tap_edge": {
    "type": "hls",
    "manifest": "https://converse.nathcreqtives.com/channels/tap-edge/playlist.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJQSEMtU1ZXRyIsImlhdCI6MTc3OTQ0OTI4OCwiZXhwIjoxNzg0NjE0OTQ4LCJhY2NvdW50RXhwaXJlZCI6ZmFsc2UsImFjY291bnRFeHBpcmVzQXQiOjE3ODQ2MTQ5NDgsImFsbG93ZWRPcmlnaW5zIjpbImh0dHBzOi8vYW1lbGl0di52ZXJjZWwuYXBwIiwiaHR0cHM6Ly9ibGFzdHR2LnZlcmNlbC5hcHAiLCJodHRwczovL2xpdmVib29rdHYudmVyY2VsLmFwcCJdfQ.fmAAroJrr_mujEeJEUt-0SXmGjDVrpsvl-GVYOk03pw"
  },
  "conv_local_phoenix_info_news": {
    "type": "hls",
    "manifest": "https://converse.nathcreqtives.com/channels/phoenix-info-news/playlist.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJQSEMtU1ZXRyIsImlhdCI6MTc3OTQ0OTI4OCwiZXhwIjoxNzg0NjE0OTQ4LCJhY2NvdW50RXhwaXJlZCI6ZmFsc2UsImFjY291bnRFeHBpcmVzQXQiOjE3ODQ2MTQ5NDgsImFsbG93ZWRPcmlnaW5zIjpbImh0dHBzOi8vYW1lbGl0di52ZXJjZWwuYXBwIiwiaHR0cHM6Ly9ibGFzdHR2LnZlcmNlbC5hcHAiLCJodHRwczovL2xpdmVib29rdHYudmVyY2VsLmFwcCJdfQ.fmAAroJrr_mujEeJEUt-0SXmGjDVrpsvl-GVYOk03pw"
  },
  "bloomberg_cignal": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/bloomberg_sd/default/index.mpd"
  },
  "cna": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/channelnewsasia/default/index.mpd"
  },
  "aljazeera": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/dr_aljazeera/default/index.mpd"
  },
  "bbcworldnews": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/bbcworld_news_sd/default/index.mpd"
  },
  "conv_local_dw_news": {
    "type": "hls",
    "manifest": "https://converse.nathcreqtives.com/channels/dw-news/playlist.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJQSEMtU1ZXRyIsImlhdCI6MTc3OTQ0OTI4OCwiZXhwIjoxNzg0NjE0OTQ4LCJhY2NvdW50RXhwaXJlZCI6ZmFsc2UsImFjY291bnRFeHBpcmVzQXQiOjE3ODQ2MTQ5NDgsImFsbG93ZWRPcmlnaW5zIjpbImh0dHBzOi8vYW1lbGl0di52ZXJjZWwuYXBwIiwiaHR0cHM6Ly9ibGFzdHR2LnZlcmNlbC5hcHAiLCJodHRwczovL2xpdmVib29rdHYudmVyY2VsLmFwcCJdfQ.fmAAroJrr_mujEeJEUt-0SXmGjDVrpsvl-GVYOk03pw"
  },
  "discovery_cignal": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/discovery/default/index.mpd"
  },
  "animal_planet": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/cg_animal_planet_sd/default/index.mpd"
  },
  "deped_channel": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/depedch_sd/default/index.mpd"
  },
  "knowledge_channel": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/knowledge_channel/default/index.mpd"
  },
  "conv_local_myx_philippines": {
    "type": "hls",
    "manifest": "https://converse.nathcreqtives.com/channels/myx-philippines/playlist.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJQSEMtU1ZXRyIsImlhdCI6MTc3OTQ0OTI4OCwiZXhwIjoxNzg0NjE0OTQ4LCJhY2NvdW50RXhwaXJlZCI6ZmFsc2UsImFjY291bnRFeHBpcmVzQXQiOjE3ODQ2MTQ5NDgsImFsbG93ZWRPcmlnaW5zIjpbImh0dHBzOi8vYW1lbGl0di52ZXJjZWwuYXBwIiwiaHR0cHM6Ly9ibGFzdHR2LnZlcmNlbC5hcHAiLCJodHRwczovL2xpdmVib29rdHYudmVyY2VsLmFwcCJdfQ.fmAAroJrr_mujEeJEUt-0SXmGjDVrpsvl-GVYOk03pw"
  },
  "conv_local_hallypop": {
    "type": "hls",
    "manifest": "https://converse.nathcreqtives.com/channels/hallypop/playlist.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJQSEMtU1ZXRyIsImlhdCI6MTc3OTQ0OTI4OCwiZXhwIjoxNzg0NjE0OTQ4LCJhY2NvdW50RXhwaXJlZCI6ZmFsc2UsImFjY291bnRFeHBpcmVzQXQiOjE3ODQ2MTQ5NDgsImFsbG93ZWRPcmlnaW5zIjpbImh0dHBzOi8vYW1lbGl0di52ZXJjZWwuYXBwIiwiaHR0cHM6Ly9ibGFzdHR2LnZlcmNlbC5hcHAiLCJodHRwczovL2xpdmVib29rdHYudmVyY2VsLmFwcCJdfQ.fmAAroJrr_mujEeJEUt-0SXmGjDVrpsvl-GVYOk03pw"
  },
  "arirang": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/arirang_sd/default/index.mpd"
  },
  "nhk_japan": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/dr_nhk_japan/default/index.mpd"
  },
  "abcaustralia": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/abc_aus/default/index.mpd"
  },
  "cgtn_english": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/cgtn/default/index.mpd"
  },
  "tv5monde": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/dr_tv5_monde/default/index.mpd"
  },
  "france24": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/france24/default/index.mpd"
  },
  "kbs_world": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/kbsworld/default/index.mpd"
  },
  "conv_local_living_asia_channel": {
    "type": "hls",
    "manifest": "https://converse.nathcreqtives.com/channels/living-asia-channel/playlist.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJQSEMtU1ZXRyIsImlhdCI6MTc3OTQ0OTI4OCwiZXhwIjoxNzg0NjE0OTQ4LCJhY2NvdW50RXhwaXJlZCI6ZmFsc2UsImFjY291bnRFeHBpcmVzQXQiOjE3ODQ2MTQ5NDgsImFsbG93ZWRPcmlnaW5zIjpbImh0dHBzOi8vYW1lbGl0di52ZXJjZWwuYXBwIiwiaHR0cHM6Ly9ibGFzdHR2LnZlcmNlbC5hcHAiLCJodHRwczovL2xpdmVib29rdHYudmVyY2VsLmFwcCJdfQ.fmAAroJrr_mujEeJEUt-0SXmGjDVrpsvl-GVYOk03pw"
  },
  "conv_local_inc_tv": {
    "type": "hls",
    "manifest": "https://converse.nathcreqtives.com/channels/inc-tv/playlist.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJQSEMtU1ZXRyIsImlhdCI6MTc3OTQ0OTI4OCwiZXhwIjoxNzg0NjE0OTQ4LCJhY2NvdW50RXhwaXJlZCI6ZmFsc2UsImFjY291bnRFeHBpcmVzQXQiOjE3ODQ2MTQ5NDgsImFsbG93ZWRPcmlnaW5zIjpbImh0dHBzOi8vYW1lbGl0di52ZXJjZWwuYXBwIiwiaHR0cHM6Ly9ibGFzdHR2LnZlcmNlbC5hcHAiLCJodHRwczovL2xpdmVib29rdHYudmVyY2VsLmFwcCJdfQ.fmAAroJrr_mujEeJEUt-0SXmGjDVrpsvl-GVYOk03pw"
  },
  "conv_local_ewtn": {
    "type": "hls",
    "manifest": "https://converse.nathcreqtives.com/channels/ewtn/playlist.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJQSEMtU1ZXRyIsImlhdCI6MTc3OTQ0OTI4OCwiZXhwIjoxNzg0NjE0OTQ4LCJhY2NvdW50RXhwaXJlZCI6ZmFsc2UsImFjY291bnRFeHBpcmVzQXQiOjE3ODQ2MTQ5NDgsImFsbG93ZWRPcmlnaW5zIjpbImh0dHBzOi8vYW1lbGl0di52ZXJjZWwuYXBwIiwiaHR0cHM6Ly9ibGFzdHR2LnZlcmNlbC5hcHAiLCJodHRwczovL2xpdmVib29rdHYudmVyY2VsLmFwcCJdfQ.fmAAroJrr_mujEeJEUt-0SXmGjDVrpsvl-GVYOk03pw"
  },
  "conv_local_untv": {
    "type": "hls",
    "manifest": "https://converse.nathcreqtives.com/channels/untv/playlist.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJQSEMtU1ZXRyIsImlhdCI6MTc3OTQ0OTI4OCwiZXhwIjoxNzg0NjE0OTQ4LCJhY2NvdW50RXhwaXJlZCI6ZmFsc2UsImFjY291bnRFeHBpcmVzQXQiOjE3ODQ2MTQ5NDgsImFsbG93ZWRPcmlnaW5zIjpbImh0dHBzOi8vYW1lbGl0di52ZXJjZWwuYXBwIiwiaHR0cHM6Ly9ibGFzdHR2LnZlcmNlbC5hcHAiLCJodHRwczovL2xpdmVib29rdHYudmVyY2VsLmFwcCJdfQ.fmAAroJrr_mujEeJEUt-0SXmGjDVrpsvl-GVYOk03pw"
  },
  "conv_local_light_tv": {
    "type": "hls",
    "manifest": "https://converse.nathcreqtives.com/channels/light-tv/playlist.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJQSEMtU1ZXRyIsImlhdCI6MTc3OTQ0OTI4OCwiZXhwIjoxNzg0NjE0OTQ4LCJhY2NvdW50RXhwaXJlZCI6ZmFsc2UsImFjY291bnRFeHBpcmVzQXQiOjE3ODQ2MTQ5NDgsImFsbG93ZWRPcmlnaW5zIjpbImh0dHBzOi8vYW1lbGl0di52ZXJjZWwuYXBwIiwiaHR0cHM6Ly9ibGFzdHR2LnZlcmNlbC5hcHAiLCJodHRwczovL2xpdmVib29rdHYudmVyY2VsLmFwcCJdfQ.fmAAroJrr_mujEeJEUt-0SXmGjDVrpsvl-GVYOk03pw"
  },
  "conv_local_oras_ng_himala": {
    "type": "hls",
    "manifest": "https://converse.nathcreqtives.com/channels/oras-ng-himala/playlist.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJQSEMtU1ZXRyIsImlhdCI6MTc3OTQ0OTI4OCwiZXhwIjoxNzg0NjE0OTQ4LCJhY2NvdW50RXhwaXJlZCI6ZmFsc2UsImFjY291bnRFeHBpcmVzQXQiOjE3ODQ2MTQ5NDgsImFsbG93ZWRPcmlnaW5zIjpbImh0dHBzOi8vYW1lbGl0di52ZXJjZWwuYXBwIiwiaHR0cHM6Ly9ibGFzdHR2LnZlcmNlbC5hcHAiLCJodHRwczovL2xpdmVib29rdHYudmVyY2VsLmFwcCJdfQ.fmAAroJrr_mujEeJEUt-0SXmGjDVrpsvl-GVYOk03pw"
  },
  "conv_local_smni_channel": {
    "type": "hls",
    "manifest": "https://converse.nathcreqtives.com/channels/smni-channel/playlist.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJQSEMtU1ZXRyIsImlhdCI6MTc3OTQ0OTI4OCwiZXhwIjoxNzg0NjE0OTQ4LCJhY2NvdW50RXhwaXJlZCI6ZmFsc2UsImFjY291bnRFeHBpcmVzQXQiOjE3ODQ2MTQ5NDgsImFsbG93ZWRPcmlnaW5zIjpbImh0dHBzOi8vYW1lbGl0di52ZXJjZWwuYXBwIiwiaHR0cHM6Ly9ibGFzdHR2LnZlcmNlbC5hcHAiLCJodHRwczovL2xpdmVib29rdHYudmVyY2VsLmFwcCJdfQ.fmAAroJrr_mujEeJEUt-0SXmGjDVrpsvl-GVYOk03pw"
  },
  "tvmaria": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/tvmaria_prd/default/index.mpd"
  },
  "foodnetwork_hd": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/cg_foodnetwork_hd1/default/index.mpd"
  },
  "hgtv_hd": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/hgtv_hd1/default/index.mpd"
  },
  "asianfoodnetwork": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/asianfoodnetwork_sd/default/index.mpd"
  },
  "fashiontv_hd": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/fashiontvhd/default/index.mpd"
  },
  "conv_local_hbo_fhd": {
    "type": "hls",
    "manifest": "https://converse.nathcreqtives.com/channels/hbo-fhd/playlist.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJQSEMtU1ZXRyIsImlhdCI6MTc3OTQ0OTI4OCwiZXhwIjoxNzg0NjE0OTQ4LCJhY2NvdW50RXhwaXJlZCI6ZmFsc2UsImFjY291bnRFeHBpcmVzQXQiOjE3ODQ2MTQ5NDgsImFsbG93ZWRPcmlnaW5zIjpbImh0dHBzOi8vYW1lbGl0di52ZXJjZWwuYXBwIiwiaHR0cHM6Ly9ibGFzdHR2LnZlcmNlbC5hcHAiLCJodHRwczovL2xpdmVib29rdHYudmVyY2VsLmFwcCJdfQ.fmAAroJrr_mujEeJEUt-0SXmGjDVrpsvl-GVYOk03pw"
  },
  "hbo_hd": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/cg_hbohd/default/index.mpd"
  },
  "hbo_family": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/cg_hbofam/default/index.mpd"
  },
  "cinemax": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/cg_cinemax/default/index.mpd"
  },
  "hbo_signature": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/cg_hbosign/default/index.mpd"
  },
  "hbo_hits": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/cg_hbohits/default/index.mpd"
  },
  "tapmovies_hd": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/cg_tapmovies_hd1/default/index.mpd"
  },
  "mn_hd": {
    "type": "dash",
    "manifest": "https://times-ott-live.akamaized.net/mnplus_wv_drm/index.mpd"
  },
  "asiancrush": {
    "type": "hls",
    "manifest": "https://cineverse.g-mana.live/media/1ebfbe30-c35c-4404-8bc5-0339d750eb58/mainManifest.m3u8"
  },
  "conv_local_tap_action_flix": {
    "type": "hls",
    "manifest": "https://converse.nathcreqtives.com/channels/tap-action-flix/playlist.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJQSEMtU1ZXRyIsImlhdCI6MTc3OTQ0OTI4OCwiZXhwIjoxNzg0NjE0OTQ4LCJhY2NvdW50RXhwaXJlZCI6ZmFsc2UsImFjY291bnRFeHBpcmVzQXQiOjE3ODQ2MTQ5NDgsImFsbG93ZWRPcmlnaW5zIjpbImh0dHBzOi8vYW1lbGl0di52ZXJjZWwuYXBwIiwiaHR0cHM6Ly9ibGFzdHR2LnZlcmNlbC5hcHAiLCJodHRwczovL2xpdmVib29rdHYudmVyY2VsLmFwcCJdfQ.fmAAroJrr_mujEeJEUt-0SXmGjDVrpsvl-GVYOk03pw"
  },
  "mnx_hd": {
    "type": "dash",
    "manifest": "https://times-ott-live.akamaized.net/mnxhd_wv_drm/index.mpd"
  },
  "moviesphere": {
    "type": "hls",
    "manifest": "https://amg00353-lionsgatestudio-moviesphere-xumo-zh5u0.amagi.tv/playlist.m3u8"
  },
  "cartoon_network": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/cartoonnetworkhd/default/index.mpd"
  },
  "dreamworks_hd": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/cg_dreamworks_hd1/default/index.mpd"
  },
  "discovery_kids_hd_mexico": {
    "type": "dash",
    "manifest": "https://zap-live2-ott.izzigo.tv/11/out/u/dash/DISCOVERY-KIDS-HD/default.mpd"
  },
  "minimax": {
    "type": "dash",
    "manifest": "https://dash2.antik.sk/stream/hisi_minimax/playlist_cbcs.mpd"
  },
  "duck_tv": {
    "type": "hls",
    "manifest": "https://dash2.antik.sk/live/duck_tv/index.m3u8"
  },
  "kix_ph": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/kix_hd1/default/index.mpd"
  },
  "warnertv_hd_cignal": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/cg_warnerhd/default/index.mpd"
  },
  "hits_hd": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/hits_hd1/default/index.mpd"
  },
  "tvn_premium_hd": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/cg_tvnpre/default/index.mpd"
  },
  "c_i_slovak": {
    "type": "dash",
    "manifest": "https://dash2.antik.sk/stream/hisi_crime_and_invest/playlist_cbcs.mpd"
  },
  "history_hd": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/dr_historyhd/default/index.mpd"
  },
  "bbcearth_hd": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/cg_bbcearth_hd1/default/index.mpd"
  },
  "one_news_hd": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/onenews_hd1/default/index.mpd"
  },
  "cnn_hd": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/cg_cnnhd/default/index.mpd"
  },
  "conv_local_kapamilya_channel_hd": {
    "type": "hls",
    "manifest": "https://converse.nathcreqtives.com/channels/kapamilya-channel-hd/playlist.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJQSEMtU1ZXRyIsImlhdCI6MTc3OTQ0OTI4OCwiZXhwIjoxNzg0NjE0OTQ4LCJhY2NvdW50RXhwaXJlZCI6ZmFsc2UsImFjY291bnRFeHBpcmVzQXQiOjE3ODQ2MTQ5NDgsImFsbG93ZWRPcmlnaW5zIjpbImh0dHBzOi8vYW1lbGl0di52ZXJjZWwuYXBwIiwiaHR0cHM6Ly9ibGFzdHR2LnZlcmNlbC5hcHAiLCJodHRwczovL2xpdmVib29rdHYudmVyY2VsLmFwcCJdfQ.fmAAroJrr_mujEeJEUt-0SXmGjDVrpsvl-GVYOk03pw"
  },
  "onesports": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/cg_onesports_hd/default/index.mpd"
  },
  "pba_rush": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/cg_pbarush_hd1/default/index.mpd"
  },
  "onesports_plus_hd": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/cg_onesportsplus_hd1/default/index.mpd"
  },
  "nba_tv": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/cgnl_nba/default/index.mpd"
  },
  "uaap": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/cg_uaap_cplay_sd/default/index.mpd"
  },
  "dazn_combat": {
    "type": "hls",
    "manifest": "https://dazn-combat-rakuten.amagi.tv/hls/amagi_hls_data_rakutenAA-dazn-combat-rakuten/CDN/master.m3u8"
  },
  "conv_local_premier_football": {
    "type": "hls",
    "manifest": "https://converse.nathcreqtives.com/channels/premier-football/playlist.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJQSEMtU1ZXRyIsImlhdCI6MTc3OTQ0OTI4OCwiZXhwIjoxNzg0NjE0OTQ4LCJhY2NvdW50RXhwaXJlZCI6ZmFsc2UsImFjY291bnRFeHBpcmVzQXQiOjE3ODQ2MTQ5NDgsImFsbG93ZWRPcmlnaW5zIjpbImh0dHBzOi8vYW1lbGl0di52ZXJjZWwuYXBwIiwiaHR0cHM6Ly9ibGFzdHR2LnZlcmNlbC5hcHAiLCJodHRwczovL2xpdmVib29rdHYudmVyY2VsLmFwcCJdfQ.fmAAroJrr_mujEeJEUt-0SXmGjDVrpsvl-GVYOk03pw"
  },
  "premier_sports_hd": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/cg_ps_hd1/default/index.mpd"
  },
  "premier_sports_2_hd": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/premiersports2hd/default/index.mpd"
  },
  "spotv_hd": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/cg_spotvhd/default/index.mpd"
  },
  "spotv_hd_2": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/dr_spotv2hd/default/index.mpd"
  },
  "conv_local_nhk_bs": {
    "type": "hls",
    "manifest": "https://converse.nathcreqtives.com/channels/nhk-bs/playlist.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJQSEMtU1ZXRyIsImlhdCI6MTc3OTQ0OTI4OCwiZXhwIjoxNzg0NjE0OTQ4LCJhY2NvdW50RXhwaXJlZCI6ZmFsc2UsImFjY291bnRFeHBpcmVzQXQiOjE3ODQ2MTQ5NDgsImFsbG93ZWRPcmlnaW5zIjpbImh0dHBzOi8vYW1lbGl0di52ZXJjZWwuYXBwIiwiaHR0cHM6Ly9ibGFzdHR2LnZlcmNlbC5hcHAiLCJodHRwczovL2xpdmVib29rdHYudmVyY2VsLmFwcCJdfQ.fmAAroJrr_mujEeJEUt-0SXmGjDVrpsvl-GVYOk03pw"
  },
  "pop_tv": {
    "type": "hls",
    "manifest": "https://amg01753-amg01753c6-samsung-au-6678.playouts.now.amagi.tv/1080p/index.m3u8"
  },
  "nickelodeon_global": {
    "type": "dash",
    "manifest": "https://tvcdn.tv.telia.lt/live/eds/Nickelodeon_H/DASH_5_CPIX_NPVR/Nickelodeon_H.mpd"
  },
  "jimjam_select": {
    "type": "dash",
    "manifest": "https://dash3.antik.sk/stream/hisi_jimjam/playlist_cbcs.mpd"
  },
  "jpv_tv": {
    "type": "hls",
    "manifest": "https://jpvtvphilippines_hd.vonnhost.workers.dev/jpv.live.m3u8"
  },
  "blast_movies": {
    "type": "hls",
    "manifest": "https://amg19223-amg19223c7-amgplt0351.playout.now3.amagi.tv/playlist/amg19223-amg19223c7-amgplt0351/playlist.m3u8"
  },
  "sddad": {
    "type": "dash",
    "manifest": "https://tvcdn.tv.telia.lt/live/eds/Boomerang_H/DASH_5_CPIX_NPVR/Boomerang_H.mpd"
  },
  "bein_sports_1": {
    "type": "dash",
    "manifest": "https://otte.live.fly.ww.aiv-cdn.net/syd-nitro/live/clients/dash/enc/ghwcl6hv68/out/v1/83536910d8034e9b9895a20fbe1c1687/cenc.mpd"
  },
  "bein_sports_2": {
    "type": "dash",
    "manifest": "https://otte.live.fly.ww.aiv-cdn.net/syd-nitro/live/clients/dash/enc/8m8cd46i1t/out/v1/83985c68e4174e90a58a1f2c024be4c9/cenc.mpd"
  },
  "sky_sports": {
    "type": "dash",
    "manifest": "https://nog-live1-ott.izzigo.tv/13/out/u/dash/SKY-SPORTS-HD/default.mpd"
  },
  "sky_sports_2": {
    "type": "dash",
    "manifest": "https://nog-live1-ott.izzigo.tv/13/out/u/dash/SKY-SPORTS-21-HD/default.mpd"
  },
  "sky_sports_f1": {
    "type": "dash",
    "manifest": "https://nog-live1-ott.izzigo.tv/8/out/u/dash/F1-HD-H265/default.mpd"
  },
  "sky_live_event_1": {
    "type": "dash",
    "manifest": "https://nog-live1-ott.izzigo.tv/11/out/u/dash/SKY-LIVE-EVENT-1-HD/default.mpd"
  },
  "sky_live_event_2": {
    "type": "dash",
    "manifest": "https://nog-live1-ott.izzigo.tv/15/out/u/dash/SKY-LIVE-EVENT-2-HD/default.mpd"
  },
  "sky_live_event_3": {
    "type": "dash",
    "manifest": "https://nog-live1-ott.izzigo.tv/11/out/u/dash/SKY-LIVE-EVENT-3-HD/default.mpd"
  },
  "sky_live_event_4": {
    "type": "dash",
    "manifest": "https://nog-live1-ott.izzigo.tv/11/out/u/dash/SKY-LIVE-EVENT-4-HD/default.mpd"
  },
  "sky_live_event_5": {
    "type": "dash",
    "manifest": "https://nog-live1-ott.izzigo.tv/12/out/u/dash/SKY-LIVE-EVENT-5-HD/default.mpd"
  },
  "sky_live_event_6": {
    "type": "dash",
    "manifest": "https://nog-live1-ott.izzigo.tv/11/out/u/dash/SKY-LIVE-EVENT-6-HD/default.mpd"
  },
  "sky_live_event_7": {
    "type": "dash",
    "manifest": "https://nog-live1-ott.izzigo.tv/15/out/u/dash/SKY-LIVE-EVENT-7-HD/default.mpd"
  },
  "tennis_channel_2": {
    "type": "hls",
    "manifest": "https://ott.tennischannel.com/live/stream/tennis2/index.m3u8"
  },
  "samsung_zee_one": {
    "type": "hls",
    "manifest": "https://amg17931-zee-amg17931c6-samsung-au-8872.playouts.now.amagi.tv/playlist/amg17931-asiatvusaltdfast-zeeworld-samsungau/playlist.m3u8"
  },
  "hbo_family_thailand": {
    "type": "dash",
    "manifest": "https://cri-streamer3.cdn.3bbtv.com:8443/3bb/live/106/106.mpd"
  },
  "star_movies": {
    "type": "hls",
    "manifest": "https://converse.nathcreqtives.com/channels/star-movies-fhd/playlist.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJQSEMtU1ZXRyIsImlhdCI6MTc3OTQ0OTI4OCwiZXhwIjoxNzg0NjE0OTQ4LCJhY2NvdW50RXhwaXJlZCI6ZmFsc2UsImFjY291bnRFeHBpcmVzQXQiOjE3ODQ2MTQ5NDgsImFsbG93ZWRPcmlnaW5zIjpbImh0dHBzOi8vYW1lbGl0di52ZXJjZWwuYXBwIiwiaHR0cHM6Ly9ibGFzdHR2LnZlcmNlbC5hcHAiLCJodHRwczovL2xpdmVib29rdHYudmVyY2VsLmFwcCJdfQ.fmAAroJrr_mujEeJEUt-0SXmGjDVrpsvl-GVYOk03pw"
  },
  "conv_local_channel_news_asia": {
    "type": "hls",
    "manifest": "https://converse.nathcreqtives.com/channels/channel-news-asia/playlist.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJQSEMtU1ZXRyIsImlhdCI6MTc3OTQ0OTI4OCwiZXhwIjoxNzg0NjE0OTQ4LCJhY2NvdW50RXhwaXJlZCI6ZmFsc2UsImFjY291bnRFeHBpcmVzQXQiOjE3ODQ2MTQ5NDgsImFsbG93ZWRPcmlnaW5zIjpbImh0dHBzOi8vYW1lbGl0di52ZXJjZWwuYXBwIiwiaHR0cHM6Ly9ibGFzdHR2LnZlcmNlbC5hcHAiLCJodHRwczovL2xpdmVib29rdHYudmVyY2VsLmFwcCJdfQ.fmAAroJrr_mujEeJEUt-0SXmGjDVrpsvl-GVYOk03pw"
  },
  "conv_local_kix": {
    "type": "hls",
    "manifest": "https://converse.nathcreqtives.com/channels/kix/playlist.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJQSEMtU1ZXRyIsImlhdCI6MTc3OTQ0OTI4OCwiZXhwIjoxNzg0NjE0OTQ4LCJhY2NvdW50RXhwaXJlZCI6ZmFsc2UsImFjY291bnRFeHBpcmVzQXQiOjE3ODQ2MTQ5NDgsImFsbG93ZWRPcmlnaW5zIjpbImh0dHBzOi8vYW1lbGl0di52ZXJjZWwuYXBwIiwiaHR0cHM6Ly9ibGFzdHR2LnZlcmNlbC5hcHAiLCJodHRwczovL2xpdmVib29rdHYudmVyY2VsLmFwcCJdfQ.fmAAroJrr_mujEeJEUt-0SXmGjDVrpsvl-GVYOk03pw"
  },
  "conv_local_nhk_world_japan": {
    "type": "hls",
    "manifest": "https://converse.nathcreqtives.com/channels/nhk-world-japan/playlist.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJQSEMtU1ZXRyIsImlhdCI6MTc3OTQ0OTI4OCwiZXhwIjoxNzg0NjE0OTQ4LCJhY2NvdW50RXhwaXJlZCI6ZmFsc2UsImFjY291bnRFeHBpcmVzQXQiOjE3ODQ2MTQ5NDgsImFsbG93ZWRPcmlnaW5zIjpbImh0dHBzOi8vYW1lbGl0di52ZXJjZWwuYXBwIiwiaHR0cHM6Ly9ibGFzdHR2LnZlcmNlbC5hcHAiLCJodHRwczovL2xpdmVib29rdHYudmVyY2VsLmFwcCJdfQ.fmAAroJrr_mujEeJEUt-0SXmGjDVrpsvl-GVYOk03pw"
  },
  "star_m": {
    "type": "hls",
    "manifest": "https://lbgo.bozztv.com/ssh101/ssh101/starmchannel/playlist.m3u8"
  },
  "f7202f81_ef00_476e_83aa_71f706cc8588": {
    "type": "dash",
    "manifest": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/cg_hbofam/default/index.mpd"
  }
};

const KEYS = {
  "oneph": {
    "b1c7e9d24f8a4d6c9e337a2f1c5b8d60": "8ff2e524cc1e028f2a4d4925e860c796"
  },
  "buko": {
    "d273c085f2ab4a248e7bfc375229007d": "7932354c3a84f7fc1b80efa6bcea0615"
  },
  "sari_sari_final_hour": {
    "0a7ab3612f434335aa6e895016d8cd2d": "b21654621230ae21714a5cab52daeb9d"
  },
  "ptv4": {
    "71a130a851b9484bb47141c8966fb4a3": "ad1f003b4f0b31b75ea4593844435600"
  },
  "tv5": {
    "2615129ef2c846a9bbd43a641c7303ef": "07c7f996b1734ea288641a68e1cfdc4d"
  },
  "rptv": {
    "1917f4caf2364e6d9b1507326a85ead6": "a1340a251a5aa63a9b0ea5d9d7f67595"
  },
  "wil_tv": {
    "b1773d6f982242cdb0f694546a3db26f": "ae9a90dbea78f564eb98fe817909ec9a"
  },
  "ibc13": {
    "16ecd238c0394592b8d3559c06b1faf5": "05b47ae3be1368912ebe28f87480fc84"
  },
  "truefm_tv": {
    "a4e2b9d61c754f3a8d109b6c2f1e7a55": "1d8d975f0bc2ed90eda138bd31f173f4"
  },
  "a2z": {
    "3f6d8a2c1b7e4c9f8d52a7e1b0c6f93d": "4019f9269b9054a2b9e257b114ebbaf2"
  },
  "bilyonaryo": {
    "227ffaf09bec4a889e0e0988704d52a2": "b2d0dce5c486891997c1c92ddaca2cd2"
  },
  "tvn_movies_pinoy": {
    "2e53f8d8a5e94bca8f9a1e16ce67df33": "3471b2464b5c7b033a03bb8307d9fa35"
  },
  "celestial_movie_pinoy": {
    "0f8537d8412b11edb8780242ac120002": "2ffd7230416150fd5196fd7ea71c36f3"
  },
  "viva_cignal": {
    "07aa813bf2c147748046edd930f7736e": "3bd6688b8b44e96201e753224adfc8fb"
  },
  "tmc_final_hour": {
    "96701d297d1241e492d41c397631d857": "ca2931211c1a261f082a3a2c4fd9f91b"
  },
  "thrill": {
    "928114ffb2394d14b5585258f70ed183": "a82edc340bc73447bac16cdfed0a4c62"
  },
  "hits_movies": {
    "f56b57b32d7e4b2cb21748c0b56761a7": "3df06a89aa01b32655a77d93e09e266f"
  },
  "global_trekker": {
    "b7a6c5d23f1e4a9d8c721e5d9f4a6b13": "63ca9ad0d88fccb8c667b028f47287ba"
  },
  "travelchannel": {
    "f3047fc13d454dacb6db4207ee79d3d3": "bdbd38748f51fc26932e96c9a2020839"
  },
  "nickelodeon_sd": {
    "9ce58f37576b416381b6514a809bfd8b": "f0fbb758cdeeaddfa3eae538856b4d72"
  },
  "babytv_mulit_track": {
    "394594f78351539851a5be97ef9eece0": "a37717a0ed830fb62ece92d68ed1835f"
  },
  "24_7_jimjam_2014": {
    "d3b2f20862fa7f361fc703d8b9bcd340": "f849ca1496a4c3eca2394628c08493d1"
  },
  "nickelodeon_3bb": {
    "9130a6448a74430794d355b48b56a64c": "c2f4d3288cdb43cf81e519ceb414dd6f"
  },
  "animax": {
    "92032b0e41a543fb9830751273b8debd": "03f8b65e2af785b10d6634735dbe6c11"
  },
  "nick_toons_sd": {
    "11223344556677889900112233445566": "4b80724d0ef86bcb2c21f7999d67739d"
  },
  "nickjr_hd": {
    "641c3f0e676d49d18c2082e093380e69": "e06f3a2e327643249c3831ab199c4015"
  },
  "moonbug_kids": {
    "0bf00921bec94a65a124fba1ef52b1cd": "0f1488487cbe05e2badc3db53ae0f29f"
  },
  "dreamworks_tagalized": {
    "564b3b1c781043c19242c66e348699c5": "d3ad27d7fe1f14fb1a2cd5688549fbab"
  },
  "nick_jr_europe": {
    "11223344556677889900112233445566": "4b80724d0ef86bcb2c21f7999d67739d"
  },
  "boom_kids": {
    "bd785e169e7a40c99007d77bc0703563": "b579efb2c703426499a4d9de3fe72800"
  },
  "disney_channel_eu": {
    "ff8085fd9469913a6f11fb3a4dd3a1be": "2496ee469b2d1a19c22271a7b89c29e0"
  },
  "disney_junior_eu": {
    "1ecc83e1cbb1f4c1bd3343845f55b361": "560a022b2d0e0909420fd363101b2e3b"
  },
  "fox_sports_1": {
    "2fbdaa3bea0d0323ae011b318d1db716": "8726ef7eaf5b9dce15fb6aa9f80bd53f"
  },
  "rock_entertainment": {
    "e4ee0cf8ca9746f99af402ca6eed8dc7": "be2a096403346bc1d0bb0f812822bb62"
  },
  "kapatid_channel": {
    "045d103180f64562b1db7c932741c3ba": "c3380548b9075c767a6ae2006ef4bff8"
  },
  "axn": {
    "8a6c2f1e9d7b4c5aa1f04d2b7e9c1f88": "05e6bfa4b6805c46b772f35326b26b36"
  },
  "hitsnow": {
    "f9c3d6b18a2e4d7f9e453b1a8c6d2f70": "ce8874347ec428c624558dcdc3575dd4"
  },
  "lifetime": {
    "cf861d26e7834166807c324d57df5119": "64a81e30f6e5b7547e3516bbf8c647d0"
  },
  "rock_action": {
    "8d2a6f1c9b7e4c3da5f01e7b9c6d2f44": "23841651ebf49fa03fdfcd7b43337f87"
  },
  "crime_investigation": {
    "21e2843b561c4248b8ea487986a16d33": "db6bb638ccdfc1ad1a3e98d728486801"
  },
  "lotus_macau": {
    "60dc692e64ea443a8fb5ac186c865a9b": "01bdbe22d59b2a4504b53adc2f606cc1"
  },
  "bloomberg_cignal": {
    "3b8e6d1f2c9a4f7d9a556c1e7b2d8f90": "09f0bd803966c4befbd239cfa75efe23"
  },
  "cna": {
    "b259df9987364dd3b778aa5d42cb9acd": "753e3dba96ab467e468269e7e33fb813"
  },
  "aljazeera": {
    "7f3d900a04d84492b31fe9f79ac614e3": "d33ff14f50beac42969385583294b8f2"
  },
  "bbcworldnews": {
    "f59650be475e4c34a844d4e2062f71f3": "119639e849ddee96c4cec2f2b6b09b40"
  },
  "discovery_cignal": {
    "d9ac48f5131641a789328257e778ad3a": "b6e67c37239901980c6e37e0607ceee6"
  },
  "animal_planet": {
    "436b69f987924fcbbc06d40a69c2799a": "c63d5b0d7e52335b61aeba4f6537d54d"
  },
  "deped_channel": {
    "0f853706412b11edb8780242ac120002": "2157d6529d80a760f60a8b5350dbc4df"
  },
  "knowledge_channel": {
    "c7d2b1e94f8a4d6c8a106b3d1f9c2e55": "2052f6b844aa53144bb32f0e41295106"
  },
  "arirang": {
    "13815d0fa026441ea7662b0c9de00bcf": "2d99a55743677c3879a068dd9c92f824"
  },
  "nhk_japan": {
    "3d6e9d4de7d7449aadd846b7a684e564": "0800fff80980f47f7ac6bc60b361b0cf"
  },
  "abcaustralia": {
    "d6f1a8c29b7e4d5a8f332c1e9d7b6a90": "790bd17b9e623e832003a993a2de1d87"
  },
  "cgtn_english": {
    "0f854ee4412b11edb8780242ac120002": "9f2c82a74e727deadbda389e18798d55"
  },
  "tv5monde": {
    "fba5a720b4a541b286552899ba86e38b": "f63fa50423148bfcbaa58c91dfcffd0e"
  },
  "france24": {
    "257f9fdeb39d41bdb226c2ae1fbdaeb6": "e80ead0f4f9d6038ab34f332713ceaa5"
  },
  "kbs_world": {
    "22ff2347107e4871aa423bea9c2bd363": "c6e7ba2f48b3a3b8269e8bc360e60404"
  },
  "tvmaria": {
    "fa3998b9a4de40659725ebc5151250d6": "998f1294b122bbf1a96c1ddc0cbb229f"
  },
  "foodnetwork_hd": {
    "4a9d2f7c1e6b4c8d8a55d7b1e3f0c926": "2e62531bdb450480a18197b14f4ebc77"
  },
  "hgtv_hd": {
    "f1e8c2d97a3b4f5d8c669d1a2b7e4c30": "03aaa7dcf893e6b934aeb3c46f9df5b9"
  },
  "asianfoodnetwork": {
    "1619db30b9ed42019abb760a0a3b5e7f": "5921e47fb290ae263291b851c0b4b6e4"
  },
  "fashiontv_hd": {
    "9d7c1f2a6b4e4a8d8f33c1e5b7d2a960": "3a18c535c52db7c79823f59036a9d195"
  },
  "hbo_hd": {
    "c2b7a1e95d4f4c3a8e617f9d0a2b6c18": "27fca1ab042998b0c2f058b0764d7ed4"
  },
  "hbo_family": {
    "872910c843294319800d85f9a0940607": "f79fd895b79c590708cf5e8b5c6263be"
  },
  "cinemax": {
    "b207c44332844523a3a3b0469e5652d7": "fe71aea346db08f8c6fbf0592209f955"
  },
  "hbo_signature": {
    "a06ca6c275744151895762e0346380f5": "559da1b63eec77b5a942018f14d3f56f"
  },
  "hbo_hits": {
    "b04ae8017b5b4601a5a0c9060f6d5b7d": "a8795f3bdb8a4778b7e888ee484cc7a1"
  },
  "tapmovies_hd": {
    "71cbdf02b595468bb77398222e1ade09": "c3f2aa420b8908ab8761571c01899460"
  },
  "mn_hd": {
    "40f019b86241d23ef075633fd7f1e927": "058dec845bd340178a388edd104a015e"
  },
  "mnx_hd": {
    "40f019b86241d23ef075633fd7f1e927": "058dec845bd340178a388edd104a015e"
  },
  "cartoon_network": {
    "a2d1f552ff9541558b3296b5a932136b": "cdd48fa884dc0c3a3f85aeebca13d444"
  },
  "dreamworks_hd": {
    "7b1e9c4d5a2f4d8c9f106d3a8b2c1e77": "8b2904224c6cee13d2d4e06c0a3b2887"
  },
  "discovery_kids_hd_mexico": {
    "9201c07931b74c37c4e30a9e96b64c30": "8e1ce4f1b1185f64e42f9974cbad1442"
  },
  "minimax": {
    "11223344556677889900112233445566": "4b80724d0ef86bcb2c21f7999d67739d"
  },
  "duck_tv": {
    "11223344556677889900112233445566": "4b80724d0ef86bcb2c21f7999d67739d"
  },
  "kix_ph": {
    "a8d5712967cd495ca80fdc425bc61d6b": "f248c29525ed4c40cc39baeee9634735"
  },
  "warnertv_hd_cignal": {
    "d4b7c9f2a1e5643d8b27c0e6a4f1d8b3": "7b4c8a1e9d2f4c6a3b8d1f7e9c5a2d60"
  },
  "hits_hd": {
    "6d2f8a1c9b5e4c7da1f03e7b9d6c2a55": "37c9835795779f8d848a6119d3270c69"
  },
  "tvn_premium_hd": {
    "8e1d3a7f9c5b4a2d8f17c6e2a9d0b435": "b5f1c7348e29649f8dc5147b0a8e2935"
  },
  "c_i_slovak": {
    "11223344556677889900112233445566": "4b80724d0ef86bcb2c21f7999d67739d"
  },
  "history_hd": {
    "a7724b7ca2604c33bb2e963a0319968a": "6f97e3e2eb2bade626e0281ec01d3675"
  },
  "bbcearth_hd": {
    "34ce95b60c424e169619816c5181aded": "0e2a2117d705613542618f58bf26fc8e"
  },
  "one_news_hd": {
    "2e6a9d7c1f4b4c8a8d33c7b1f0a5e924": "4c71e178d090332fbfe72e023b59f6d2"
  },
  "cnn_hd": {
    "900c43f0e02742dd854148b7a75abbec": "da315cca7f2902b4de23199718ed7e90"
  },
  "onesports": {
    "53c3bf2eba574f639aa21f2d4409ff11": "3de28411cf08a64ea935b9578f6d0edd"
  },
  "pba_rush": {
    "d7f1a9c36b2e4f8d9a441c5e7b2d8f60": "fb83c86f600ab945e7e9afed8376eb1e"
  },
  "onesports_plus_hd": {
    "f00bd0122a8a4da1a49ea6c49f7098ad": "a4079f3667ba4c2bcfdeb13e45a6e9c6"
  },
  "nba_tv": {
    "d1f8a0c97b3d4e529a6f2c4b8d7e1f90": "58ab331d14b66bf31aca4284e0a3e536"
  },
  "uaap": {
    "95588338ee37423e99358a6d431324b9": "6e0f50a12f36599a55073868f814e81e"
  },
  "premier_sports_hd": {
    "b8b595299fdf41c1a3481fddeb0b55e4": "cd2b4ad0eb286239a4a022e6ca5fd007"
  },
  "premier_sports_2_hd": {
    "59454adb530b4e0784eae62735f9d850": "61100d0b8c4dd13e4eb8b4851ba192cc"
  },
  "spotv_hd": {
    "ec7ee27d83764e4b845c48cca31c8eef": "9c0e4191203fccb0fde34ee29999129e"
  },
  "spotv_hd_2": {
    "7eea72d6075245a99ee3255603d58853": "6848ef60575579bf4d415db1032153ed"
  },
  "nickelodeon_global": {
    "40557a1738018d4dd815e79f2cfc6b30": "3967abe5845e8c4fffbd2f4cd4b77f0a"
  },
  "jimjam_select": {
    "11223344556677889900112233445566": "4b80724d0ef86bcb2c21f7999d67739d"
  },
  "sddad": {
    "3a856d452dd69992b36df3b383a3e87b": "178bafe3ab33052c81276e71d3496715"
  },
  "bein_sports_1": {
    "335DAD778109954503DCBB21DC92015F": "24bfd75d436cbf73168a2a2dccd40281"
  },
  "bein_sports_2": {
    "0b42be2664d7e811d04f3e504e0924c5": "ae24090123b8c72ac5404dc152847cb8"
  },
  "sky_sports": {
    "335511dfdf0d03bc06f1fdead5870b5a": "1a022fb33ad3de4d4579b04966551488"
  },
  "sky_sports_2": {
    "99909032389c6ee41c3d2f3ec829f804": "41fbc575c8ef1cdac1dca990c9a0df9d"
  },
  "sky_sports_f1": {
    "ae7f16191e2adfaacd9b536ed58a298a": "3319b3ca5cd6f0af2f3d4bd9a7630a8b"
  },
  "sky_live_event_1": {
    "a3636a51227fa338cdddf5892d8a621c": "1444ee3c4d08bf39454b914f797968eb"
  },
  "sky_live_event_2": {
    "7239a58fb7388b222a834d549bf18d8f": "8b04a883e88dbdebc43673d998ea1cb2"
  },
  "sky_live_event_3": {
    "561a21ad50f806b77d328dedbe59f93e": "edf3e70cc9de81a73e2a00fe9c0611a8"
  },
  "sky_live_event_4": {
    "a931b2e953695ffb0cfd38573e97ba33": "4ddd99cc4fb168d7f0e20be8a3287100"
  },
  "sky_live_event_5": {
    "6c89e84c52eae0428b7d2c8e887a48ec": "758a1484f920a0f1aa73e95d5f2be225"
  },
  "sky_live_event_6": {
    "ec7229067cde06e0bedaa0d71ec0c974": "da03b65d333e74aaae446211a83c7595"
  },
  "sky_live_event_7": {
    "d9e3024854648dd01714f781c1492c4c": "9404541975d298f6787c591d2cc871b1"
  },
  "hbo_family_thailand": {
    "07b138f30ad3441ca5a2f476e550af25": "826ee4deef4b45cfafd5f79a591b15c6"
  },
  "f7202f81_ef00_476e_83aa_71f706cc8588": {
    "872910c8432943198000d85f9a0940607": "f79fd895b79c590708cf5e8b5c6263be"
  }
};

const NAMES = {
  "oneph": "One PH",
  "buko": "BuKO",
  "sari_sari_final_hour": "Sari Sari (Final Hour)",
  "ptv4": "PTV 4",
  "tv5": "TV5",
  "conv_local_gma_7": "GMA 7",
  "conv_local_anc": "ANC",
  "conv_local_gnn": "GNN",
  "rptv": "RPTV",
  "wil_tv": "RESERVED",
  "conv_local_gtv": "GTV",
  "ibc13": "IBC 13",
  "conv_local_all_tv": "ALL TV",
  "conv_local_dzmm_teleradyo": "DZMM Teleradyo",
  "conv_local_dzrh_tv": "DZRH TV",
  "truefm_tv": "True FM TV",
  "a2z": "A2Z SD",
  "conv_local_solarflix": "Solarflix",
  "conv_local_aliw_channel": "Aliw Channel",
  "bilyonaryo": "Bilyonaryo Channel",
  "conv_local_net_25": "NET 25",
  "conv_local_rjtv_29": "RJTV 29",
  "tvn_movies_pinoy": "TVN Movies Pinoy",
  "celestial_movie_pinoy": "Celestial Movie Pinoy",
  "viva_cignal": "VivaCinema",
  "conv_local_cinemo": "Cinemo!",
  "conv_local_celestial_classic_movies": "Celestial Classic Movies",
  "conv_local_cinema_one": "C1",
  "tmc_final_hour": "TMC (Final Hour)",
  "thrill": "Thrill",
  "game_show_network": "Game Show Network",
  "hits_movies": "Hits Movies",
  "global_trekker": "Global Trekker",
  "travelchannel": "Travel Channel",
  "conv_local_metro_channel": "Metro Channel",
  "nickelodeon_sd": "Nickelodeon SD",
  "babytv_mulit_track": "BabyTV Mulit Track",
  "24_7_jimjam_2014": "JimJam Pan-European feed",
  "nickelodeon_3bb": "Nickelodeon",
  "animax": "Animax",
  "nick_toons_sd": "Nick Toons SD",
  "aniplus": "ANIPLUS",
  "cartoonito": "Cartoonito",
  "nickjr_hd": "Nick Jr",
  "moonbug_kids": "Moonbug Kids",
  "dreamworks_tagalized": "DreamWorks Tagalized",
  "nick_jr_europe": "Nick JR Europe",
  "boom_kids": "Boom",
  "disney_channel_eu": "Disney Channel",
  "disney_junior_eu": "Disney Junior (EU)",
  "conv_local_solarsports": "SolarSports",
  "fifa": "FIFA+",
  "conv_local_edge_sports": "Edge Sports",
  "fight_sports": "Fight Sports",
  "fox_sports_1": "Fox Sports 1",
  "conv_local_filam_tv": "Filam TV",
  "conv_local_mindanow_network": "Mindanow Network",
  "conv_local_cltv_36": "CLTV 36",
  "rock_entertainment": "Rock Entertainment",
  "kapatid_channel": "Kapatid Channel",
  "axn": "AXN",
  "hitsnow": "HitsNow",
  "lifetime": "Lifetime",
  "rock_action": "Rock Action",
  "conv_local_tap_tv": "Tap TV",
  "conv_local_xingkong": "Xingkong",
  "crime_investigation": "Crime + Investigation",
  "lotus_macau": "Lotus Macau",
  "conv_local_tap_edge": "Tap Edge",
  "conv_local_phoenix_info_news": "Phoenix Info News",
  "bloomberg_cignal": "Bloomberg TV",
  "cna": "Channel NewsAsia",
  "aljazeera": "Al Jazeera English",
  "bbcworldnews": "BBC World News",
  "conv_local_dw_news": "DW News",
  "discovery_cignal": "Discovery Channel",
  "animal_planet": "Animal Planet",
  "deped_channel": "DepEd Channel",
  "knowledge_channel": "Knowledge Channel",
  "conv_local_myx_philippines": "MYX Philippines",
  "conv_local_hallypop": "Hallypop",
  "arirang": "Arirang",
  "nhk_japan": "NHK Japan",
  "abcaustralia": "ABC Australia",
  "cgtn_english": "CGTN English",
  "tv5monde": "TV5 Monde",
  "france24": "France 24",
  "kbs_world": "KBS World",
  "conv_local_living_asia_channel": "Living Asia Channel",
  "conv_local_inc_tv": "INC TV",
  "conv_local_ewtn": "EWTN",
  "conv_local_untv": "UNTV",
  "conv_local_light_tv": "Light TV",
  "conv_local_oras_ng_himala": "Oras Ng Himala",
  "conv_local_smni_channel": "SMNI Channel",
  "tvmaria": "TV Maria",
  "foodnetwork_hd": "Food Network HD",
  "hgtv_hd": "HGTV HD",
  "asianfoodnetwork": "Asian Food Network",
  "fashiontv_hd": "FashionTV HD",
  "conv_local_hbo_fhd": "HBO FHD",
  "hbo_hd": "HBO HD",
  "hbo_family": "HBO Family",
  "cinemax": "Cinemax",
  "hbo_signature": "HBO Signature",
  "hbo_hits": "HBO Hits",
  "tapmovies_hd": "TAP Movies HD",
  "mn_hd": "MN+ HD",
  "asiancrush": "Asiancrush",
  "conv_local_tap_action_flix": "Tap Action Flix",
  "mnx_hd": "MNX HD",
  "moviesphere": "MovieSphere",
  "cartoon_network": "Cartoon Network",
  "dreamworks_hd": "DreamWorks HD",
  "discovery_kids_hd_mexico": "Discovery Kids HD Mexico",
  "minimax": "Minimax",
  "duck_tv": "Duck TV",
  "kix_ph": "KIX Philippines",
  "warnertv_hd_cignal": "Warner TV HD",
  "hits_hd": "Hits HD",
  "tvn_premium_hd": "TVN Premium HD",
  "c_i_slovak": "C + I Slovak",
  "history_hd": "History HD (Updated)",
  "bbcearth_hd": "BBC Earth HD",
  "one_news_hd": "One News HD",
  "cnn_hd": "CNN HD",
  "conv_local_kapamilya_channel_hd": "Kapamilya Channel HD",
  "onesports": "One Sports",
  "pba_rush": "PBA Rush",
  "onesports_plus_hd": "One Sports Plus HD",
  "nba_tv": "NBA TV Philippines",
  "uaap": "UAAP",
  "dazn_combat": "DAZN COMBAT",
  "conv_local_premier_football": "Premier Football",
  "premier_sports_hd": "Premier Sports HD",
  "premier_sports_2_hd": "Premier Sports 2 HD",
  "spotv_hd": "Spotv 1",
  "spotv_hd_2": "SPOTV HD 2",
  "conv_local_nhk_bs": "NHK BS",
  "pop_tv": "POP TV Rebroadcast",
  "nickelodeon_global": "CHANNEL (N I C K) Multi Track",
  "jimjam_select": "JimJam CEE",
  "jpv_tv": "JPV TV",
  "blast_movies": "Blast Movies",
  "sddad": "Cartoonito Europe",
  "bein_sports_1": "beIN SPORTS 1",
  "bein_sports_2": "beIN SPORTS 2",
  "sky_sports": "Sky Sports",
  "sky_sports_2": "Sky Sports 2",
  "sky_sports_f1": "Sky Sports F1",
  "sky_live_event_1": "Sky Live Event 1",
  "sky_live_event_2": "Sky Live Event 2",
  "sky_live_event_3": "Sky Live Event 3",
  "sky_live_event_4": "Sky Live Event 4",
  "sky_live_event_5": "Sky Live Event 5",
  "sky_live_event_6": "Sky Live Event 6",
  "sky_live_event_7": "Sky Live Event 7",
  "tennis_channel_2": "Tennis Channel 2",
  "samsung_zee_one": "Samsung / Zee One",
  "hbo_family_thailand": "HBO Family Thailand",
  "star_movies": "Star Movies",
  "conv_local_channel_news_asia": "Channel News Asia (Converge)",
  "conv_local_kix": "KIX (Converge)",
  "conv_local_nhk_world_japan": "NHK World Japan (Converge)",
  "star_m": "Star M",
  "f7202f81_ef00_476e_83aa_71f706cc8588": "HBO Family BPK"
};

const GROUPS = {
  "oneph": "Entertainment",
  "buko": "Entertainment",
  "sari_sari_final_hour": "Entertainment",
  "ptv4": "News",
  "tv5": "Entertainment",
  "conv_local_gma_7": "Entertainment",
  "conv_local_anc": "News",
  "conv_local_gnn": "News",
  "rptv": "News",
  "wil_tv": "Entertainment",
  "conv_local_gtv": "Entertainment",
  "ibc13": "Entertainment",
  "conv_local_all_tv": "Entertainment",
  "conv_local_dzmm_teleradyo": "Entertainment",
  "conv_local_dzrh_tv": "News",
  "truefm_tv": "Entertainment",
  "a2z": "Entertainment",
  "conv_local_solarflix": "Movies",
  "conv_local_aliw_channel": "Entertainment",
  "bilyonaryo": "News",
  "conv_local_net_25": "Entertainment",
  "conv_local_rjtv_29": "Entertainment",
  "tvn_movies_pinoy": "Movies",
  "celestial_movie_pinoy": "Movies",
  "viva_cignal": "Movies",
  "conv_local_cinemo": "Movies",
  "conv_local_celestial_classic_movies": "Movies",
  "conv_local_cinema_one": "Movies",
  "tmc_final_hour": "Movies",
  "thrill": "Movies",
  "game_show_network": "Entertainment",
  "hits_movies": "Movies",
  "global_trekker": "Documentary",
  "travelchannel": "Documentary",
  "conv_local_metro_channel": "Entertainment",
  "nickelodeon_sd": "Kids",
  "babytv_mulit_track": "Kids",
  "24_7_jimjam_2014": "Kids",
  "nickelodeon_3bb": "Kids",
  "animax": "Anime",
  "nick_toons_sd": "Kids",
  "aniplus": "Anime",
  "cartoonito": "Kids",
  "nickjr_hd": "Kids",
  "moonbug_kids": "Kids",
  "dreamworks_tagalized": "Kids",
  "nick_jr_europe": "Kids",
  "boom_kids": "Kids",
  "disney_channel_eu": "Kids",
  "disney_junior_eu": "Kids",
  "conv_local_solarsports": "Sports",
  "fifa": "Sports",
  "conv_local_edge_sports": "Sports",
  "fight_sports": "Sports",
  "fox_sports_1": "Sports",
  "conv_local_filam_tv": "Entertainment",
  "conv_local_mindanow_network": "Entertainment",
  "conv_local_cltv_36": "Entertainment",
  "rock_entertainment": "Entertainment",
  "kapatid_channel": "Entertainment",
  "axn": "Entertainment",
  "hitsnow": "Entertainment",
  "lifetime": "Entertainment",
  "rock_action": "Entertainment",
  "conv_local_tap_tv": "Entertainment",
  "conv_local_xingkong": "Chinese",
  "crime_investigation": "Documentary",
  "lotus_macau": "Chinese",
  "conv_local_tap_edge": "Movies",
  "conv_local_phoenix_info_news": "Chinese",
  "bloomberg_cignal": "News",
  "cna": "News",
  "aljazeera": "News",
  "bbcworldnews": "News",
  "conv_local_dw_news": "News",
  "discovery_cignal": "Documentary",
  "animal_planet": "Documentary",
  "deped_channel": "Educational",
  "knowledge_channel": "Educational",
  "conv_local_myx_philippines": "Music",
  "conv_local_hallypop": "Korean",
  "arirang": "Korean",
  "nhk_japan": "Japanese",
  "abcaustralia": "News",
  "cgtn_english": "Chinese",
  "tv5monde": "Entertainment",
  "france24": "News",
  "kbs_world": "Korean",
  "conv_local_living_asia_channel": "Entertainment",
  "conv_local_inc_tv": "Religious",
  "conv_local_ewtn": "Religious",
  "conv_local_untv": "Religious",
  "conv_local_light_tv": "Religious",
  "conv_local_oras_ng_himala": "Religious",
  "conv_local_smni_channel": "Religious",
  "tvmaria": "Religious",
  "foodnetwork_hd": "Lifestyle",
  "hgtv_hd": "Lifestyle",
  "asianfoodnetwork": "Lifestyle",
  "fashiontv_hd": "Lifestyle",
  "conv_local_hbo_fhd": "Movies",
  "hbo_hd": "Movies",
  "hbo_family": "Movies",
  "cinemax": "Movies",
  "hbo_signature": "Movies",
  "hbo_hits": "Movies",
  "tapmovies_hd": "Movies",
  "mn_hd": "Movies",
  "asiancrush": "Movies",
  "conv_local_tap_action_flix": "Movies",
  "mnx_hd": "Movies",
  "moviesphere": "Movies",
  "cartoon_network": "Kids",
  "dreamworks_hd": "Kids",
  "discovery_kids_hd_mexico": "Kids",
  "minimax": "Kids",
  "duck_tv": "Kids",
  "kix_ph": "Entertainment",
  "warnertv_hd_cignal": "Entertainment",
  "hits_hd": "Entertainment",
  "tvn_premium_hd": "Entertainment",
  "c_i_slovak": "Documentary",
  "history_hd": "Documentary",
  "bbcearth_hd": "Documentary",
  "one_news_hd": "News",
  "cnn_hd": "News",
  "conv_local_kapamilya_channel_hd": "Entertainment",
  "onesports": "Sports",
  "pba_rush": "Sports",
  "onesports_plus_hd": "Sports",
  "nba_tv": "Sports",
  "uaap": "Sports",
  "dazn_combat": "Sports",
  "conv_local_premier_football": "Sports",
  "premier_sports_hd": "Sports",
  "premier_sports_2_hd": "Sports",
  "spotv_hd": "Sports",
  "spotv_hd_2": "Sports",
  "conv_local_nhk_bs": "Japanese",
  "pop_tv": "Kids",
  "nickelodeon_global": "Kids",
  "jimjam_select": "Kids",
  "jpv_tv": "Entertainment",
  "blast_movies": "Movies",
  "sddad": "Kids",
  "bein_sports_1": "Sports",
  "bein_sports_2": "Sports",
  "sky_sports": "Sports",
  "sky_sports_2": "Sports",
  "sky_sports_f1": "Sports",
  "sky_live_event_1": "Sports",
  "sky_live_event_2": "Sports",
  "sky_live_event_3": "Sports",
  "sky_live_event_4": "Sports",
  "sky_live_event_5": "Sports",
  "sky_live_event_6": "Sports",
  "sky_live_event_7": "Sports",
  "tennis_channel_2": "Sports",
  "samsung_zee_one": "Entertainment",
  "hbo_family_thailand": "Movies",
  "star_movies": "Movies",
  "conv_local_channel_news_asia": "News",
  "conv_local_kix": "Entertainment",
  "conv_local_nhk_world_japan": "Japanese",
  "star_m": "Music",
  "f7202f81_ef00_476e_83aa_71f706cc8588": "Kids"
};

function corsHeaders(contentType) {
  const headers = new Headers();
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Range,Content-Type,Origin,Referer,User-Agent");
  headers.set("Access-Control-Expose-Headers", "Content-Length,Content-Range,Accept-Ranges");
  if (contentType) headers.set("Content-Type", contentType);
  return headers;
}

function copyProxyHeaders(sourceHeaders, contentType) {
  const headers = new Headers(sourceHeaders);
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Range,Content-Type,Origin,Referer,User-Agent");
  headers.set("Access-Control-Expose-Headers", "Content-Length,Content-Range,Accept-Ranges");
  headers.delete("Content-Security-Policy");
  headers.delete("Content-Security-Policy-Report-Only");
  headers.delete("X-Frame-Options");
  headers.delete("Cross-Origin-Resource-Policy");
  if (contentType) headers.set("Content-Type", contentType);
  return headers;
}

function makeUpstreamHeaders(request) {
  const headers = new Headers();
  const range = request.headers.get("Range");
  if (range) headers.set("Range", range);
  const ua = request.headers.get("User-Agent");
  if (ua) headers.set("User-Agent", ua);
  return headers;
}

function proxiedAbsoluteUrl(proxyBase, absoluteUrl) {
  return proxyBase + "abs?__u=" + encodeURIComponent(absoluteUrl);
}


function rewriteMpdXml(xml, upstream, proxyBase) {
  const manifestBase = new URL(".", upstream).toString();

  // Only rewrite BaseURL nodes. Do NOT rewrite SegmentTemplate media/initialization
  // attributes because DASH templates often contain $RepresentationID$, $Number$, etc.
  return xml.replace(/<BaseURL>([^<]*)<\/BaseURL>/g, (_match, value) => {
    const trimmed = value.trim();
    if (!trimmed || trimmed.startsWith("data:") || trimmed.startsWith("urn:")) {
      return _match;
    }

    let absolute;
    try {
      absolute = new URL(trimmed, manifestBase).href;
    } catch {
      return _match;
    }

    let proxied;
    if (absolute.startsWith(manifestBase)) {
      proxied = proxyBase + absolute.slice(manifestBase.length);
    } else {
      proxied = proxiedAbsoluteUrl(proxyBase, absolute);
    }

    proxied = proxied
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    return `<BaseURL>${proxied}</BaseURL>`;
  });
}

function getChannel(id) {
  if (CHANNELS[id]) return [id, CHANNELS[id]];
  const underscore = id.replace(/-/g, "_");
  if (CHANNELS[underscore]) return [underscore, CHANNELS[underscore]];
  const hyphen = id.replace(/_/g, "-");
  if (CHANNELS[hyphen]) return [hyphen, CHANNELS[hyphen]];
  return [id, null];
}

export default async function handler(request, context) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders() });
    }

    const parts = url.pathname.split("/").filter(Boolean);
    const first = parts[0] || "";

    if (first === "debug") {
      return new Response(JSON.stringify({
        ok: true,
        path: url.pathname,
        parts,
        channelCount: Object.keys(CHANNELS).length,
        hasOneph: Boolean(CHANNELS.oneph),
        onephManifest: CHANNELS.oneph && CHANNELS.oneph.manifest
      }, null, 2), {
        status: 200,
        headers: corsHeaders("application/json; charset=utf-8")
      });
    }

    if (first === "finaloutputvin" || first === "exportvin") {
      const origin = url.origin;
      let output = "#EXTM3U\n";

      for (const cid of Object.keys(CHANNELS)) {
        const channel = CHANNELS[cid];
        const displayName = NAMES[cid] || cid;
        const safeName = displayName.replace(/"/g, '\\"');
        const safeGroup = (GROUPS[cid] || "").replace(/"/g, '\\"');

        output += `#EXTINF:-1 tvg-id="${cid}" tvg-name="${safeName}" group-title="${safeGroup}",${displayName}\n`;

        if (channel.type === "dash") {
          const keyData = KEYS[cid];

          if (keyData) {
            output += "#KODIPROP:inputstreamaddon=inputstream.adaptive\n";
            output += "#KODIPROP:inputstream.adaptive.manifest_type=mpd\n";
            output += "#KODIPROP:inputstream.adaptive.license_type=clearkey\n";

            if (typeof keyData === "string") {
              output += `#KODIPROP:inputstream.adaptive.license_key=${keyData}\n`;
            } else {
              const kid = Object.keys(keyData)[0];
              output += `#KODIPROP:inputstream.adaptive.license_key=${kid}:${keyData[kid]}\n`;
            }
          }

          output += `${origin}/${cid}/cplaymax/manifest.mpd\n\n`;
        } else if (channel.type === "hls") {
          const manifestUrl = new URL(channel.manifest);
          output += `${origin}/${cid}/cplaymax/playlist.m3u8${manifestUrl.search}\n\n`;
        } else {
          output += `${channel.manifest}\n\n`;
        }
      }

      return new Response(output, {
        status: 200,
        headers: corsHeaders("application/vnd.apple.mpegurl; charset=utf-8")
      });
    }

    if (!first) {
      return new Response("Not Found", { status: 404, headers: corsHeaders("text/plain; charset=utf-8") });
    }

    const [cid, channel] = getChannel(first);
    if (!channel) {
      return new Response("Channel not found", { status: 404, headers: corsHeaders("text/plain; charset=utf-8") });
    }

    let remainder = "";
    if (parts.length > 2) {
      remainder = parts.slice(2).join("/");
    }

    const proxyBase = `${url.origin}/${cid}/cplaymax/`;

    if (remainder === "abs" && url.searchParams.has("__u")) {
      const target = new URL(url.searchParams.get("__u"));
      for (const [k, v] of url.searchParams) {
        if (k !== "__u" && !target.searchParams.has(k)) target.searchParams.set(k, v);
      }

      const upstreamResponse = await fetch(target.toString(), {
        method: request.method === "HEAD" ? "HEAD" : "GET",
        headers: makeUpstreamHeaders(request)
      });

      const headers = copyProxyHeaders(upstreamResponse.headers);
      return new Response(upstreamResponse.body, { status: upstreamResponse.status, headers });
    }

    const isManifestRequest =
      !remainder ||
      remainder === "manifest.mpd" ||
      remainder === "playlist.m3u8";

    const upstream = isManifestRequest
      ? new URL(channel.manifest)
      : new URL(remainder, channel.manifest);

    for (const [k, v] of url.searchParams) {
      if (k !== "__u") upstream.searchParams.set(k, v);
    }

    const upstreamRequestHeaders = makeUpstreamHeaders(request);

    // MPD manifest requests must be normal full requests.
    // HLS is untouched.
    if (channel.type === "dash" && isManifestRequest) {
      upstreamRequestHeaders.delete("Range");
    }

    const upstreamResponse = await fetch(upstream.toString(), {
      method: request.method === "HEAD" ? "HEAD" : "GET",
      headers: upstreamRequestHeaders
    });

    const responseHeaders = copyProxyHeaders(upstreamResponse.headers);

    if (request.method === "HEAD") {
      return new Response(null, { status: upstreamResponse.status, headers: responseHeaders });
    }

    if (channel.type === "dash" && isManifestRequest) {
      // MPD FIX ONLY. HLS below is untouched.
      // Read as text so Cloudflare does not forward mismatched encoding/range headers.
      let manifest = await upstreamResponse.text();

      // If the upstream is not XML, expose the upstream error instead of returning a broken MPD.
      if (!upstreamResponse.ok || !manifest.trim().startsWith("<")) {
        const headers = corsHeaders("text/plain; charset=utf-8");
        headers.set("Cache-Control", "no-store");
        return new Response(
          `MPD upstream failed\nStatus: ${upstreamResponse.status}\nURL: ${upstream.toString()}\n\n${manifest.slice(0, 1000)}`,
          { status: upstreamResponse.status || 502, headers }
        );
      }

      manifest = rewriteMpdXml(manifest, upstream, proxyBase);

      const headers = corsHeaders("application/dash+xml; charset=utf-8");
      headers.set("Cache-Control", "no-store");

      return new Response(manifest, {
        status: upstreamResponse.status === 206 ? 200 : upstreamResponse.status,
        headers
      });
    }

    if (channel.type === "hls" && isManifestRequest) {
      let playlist = await upstreamResponse.text();
      const manifestBase = new URL(".", upstream).toString();
      const inheritedSearch = upstream.search;

      const rewrite = value => {
        if (!value || value.startsWith("#") || value.startsWith("data:")) return value;

        const absolute = new URL(value, manifestBase);
        if (!absolute.search && inheritedSearch) absolute.search = inheritedSearch;

        if (absolute.href.startsWith(manifestBase)) {
          return proxyBase + absolute.href.slice(manifestBase.length);
        }

        return proxiedAbsoluteUrl(proxyBase, absolute.href);
      };

      playlist = playlist
        .split(/\r?\n/)
        .map(line => {
          const trimmed = line.trim();

          if (!trimmed) return line;

          if (trimmed.startsWith("#EXT-X-KEY")) {
            return line.replace(/URI="([^"]+)"/, (_match, keyUri) => `URI="${rewrite(keyUri)}"`);
          }

          if (trimmed.startsWith("#")) return line;

          return rewrite(trimmed);
        })
        .join("\n");

      const headers = copyProxyHeaders(responseHeaders, "application/vnd.apple.mpegurl; charset=utf-8");
      return new Response(playlist, { status: upstreamResponse.status, headers });
    }

    return new Response(upstreamResponse.body, {
      status: upstreamResponse.status,
      headers: responseHeaders
    });
}