package com.junhackaton.server.service;

import com.junhackaton.server.entity.BestScore;

import java.util.List;

public interface BestScoreService {

    public List<BestScore> getAllBestScores();

    public void saveBestScore(BestScore bestScores);

    public BestScore getBestScore(int id);

    public void deleteBestScore(int id);
}
