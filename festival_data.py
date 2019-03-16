import hmac
import hashlib
import requests
import json

api_key     = 'txzPDI2zALPED8Aw'
secret_key  = 'dBxAEbaR5Od5hAv2BpabFlaaaAC1QoLM'
query       = '/events?key=' + api_key
signature   = hmac.new(bytearray(secret_key, 'utf-8'), bytearray(query, 'utf-8'), hashlib.sha1).hexdigest()
url         = 'https://api.edinburghfestivalcity.com' + query + '&signature=' + signature
response = requests.get(url)
data = response.text
parsed = json.loads(data)

# Venues (list): name, lat, lon, wheelchair_access
venues = [[event['venue']['name'], event['venue']['position']['lat'], event['venue']['position']['lon'], event['performance_space']['wheelchair_access']] for event in parsed]
unique_venues = [list(x) for x in set(tuple(x) for x in venues)]

# Events (dict): key - venue_name, value: list of event info (dict)
events = {}
for venue in venues:
    venue_name = venue[0]
    for event in parsed:
        if event['venue']['name'] == venue_name:
            info = {}
            info['title'] = event['title']
            info['artist'] = event['artist']
            info['description_teaser'] = event['description_teaser']
            info['discounts'] = event['discounts']
            info['festival'] = event['festival']
            info['genre_tags'] = event['genre_tags']
            info['images'] = event['images']
            info['wheelchair_access'] = event['performance_space']['wheelchair_access']
            info['disabled_description'] = event['venue']['disabled_description']
            info['next_performance'] = event['performances'][0]
            events.setdefault(venue_name, []).append(info)

print(events['Summerhall'])