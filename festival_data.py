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

# name, lat, lon
venues = [[event['venue']['name'], event['venue']['position']['lat'], event['venue']['position']['lon']] for event in parsed]
unique_venues = [list(x) for x in set(tuple(x) for x in venues)]
print(unique_venues)