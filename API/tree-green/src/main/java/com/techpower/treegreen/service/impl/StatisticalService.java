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
import java.util.ArrayList;
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
    public List<StatisticalDTO> getStatisticalByYear(long idUser, int year) {
        UserEntity userEntity = userRepository.findOneById(idUser);
        List<StatisticalEntity> statisticalEntities = statisticalRepository.findAllByUserAndYear(
                userEntity, year
        );
        List<StatisticalDTO> result = new ArrayList<>();
        for (StatisticalEntity statistical : statisticalEntities) {
            StatisticalDTO statisticalDTO = statisticalConverter.toDTO(statistical);
            result.add(statisticalDTO);
        }
        return result;
    }
}
