package com.github.mvmcgrath.server.model;

import javax.persistence.*;

@Entity
@Table(name = "images")
public class Image {

    @Id
    @Column(name="imageId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long imageId;

    @ManyToOne(targetEntity = UserDAO.class, fetch = FetchType.EAGER)
    @JoinColumn(name = "userId", insertable = false, updatable = false)
    private UserDAO user;

    @Column(name = "userId")
    private Long userId;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "image", length=10000000, nullable = false)
    private String image;

    public Image() {

    }

    public Image(long imageId, long userId, String title, String image) {
        super();
        this.imageId = imageId;
        this.userId = userId;
        this.title = title;
        this.image = image;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
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

