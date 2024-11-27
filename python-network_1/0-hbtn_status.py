#!/usr/bin/python3
"""Fetches a URL and displays the response body in a specific format."""

import requests

if __name__ == "__main__":
    # Define the URL to fetch
    url = "http://0.0.0.0:5050/status"
    try:
        response = requests.get(url)
        response.raise_for_status()  # Check for HTTP request errors
        content = response.text

        print("Body response:")
        print("\t- type: {}".format(type(content)))
        print("\t- content: {}".format(content))
    except requests.exceptions.RequestException as e:
        print("Error fetching URL: {}".format(e))

