package com.example.shareoffice.my.controller;

import com.example.shareoffice.vo.Callback;
import com.example.shareoffice.vo.LocalFilePage;
import com.example.shareoffice.vo.LocalFileInfo;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.PostConstruct;
import java.io.*;
import java.net.URL;
import java.net.URLConnection;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.stream.Collectors;

/**
 * @author wangshubo
 * @Description
 * @create 2025-03-20 16:15
 */
@RestController
@RequestMapping("/api/file")
public class FileController {

    // 文件存储目录
    private static final String UPLOAD_DIR = "/home/wangshubo/shareOfficeDir/";

    private static final String HISTORY_FILE = "localFileHistory.txt";

    private static final SimpleDateFormat f = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

    private static ObjectMapper objectMapper = new ObjectMapper();

    List<LocalFileInfo> localFileInfoList = new ArrayList<>();

    File localHistoryFile = new File(UPLOAD_DIR + HISTORY_FILE);

    @PostConstruct
    public void init() throws IOException {


        if (!localHistoryFile.exists()) {
            localHistoryFile.createNewFile();
        }

        // 使用FileInputStream和InputStreamReader读取中文字符
        FileInputStream fis = new FileInputStream(UPLOAD_DIR + HISTORY_FILE);
        InputStreamReader isr = new InputStreamReader(fis, "UTF-8");
        BufferedReader br = new BufferedReader(isr);

        String line;
        // 使用循环逐行读取
        while ((line = br.readLine()) != null) {
            // 处理每一行数据
            LocalFileInfo localFileInfo = objectMapper.readValue(line, LocalFileInfo.class);
            localFileInfoList.add(localFileInfo);
        }

        // 关闭流
        br.close();
        isr.close();
        fis.close();
    }

    private String createLocalFileId() {
        return UUID.randomUUID().toString().replace("-", "");
    }

    @PostMapping("/listFile")
    public ResponseEntity<LocalFilePage> listFile(@RequestBody LocalFilePage localFilePage) {
        List<LocalFileInfo> fileList = localFileInfoList
                .stream()
                .filter(localFileInfo -> !localFileInfo.getDeleteStatus())
                .sorted((o1, o2) -> o2.getLastModifyTime().compareTo(o1.getLastModifyTime()))
                .collect(Collectors.toList());

        localFilePage.setTotal(fileList.size());

        int startIndex =(localFilePage.getPage()-1)* localFilePage.getLimit();
        int endIndex = (localFilePage.getPage())* localFilePage.getLimit();
        localFilePage.setDataList(fileList.subList(Math.min(startIndex, fileList.size()), Math.min(endIndex, fileList.size())));

        return ResponseEntity.ok(localFilePage);
    }

