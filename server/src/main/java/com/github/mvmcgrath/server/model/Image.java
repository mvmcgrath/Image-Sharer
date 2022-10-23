package com.github.mvmcgrath.server.model;

import javax.persistence.*;

@Entity
@Table(name = "images")
public class Image {

    @Id
    @Column(name="imageId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long imageId;

    @ManyToOne
    @JoinColumn(name = "userId", nullable = false)
    private UserDAO user;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "image", length=100000, nullable = false)
    private String image;

    public Image() {

    }

    public Image(long imageId, UserDAO user, String title, String image) {
        super();
        this.imageId = imageId;
        this.user = user;
        this.title = title;
        this.image = image;
    }

    public UserDAO getUser() {
        return user;
    }

    public void setUser(UserDAO user) {
        this.user = user;
    }

    public long getImageId() {
        return imageId;
    }

    public String getTitle() {
        return title;
    }

    public String getImage() {
        return image;
    }

    public void setImageId(long imageId) {
        this.imageId = imageId;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setImage(String image) { this.image = image; }
}

