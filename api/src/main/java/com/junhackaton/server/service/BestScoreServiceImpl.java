package com.junhackaton.server.service;

import com.junhackaton.server.dao.BestScoresDAO;
import com.junhackaton.server.entity.BestScore;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BestScoreServiceImpl implements BestScoreService {

    @Autowired
    private BestScoresDAO bestScoresDAO;

    @Override
    @Transactional
    public List<BestScore> getAllBestScores() {
        return bestScoresDAO.getAllBestScores();
    }

    @Override
    @Transactional
    public void saveBestScore(BestScore bestScore) {
        bestScoresDAO.saveBestScore(bestScore);
    }

    @Override
    @Transactional
    public BestScore getBestScore(int id) {
        return bestScoresDAO.getBestScore(id);
    }

    @Override
    @Transactional
    public void deleteBestScore(int id) {
        bestScoresDAO.deleteBestScore(id);
    }
}
