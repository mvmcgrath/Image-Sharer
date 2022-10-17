package com.github.mvmcgrath.server.models;

public class Image {

    private final long id;
    private final String title;
    private final String imagePath;

    public Image(long id, String title, String imagePath) {
        this.id = id;
        this.title = title;
        this.imagePath = imagePath;
    }

    public long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getimagePath() {
        return imagePath;
    }
}

