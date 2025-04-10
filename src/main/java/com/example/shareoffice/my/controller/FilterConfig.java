package com.example.shareoffice.my.controller;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @author wangshubo
 * @Description
 * @create 2025-03-24 17:31
 */
@Configuration
public class FilterConfig {

    @Bean
    public FilterRegistrationBean<JwtAuthFilter> jwtFilter() {
        FilterRegistrationBean<JwtAuthFilter> registration = new FilterRegistrationBean<>();
        registration.setFilter(new JwtAuthFilter());
        registration.addUrlPatterns("/*"); // 拦截所有请求
        registration.setOrder(1); // 设置过滤器顺序
        return registration;
    }
}