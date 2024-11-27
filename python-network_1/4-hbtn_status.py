#!/usr/bin/python3
"""Fetches https://intranet.hbtn.io/status and http://0.0.0.0:5050/status
   Displays the response body in a specific format.
"""

import requests

if __name__ == "__main__":
    url = "https://intranet.hbtn.io/status"  # The required URL to fetch
    try:
        response = requests.get(url)
        response.raise_for_status()  # Raise an error for HTTP issues
        content = response.text

        # Print the formatted output
        print("Body response:")
        print("\t- type: {}".format(type(content)))
        print("\t- content: {}".format(content))
    except requests.exceptions.RequestException as e:
        print("Error fetching URL: {}".format(e))

