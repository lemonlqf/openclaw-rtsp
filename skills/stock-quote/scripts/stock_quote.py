#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
美股股票查询脚本
用法: python stock_quote.py AAPL MSFT GOOGL
"""

import json
import urllib.request
import urllib.parse
from datetime import datetime
import sys
import os
import io
import time

# 设置 UTF-8 输出
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# 股票名称映射
NAME_MAP = {
    '苹果': 'AAPL', 'apple': 'AAPL', 'aapl': 'AAPL',
    '微软': 'MSFT', 'microsoft': 'MSFT', 'msft': 'MSFT',
    '谷歌': 'GOOGL', 'google': 'GOOGL', 'googl': 'GOOGL',
    '亚马逊': 'AMZN', 'amazon': 'AMZN', 'amzn': 'AMZN',
    'meta': 'META', 'facebook': 'META',
    '特斯拉': 'TSLA', 'tesla': 'TSLA', 'tsla': 'TSLA',
    '英伟达': 'NVDA', 'nvidia': 'NVDA', 'nvda': 'NVDA',
    '台积电': 'TSM', '台积电 ADR': 'TSM', 'tsm': 'TSM',
    'amd': 'AMD', '超微半导体': 'AMD',
    '可口可乐': 'KO', 'coca-cola': 'KO', 'ko': 'KO',
    '英伟达': 'NVDA',
    '七姐妹': 'AAPL,MSFT,GOOGL,AMZN,META,TSLA,NVDA'
}

DISPLAY_NAME = {
    'AAPL': '🍎 Apple', 'MSFT': '📺 Microsoft', 'GOOGL': '🔍 Google',
    'AMZN': '📦 Amazon', 'META': '👥 Meta', 'TSLA': '🚗 Tesla',
    'NVDA': '💎 Nvidia', 'TSM': '🔬 台积电', 'AMD': '🟢 AMD', 'KO': '🥤 可口可乐'
}

# ANSI 颜色代码
class Colors:
    RESET = '\033[0m'
    BOLD = '\033[1m'
    GREEN = '\033[92m'
    RED = '\033[91m'
    YELLOW = '\033[93m'
    BLUE = '\033[94m'
    CYAN = '\033[96m'
    GRAY = '\033[90m'

def supports_color():
    """检查终端是否支持颜色"""
    if os.getenv('TERM') == 'dumb':
        return False
    return sys.stdout.isatty()

USE_COLOR = supports_color()

def colorize(text, color):
    """添加颜色"""
    if not USE_COLOR:
        return text
    return f"{color}{text}{Colors.RESET}"

def normalize_ticker(ticker):
    """标准化股票代码"""
    ticker = ticker.strip().upper()
    if ticker in NAME_MAP:
        return NAME_MAP[ticker]
    return ticker

def get_stock_data(tickers):
    """获取股票数据"""
    results = []
    
    for i, ticker in enumerate(tickers):
        # 请求间隔，避免限流
        if i > 0:
            time.sleep(0.5)
        
        for retry in range(3):
            try:
                url = f'https://query1.finance.yahoo.com/v8/finance/chart/{ticker}?interval=1d&range=5d'
                req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
                with urllib.request.urlopen(req, timeout=10) as response:
                    data = json.loads(response.read().decode())
                
                result = data['chart']['result'][0]
                meta = result['meta']
                quote = result['indicators']['quote'][0]
                
                closes = [c for c in quote['close'] if c is not None]
                
                if len(closes) >= 2:
                    current_price = closes[-1]
                    prev_close = closes[-2]
                elif len(closes) == 1:
                    current_price = closes[-1]
                    prev_close = meta.get('chartPreviousClose', current_price)
                else:
                    current_price = meta.get('regularMarketPrice', 0)
                    prev_close = meta.get('previousClose', current_price)
                
                name = DISPLAY_NAME.get(ticker, ticker)
                
                results.append({
                    'ticker': ticker,
                    'name': name,
                    'price': current_price,
                    'prev_close': prev_close,
                    'change': current_price - prev_close,
                    'change_pct': ((current_price - prev_close) / prev_close * 100) if prev_close else 0
                })
                break  # 成功获取，跳出重试
                
            except Exception as e:
                if retry < 2:
                    time.sleep(1)  # 等待后重试
                    continue
                results.append({
                    'ticker': ticker,
                    'name': ticker,
                    'error': str(e)
                })
    
    return results

def format_output(results):
    """格式化输出"""
    lines = []
    
    # 标题
    time_str = datetime.now().strftime("%Y-%m-%d %H:%M")
    title = f"📈 股票报价 · {time_str}"
    lines.append(colorize("═" * 60, Colors.GRAY))
    lines.append(colorize(f"  {title}", Colors.CYAN))
    lines.append(colorize("═" * 60, Colors.GRAY))
    lines.append("")
    
    # 分类显示
    tech_stocks = ['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'META', 'TSLA', 'NVDA']
    chip_stocks = ['TSM', 'AMD']
    other_stocks = ['KO']
    
    categories = [
        ("🔥 七姐妹", tech_stocks),
        ("💻 芯片股", chip_stocks),
        ("🥤 消费股", other_stocks)
    ]
    
    for cat_name, cat_tickers in categories:
        cat_results = [r for r in results if r['ticker'] in cat_tickers]
        if not cat_results:
            continue
            
        lines.append(colorize(f"  {cat_name}", Colors.YELLOW))
        lines.append(colorize("  " + "-" * 50, Colors.GRAY))
        
        for r in cat_results:
            if 'error' in r:
                lines.append(f"    {r['name']}: ❌ 获取失败")
                continue
            
            # 价格显示
            price_str = f"${r['price']:.2f}"
            prev_str = f"${r['prev_close']:.2f}"
            
            # 涨跌显示
            change = r['change']
            change_pct = r['change_pct']
            sign = '+' if change > 0 else ''
            
            if change > 0:
                change_str = colorize(f"▲ {sign}{change:.2f} ({sign}{change_pct:.2f}%)", Colors.GREEN)
            elif change < 0:
                change_str = colorize(f"▼ {sign}{change:.2f} ({sign}{change_pct:.2f}%)", Colors.RED)
            else:
                change_str = colorize(f"- {change:.2f} (0.00%)", Colors.GRAY)
            
            # 格式化行
            name_part = f"  {r['name']}"
            price_part = f"{price_str:>10}"
            change_part = f"{change_str:>25}"
            
            lines.append(f"{name_part:30}{price_part:>12}{change_part:>18}")
        
        lines.append("")
    
    # 底部统计
    lines.append(colorize("═" * 60, Colors.GRAY))
    
    # 统计上涨和下跌数量
    up_count = sum(1 for r in results if 'error' not in r and r['change'] > 0)
    down_count = sum(1 for r in results if 'error' not in r and r['change'] < 0)
    flat_count = sum(1 for r in results if 'error' not in r and r['change'] == 0)
    
    stats = f"  上涨: {colorize(str(up_count), Colors.GREEN)}  ·  下跌: {colorize(str(down_count), Colors.RED)}  ·  持平: {colorize(str(flat_count), Colors.GRAY)}"
    lines.append(stats)
    lines.append("")
    
    return '\n'.join(lines)

def main():
    if len(sys.argv) < 2:
        print("用法: python stock_quote.py <股票代码/名称> ...")
        print("示例: python stock_quote.py AAPL MSFT GOOGL 苹果 特斯拉")
        print("      python stock_quote.py 七姐妹")
        sys.exit(1)
    
    # 解析命令行参数
    tickers = []
    for arg in sys.argv[1:]:
        for t in arg.split(','):
            t = t.strip()
            if t:
                normalized = normalize_ticker(t)
                tickers.extend(normalized.split(','))
    
    # 去重
    tickers = list(dict.fromkeys(tickers))
    
    results = get_stock_data(tickers)
    print(format_output(results))

if __name__ == '__main__':
    main()
