---
name: stock-quote
description: "查询美股/港股/A股实时股价及历史数据。支持七姐妹、台积电等热门股票，获取当前价格、昨日收盘、今日涨跌、盘前盘后数据。使用方法：直接说'查股票'或'帮我看XX股价'"
---

# Stock Quote Skill

## 功能

- 查询美股实时价格（Apple, Microsoft, Google, Amazon, Meta, Tesla, Nvidia等）
- 获取今日涨跌数据
- 查看盘前/盘后交易价格（交易时段内）
- 支持多股票批量查询

## 使用方式

直接告诉我要查的股票，例如：
- "帮我查一下苹果和微软的股价"
- "AAPL现在多少钱"
- "看 Tesla 台积电 AMD 可口可乐"

## 支持的股票类型

- 美股：用 ticker 如 AAPL, MSFT, GOOGL, AMZN, META, TSLA, NVDA, TSM, AMD, KO
- 也可以直接说公司名：苹果、微软、Google、亚马逊、Meta、特斯拉、英伟达、台积电、AMD、可口可乐

## 技术实现

使用 Yahoo Finance API 获取数据：
- `yf.download()` - 批量获取历史数据
- `yf.Ticker().info` - 获取实时信息
- 直接 HTTP 请求 `query1.finance.yahoo.com` - 避免限流

## 注意事项

- 盘前/盘后数据仅在美股交易时段可用（美东时间4:00-20:00）
- A股和港股需要额外配置
- 频繁请求可能被限流，建议批量查询