    // 文件上传
    @PostMapping("/upload")
    public ResponseEntity<LocalFileInfo> uploadFile(@RequestParam("file") MultipartFile file) {
        try {
            // 创建存储目录
            Path uploadPath = Paths.get(UPLOAD_DIR);
            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }

            // 生成唯一文件名
            String fileId = this.createLocalFileId();

            // 保存文件
            Path filePath = uploadPath.resolve(fileId + file.getOriginalFilename().substring(file.getOriginalFilename().indexOf(".")));
            file.transferTo(filePath.toFile());

            String format = f.format(new Date());
            LocalFileInfo localFileInfo = new LocalFileInfo();
            localFileInfo.setFileId(fileId);
            localFileInfo.setFileTitle(file.getOriginalFilename());
            localFileInfo.setFileUrl(fileId + file.getOriginalFilename().substring(file.getOriginalFilename().indexOf(".")));
            localFileInfo.setFileMark("null");
            localFileInfo.setCreateTime(format);
            localFileInfo.setLastModifyTime(format);
            localFileInfoList.add(localFileInfo);
            refreshLocalHistory();


//            FileWriter fw = null;
//            try {
//                // 如果文件存在，则追加内容；如果文件不存在，则创建文件
//                File f = new File(UPLOAD_DIR + HISTORY_FILE);
//                fw = new FileWriter(f, true);
//            } catch (IOException e) {
//                e.printStackTrace();
//            }
//            PrintWriter pw = new PrintWriter(fw);
//            pw.println(objectMapper.writeValueAsString(localFileInfo));
//            pw.flush();
//            try {
//                fw.flush();
//                pw.close();
//                fw.close();
//            } catch (IOException e) {
//                e.printStackTrace();
//            }

            return ResponseEntity.ok(localFileInfo);
        } catch (IOException e) {
            LocalFileInfo localFileInfo = new LocalFileInfo();
            localFileInfo.setErrMsg("上传失败");
            return ResponseEntity.internalServerError().body(localFileInfo);
        }
    }


    // 文件上传
    @PostMapping("/callback")
    public ResponseEntity<String> uploadFile(@RequestBody JsonNode data) throws JsonProcessingException {

        /* Defines the status of the document. Can have the following values:
         * 1 - document is being edited,
         * 2 - document is ready for saving,
         * 3 - document saving error has occurred,
         * 4 - document is closed with no changes,
         * 6 - document is being edited, but the current document state is saved,
         * 7 - error has occurred while force saving the document.*/
        //data ="{\"key\":\"FILE1742461238770\",\"status\":4,\"actions\":[{\"type\":0,\"userid\":\"uid-1742461171549\"}]}";
        //ObjectMapper mapper = new ObjectMapper();
        //String jsonString = mapper.writeValueAsString(data);
        //JsonNode jsonNode = data.tree;
        //String color = jsonNode.get("color").asText();
        Callback callback = new Callback();
        callback.setKey(data.get("key").asText());
        switch (data.get("status").asInt()) {
            case 1:
                System.out.println("1");
                System.out.println(data.get("key").asText() + "  is being edited");
                break;
            case 2:
                System.out.println("2");
                System.out.println(data.get("key").asText() + "  is ready for saving");
                callback.setUrl(data.get("url").asText());
                downloadEditFileAndFetch(callback);
                break;
            case 3:
                System.out.println("3");
                break;
            case 4:
                System.out.println("4");
                break;
            case 5:
                System.out.println("5");
                break;
            case 6:
                System.out.println("6");

                System.out.println(data.get("key").asText() + "  is ready for saving");
                callback.setUrl(data.get("url").asText());
                downloadEditFileAndFetch(callback);
                break;
            case 7:
                System.out.println("7");
                break;
            default:
                System.out.println("default");
        }
        System.out.println(data.toString());
        return ResponseEntity.ok("{\"error\":0}");

    }

    private void downloadEditFileAndFetch(Callback callbackData) {

        String fileName = callbackData.getKey() + callbackData.getUrl().substring(callbackData.getUrl().lastIndexOf("."));

        try {
            URL url = new URL(callbackData.getUrl());
            URLConnection conn = url.openConnection();
            InputStream inputStream = conn.getInputStream();
            FileOutputStream fileOutputStream = new FileOutputStream(UPLOAD_DIR + fileName);

            int bytesum = 0;
            int byteread;
            byte[] buffer = new byte[1024];
            while ((byteread = inputStream.read(buffer)) != -1) {
                bytesum += byteread;
                fileOutputStream.write(buffer, 0, byteread);
            }
            fileOutputStream.close();

            Iterator<LocalFileInfo> iterator = localFileInfoList.iterator();
            while (iterator.hasNext()) {
                LocalFileInfo localFileInfo = iterator.next();
                if (localFileInfo.getFileId().equals(callbackData.getKey())) {
                    localFileInfo.setLastModifyTime(f.format(new Date()));
                    break;
                }
            }

            refreshLocalHistory();


        } catch (Exception e) {
            System.out.println("下载失败");
            e.printStackTrace();
        }
    }

    // 文件下载
    @GetMapping("/download/{fileName:.+}")
    public ResponseEntity<Resource> downloadFile(@PathVariable String fileName) {
        try {
            Path filePath = Paths.get(UPLOAD_DIR).resolve(fileName).normalize();
            Resource resource = new UrlResource(filePath.toUri());

            if (resource.exists()) {
                return ResponseEntity.ok()
                        .header(HttpHeaders.CONTENT_DISPOSITION,
                                "attachment; filename=\"" + resource.getFilename() + "\"")
                        .body(resource);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }


    @DeleteMapping("/delete/{fileId:.+}")
    public ResponseEntity<String> deleteFile(@PathVariable String fileId) {

        Iterator<LocalFileInfo> iterator = localFileInfoList.iterator();
        while (iterator.hasNext()) {
            LocalFileInfo localFileInfo = iterator.next();
            if (localFileInfo.getFileId().equals(fileId)) {
                localFileInfo.setDeleteStatus(true);
                localFileInfo.setLastModifyTime(f.format(new Date()));
                break;
            }
        }

        refreshLocalHistory();

        return ResponseEntity.ok("{\"error\":0}");
    }

    private void refreshLocalHistory() {

        try {
            //写入中文字符时解决中文乱码问题
            FileOutputStream fos = new FileOutputStream(localHistoryFile);
            OutputStreamWriter osw = new OutputStreamWriter(fos, "UTF-8");
            BufferedWriter bw = new BufferedWriter(osw);

            for (LocalFileInfo localFileInfo : localFileInfoList) {
                bw.write(objectMapper.writeValueAsString(localFileInfo) + "\t\n");
            }

            //注意关闭的先后顺序，先打开的后关闭，后打开的先关闭
            bw.close();
            osw.close();
            fos.close();
        } catch (IOException e) {
            System.out.println("写历史记录失败");
            e.printStackTrace();
        }
    }
}
