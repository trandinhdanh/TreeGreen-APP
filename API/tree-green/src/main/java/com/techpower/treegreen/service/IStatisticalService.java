package com.techpower.treegreen.service;

import com.techpower.treegreen.dto.StatisticalDTO;

public interface IStatisticalService {
    StatisticalDTO getStatisticalByYearAndMonth(long idUser, int year, int month);
    StatisticalDTO getStatisticalByYear(long idUser, int year);
}
