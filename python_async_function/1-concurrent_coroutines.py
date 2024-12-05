#!/usr/bin/env python3
'''Module for basic async syntax'''
import asyncio
import random
import importlib

wait_random = importlib.import_module('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> list[float]:
    '''Wait for a random delay and return the result'''
    tasks = [wait_random(max_delay) for _ in range(n)]
    delays = await asyncio.gather(*tasks)
    return sorted(delays)
