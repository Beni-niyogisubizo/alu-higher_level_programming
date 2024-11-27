#!/usr/bin/python3
"""Fetches http://0.0.0.0:5050/status using the requests package."""

import requests

if __name__ == "__main__":
    response = requests.get("http://0.0.0.0:5050/status")
    content = response.text
    print("Body response:")
    print("\t- type: {}".format(type(content)))
    print("\t- content: {}".format(content))

