package com.techpower.treegreen.service.impl;

import com.techpower.treegreen.converter.BlogConverter;
import com.techpower.treegreen.dto.BlogDTO;
import com.techpower.treegreen.dto.ProductDTO;
import com.techpower.treegreen.entity.BlogEntity;
import com.techpower.treegreen.entity.ProductEntity;
import com.techpower.treegreen.entity.ShopEntity;
import com.techpower.treegreen.repository.BlogRepository;
import com.techpower.treegreen.repository.ShopRepository;
import com.techpower.treegreen.repository.UserRepository;
import com.techpower.treegreen.service.IBlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BlogService implements IBlogService {
    @Autowired
    private BlogRepository blogRepository;
    @Autowired
    private BlogConverter blogConverter;
    @Autowired
    private ShopRepository shopRepository;
    @Autowired
    private UserRepository userRepository;
    @Override
    public List<BlogDTO> getAll() {
        List<BlogDTO> result = new ArrayList<>();
        for (BlogEntity entity : blogRepository.findAll()) {
            BlogDTO dto = blogConverter.toDTO(entity);
            result.add(dto);
        }
        return result;
    }

    @Override
    public List<BlogDTO> getAllBySeller(long idUser) {
        List<BlogDTO> result = new ArrayList<>();
        for (BlogEntity entity : blogRepository.findAllByShop(
                shopRepository.findOneByUser(
                        userRepository.findOneById(idUser)
                )
        )){
            BlogDTO dto = blogConverter.toDTO(entity);
            result.add(dto);
        }
        return result;
    }

    @Override
    public BlogDTO getBlogDetail(long idBlog) {
        BlogEntity blogEntity = blogRepository.findOneById(idBlog);
        return blogConverter.toDTO(blogEntity);
    }

    @Override
    public BlogDTO save(BlogDTO blogDTO, long idUser) {
        BlogEntity blogEntity = blogConverter.toEntity(blogDTO);
        blogEntity.setShop(shopRepository.findOneByUser(userRepository.findOneById(idUser)));
        return blogConverter.toDTO(blogRepository.save(blogEntity));
    }

    @Override
    public BlogDTO update(BlogDTO blogDTO) {
        BlogEntity blogEntityOld = blogRepository.findOneById(blogDTO.getId());
        BlogEntity blogEntityNew = blogConverter.toEntity(blogDTO,blogEntityOld);
        return blogConverter.toDTO(blogRepository.save(blogEntityNew));
    }

    @Override
    public List<BlogDTO> remove(long idBlog) {
        BlogEntity blogEntity = blogRepository.findOneById(idBlog);
        ShopEntity shopEntity = blogEntity.getShop();
        if(blogEntity != null) {
            blogRepository.deleteById(idBlog);
        }
        return getAllBySeller(shopEntity.getId());
    }
}
