package com.example.shareoffice.my.controller;

/**
 * @author wangshubo
 * @Description
 * @create 2025-03-24 17:30
 */

import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;

@Component
public class JwtAuthFilter implements Filter {

    // 豁免路径
    private static final List<String> EXEMPT_PATHS = Arrays.asList(
            "/api/login",
            "/api/file/download",
            "/api/file/callback"
    );


    @Override
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain)
            throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) req;
        HttpServletResponse response = (HttpServletResponse) res;
        String path = request.getRequestURI();

        // 豁免路径检查
        if (isExemptPath(request.getMethod(),path)) {
            chain.doFilter(req, res);
            return;
        }

        // JWT验证逻辑
        String token = request.getHeader("Authorization");
        if (token == null || !validateToken(token)) {
            sendUnauthorized(response);
            return;
        }

        chain.doFilter(req, res);
    }

    private boolean isExemptPath(String method,String path) {
        if(method.equalsIgnoreCase("get")){
            if(path.endsWith(".js") || path.endsWith(".html") || path.endsWith(".css") || path.endsWith(".ico")){
                return true;
            }
        }

        return EXEMPT_PATHS.stream().anyMatch(path::startsWith);
    }

    private boolean validateToken(String token) {
        return JwtUtils.validateToken(token);
    }

    private void sendUnauthorized(HttpServletResponse response) throws IOException {
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        response.getWriter().write("{\"code\":401, \"message\":\"Unauthorized\"}");
    }
}