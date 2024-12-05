#!/usr/bin/env python3
'''Module for basic async syntax'''
import asyncio
import random
import importlib

wait_random = importlib.import_module('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> float:
    '''Wait for a random delay and return the result'''
    delays = [wait_random(max_delay) for i in range(n)]
    return [await delay for delay in asyncio.as_completed(delays)]
