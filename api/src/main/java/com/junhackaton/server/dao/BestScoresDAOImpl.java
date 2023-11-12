package com.junhackaton.server.dao;

import com.junhackaton.server.entity.BestScore;
import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BestScoresDAOImpl implements BestScoresDAO {

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<BestScore> getAllBestScores() {

        Session session = entityManager.unwrap(Session.class);

        List<BestScore> allBestScores = session.createQuery("from BestScore",
                        BestScore.class)
                .getResultList();

        return allBestScores;
    }

    @Override
    public void saveBestScore(BestScore bestScore) {
        BestScore newBestScore = entityManager.merge(bestScore); // save and update
        bestScore.setId(bestScore.getId());
    }

    @Override
    public BestScore getBestScore(int id) {
        Session session = entityManager.unwrap(Session.class);

        BestScore bestScore = session.get(BestScore.class, id);

        return bestScore;
    }

    @Override
    public void deleteBestScore(int id) {
        Session session = entityManager.unwrap(Session.class);

        Query query = session.createQuery("delete from BestScore " +
                "where id =: bestScoreId");
        query.setParameter("bestScoreId", id);
        query.executeUpdate();
    }
}
