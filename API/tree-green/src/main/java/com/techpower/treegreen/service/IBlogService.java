package com.techpower.treegreen.service;

import com.techpower.treegreen.dto.BlogDTO;

import java.util.List;

public interface IBlogService {
    public List<BlogDTO> getAll();
    public List<BlogDTO> getAllBySeller(long idUser);
    public BlogDTO getBlogDetail(long idBlog);
    public BlogDTO save(BlogDTO blogDTO,long idUser);
    public BlogDTO update(BlogDTO blogDTO);
    public List<BlogDTO> remove(long idBlog);

}
