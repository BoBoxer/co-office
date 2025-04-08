package com.example.shareoffice.utils;


import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

public final class JwtUtils {

    // 默认签名密钥（生产环境应从配置读取）
    private static String SECRET = "fktxxign11230vx9w14kv02ign11fucktianwen230vx9w14kv02w1xign11230vx9w14kv02";

    // 默认过期时间（3小时）
    private static final long EXPIRATION = 3 * 3600L * 1000;

    private JwtUtils() {
        throw new IllegalStateException("Utility class");
    }

    /**
     * 生成JWT Token
     *
     * @param subject 主题（通常放用户ID）
     * @param claims  自定义声明
     * @return token字符串
     */
    public static String generateToken(String subject, Map<String, Object> claims) {


        // 头部 map / Jwt的头部承载，第一部分
        // 可不设置 默认格式是{"alg":"HS256"}
        Map<String, Object> map = new HashMap<>();
        map.put("alg", "HS256");
        map.put("typ", "JWT");


        return Jwts.builder()
                .setHeader(map)         // 头部信息
                .setClaims(claims)
                .setId(UUID.randomUUID().toString())
                .setIssuedAt(new Date())
                .setSubject(subject)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION))
                .signWith(new SecretKeySpec(SECRET.getBytes(StandardCharsets.UTF_8), SignatureAlgorithm.HS256.getJcaName()))
                .compact();
    }

    /**
     * 解析Token
     *
     * @param token JWT令牌
     * @return 声明体
     */
    public static Claims parseToken(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(new SecretKeySpec(SECRET.getBytes(StandardCharsets.UTF_8), SignatureAlgorithm.HS256.getJcaName()))
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    /**
     * 验证Token是否有效
     *
     * @param token JWT令牌
     * @return 是否有效
     */
    public static boolean validateToken(String token) {
        try {
            parseToken(token);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}