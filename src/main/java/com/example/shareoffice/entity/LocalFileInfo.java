package com.example.shareoffice.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

/**
 * @author wangshubo
 * @Description
 * @create 2025-03-21 15:58
 */
@Data
public class LocalFileInfo {

    String fileId;

    String fileTitle;

    String fileUrl;

    String fileMark;

    String createUser;

    Boolean deleteStatus=false;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    String createTime;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    String lastModifyTime;

    String errMsg;

}
