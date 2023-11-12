package com.junhackaton.server.controller;

import com.junhackaton.server.entity.BestScore;
import com.junhackaton.server.service.BestScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class MainController {

    @Autowired
    public BestScoreService bestScoreService;

    @GetMapping("/bestScores")
    public List<BestScore> showAllEmployee() {
        List<BestScore> allBestScores = bestScoreService.getAllBestScores();

        return allBestScores;
    }

    @GetMapping("bestScores/{id}")
    public BestScore getBestScore(@PathVariable int id) {
        return bestScoreService.getBestScore(id);
    }

    @PostMapping("/bestScores")
    public BestScore addBestScore(@RequestBody BestScore bestScore) {
        bestScoreService.saveBestScore(bestScore);

        return bestScore;
    }

    @DeleteMapping("/bestScores/{id}")
    public void deleteScore(@PathVariable int id){
        bestScoreService.deleteBestScore(id);
    }
}