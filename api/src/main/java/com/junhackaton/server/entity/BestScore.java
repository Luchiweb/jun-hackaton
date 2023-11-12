package com.junhackaton.server.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "humans")
public class BestScore {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "username")
    private String username;

    @Column(name = "moves_count")
    private int movesCount;

    public BestScore() {
    }

    public BestScore(int id, String username, int movesCount) {
        this.id = id;
        this.username = username;
        this.movesCount = movesCount;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getMovesCount() {
        return movesCount;
    }

    public void setMovesCount(int movesCount) {
        this.movesCount = movesCount;
    }

    @Override
    public String toString() {
        return "BestScores{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", movesCount=" + movesCount +
                '}';
    }
}