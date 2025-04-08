package com.example.shareoffice.vo;

import lombok.Data;

import java.util.List;

/**
 * 文档服务器callback数据
 *
 *
 *
 */
@Data
public class Callback {
    // 文件类型 docx
    private String filetype;
    /**
     * Defines the link to the edited document to be saved with the document
     * storage service. The link is present when the status value is equal to 2, 3, 6 or 7 only.
     */
    private String url;
    /**
     * Defines the edited document identifier
     */
    private String key;
    // ...
    private String changesurl;
    // 历史记录
    private History history;
    // token
    private String token;
    // 定义执行强制保存请求时启动器的类型
    private Integer forcesavetype;
    // 当前的操作状态
    /**
     * Defines the status of the document. Can have the following values:
     * 1 - document is being edited,
     * 2 - document is ready for saving,
     * 3 - document saving error has occurred,
     * 4 - document is closed with no changes,
     * 6 - document is being edited, but the current document state is saved,
     * 7 - error has occurred while force saving the document.
     */
    private Integer status;
    //全部用户存储用户id
    private List<String> users;
    // 只有当前操作人的信息
    private List<Action> actions;
    //
    private String userdata;
    //
    private String lastsave;
    private Boolean notmodified;

    @Data
    public static class History {
        private String serverVersion;
        private String key;
        private Integer version;
        private String created;
        //private EditorConfig.User user;
//        private List<ChangesHistory> changes;
    }

    @Data
    public static class Action {
        // 用户id
        private String userid;
        // 操作类型
        private ActionType type;
    }

}
