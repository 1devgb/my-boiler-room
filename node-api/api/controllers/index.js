exports.get_boiler_room_videos = function(req, res) {
    var videos = [
        {
            "title": "Carl Cox Boiler Room Ibiza Villa Takeovers DJ Set",
            "artist": "Carl Cox",
            "location": "Ibiza, Spain",
            "video_url": "https://www.youtube.com/watch?v=vy-k0FopsmY"
        },
        {
            "title": "Jamie Jones Boiler Room Ibiza Villa Takeovers DJ Set",
            "artist": "Jamie Jones",
            "location": "Ibiza, Spain",
            "video_url": "https://www.youtube.com/watch?v=AGdA7cmSkFk"
        },
        {
            "title": "Jamie xx Boiler Room London x Young Turks DJ Set",
            "artist": "Jamie Jones",
            "location": "London, UK",
            "video_url": "https://www.youtube.com/watch?v=HV-nNEXgsOk"
        }
    ];
    res.json(videos);
};