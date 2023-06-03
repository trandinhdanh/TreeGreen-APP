package com.techpower.treegreen.service.impl;

import com.techpower.treegreen.converter.StatisticalConverter;
import com.techpower.treegreen.dto.StatisticalDTO;
import com.techpower.treegreen.entity.StatisticalEntity;
import com.techpower.treegreen.entity.UserEntity;
import com.techpower.treegreen.repository.StatisticalRepository;
import com.techpower.treegreen.repository.UserRepository;
import com.techpower.treegreen.service.IStatisticalService;
import org.springframework.beans.SimpleTypeConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class StatisticalService implements IStatisticalService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private StatisticalRepository statisticalRepository;
    @Autowired
    private StatisticalConverter statisticalConverter;

    @Override
    public StatisticalDTO getStatisticalByYearAndMonth(long idUser, int year, int month) {
        UserEntity userEntity = userRepository.findOneById(idUser);
        StatisticalEntity statisticalEntity = statisticalRepository.findOneByUserAndYearAndMonth(
                userEntity, year, month
        );
        return statisticalConverter.toDTO(statisticalEntity);
    }

    @Override
    public StatisticalDTO getStatisticalByYear(long idUser, int year) {
        UserEntity userEntity = userRepository.findOneById(idUser);
        List<StatisticalEntity> statisticalEntities = statisticalRepository.findAllByUserAndYear(
                userEntity, year
        );
        StatisticalDTO result = new StatisticalDTO();
        result.setYear(LocalDate.now().getYear());
        for (StatisticalEntity statistical : statisticalEntities) {
            result.setQuantitySold(result.getQuantitySold() + statistical.getQuantitySold());
            result.setTotalRevenue(result.getTotalRevenue() + statistical.getTotalRevenue());
            result.setReallyReceived(result.getReallyReceived() + statistical.getReallyReceived());
        }
        return result;
    }
}
