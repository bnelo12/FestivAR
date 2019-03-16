import hmac
import hashlib
import requests
import json

api_key     = 'txzPDI2zALPED8Aw'
secret_key  = 'dBxAEbaR5Od5hAv2BpabFlaaaAC1QoLM'
query       = '/events?festival=science&key=' + api_key
signature   = hmac.new(bytearray(secret_key, 'utf-8'), bytearray(query, 'utf-8'), hashlib.sha1).hexdigest()
url         = 'https://api.edinburghfestivalcity.com' + query + '&signature=' + signature
response = requests.get(url)
data = response.text
parsed = json.loads(data)
print(json.dumps(parsed, indent=4))