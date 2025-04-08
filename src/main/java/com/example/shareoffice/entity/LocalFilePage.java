package com.example.shareoffice.entity;

import lombok.Data;

import java.util.List;

/**
 * @author wangshubo
 * @Description
 * @create 2025-03-31 9:19
 */
@Data
public class LocalFilePage {

    private Integer page = 1;

    private Integer limit = 10;

    private List<LocalFileInfo> dataList;

    private Integer total = 0;

}
