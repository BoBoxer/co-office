package com.example.shareoffice.my.controller;

import com.example.shareoffice.utils.JwtUtils;
import com.example.shareoffice.vo.LoginReq;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Base64;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * @author wangshubo
 * @Description
 * @create 2025-03-24 17:17
 */
@RestController
@RequestMapping("/api")
public class LoginController {

    private final Map<String, String> userDatabase = new HashMap<>();

    public LoginController() {
        // 初始化测试用户
        userDatabase.put("wangshubo", "Aa.123");
        userDatabase.put("test01", "Aa.123");
        userDatabase.put("test02", "Aa.123");
        userDatabase.put("test03", "Aa.123");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginReq user) {

        String storedPassword = userDatabase.get(user.getUsername());

        if (user.getPassword() != null && user.getPassword().length() > 3) {
            String p1 = user.getPassword().substring(0, user.getPassword().length() - 3);
            String p2 =user.getPassword().substring(user.getPassword().length() - 3, user.getPassword().length());
            Base64.Decoder decoder = Base64.getDecoder();
            user.setPassword(new String(decoder.decode(p2 + p1)));
        }

        if(storedPassword == null|| !storedPassword.equals(user.getPassword())){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Collections.singletonMap("message", "用户名或密码错误"));
        }

        String token = JwtUtils.generateToken(user.getUsername(),new HashMap(){{
            put("username", user.getUsername());
        }} );

        return ResponseEntity.ok().body(Collections.singletonMap("token", token));
    }
}
