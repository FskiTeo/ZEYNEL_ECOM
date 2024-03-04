import requests
import json

products = requests.get("https://api.escuelajs.co/api/v1/products?offset=0")

products = json.loads(products.content.decode('utf-8'))

for product in products: 

	pid = product["id"]

	deleteResponse = requests.delete(f"https://api.escuelajs.co/api/v1/products/{str(pid)}")

	if deleteResponse.status_code == 200:

		print("ITEM DELETED SUCCESSFULLY!")