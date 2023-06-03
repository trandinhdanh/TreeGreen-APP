package com.techpower.treegreen.api;

import com.techpower.treegreen.dto.StatisticalDTO;
import com.techpower.treegreen.service.IStatisticalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/statisticals")
public class StatisticalAPI {
    @Autowired
    private IStatisticalService iStatisticalService;

    @GetMapping("/{idUser}/{year}/{month}")
    public ResponseEntity<StatisticalDTO> getStatisticalByYearAndMonth(@PathVariable("idUser") long idUser,
                                                                       @PathVariable("year") int year,
                                                                       @PathVariable("month") int month) {
        StatisticalDTO statistical = iStatisticalService.getStatisticalByYearAndMonth(idUser, year, month);
        if (statistical != null) {
            return ResponseEntity.ok(statistical);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{idUser}/{year}")
    public ResponseEntity<List<StatisticalDTO>> getStatisticalByYear(@PathVariable("idUser") long idUser,
                                                                     @PathVariable("year") int year) {
        List<StatisticalDTO> statistical = iStatisticalService.getStatisticalByYear(idUser, year);
        if (statistical != null) {
            return ResponseEntity.ok(statistical);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
