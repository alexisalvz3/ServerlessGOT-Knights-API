import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('GOTKnights')

knights = [
    {
        "name": "Ser Arthur Dayne",
        "house": "Dayne",
        "title": "Sword of the Morning",
        "allegiance": "House Targaryen",
        "sword": "Dawn",
        "personality": ""
    },
    {
        "name": "Ser Barristan Selmy",
        "house": "Selmy",
        "title": "Barristan the Bold",
        "allegiance": "House Targaryen",
        "sword": "N/A",
        "personality": ""
    },
    {
        "name": "Ser Jaime Lannister",
        "house": "Lannister",
        "title": "Kingslayer",
        "allegiance": "House Lannister",
        "sword": "Oathkeeper",
        "personality": ""
    },
    {
        "name": "Ser Rodrik Cassel",
        "house": "Cassel",
        "title": "Master-at-Arms of Winterfell",
        "allegiance": "House Stark",
        "sword": "N/A",
        "personality": ""
    }
]

for knight in knights:
    table.put_item(Item=knight)

print("Table populated successfully!")